package com.l3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import static java.lang.Thread.sleep;
import java.net.Socket;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class SendEmail {

    PrintStream out;
    BufferedReader in;

    public SendEmail() throws InterruptedException {
        try {
            Socket socket = new Socket("smtp.kth.se", 587);

            this.out = new PrintStream(socket.getOutputStream());
            this.in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            View view = new View(in);
            
            // Ändra inte till send-funktionen. Hela systemet fallerar.
            out.println("STARTTLS");
            out.flush();
            view.readUntil("Ready");

            SSLSocketFactory f = (SSLSocketFactory) SSLSocketFactory.getDefault();
            SSLSocket sslSocket = (SSLSocket) f.createSocket(socket, "smtp.kth.se", 587, true);

            this.out = new PrintStream(sslSocket.getOutputStream());
            this.in = new BufferedReader(new InputStreamReader(sslSocket.getInputStream()));
            view = new View(in);

            send("HELO smtp.kth.se");
            
            send("AUTH LOGIN");
            send(Base64.getEncoder().encodeToString(Credentials.USERNAME.getBytes()));
            send(Base64.getEncoder().encodeToString(Credentials.PASSWORD.getBytes()));

            send("MAIL FROM: <frlundst@kth.se>" );
            send("RCPT TO: <frlundst@kth.se>");
            send("DATA");
            send("hej hej \r\n.");
            send("QUIT");
        } catch (IOException ex) {
            Logger.getLogger(SendEmail.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void main(String[] args) {
        try {
            SendEmail sendEmail = new SendEmail();
        } catch (InterruptedException ex) {
            Logger.getLogger(SendEmail.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void send(String message) throws IOException {
        this.out.println(message);
        this.out.flush();
        System.out.println(this.in.readLine());
    }
}
