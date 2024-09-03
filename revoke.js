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

//for sidelodading
"ocsp.apple.com",
					"ocsp2.apple.com",
				 "mesu.apple.com",
					"<string>valid.apple.com",
					"<string>crl.apple.com",
					"<string>certs.apple.com",
				 "<string>appattest.apple.com",
					"<string>vpp.itunes.apple.com",
					"<string>guzzoni-apple-com.v.aaplimg.com",
					"<string>gdmf.apple.com",
					"<string>axm-app.apple.com",
					"<string>comm-cohort.ess.apple.com",
					"<string>comm-main.ess.apple.com",
 
 
"mesu.apple.com",
//apple revoke
//"ffapple.com",
 
//"ocsp.apple.com",
//"ocsp2.apple.com",
//scarlet
//"http://ppq.apple.com",
//"http://certs.apple.com",

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
 "appcenter",
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
 "tapjoy",
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

 //ugly apps
 "facebook",
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
