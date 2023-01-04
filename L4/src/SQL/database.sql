CREATE DATABASE quiz_game;

CREATE TABLE quiz_game.user (
    id INTEGER NOT NULL,
    username VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,
    CONSTRAINT UserPK PRIMARY KEY (id)
);

CREATE TABLE quiz_game.quiz (
    id INTEGER NOT NULL,
    subject VARCHAR(64) NOT NULL,
    CONSTRAINT QuizPK PRIMARY KEY (id)
);

CREATE TABLE quiz_game.result (
    id INTEGER AUTO_INCREMENT NOT NULL,
    user_id INTEGER NOT NULL,
    quiz_id INTEGER NOT NULL,
    score INTEGER NOT NULL,
    CONSTRAINT ResultPK PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES quiz_game.user(id),
    FOREIGN KEY (quiz_id) REFERENCES quiz_game.quiz(id)
);

CREATE TABLE quiz_game.question (
    id INTEGER NOT NULL,
    quiz_id INTEGER NOT NULL,
    text VARCHAR(64) NOT NULL,
    options VARCHAR(64) NOT NULL,
    answer VARCHAR(64) NOT NULL,
    CONSTRAINT QuestionPK PRIMARY KEY (id),
    FOREIGN KEY (quiz_id) REFERENCES quiz_game.quiz(id)
);

--CREATE TABLE quiz_game.selector (
--    quiz_id INTEGER NOT NULL,
--    question_id INTEGER NOT NULL,
--    FOREIGN KEY (quiz_id) REFERENCES quiz_game.quiz(id),
--    FOREIGN KEY (question_id) REFERENCES quiz_game.question(id)
--);