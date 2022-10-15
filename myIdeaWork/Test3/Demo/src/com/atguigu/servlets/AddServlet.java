package com.atguigu.servlets;

import com.atguigu.fruit.dao.FruitDAO;
import com.atguigu.fruit.dao.impl.FruitDAOImpl;
import com.atguigu.fruit.pojo.Fruit;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");

        String fname = req.getParameter("fname");
        String priceStr = req.getParameter("fprice");
        Integer fprice = Integer.parseInt(priceStr);
        String countStr = req.getParameter("fcount");
        Integer fcount = Integer.parseInt(countStr);
        String remark = req.getParameter("remark");
        System.out.println(fname);
        System.out.println(fprice);
        System.out.println(fcount);
        System.out.println(remark);

        FruitDAO fruitDAO = new FruitDAOImpl();
        boolean flag = fruitDAO.addFruit(new Fruit(0,fname, fprice, fcount, remark));
        System.out.println(flag?"添加成功":"添加失败");

    }
}
