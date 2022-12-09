package extra;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class View {

    private Model model;

    public View() {
    }

    public View(Model model) {
        this.model = model;
    }

    public String generateHTTPResponse(boolean startpage) {
        StringBuilder httpResponse = new StringBuilder();
        httpResponse.append("HTTP/1.1 200 OK\r\n");
        httpResponse.append("Set-Cookie: sessionId=" + this.model.sessionId + "\r\n");
        httpResponse.append("\r\n");
        httpResponse.append(this.generateHTML(startpage));
        httpResponse.append("\r\n\r\n");
        return httpResponse.toString();
    }

    private String generateHTML(boolean startpage) {
        StringBuilder html = new StringBuilder();
        html.append("<h1>" + this.model.sessionId + "</h1>");

        if (startpage) {
            html.append("<p>Welcome to the Number Guess Game. Guess a number between 1 and 100.</p>");
        } else {
            if (this.model.number > this.model.guess) {
                html.append("<p>Nope, guess higher</p>");
            }
            if (this.model.number < this.model.guess) {
                html.append("<p>Nope, guess lower</p>");
            }
            
            if (this.model.number == this.model.guess) {
                html.append("<p>You made it!!!</p>");
            } else if (model.nrOfGuesses == 1) {
                html.append("<p>You have made " + model.nrOfGuesses + " guess</p>");
            } else {
                html.append("<p>You have made " + model.nrOfGuesses + " guesses</p>");
            }
        }

        html.append("<form action=\"\">");
        html.append("<input type=\"text\" id=\"guess\" name=\"guess\">");
        html.append("<input type=\"submit\" value=\"Guess\">");
        html.append("</form>");
        return html.toString();
    }
}
