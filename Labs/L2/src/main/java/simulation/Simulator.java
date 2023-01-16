package simulation;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class Simulator {

    private static int BUFFERSIZE = 1024;

    public static void main(String[] args) throws Exception {

        int[] nrOfGuessesArray = new int[100];

        URL obj = new URL("http://localhost/");
        HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("User-Agent", "Mozilla/5.0");
        String cookie = connection.getHeaderField("Set-Cookie");

        for (int i = 0; i < 100; i++) {
            int min = 1, max = 100, nrOfGuesses = 0;

            while (true) {

                nrOfGuesses++;
                int range = max - min + 1;
                int number = (int) (Math.random() * range) + min;

                obj = new URL("http://localhost/?guess=" + number);
                connection = (HttpURLConnection) obj.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Cookie", cookie);
                
                int rc = connection.getResponseCode();

                if (rc == HttpURLConnection.HTTP_OK) {
                    InputStream is = connection.getInputStream();
                    byte[] buffer = new byte[BUFFERSIZE];
                    is.read(buffer);
                    String request = new String(buffer, StandardCharsets.UTF_8);
                    is.close();

                    System.out.println(request);

                    if (request.contains("Nope, guess higher")) {
                        min = number;
                    }

                    if (request.contains("Nope, guess lower")) {
                        max = number;
                    }

                    if (request.contains("You made it!!!")) {
                        nrOfGuessesArray[i] = nrOfGuesses;
                        break;
                    }
                } else {
                    throw new Exception("Request did not work: Response code: " + rc);
                }
            }
        }

        int sum = 0;

        for (int i : nrOfGuessesArray) {
            sum += i;
        }

        System.out.println("Avarage number of guesses: " + sum / 100);

    }
}
