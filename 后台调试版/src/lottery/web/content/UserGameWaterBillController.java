package lottery.web.content;

import admin.domains.content.entity.AdminUser;
import admin.web.WebJSONObject;
import admin.web.helper.AbstractActionController;
import javautils.http.HttpUtil;
import javautils.jdbc.PageList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import lottery.domains.content.biz.UserGameWaterBillService;
import lottery.domains.content.dao.UserDao;
import lottery.domains.content.entity.User;
import lottery.domains.pool.LotteryDataFactory;
import lottery.web.content.utils.UserCodePointUtil;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserGameWaterBillController
  extends AbstractActionController
{
  @Autowired
  private UserDao uDao;
  @Autowired
  private UserGameWaterBillService uGameWaterBillService;
  @Autowired
  private UserCodePointUtil uCodePointUtil;
  @Autowired
  private LotteryDataFactory dataFactory;
  
  @RequestMapping(value={"/user-game-water-bill/list"}, method={org.springframework.web.bind.annotation.RequestMethod.POST})
  @ResponseBody
  public void USER_GAME_WATER_BILL_LIST(HttpSession session, HttpServletRequest request, HttpServletResponse response)
  {
    String actionKey = "/user-game-water-bill/list";
    WebJSONObject json = new WebJSONObject(super.getAdminDataFactory());
    AdminUser uEntity = super.getCurrUser(session, request, response);
    if (uEntity != null)
    {
      if (super.hasAccess(uEntity, actionKey))
      {
        String username = request.getParameter("username");
        String sTime = request.getParameter("sTime");
        String eTime = request.getParameter("eTime");
        Double minUserAmount = HttpUtil.getDoubleParameter(request, "minUserAmount");
        Double maxUserAmount = HttpUtil.getDoubleParameter(request, "maxUserAmount");
        Integer status = HttpUtil.getIntParameter(request, "status");
        Integer type = HttpUtil.getIntParameter(request, "type");
        int start = HttpUtil.getIntParameter(request, "start").intValue();
        int limit = HttpUtil.getIntParameter(request, "limit").intValue();
        Integer userId = null;
        if (StringUtils.isNotEmpty(username))
        {
          User user = this.uDao.getByUsername(username);
          if (user != null) {
            userId = Integer.valueOf(user.getId());
          }
        }
        PageList pList = this.uGameWaterBillService.search(userId, sTime, eTime, minUserAmount, maxUserAmount, type, status, start, limit);
        if (pList != null)
        {
          json.accumulate("totalCount", Integer.valueOf(pList.getCount()));
          json.accumulate("data", pList.getList());
        }
        else
        {
          json.accumulate("totalCount", Integer.valueOf(0));
          json.accumulate("data", "[]");
        }
        json.set(Integer.valueOf(0), "0-3");
      }
      else
      {
        json.set(Integer.valueOf(2), "2-4");
      }
    }
    else {
      json.set(Integer.valueOf(2), "2-6");
    }
    HttpUtil.write(response, json.toString(), "text/json");
  }
}
