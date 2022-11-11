package server;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.List;

/**
 * ClientHandler handles the client.
 * @author Fredrik Lundström & Anders Söderlund
 */
public class ClientHandler extends Thread {
    Socket socket = null;
    DataInputStream dis = null;
    public DataOutputStream dos = null;
    List<ClientHandler> clients = null;
    public String name = null;
    boolean hasDisconnected = false;

    public ClientHandler(Socket socket, List<ClientHandler> clients, String name) throws Exception {
        this.socket = socket;
        this.clients = clients;
        this.name = name;
        this.dis = new DataInputStream(this.socket.getInputStream());
        this.dos = new DataOutputStream(this.socket.getOutputStream());
    }
    
    @Override
    public void run(){
        while(true){
            try{
                String fromClient = dis.readUTF();
                System.out.println(this.name + ": " + fromClient);
                
                for(ClientHandler client : clients){
                    if(!client.equals(this) && !client.hasDisconnected){
                        client.dos.writeUTF(this.name + ": " + fromClient);
                    }
                }
            }catch(IOException e){
                System.out.println(this.name + " disconnected");
                this.hasDisconnected = true;
                break;
            }
        }
    }
}
