package org.academiadecodigo.bootcamp.rest;


import org.academiadecodigo.bootcamp.service.mock.MockUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class RestUserController {



    private MockUserService mockUserService;

    @Autowired
    public void setMockUserService(MockUserService mockUserService) {
        this.mockUserService = mockUserService;
    }



}
