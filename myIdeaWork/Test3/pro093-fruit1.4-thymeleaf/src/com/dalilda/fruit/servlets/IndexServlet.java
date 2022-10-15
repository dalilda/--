package com.dalilda.fruit.servlets;

import com.dalilda.fruit.dao.daoImpl.FruitDaoImpl;
import com.dalilda.fruit.pojo.Fruit;
import com.dalilda.myssm.dao.basedao.myspringmvc.ViewBaseServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet("/index")
public class IndexServlet extends ViewBaseServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        FruitDaoImpl fruitDao = new FruitDaoImpl();
        List<Fruit> fruitList = fruitDao.getFruitList();

        HttpSession session = req.getSession();
        session.setAttribute("fruitList",fruitList);
        session.getAttribute("fruitList");
        super.processTemplate("index",req,resp);
    }
}
