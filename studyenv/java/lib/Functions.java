package lib;

import java.io.*;

public class Functions {
    public static String readFile(String fileNmae) {
        try (var file = new FileInputStream(fileNmae);var reader = new InputStreamReader(file);var bufreader = new BufferedReader(reader);) {
            var charbuf = new char[(int) (new File(fileNmae).length())];
            bufreader.read(charbuf);
            return new String(charbuf);
        } catch (IOException e) {
            return null;
        }
    }
}