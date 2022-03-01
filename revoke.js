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
 "tag",
 
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
 
 //tiktok
 "ttlivecdn",
 "tiktokcdn",
 "tiktokv",
 "snapkit",
 "bytetcdn",
 "byteoversea",

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
 
 //ugly apps
 "facebook",
 "fbsbx",
 "instagram",
 "google.com",
 "googlesyndication",
 

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
