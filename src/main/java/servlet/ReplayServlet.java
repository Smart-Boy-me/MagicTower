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
 *      功能： 根据数据库的表template中的数据重置游戏
 */
@WebServlet("/replayServlet")
public class ReplayServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String sql = "select * from template where id = ?";
        Map<String, Object> map = template.queryForMap(sql, 1);
        String player = map.get("player").toString();
        String data = map.get("data").toString();

        int id = Integer.parseInt(request.getParameter("id"));
        sql = "update user set player = ?, data = ? where id = ?";
        int update = template.update(sql, player, data, id);
        System.out.println("replay:"+update);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
