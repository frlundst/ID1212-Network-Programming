/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.l5;

import java.io.UnsupportedEncodingException;
import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 *
 * @author Anders Söderlund & Fredrik Lundström
 */
public class SendMail {
    public static void main(String[] args) throws UnsupportedEncodingException, MessagingException {
        sendMail(Credentials.USERNAME, Credentials.PASSWORD, Credentials.EMAIL, Credentials.NAME, "smtp.kth.se", "587");
    }
    
    public static void sendMail(String username, String password, String email, String name, String host, String port) throws UnsupportedEncodingException, MessagingException {
        Properties properties = System.getProperties();
        
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        
        Authenticator authenticator = new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        };
        
        Session session = Session.getInstance(properties, authenticator);
        
        MimeMessage message = new MimeMessage(session);
        
        message.setFrom(new InternetAddress(email, name));
        
        message.setReplyTo(InternetAddress.parse( email, false));
        
        message.setSubject("L5 Test mail");
        
        message.setText("Hello this is a mail from L5.");
        
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email, false));
        
        Transport.send(message);
    }
}
