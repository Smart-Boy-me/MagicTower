package servlet;


import org.springframework.jdbc.core.JdbcTemplate;
import Utils.JDBCutils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 *      功能： 存档，存入数据库
 */
@WebServlet("/saveServlet")
public class SaveServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String sql = "update user set player = ?, data = ? where id = ?";
        int id = Integer.parseInt(request.getParameter("id"));
        String player = request.getParameter("player");
        String data = request.getParameter("data");
        int update = template.update(sql, player, data, id);
        System.out.println("save:"+update);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
