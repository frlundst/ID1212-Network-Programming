package quiz.model;

import quiz.entities.User;

/**
 *
 * @author myfre
 */
public class Session {
    public String sessionID;
    public User user;
    public boolean isLoggedIn;
    
    public Session(){
        this.isLoggedIn = false;
        this.user = null;
    }
    
    public void setSessionID(String sessionID){
        this.sessionID = sessionID;
    }
    
    public void setUser(User user){
        this.user = user;
    }
}
