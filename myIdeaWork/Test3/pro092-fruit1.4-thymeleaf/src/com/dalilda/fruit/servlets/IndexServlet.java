package com.dalilda.fruit.servlets;

import com.dalilda.fruit.dao.daoImpl.FruitDaoImpl;
import com.dalilda.myssm.dao.basedao.myspringmvc.ViewBaseServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/index")
public class IndexServlet extends ViewBaseServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        FruitDaoImpl fruitDao = new FruitDaoImpl();
        session.setAttribute("fruitList",fruitDao.getFruitList());
        super.processTemplate("/index",req,resp);
    }
}
