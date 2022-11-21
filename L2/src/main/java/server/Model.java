package server;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class Model {
    public String sessionId;
    public int nrOfGuesses;
    public int number; 
    
    public Model(String sessionId){
        this.sessionId = sessionId;
        this.nrOfGuesses = 0;
        
        int max = 100, min = 1;
        int range = max - min + 1;
        this.number = (int)(Math.random() * range) + min;
    }
}
