# L1
## Uppgift
Uppgiften består i att skriva ett socket-baserat chatsystem med hjälp av klasserna java.net.Socket och java.net.ServerSocket. Det kan bestå av bl a föjande klasser, förslagsvis:
* ChatServer: En instans av denna representerar servern. Har en tråd till var och en av de klienter som för närvarande är anslutna men också en tråd för att lyssna efter nya inkommande anslutningar från nya klienter, dessa bör representeras av en instans ClientHandler
* ChatClient: En instans av denna representerar klienten. Har två trådar, en för att lyssna efter inkommande meddelanden från servern och en för att skicka meddelanden till servern.

Det finns inget krav på att hantera användarinloggning eller chattrum. Lätt och enkel. Dessa är dock krav:

* Klienter ska kunna lämna chatten utan att krascha servern.
* Om servern går ner ska klienterna ge ett meddelande istället för att krascha.
* Både klient och server ska kunna köras på olika JVM. 

Testa att programmet verkligen fungerar genom att skapa en server och två klienter, du kommer alltså att ha tre stycken samtidiga javaprogram som körs. Samtliga program ska kunna köras från olika datorer, detta kan ni testa genom att använda t ex ssh:a mot t ex student-shell.sys.kth.se för att ansluta tillbaka till er dator.

## Extrauppgift
Installera en nätverkssniffer (förslag Wireshark), spela in lite trafik från din chatt. Frågor
* Vad betyder TCP-headers i datagrammen?
* Vad betyder flaggorna ACK/SYN/SEQ/PSH/FIN?

## Extrauppgift svar
* 1:    Source port är själva porten där TCP paketet skickas ifrån. Denna är slumpad. 
        Destination port är porten som programmet lyssnar via och tar emot TCP paket.
        Sequence number indikerar på hur många paket som har skickats och tagits emot. Detta är till för att kolla om något paket har kommit i fel ordning eller ej kommit fram överhuvudtaget.
        Acknowledgement number är endast om flaggan är ACK så kommer detta nummer vara Sequence number som sändaren av paketet kommer att förvänta.
        Flags är nio bitar för kontroll. Varje bit representerar en flagga.
        Window size är själv storleken på receive window som skickaren av detta paket förväntar sig.
        Checksum används för error-checking.
        Urgent pointer indikerar "last urgent data byte" om URG flaggan finns med.
        Options vars längd beror på data offset field. 
* 2:    ACK används för bekräftning av att mottagaren har tagit emot ett paket.
        SYN används för att markera en påbörjning av en "three way handshake". Används vid skickandet av första TCP paketet.
        SEQ Sequence number indikerar på hur många paket som har skickats och tagits emot / storleken av dessa paket. Detta är till för att kolla om något paket har kommit i fel ordning eller inte kommit fram alls.
        PSH talar om för mottagaren om denna ska processa paketen som de mottags eller buffera dem.
        FIN indikerar om anslutningen ska avslutas.