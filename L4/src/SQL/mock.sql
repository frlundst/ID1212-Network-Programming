-- Questions
INSERT INTO user (id, username, password) VALUES (1, "frlundst@kth.se", "hej12345");

INSERT INTO quiz (id, subject) VALUES (1, "Animal quiz");
INSERT INTO quiz (id, subject) VALUES (2, "History quiz");

INSERT INTO question (id, quiz_id, text, options, answer) VALUES (1, 1, "What is a cat?", "A cat,A dog,A bird,A fish", "A cat");
INSERT INTO question (id, quiz_id, text, options, answer) VALUES (2, 1, "What is a dog?", "A cat,A dog,A bird,A fish", "A dog");
INSERT INTO question (id, quiz_id, text, options, answer) VALUES (3, 1, "What is a bird?", "A cat,A dog,A bird,A fish", "A bird");
INSERT INTO question (id, quiz_id, text, options, answer) VALUES (4, 1, "What is a fish?", "A cat,A dog,A bird,A fish", "A fish");

INSERT INTO question (id, quiz_id, text, options, answer) VALUES (5, 2, "When was Gustav Vasa born?", "1496,1500,1997,1457", "1496");
INSERT INTO question (id, quiz_id, text, options, answer) VALUES (6, 2, "Who is our current king?", "Carl XVI Gustaf,A dog,A bird,A fish", "Carl XVI Gustaf");
INSERT INTO question (id, quiz_id, text, options, answer) VALUES (7, 2, "When did the vikings live?", "A long time ago,Today,Dont know", "A long time ago");