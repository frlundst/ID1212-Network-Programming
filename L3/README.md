# L3
## Uppgift
SSL/TLS-krypterade socket:ar
Din uppgift är att skriva ett program som ansluter till ditt @kth.se-konto, listar innehållet och sedan hämtar ett godtyckligt mejl. Du får (ännu) inte använda JavaMail (aldrig hört talas om det? bra! ) utan ska istället göra det "manuellt" enligt IMAP-protokollet. Du bör också skicka ett mail till dig själv med hjälp av SMTP-protokollet. Webbmejlen har följande konfiguration:

Inställningar för att ta emot e-post (inkommande)
Server: webmail.kth.se
Port: 993
Protokoll: SSL/TLS
Autentisering: Normalt lösenord

Inställningar för att skicka e-post (utgående)
Server: smtp.kth.se
Port: 587
Protokoll: STARTTLS
Autentisering: Normalt lösenord


## Extrauppgift
Ändra nummergissningsspelet i Task2 så att det använder kryptering och verifiera att en kommersiell (inte ditt eget hack) webbläsare kan ansluta (till https://localhost) och spela spelet. Eftersom det är kryptering på *servern* du ställer in, måste du ändra spelet för att använda kryptering med ett certifikat (använd nyckelverktyget keytool för att skapa ett självsignerat certifikat). Utöver implementationsdelen (som ganska mycket följer en standardförfarande) ska du/ni även kunna förklara PKI-modellen om assistenten efterfrågar det.

Notera:

I det första fallet (IMAP med SSL/TLS) börjar du med en krypterad session och i det andra fallet (SMTP med STARTTLS) går du över till kryptering under sessionen.
Fullständig dokumentation av IMAP finns i rfc3501 men för att lösa uppgiften räcker det att jämföra med en IMAP-session till exempel den här: https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol Links to an external site.

Inget certifikat behövdes för denna deluppgift


## KOMMANDON
Glöm inte att connecta till https://localhost:8282
https://sites.google.com/site/ddmwsst/create-your-own-certificate-and-ca
Förklaring av Alice, Bob, HTTPS, Encryption osv...
https://www.youtube.com/watch?v=T4Df5_cojAs