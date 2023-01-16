package server;

import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class ChatServer {
    
    public static void main(String[] args) {
        List<ClientHandler> clients = new ArrayList<>();
        int port = Integer.parseInt(args[0]);
        System.out.println("Starting server on port " + port);
        try{
            ServerSocket serverSocket = new ServerSocket(port);
            System.out.println("Server started. Listening for clients...");
            
            while(true){
                Socket socket = serverSocket.accept();
                
                String name = socket.getInetAddress().getHostName();
                System.out.println(name + " connected");
                
                ClientHandler server = new ClientHandler(socket, clients, name);
                clients.add(server);
                server.start();
            }
        }catch(Exception e){
            System.out.println(e);
            System.out.println("Shutting down...!");
        }
    }
}
