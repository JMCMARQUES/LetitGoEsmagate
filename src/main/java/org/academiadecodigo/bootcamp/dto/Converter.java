package org.academiadecodigo.bootcamp.dto;

import org.academiadecodigo.bootcamp.model.User;
import org.academiadecodigo.bootcamp.service.mock.MockUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Converter {


    private MockUserService mockUserService;


    @Autowired
    public void setMockUserService(MockUserService mockUserService) {
        this.mockUserService = mockUserService;
    }

    public User UserDTOtoUser(UserDTO userDTO){

        User user = userDTO.getEmail() != null ? mockUserService.getUser(userDTO.getEmail()) : new User();

        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPod(userDTO.getPod());


        return user;
    }

    public UserDTO UserToUserDTO(User user){

        UserDTO userDTO = new UserDTO();


        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setPod(user.getPod());

        return userDTO;
    }

}
