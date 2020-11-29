package servlet;


import org.springframework.jdbc.core.JdbcTemplate;
import Utils.JDBCutils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

/**
 *      功能： 根据id获取用户名
 */


@WebServlet("/getUsernameServlet")
public class GetUsernameServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String object = request.getParameter("id");
        int id = Integer.parseInt(object);
        String sql = "select username from user where id = ?";
        Map<String, Object> map = template.queryForMap(sql, id);
        response.getWriter().write(map.get("username").toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
