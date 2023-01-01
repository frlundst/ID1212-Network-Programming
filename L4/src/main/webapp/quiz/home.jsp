<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Quiz</title>
    </head>
    <body>
        <h1>Quizzes</h1>
        <ul>
            <c:forEach var="quiz" items="${quizzes}">
                <li>
                    <a href="quiz?id=${quiz.id}">${quiz.subject}</a>
                </li>
            </c:forEach>
        </ul>
        <br/>
        <a href="logout">Logout</a>
    </body>
</html>
