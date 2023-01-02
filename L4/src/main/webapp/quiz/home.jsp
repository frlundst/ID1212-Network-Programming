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
        <nav>
            <a>Home</a>
            <a href="logout">Logout</a>
        </nav>
        <h1>Available Quizzes</h1>
        <ul>
            <c:forEach var="quiz" items="${quizzes}">
                <li>
                    <a href="quiz?id=${quiz.id}">${quiz.subject}</a>
                    , <a href="results?id=${quiz.id}">Results</a>
                </li>
            </c:forEach>
        </ul>
    </body>
</html>
