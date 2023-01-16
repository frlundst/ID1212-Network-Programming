package client;

import java.io.DataInputStream;
import java.io.IOException;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class ReceiveMsgHandler extends Thread {
    DataInputStream dis = null;
    
    public ReceiveMsgHandler(DataInputStream dis) throws IOException{
        this.dis = dis;
    }
            
    @Override
    public void run(){
        while(true){
            try {
                System.out.println(this.dis.readUTF());
            } catch (IOException e) {
                System.out.println("Lost connection to server!");
                break;
            }
        }
    }
}
