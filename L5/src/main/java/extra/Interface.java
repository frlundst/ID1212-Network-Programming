package extra;

import java.rmi.Remote;
import java.rmi.RemoteException;

/**
 *
 * @author Anders Söderlund & Fredrik Lundström
 */
public interface Interface extends Remote {
    public void sendMail(String username, String password, String email, String name, String host, String port) throws RemoteException;
}
