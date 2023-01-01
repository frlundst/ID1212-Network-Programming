/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package quiz;

import java.io.IOException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import quiz.entities.User;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
@WebServlet(name = "LoginController", urlPatterns = {"/login"})
public class LoginController extends HttpServlet {

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
        
        if(session.getAttribute("username") != null && session.getAttribute("password") != null){
            response.sendRedirect("home");
        } else {
            EntityManagerFactory emf = Persistence.createEntityManagerFactory("quiz_game");
            EntityManager em = emf.createEntityManager();

            String username = request.getParameter("email");
            String password = request.getParameter("password");

            if (username != null && password != null) {
                User user = new User();
                user.setUsername(request.getParameter("email"));
                user.setPassword(request.getParameter("password"));

                User result;
                try {
                    // If the query does not find any result it will throw a NoResultException
                    result = (User) em.createNativeQuery("SELECT * FROM user WHERE username = '" + username + "'", User.class).getSingleResult();

                    if (result.getPassword().equals(password)) {
                        session.setAttribute("username", username);
                        session.setAttribute("password", password);
                        response.sendRedirect("home");
                    } else {
                        throw new Exception();
                    }
                } catch (Exception e) {
                    request.setAttribute("wrongEmailOrPassword", true);
                    request.getRequestDispatcher("/quiz/login.jsp").forward(request, response);
                }
            } else {
                request.getRequestDispatcher("/quiz/login.jsp").forward(request, response);
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
