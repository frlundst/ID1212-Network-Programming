package client;

import java.io.DataOutputStream;
import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class SendMsgHandler extends Thread {
    DataOutputStream dus = null;

    public SendMsgHandler(DataOutputStream dus) throws IOException {
        this.dus = dus;
    }

    @Override
    public void run() {
        while (true) {
            try {
                Scanner scanner = new Scanner(System.in);
                String message = scanner.nextLine();
                dus.writeUTF(message);
            } catch (IOException e) {
                System.out.println("Shutting down...");
                break;
            }
        }
    }
}
