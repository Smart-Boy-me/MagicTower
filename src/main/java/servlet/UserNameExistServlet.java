package servlet;


import org.springframework.jdbc.core.JdbcTemplate;
import Utils.JDBCutils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 *      功能： 检测注册时填写的用户名是否已存在
 */
@WebServlet("/userNameExistServlet")
public class UserNameExistServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String sql = "select * from user where username = ?";
        String username = request.getParameter("username");
        List<Map<String, Object>> list = template.queryForList(sql, username);
        if(list.size()!=0) response.getWriter().write("true");
        else response.getWriter().write("false");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
