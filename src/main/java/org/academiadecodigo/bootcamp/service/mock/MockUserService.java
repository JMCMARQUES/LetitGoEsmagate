package org.academiadecodigo.bootcamp.service.mock;

import org.academiadecodigo.bootcamp.model.DefaultPods;
import org.academiadecodigo.bootcamp.model.Pod;
import org.academiadecodigo.bootcamp.model.User;
import org.springframework.stereotype.Service;


@Service
public class MockUserService extends AbstractMockService<User> {


    public User getUser(String email) {
        return modelMap.get(email);
    }

    public void add(User user) {

        modelMap.put(user.getEmail(), user);
    }

    public void delete(User user) throws Exception {

        if(!user.getCaretakers().isEmpty()){
            throw new Exception();
        }
        modelMap.remove(user.getEmail());
    }

    public void addUserCaretaker(User user, User caretaker){
        user.addCaretaker(caretaker);
        caretaker.addTakingCare(user);
    }


    public void addTests() {

        User patricio = new User();
        patricio.setFirstName("Tiago");
        patricio.setLastName("Patricio");
        patricio.setEmail("patricio@mail.com");
        patricio.setPassword("12345");

        User diogo = new User();
        diogo.setFirstName("Diogo");
        diogo.setLastName("Alves");
        diogo.setEmail("diogo@mail.com");
        diogo.setPassword("12345");

        User sam = new User();
        sam.setFirstName("Sam");
        sam.setLastName("Vagos");
        sam.setEmail("sam@mail.com");
        sam.setPassword("12345");

        User caio = new User();
        caio.setFirstName("Caio");
        caio.setLastName("Kellerman");
        caio.setEmail("caio@mail.com");
        caio.setPassword("12345");

        User joao = new User();
        joao.setFirstName("Joao");
        joao.setLastName("Marques");
        joao.setEmail("joao@mail.com");
        joao.setPassword("12345");

        sam.addCaretaker(caio);
        caio.addTakingCare(sam);
        sam.addCaretaker(diogo);
        diogo.addTakingCare(sam);

        add(patricio);
        add(diogo);
        add(sam);
        add(caio);
        add(joao);




    }

    public void addPod(User user,Integer id) {
        Pod pod;
        switch(id){
            case 1: pod = new Pod("Green",2);

            case 2: pod = new Pod("Blue",1);

            case 3: pod = new Pod("Yellow",3);

            case 4: pod = new Pod("Black",4);

            default: pod = new Pod("Black",4);
        }
        user.setPod(pod);
    }
}
