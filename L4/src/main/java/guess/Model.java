package guess;

/**
 *
 * @author myfre
 */
public class Model {
    public String sessionId;
    public int nrOfGuesses;
    public int number;
    public int guess;

    public Model(String sessionId, int guess) {
        this.sessionId = sessionId;
        this.nrOfGuesses = 0;
        this.guess = guess;

        int max = 100, min = 1;
        int range = max - min + 1;
        this.number = (int) (Math.random() * range) + min;
    }

    public void setGuess(int guess) {
        this.guess = guess;
    }
    
    public void iterateNrOfGuesses(){
        this.nrOfGuesses++;
    }
}
