package org.academiadecodigo.bootcamp.service.mock;

import org.academiadecodigo.bootcamp.model.User;

import java.util.Collections;
import java.util.Map;

public abstract class AbstractMockService<T> {


    protected Map<Integer, T> modelMap;


    protected Integer getNextId() {
        return modelMap.isEmpty() ? 1 : Collections.max(modelMap.keySet()) + 1;
    }

}
