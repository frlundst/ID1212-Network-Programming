package client;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.*;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class ChatClient {

    public static void main(String[] args) {
        String host = args[0];
        int port = Integer.parseInt(args[1]);
        try {
            System.out.println("Connecting to " + host + " on port " + port);
            Socket socket = new Socket(host, port);
            System.out.println("Connected to server.");
            
            SendMsgHandler sendMsgHandler = new SendMsgHandler(new DataOutputStream(socket.getOutputStream()));
            sendMsgHandler.start();
//          
            ReceiveMsgHandler receiveMsgHandler = new ReceiveMsgHandler(new DataInputStream(socket.getInputStream()));
            receiveMsgHandler.start();
            
        } catch (IOException | RuntimeException e) {
            System.out.println("Could not connect to server! Reason: " + e);
            System.out.println("Shutting down...");
        }
    }
}
