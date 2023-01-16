package quiz.entities;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2023-01-09T11:26:41")
@StaticMetamodel(Question.class)
public class Question_ { 

    public static volatile SingularAttribute<Question, String> answer;
    public static volatile SingularAttribute<Question, Integer> quizId;
    public static volatile SingularAttribute<Question, String> options;
    public static volatile SingularAttribute<Question, Integer> id;
    public static volatile SingularAttribute<Question, String> text;

}