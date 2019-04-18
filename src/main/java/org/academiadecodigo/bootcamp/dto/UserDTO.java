package org.academiadecodigo.bootcamp.dto;

import org.academiadecodigo.bootcamp.model.Pod;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserDTO {


    @NotNull(message = "First name is mandatory")
    @NotBlank(message = "First name is mandatory")
    @Size(min = 3, max = 64)
    private String firstName;

    @NotNull(message = "Last name is mandatory")
    @NotBlank(message = "Last name is mandatory")
    @Size(min = 3, max = 64)
    private String lastName;
    @NotNull(message = "Password is mandatory")
    @NotBlank(message = "First name is mandatory")
    @Size(min = 5, max = 10)
    private String password;

    @Email
    @NotBlank(message = "Email is mandatory")
    private String email;
    private Pod pod;

    public Pod getPod() {
        return pod;
    }

    public void setPod(Pod pod) {
        this.pod = pod;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}
