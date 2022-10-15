package com.fruit.servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//演示servlet生命周期
public class Demo05Servlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Demo05 service..");
        //转发到Demo06
//        req.getRequestDispatcher("Demo06").forward(req,resp);
        resp.sendRedirect("Demo06");
    }
}