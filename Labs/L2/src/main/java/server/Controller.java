package server;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class Controller extends Thread {
    //String previousResponse;
    private static int BUFFERSIZE = 1024;
    Socket clientSocket;
    
    public Controller(Socket clientSocket){
        this.clientSocket = clientSocket;
    }

    @Override
    public void run(){
        try{
                InputStream is = clientSocket.getInputStream();
                OutputStream os = clientSocket.getOutputStream();

                // Get request
                byte buffer[] = new byte[BUFFERSIZE];
                is.read(buffer);
                String request = new String(buffer, StandardCharsets.UTF_8);
                System.out.println(request);
                String[] headers = request.split("\r\n");

                int guess = 101;
                if (!request.contains("favicon.ico")) {
                    if (!request.contains("sessionId")) {
                        String sessionId = "session" + Main.counter;
                        Main.counter++;
                        Model model = new Model(sessionId, guess);
                        Main.models.add(model);
                        View view = new View(model);
                        String response = view.generateHTTPResponse(true);
                        
                        os.write(response.getBytes());
                    } else {
                        String getLine = headers[0];
                        boolean startpage = false;
                        
                        // Hämta gissning
                        if (!getLine.contains("guess")) {
                            startpage = true;
                        } else {
                            String[] getLineArray = getLine.split(" ");
                            String path = getLineArray[1];
                            if (path.split("=").length > 1) {
                                guess = Integer.parseInt(path.split("=")[1]);
                            } else {
                                startpage = true;
                            }
                        }

                        // Hämta session id
                        //String sessionId = headers[headers.length - 3].split("=")[1];
                        String sessionId = request.split("sessionId=")[1].split("\r\n")[0];
                        Model model = new Model(sessionId, guess);
                        
                        // Special case
                        // Samma webbläsare sparar cookien och om man då startar om servern så är sparade modeller borta.
                        // Då behöver vi alltså göra en ny model.
                        // Detta gäller också när vi har gissat rätt och behöver då lägga in en ny model eftersom vi tar bort den gamla.
                        if(Main.models.isEmpty()){
                            Main.models.add(model);
                        }
                        
                        for (Model m : Main.models) {
                            if (m.sessionId.equals(sessionId)) {
                                model = m;
                                break;
                            }
                        }
                        
                        model.setGuess(guess);
                        
                        // Om vi inte är på startsidan så ska vi lägga till en gissning.
                        if(!startpage){
                            model.iterateNrOfGuesses();
                        }
                        
                        System.out.println(model.sessionId + " , gissning: " + model.guess + " , nummer: " + model.number + " ,antal gissningar: " + model.nrOfGuesses);
                        
                        View view = new View(model);
                        String response = view.generateHTTPResponse(startpage);
                        os.write(response.getBytes());
                        
                        if(guess == model.number){
                            Main.models.remove(model);
                        }
                    }
                }

                os.flush();
                this.clientSocket.close();
        } catch(IOException e){
            System.out.println(e.getMessage());
        }
    }
}
