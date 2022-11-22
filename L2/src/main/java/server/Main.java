package server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class Main {

    public static ArrayList<Model> models = new ArrayList<>();
    public static int counter = 0;

    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(80);

            while (true) {
                Socket clientSocket = serverSocket.accept();
                Controller controller = new Controller(clientSocket);
                controller.start();
            }

        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
