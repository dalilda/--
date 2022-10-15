package com.dalilda.fruit.dao.daoImpl;

import com.dalilda.fruit.dao.FruitDao;
import com.dalilda.fruit.pojo.Fruit;
import com.dalilda.myssm.dao.basedao.BaseDAO;

import java.util.List;

public class FruitDaoImpl extends BaseDAO<Fruit> implements FruitDao {

    @Override
    public List<Fruit> getFruitList() {
        return super.executeQuery("select * from t_fruit");
    }
}
