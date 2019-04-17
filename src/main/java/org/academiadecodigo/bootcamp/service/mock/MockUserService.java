package org.academiadecodigo.bootcamp.service.mock;

import org.academiadecodigo.bootcamp.model.User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MockUserService extends AbstractMockService<User> {

    public Map<Integer, User> getMap() {
        return modelMap;
    }

    public User getUser(Integer id) {
        return modelMap.get(id);
    }

    public void add(User user) {

        if (user.getId() == null) {
            user.setId(getNextId());
        }

        modelMap.put(user.getId(), user);
    }

    public void delete(User user) throws Exception {

        if(!user.getRecipients().isEmpty()){
            throw new Exception();
        }
        modelMap.remove(user);
    }

}
