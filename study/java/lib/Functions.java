package lib;

import java.io.*;
import java.util.Scanner;

public class Functions {
    public static PrintWriter out = new PrintWriter(System.out);
    //
    public static Scanner in = new Scanner(System.in);

    public static void println(Object x) {
        out.println(x);
        out.flush();
    }

    //
    public static void print(Object x) {
        out.print(x);
        out.flush();
    }

    //
    public static String readFile(String fileName) {
        try (var file = new FileInputStream(fileName);
                var reader = new InputStreamReader(file);
                var bufreader = new BufferedReader(reader);) {
            var charbuf = new char[(int) (new File(fileName).length())];
            bufreader.read(charbuf);
            return new String(charbuf);
        } catch (IOException e) {
            return null;
        }
    }
    //

    public static void pause(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            return;
        }
    }

    //
    public static void setInterval(Runnable f, long millis) {
        for (int i = 0; i < 500; i++) {
            f.run();
            pause(millis);
        }
    }

    //
    public static void big() {
        println("======================");
    }

    //
    public static void small() {

        println("------");

    }
}