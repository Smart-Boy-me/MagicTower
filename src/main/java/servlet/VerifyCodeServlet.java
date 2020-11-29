package servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


/**
 *      功能： 验证验证码是否正确模块
 */
@WebServlet("/verifyCodeServlet")
public class VerifyCodeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        Object code = session.getAttribute("code");
        String code_register = request.getParameter("code");
        String code_answer = code.toString().toLowerCase();
        code_register = code_register.toLowerCase();
        System.out.println(code_register + "-------" + code_answer);
        if(code_register.equals(code_answer))
            response.getWriter().write("true");
        else
            response.getWriter().write("false");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
