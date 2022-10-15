```java
ServletContext application = request.getServletContext();
application.setAttribute("uname","lili");

request.getSession().setAttribute("uname","lili");

request.setAttribute("uname","lili");

response.sendRedirect("demo04");

request.getRequestDispatcher("demo04").forward(req,resp);
```

```java
/**
文档注释
@author hule
@version 1.0
这是我的第一个程序
*/
public class HelloChina{
	/**
		这是main方法
	*/
	public static void main(String[] args){
		System.out.println("HelloChina");
	}
}
```