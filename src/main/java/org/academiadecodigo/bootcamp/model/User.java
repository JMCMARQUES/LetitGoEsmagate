package org.academiadecodigo.bootcamp.model;


import java.util.LinkedList;
import java.util.List;

public class User {


    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private List<User> caretakers = new LinkedList<>();
    private List<User> takingcares = new LinkedList<>();
    private Pod pod;

    public List<User> getTakingcares() {
        return takingcares;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public void setPod(Pod pod) {
        this.pod = pod;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public List<User> getCaretakers() {
        return caretakers;
    }

    public Pod getPod() {
        return pod;
    }


    public void addCaretaker(User caretaker){
        caretakers.add(caretaker);
    }




    public void removeCaretaker(User caretaker){
        caretakers.remove(caretaker);
    }

    public void addTakingCare(User takingcare){
        takingcares.add(takingcare);
    }


}
