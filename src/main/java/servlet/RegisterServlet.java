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
 *      功能： 根据前端请求参数来进行注册操作
 */
@WebServlet("/registerServlet")
public class RegisterServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        //插入数据
        String sql = "insert into user(username, password) values (?,?)";
        int update = template.update(sql, username, password);
        sql = "select id from user where username = ?";
        List<Map<String, Object>> list = template.queryForList(sql, username);
        HttpSession session = request.getSession();
        //跳转到首页前设置seesion中id信息
        session.setAttribute("id", list.get(0).get("id"));
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
