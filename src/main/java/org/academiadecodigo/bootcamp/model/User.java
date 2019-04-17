package org.academiadecodigo.bootcamp.model;

import java.util.LinkedList;
import java.util.List;

public class User {

    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private List<Recipient> recipients = new LinkedList<>();
    private Pod pod;

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

    public List<Recipient> getRecipients() {
        return recipients;
    }

    public Pod getPod() {
        return pod;
    }

    public void addRecipient(Recipient recipient){
        recipients.add(recipient);
        recipient.setUser(this);
    }


    public void removeRecipient(Recipient recipient){
        recipients.remove(recipient);
        recipient.setUser(null);
    }


}
