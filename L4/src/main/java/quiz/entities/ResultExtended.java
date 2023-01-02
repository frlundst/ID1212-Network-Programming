/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package quiz.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author myfre
 */
@Entity
@Table(name = "result")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ResultExtended.findAll", query = "SELECT r FROM ResultExtended r"),
    @NamedQuery(name = "ResultExtended.findById", query = "SELECT r FROM ResultExtended r WHERE r.id = :id"),
    @NamedQuery(name = "ResultExtended.findByScore", query = "SELECT r FROM ResultExtended r WHERE r.score = :score"),
    @NamedQuery(name = "ResultExtended.findByQuizId", query = "SELECT r FROM ResultExtended r WHERE r.quizId = :quizId"),
    @NamedQuery(name = "ResultExtended.findByUserId", query = "SELECT r FROM ResultExtended r WHERE r.userId = :userId")})
public class ResultExtended implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    private Integer id;
    @Basic(optional = false)
    @NotNull
    private int score;
    @Basic(optional = false)
    @NotNull
    @Column(name = "quiz_id")
    private int quizId;
    @Basic(optional = false)
    @NotNull
    @Column(name = "user_id")
    private int userId;
    
    @JoinColumn(name = "username")
    private String username;

    public ResultExtended() {
    }

    public ResultExtended(Integer id) {
        this.id = id;
    }

    public ResultExtended(Integer id, int score, int quizId, int userId) {
        this.id = id;
        this.score = score;
        this.quizId = quizId;
        this.userId = userId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getQuizId() {
        return quizId;
    }

    public void setQuizId(int quizId) {
        this.quizId = quizId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
    
     public void setUsername(String username){
        this.username = username;
    }
    
    public String getUsername(){
        return this.username;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ResultExtended)) {
            return false;
        }
        ResultExtended other = (ResultExtended) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "quiz.entities.ResultExtended[ id=" + id + " ]";
    }
    
}
