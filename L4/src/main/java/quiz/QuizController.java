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
import quiz.entities.Question;
import quiz.entities.Quiz;
import quiz.entities.Result;

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
                    //Quiz quiz = new Quiz();
                    //quiz.setId(Integer.parseInt(id));
                    Quiz quiz = em.createNamedQuery("Quiz.findById", Quiz.class).setParameter("id", Integer.valueOf(id)).getSingleResult();
                    request.setAttribute("quiz", quiz);

                    List<Question> questionList = em.createNamedQuery("Question.findByQuizId", Question.class).setParameter("quizId", quiz.getId()).getResultList();
                    request.setAttribute("questionList", questionList);

                    // If user posts answers
                    // All quizes has atleast one question
                    if (request.getParameter("0") != null) {
                        int index = 0, score = 0;
                        String answer;
                        while ((answer = request.getParameter(Integer.toString(index))) != null) {
                            Question question = questionList.get(index);
                            answer = answer.replace("+", " ");
                            System.out.println(answer + " : " + question.getAnswer());
                            if (answer.equals(question.getAnswer())) {
                                score++;
                            }
                            index++;
                        }

                        Result result = new Result();
                        result.setQuizId(quiz.getId());
                        result.setScore(score);
                        result.setUserId(Integer.parseInt(session.getAttribute("user_id").toString()));
                        
                        em.getTransaction().begin(); 
                        em.persist(result);
                        em.getTransaction().commit();
                        
                        response.sendRedirect("results?id=" + quiz.getId());
                    } else {
                        request.getRequestDispatcher("/quiz/quiz.jsp").forward(request, response);
                    }
                } catch (NoResultException e) {
                    request.getRequestDispatcher("/quiz/quiz.jsp").forward(request, response);
                }
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
