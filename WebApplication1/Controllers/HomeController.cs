using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            api();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public void api()
        {

            string html = string.Empty;

            //WebClient client = new WebClient();
            String apiKey = "1b3f55b792004e41b894bd035ab93b3d";
            //client.Headers.Add("X-API-Key", apiKey);
            //request.Headers["X-My-Custom-Header"] = "the-value";
            WebRequest webRequest = WebRequest.Create("http://www.bungie.net/Platform/Destiny2/Stats/Definition");
            webRequest.Method = "GET";
            webRequest.Timeout = 12000;
            webRequest.ContentType = "application/json";
            webRequest.Headers.Add("X-API-Key", apiKey);
            String result = "";
            using (System.IO.Stream s = webRequest.GetResponse().GetResponseStream())
            {
                using (System.IO.StreamReader sr = new System.IO.StreamReader(s))
                {
                    var jsonResponse = sr.ReadToEnd();
                    result += jsonResponse;
                    Console.WriteLine(String.Format("Response: {0}", jsonResponse));
                }
            }
           

            //var fantasyAPI = $http.get("http://www.bungie.net/Platform/Destiny2/Stats/Definition",
              ///      { headers: { 'X-API-Key': apiKey } });

        }

    }
}