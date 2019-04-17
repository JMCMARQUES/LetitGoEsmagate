package org.academiadecodigo.bootcamp.rest;


import org.academiadecodigo.bootcamp.model.User;
import org.academiadecodigo.bootcamp.service.mock.MockUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class RestUserController {



    private MockUserService mockUserService;

    @Autowired
    public void setMockUserService(MockUserService mockUserService) {
        this.mockUserService = mockUserService;
    }


    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<User> getUser(@PathVariable Integer id){

        User user = mockUserService.getUser(id);

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(user,HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Integer id){

        try {
            mockUserService.delete(mockUserService.getUser(id));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @RequestMapping(method = RequestMethod.POST, path = "/")
    public ResponseEntity<User> createUser(@RequestBody User user){

        mockUserService.add(user);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
