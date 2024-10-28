
var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = [
 
/*
 //keywords
 "ads",
 "lytics",
 //"track",
 "cognito",
 "tags",
 "stats",
 "collect",
 "log",
*/

//para poder instalar apps con Esign de un perfil revocado
"ocsp.apple.com",
"ocsp2.apple.com",
"valid.apple.com",
"crl.apple.com",
"certs.apple.com",
"appattest.apple.com",
"vpp.itunes.apple.com",
	//block updates
/*	
"mesu.apple.com",
"guzzoni-apple-com.v.aaplimg.com",
"gdmf.apple.com",
"axm-app.apple.com",
"comm-cohort.ess.apple.com",
"comm-main.ess.apple.com",
 */

//telemetry esing app
"qmuiteam.com",
"h.trace.qq.com",
"ios.bugly.qq.com",
"ios.bugly.qcloud.com",
"ucc.umeng.com",
"aspect-upush.umeng.com",
"ulogs.umeng.com",
"ulogs.umengcloud.com",
"alogus.umeng.com",
"http://baidu.com",
"utoken.umeng.com",
"aladdinsys.com",

	
//apple revoke
//"ffapple.com",
 
//"ocsp.apple.com",
//"ocsp2.apple.com",
//scarlet
//"http://ppq.apple.com",
//"http://certs.apple.com",

/*
 //ads
 "applvn",
 "applovin",
 "supersonicads",
 "digitalmelody",
 "unity3d",
	
 "rayjump",
 "flurry",
 "appsflyer",
 "vungle",
 "active.mobi",
 "adtilt",
// "appcenter",


 "doubleclick",
 "sentry",
 "pubnative",
 "revenuecat",
 "ip-api",
 "naver",
 "mixpanel",
 "mxpnl",
 "admob",
 "parsely",
	
 "trafficjunky",
 "brightcove",
 "criterio",
 "taboola",
 
 "algolia",
 "adcolony",
 "fyber",
//"tapjoy",   no
 "tritondigital",
 "marketo",

 
 //analytics
 "firebase",
 "firebaseinstallations",
 "adjust",
 "app-measurement",
 "exp.host",
 "expo.io",
 "apptimize",
 "braze",
 "device-provisioning",
 "aatkit",
 "ntp",
 "branch",
 "newrelic",
 "datadoghq",
 "wzrkt",
 //"safebrowsing",
 "optimizely",
 "onesignal",
 "amplitude",
 "sharethis",
 "trafficmanager",
 //"appcenter",
 "bugsnag",
 "syndication",
 "lbtls",
 "scorecardresearch",
//
*/

	
 //ugly apps
// "facebook",
 "fbsbx",
 //"instagram",
 "mtalk.com",
 "googlesyndication",
 "connectivitycheck",
 

 //tiktok
 "ttlivecdn",
 //"tiktokcdn",
 //"tiktokv",
 "snapkit",
 "bytetcdn",
 "byteoversea",


];

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for(var i = 0; i < ruler.length; i++){
    var copyright = ruler[i];
    if(shExpMatch(host, "*" + copyright + "*")){
      return PROXY;
    }
  }

  return DIRECT;
}
