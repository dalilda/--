package com.fruit.dao.daoImpl;

import com.fruit.dao.FruitDao;
import com.fruit.pojo.Fruit;
import com.myssm.dao.basedao.BaseDAO;

import java.util.List;

public class FruitDaoImpl extends BaseDAO<Fruit> implements FruitDao {

    @Override
    public List<Fruit> getFruitList() {
        return super.executeQuery("select * from t_fruit");
    }
}
