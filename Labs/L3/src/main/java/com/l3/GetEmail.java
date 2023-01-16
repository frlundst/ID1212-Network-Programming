package com.l3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class GetEmail {

    private static final String IDENTIFIER = "completed";
    private static final String HOST = "webmail.kth.se";
    private static final int PORT = 993;

    public GetEmail() throws IOException {
        SSLSocket socket = (SSLSocket) SSLSocketFactory.getDefault().createSocket(HOST, PORT);

        PrintStream out = new PrintStream(socket.getOutputStream());
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

        View view = new View(in);

        String username = Credentials.USERNAME;
        String password = Credentials.PASSWORD;

        out.println("A1 LOGIN " + username + " " + password);
        out.flush();
        view.readUntil(IDENTIFIER);

        out.println("S1 SELECT INBOX");
        out.flush();
        view.readUntil(IDENTIFIER);

        out.println("G1 FETCH 2185 body[text]");
        out.flush();
        view.readUntil(IDENTIFIER);
    }

    public static void main(String[] args) {
        try {
            GetEmail getEmail = new GetEmail();
        } catch (IOException ex) {
            Logger.getLogger(GetEmail.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
