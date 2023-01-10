package extra;

import com.l5.SendMail;
import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.rmi.AlreadyBoundException;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.MessagingException;

/**
 *
 * @author Anders Söderlund & Fredrik Lundström
 */
public class Server implements Interface {
    
    @Override
    public void sendMail(String username, String password, String email, String name, String host, String port) {
        try {
            
            SendMail.sendMail(username, password, email, name, host, port);
            
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(Server.class.getName()).log(Level.SEVERE, null, ex);
        } catch (MessagingException ex) {
            Logger.getLogger(Server.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static void main(String args[]) throws UnknownHostException, RemoteException, AlreadyBoundException, NotBoundException{
        Server server = new Server();

        Interface skeleton = (Interface) UnicastRemoteObject.exportObject(server, 1099);
        Registry registry = LocateRegistry.createRegistry(1099);
        registry.bind("SendMail", skeleton);
        System.out.println("Server started");
    }
}
