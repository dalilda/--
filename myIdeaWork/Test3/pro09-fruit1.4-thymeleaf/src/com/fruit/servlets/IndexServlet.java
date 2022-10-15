package com.fruit.servlets;

import com.fruit.dao.daoImpl.FruitDaoImpl;
import com.fruit.pojo.Fruit;
import com.myssm.dao.basedao.myspringmvc.ViewBaseServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet("/index")//servlet3.0支持注解注册
public class IndexServlet extends ViewBaseServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        FruitDaoImpl fruitDao = new FruitDaoImpl();//alt+enter快捷补全
        HttpSession session = req.getSession();
        session.setAttribute("fruitList",fruitDao.getFruitList());
        super.processTemplate("index",req,resp);
    }
}
