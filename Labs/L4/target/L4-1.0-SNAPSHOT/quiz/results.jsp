<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.*"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Results</title>
        <style>
            table, th, td {
                border: 1px solid black;
                border-collapse: collapse;
                text-align: left;
                padding: 4px;
            }
        </style>
    </head>
    <body>
        <nav>
            <a href="home">Home</a>
            <a href="logout">Logout</a>
        </nav>
        <h1>Results</h1>
        <table>
            <tr>
                <th>
                    Email
                </th>
                <th>
                    Score
                </th>
            </tr>

            <c:forEach var="result" varStatus="loop" items="${resultList}" > 
                <tr>
                    <td>
                        ${result.getUsername()}
                    </td>
                    <td>
                        ${result.getScore()}
                    </td>
                </tr>
            </c:forEach>
        </table>
    </body>
</html>
