package server;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class Controller {

    private static int BUFFERSIZE = 1024;

    public static void main(String[] args) {
        int counter = 0;
        try {
            System.out.println("Starting server...");
            ServerSocket serverSocket = new ServerSocket(80);
            while (true) {
                Socket clientSocket = serverSocket.accept();

                byte buffer[] = new byte[BUFFERSIZE];
                InputStream is = clientSocket.getInputStream();
                is.read(buffer);
                String request = new String(buffer, StandardCharsets.UTF_8);
                
                System.out.println(request);
                String[] headers = request.split("\r\n");
                String getLine = headers[0];

                String sessionId = "session" + counter;

                Model model = new Model(sessionId);

                FileInputStream fis = new FileInputStream("C:/Users/myfre/OneDrive/KTH/ID1212 (Nätverksprogrammering)/ID1212-Network-Programming/L2/src/main/java/server/index.html");
                StringBuilder sb = new StringBuilder();
                int c;
                while((c = fis.read()) != -1){
                    sb.append((char) c);
                }
                
                OutputStream os = clientSocket.getOutputStream();
                os.write(("HTTP/1.1 200 OK\r\n").getBytes());
                os.write(("Set-Cookie: sessionId=" + sessionId + "\r\n").getBytes());
                os.write(("\r\n").getBytes());
                os.write(sb.toString().getBytes());
                os.write(("\r\n\r\n").getBytes());
                os.flush();

                if (!getLine.contains("favicon.ico")) {
                    counter++;
                }
                
                clientSocket.close();
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
