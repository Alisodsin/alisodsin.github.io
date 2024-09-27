module com.example.java {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.graphics;


    opens com.example.java to javafx.fxml;
    exports com.example.java;
}