package guess;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author myfre
 */
public class Controller extends HttpServlet {

    ArrayList<Model> models = new ArrayList();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        String sessionId = session.getId();
        int guess;
        
        if(request.getParameter("guess") != null){
            guess = Integer.parseInt(request.getParameter("guess"));
        }else{
            guess = 101;
        }

        Model model = new Model(sessionId, guess);

        boolean foundModel = false;
        for (Model m : models) {
            if (m.sessionId.equals(sessionId)) {
                model = m;
                model.setGuess(guess);
                foundModel = true;
            }
        }

        if (foundModel == false) {
            if(model.guess == 101){
                request.setAttribute("isStart", true);
            }
            models.add(model);
        }
        
        request.setAttribute("sessionId", sessionId);
        request.setAttribute("number", model.number);
        request.setAttribute("nrOfGuesses", model.nrOfGuesses);
        
        model.iterateNrOfGuesses();
        
        if(guess != 101) { 
            if (model.guess == model.number) {
                request.setAttribute("correct", true);
                
                models.remove(model);
            }else{            
                if (model.guess < model.number) {
                    request.setAttribute("isLow", true);
                }

                if (model.guess > model.number) {
                    request.setAttribute("isHigh", true);
                }
            }
        }

        response.setContentType("text/html;charset=UTF-8");
        request.getRequestDispatcher("/guess/index.jsp").forward(request, response);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
