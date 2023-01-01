package quiz;

import java.io.IOException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import quiz.entities.Quiz;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
@WebServlet(name = "QuizController", urlPatterns = {"/quiz"})
public class QuizController extends HttpServlet {

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
        // User will be required to log in each time
        if (session.getAttribute("username") == null || session.getAttribute("password") == null) {
            response.sendRedirect("login");
        } else {
            String id = request.getParameter("id");
            if (id == null) {
                request.getRequestDispatcher("/quiz/quiz.jsp").forward(request, response);
            } else {
                EntityManagerFactory emf = Persistence.createEntityManagerFactory("quiz_game");
                EntityManager em = emf.createEntityManager();

                try {
                    Quiz result = (Quiz) em.createNativeQuery("SELECT * FROM quiz WHERE id=" + id, Quiz.class).getSingleResult();
                    request.setAttribute("subject", result.getSubject());
                    
                } catch (NoResultException e) {
                    
                }

                request.getRequestDispatcher("/quiz/quiz.jsp").forward(request, response);
            }
        }
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
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
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
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
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
