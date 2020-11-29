package servlet;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;


/**
*       功能： 生成验证码图片，将验证码数据存入seesion域中，然后返回验证码图片给前端！
*
* */

@WebServlet("/checkCodeDemo")
public class CheckCodeDemo extends HttpServlet {
    private String Code; //验证码信息
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Code = "";
        int width = 140;
        int height = 60;

        //画一幅140*60的空白图
        BufferedImage image = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        Graphics G = image.getGraphics();
        G.setColor(Color.pink);
        G.fillRect(0,0,width,height);
        G.setColor(Color.BLUE);
        G.drawRect(0,0,width-1,height-1);

        //在下面字符串中随机选取4位作为验证码，制成验证码图片
        String str = "ABCDEFGHYJKLMNOPQRSTUVWXYZabcdefghyjklmnoqrstuvwxyz0123456789";
        Random ran = new Random();
        G.setFont(new Font("宋体",Font.BOLD,40));
        for(int i=1;i<=4;i++){
            int index = ran.nextInt(str.length());
            Code += str.charAt(index)+"";
            G.drawString(str.charAt(index)+"", width/5*i, height/2);
        }

        //将验证码信息存入seesion域中
        HttpSession session = request.getSession();
        session.setAttribute("code",Code);

        G.setColor(Color.DARK_GRAY);

        //设置干扰线，防止机器识别！！
        Graphics2D G2d = (Graphics2D)G;
        G2d.setStroke(new BasicStroke(2.0f));
        for(int i=0;i<6;i++){
            int x1 = ran.nextInt(width);
            int x2 = ran.nextInt(width);
            int y1 = ran.nextInt(height);
            int y2 = ran.nextInt(height);
            G2d.drawLine(x1,y1,x2,y2);
        }

        //返回图片给前端
        response.setContentType("image/gif");
        ImageIO.write(image,"jpg",response.getOutputStream());

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request,response);
    }
}
