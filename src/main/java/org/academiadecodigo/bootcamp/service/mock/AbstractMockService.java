package org.academiadecodigo.bootcamp.service.mock;

import java.util.HashMap;
import java.util.Map;

public abstract class AbstractMockService<T> {


    protected Map<String, T> modelMap = new HashMap<>();


   /* protected Integer getNextId() {
        return modelMap.isEmpty() ? 1 : Collections.max(modelMap.keySet()) + 1;
    }*/

}
