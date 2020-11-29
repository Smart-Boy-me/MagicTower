package Utils;

import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

public class JDBCutils {
    public static DataSource ds;

    static {

        try {
            InputStream is = JDBCutils.class.getClassLoader().getResourceAsStream("druid.properties");
            Properties pro = new Properties();
            pro.load(is);
            ds = DruidDataSourceFactory.createDataSource(pro);
        }catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static Connection getConnection() throws SQLException {
        return ds.getConnection();
    }

    public static DataSource getDataSource() {
        return ds;
    }

}
