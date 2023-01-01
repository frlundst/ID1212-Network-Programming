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
        <h1>${sessionId}</h1>
        <h3>${number}</h3>
        <p>${isStart ? "Welcome to the Number Guess Game. Guess a number between 1 and 100." : ""}</p>
        <p>${isLow ? "Too low, guess higher!" : ""}</p>
        <p>${isHigh ? "Too high, guess lower!" : ""}</p>
        <p>${correct ? "Correct!!!" : ""}</p>
        <p>Number of guesses: ${nrOfGuesses}</p>
        <form action="">
            <input type="text" id="guess" name="guess"/>
            <input type="submit" value="Guess" />
        </form>
    </body>
</html>
