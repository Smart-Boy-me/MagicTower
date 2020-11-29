package servlet;

import org.springframework.jdbc.core.JdbcTemplate;
import Utils.JDBCutils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;
import java.util.Map;


/**
 *      功能： 根据前端请求参数来进行登录操作
 */
@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String sql = "select id from user where username = ? and password = ?";

        List<Map<String, Object>> list = template.queryForList(sql,username,password);
        System.out.println("111111");//测试
        if(list.size()!=0) {
            HttpSession session = request.getSession();
            session.setAttribute("id",list.get(0).get("id"));
            response.getWriter().write("true");

        }else {
            //用户名与密码匹配不上
            response.getWriter().write("false");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
