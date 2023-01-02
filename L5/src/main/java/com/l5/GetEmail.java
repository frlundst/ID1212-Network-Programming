package com.l5;

import java.io.IOException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.internet.MimeMultipart;

/**
 *
 * @author myfre
 */
public class GetEmail {

    public static void main(String[] args) {
        try {
            Session session = Session.getDefaultInstance(new Properties());
            Store store = session.getStore("imaps");
            store.connect("webmail.kth.se", 993, Credentials.USERNAME, Credentials.PASSWORD);
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_WRITE);
            System.out.println(inbox.getNewMessageCount());
            
            Message[] messages = inbox.getMessages();
            Message latestMessage = messages[messages.length - 1];
            System.out.println(latestMessage.getSubject());
            MimeMultipart body = (MimeMultipart) latestMessage.getContent();
            System.out.println(body.getBodyPart(0).getContent());
        } catch (IOException | MessagingException ex) {
            Logger.getLogger(GetEmail.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
