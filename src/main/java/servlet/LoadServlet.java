package servlet;


import com.fasterxml.jackson.databind.ObjectMapper;
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
 *      功能： 根据id加载读档信息
 */
@WebServlet("/loadServlet")
public class LoadServlet extends HttpServlet {
    private JdbcTemplate template = new JdbcTemplate(JDBCutils.getDataSource());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String sql = "select player,data from user where id = ?";
        Map<String, Object> map = template.queryForMap(sql, id);
        if(map.get("player") == null) {
            response.getWriter().write("null");
        }else{
            ObjectMapper objectMapper = new ObjectMapper();
            String res = objectMapper.writeValueAsString(map);
            System.out.println(res);
            response.getWriter().write(res);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }
}
