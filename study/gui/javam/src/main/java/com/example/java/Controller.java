package com.example.java;

import java.io.IOException;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

@SuppressWarnings("exports")
public class Controller {

    @FXML
    private Button button1;
    @FXML
    private Button button2;
    //
    private Stage window;
    private Scene scene;
    private Parent root;

    public void changeScene(ActionEvent e) throws IOException {
        System.out.println("this is changeScene method");
        var button = (Button) e.getTarget();
        scene = button.getScene();
        window = (Stage) scene.getWindow();
        if (button.getId().equals("button1")) {
            root = FXMLLoader.load(getClass().getResource("v2.fxml"));
            scene.setRoot(root);
            window.setScene(scene);
        } else {
            root = FXMLLoader.load(getClass().getResource("v1.fxml"));
            scene.setRoot(root);
            window.setScene(scene);
        }
    }

    public void anotherWayToChangeScene() throws IOException {
        System.out.println("this is anotherWayToChangeScene method");
        if (button1 != null) {
            root = FXMLLoader.load(getClass().getResource("v2.fxml"));
            scene = button1.getScene();
            window = (Stage) scene.getWindow();
            scene.setRoot(root);
            window.setScene(scene);

        } else {
            root = FXMLLoader.load(getClass().getResource("v1.fxml"));
            scene = button2.getScene();
            window = (Stage) scene.getWindow();
            scene.setRoot(root);
            window.setScene(scene);
        }
    }
}