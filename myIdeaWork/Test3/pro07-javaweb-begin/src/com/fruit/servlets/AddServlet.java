package com.fruit.servlets;

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
        //super.doPost(req, resp);//这一行必须注释,不然就不是重写了
        req.setCharacterEncoding("UTF-8");
        String fname = req.getParameter("fname");
        //fname = new String(fname.getBytes(StandardCharsets.ISO_8859_1),StandardCharsets.UTF_8);
        String fprice = req.getParameter("fprice");
        String fcount = req.getParameter("fcount");
        String remark = req.getParameter("remark");
        Integer fprice_int = Integer.parseInt(fprice);
        Integer fcount_int = Integer.parseInt(fcount);

        System.out.println("fname:"+fname);
        System.out.println("fprice:"+fprice_int);
        System.out.println("fcount:"+fcount_int);
        System.out.println("remark:"+remark);

        Fruit fruit = new Fruit(0,fname,fprice_int,fcount_int,remark);
        FruitDAO fruitDAO = new FruitDAOImpl();
        boolean flag = fruitDAO.addFruit(fruit);
        System.out.println(flag?"添加成功":"添加失败");
    }
}
