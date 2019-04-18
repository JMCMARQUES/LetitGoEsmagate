package org.academiadecodigo.bootcamp.rest;


import org.academiadecodigo.bootcamp.dto.Converter;
import org.academiadecodigo.bootcamp.dto.UserDTO;
import org.academiadecodigo.bootcamp.model.User;
import org.academiadecodigo.bootcamp.service.mock.MockUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/user")
public class RestUserController {


    private MockUserService mockUserService;
    private Converter converter;

    @Autowired
    public void setConverter(Converter converter) {
        this.converter = converter;
    }

    @Autowired
    public void setMockUserService(MockUserService mockUserService) {
        this.mockUserService = mockUserService;
    }


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<UserDTO> getUser(@RequestParam String email) {

        User user = mockUserService.getUser(email);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(converter.UserToUserDTO(user), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{pw}")
    public ResponseEntity<UserDTO> checkUser(@RequestParam String email, @PathVariable String pw) {


        User user = mockUserService.getUser(email);


        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (user.getPassword().equals(pw)) {
            return new ResponseEntity<>(converter.UserToUserDTO(user), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteUser(@RequestParam String email) {

        try {
            mockUserService.delete(mockUserService.getUser(email));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


    @RequestMapping(method = RequestMethod.POST, path = "/caretaker")
    public ResponseEntity<User> addCaretaker(@RequestParam String email, @RequestParam String ctemail) {

        mockUserService.addUserCaretaker(mockUserService.getUser(email), mockUserService.getUser(ctemail));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/caretaker")
    public ResponseEntity<List<UserDTO>> getCaretaker(@RequestParam String email) {
        List<UserDTO> userDTOS = new LinkedList<>();
        for (User user : mockUserService.getUser(email).getCaretakers()) {
            UserDTO userDTO = converter.UserToUserDTO(user);
            userDTOS.add(userDTO);

        }

        return new ResponseEntity<>(userDTOS, HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.GET, path = "/takingcare")
    public ResponseEntity<List<UserDTO>> getTakingcare(@RequestParam String email) {

        List<UserDTO> userDTOS = new LinkedList<>();
        for (User user : mockUserService.getUser(email).getTakingcares()) {
            UserDTO userDTO = converter.UserToUserDTO(user);
            userDTOS.add(userDTO);

        }


        return new ResponseEntity<>(userDTOS, HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST, path = "/")
    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {

        mockUserService.add(converter.UserDTOtoUser(userDTO));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @RequestMapping(method = RequestMethod.GET, path = "/createtestusers")
    public ResponseEntity<User> createTestUsers() {

        mockUserService.addTests();

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/createtestusers")
    public ResponseEntity<User> creatseTestUsers() {

        mockUserService.addTests();

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/pod/{id}")
    public ResponseEntity<User> addPod(@RequestParam String email,@PathVariable Integer id) {

        mockUserService.addPod(mockUserService.getUser(email),id);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
