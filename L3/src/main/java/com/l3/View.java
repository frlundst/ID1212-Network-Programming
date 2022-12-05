package com.l3;

import java.io.BufferedReader;
import java.io.IOException;

/**
 *
 * @author Fredrik Lundström & Anders Söderlund
 */
public class View {

    private final BufferedReader in;

    public View(BufferedReader in) {
        this.in = in;
    }

    public void readUntil(String identifier) throws IOException {
        System.out.println("------------------------------------------------------------------------");
        String s = "";
        while (s != null && !s.contains(identifier)) {
            s = this.in.readLine();
            System.out.println(s);
        }
    }

    public void readLine() throws IOException {
        System.out.println("------------------------------------------------------------------------");
        System.out.println(in.readLine());
    }
    
    public void read() throws IOException {
        System.out.println("------------------------------------------------------------------------");
        String s = "";
        while (s != null) {
            s = this.in.readLine();
            System.out.println(s);
        }
    }
}
