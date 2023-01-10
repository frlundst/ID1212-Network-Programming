package extra;

import com.l5.Credentials;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

/**
 *
 * @author Anders Söderlund & Fredrik Lundström
 */
public class Client {
    public static void main(String[] args) throws RemoteException, NotBoundException {
        Registry registry = LocateRegistry.getRegistry("localhost");
        Interface stub = (Interface) registry.lookup("SendMail");
        stub.sendMail(Credentials.USERNAME, Credentials.PASSWORD, Credentials.EMAIL, Credentials.NAME, "smtp.kth.se", "587");
    }
}
