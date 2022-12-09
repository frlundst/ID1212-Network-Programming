package extra;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.security.KeyStore;
import java.util.ArrayList;
import javax.net.ServerSocketFactory;
import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLServerSocket;
import javax.net.ssl.SSLServerSocketFactory;
import javax.net.ssl.SSLSocket;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class Main {

    public static final String KEYSTORE_LOCATION = "C:\\Users\\myfre\\OneDrive\\KTH\\ID1212 (Nätverksprogrammering)\\ID1212-Network-Programming\\L3\\src\\main\\java\\extra\\ServerKeyStore.jks";
    public static final String KEYSTORE_PASSWORD = "extraextra";

    public static ArrayList<Model> models = new ArrayList<>();
    public static int counter = 0;

    public static void main(String[] args) {
        try {
            System.setProperty("javax.net.ssl.keyStore", KEYSTORE_LOCATION);
            System.setProperty("javax.net.ssl.keyStorePassword", KEYSTORE_PASSWORD);
            ServerSocketFactory socketFactory = (SSLServerSocketFactory) SSLServerSocketFactory.getDefault();
            SSLServerSocket serverSocket = (SSLServerSocket) socketFactory.createServerSocket(8282);

            while (true) {
                SSLSocket clientSocket = (SSLSocket) serverSocket.accept();
                Controller controller = new Controller(clientSocket);
                controller.start();
            }

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }
}
