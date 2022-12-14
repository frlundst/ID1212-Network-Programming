<%-- 
    Document   : index
    Created on : 14 dec. 2022, 11:57:02
    Author     : myfre
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome to the guess game!</title>
    </head>
    <body>
        <h1>${trueOrFalse ? sessionId : ""}</h1>
        <p>Welcome to the Number Guess Game. Guess a number between 1 and 100.</p>
        <form action="">
            <input type="text" id="guess" name="guess"/>
            <input type="submit" value="Guess" />
        </form>
    </body>
</html>
