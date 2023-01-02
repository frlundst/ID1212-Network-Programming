<%@page import="quiz.entities.Question"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.*"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Quiz</title>
    </head>
    <body>
        <h1>${quiz.getSubject()}</h1>
        <h3>Questions:</h3>
        <form action="">
            <c:forEach var="question" varStatus="loop" items="${questionList}">
                <p>${question.getText()}</p>
                <c:forEach var="alternative" items="${question.getOptions().split(',')}">
                    <input type="radio" id="${loop.index}" name="${loop.index}" value="${alternative}">
                    <label for="${loop.index}">${alternative}</label><br>
                </c:forEach>
            </c:forEach>
            <br/>
            <button name="id" value="${quiz.getId()}" type="submit">Submit</button>
        </form>

    </body>
</html>
