var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = [

 //apple
 "mesu",
 "ocsp",
 
 //keywords
 "ads",
 "lytics",
 "track",
 "cognito",
 "tags",
 "stats",
 //"collect",
 //"log",


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
 "appcenter",
 "bugsnag",
 "syndication",
 "lbtls",
 "scorecardresearch",


 
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


 //dudoso
 "ezvizlife",
 "markmonitor",

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
