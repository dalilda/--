package com.fruit.servlets;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import java.io.IOException;
//演示servlet生命周期
public class Demo02Servlet extends HttpServlet {

    public Demo02Servlet(){
        System.out.println("constructor..");
    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        System.out.println("init..");
    }

    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        System.out.println("service..");
    }

    @Override
    public void destroy() {
        System.out.println("destroy..");
    }
}
