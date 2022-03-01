var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = [
 
 //apple
 "mesu",
 "ocsp",
 
 //ads
 "ads",
 "applvn",
 "applovin",
 "supersonicads",
 "digitalmelody",
 "unity3d",
 "rayjump",
 "flurry",
 "appsflyer",
 
 "vungle",
 //"inner-active",
 "adtilt",
 "appcenter",
 
 "ttlivecdn",
 "tiktokcdn",
 "tiktokv",
 "snapkit",
 "bytetcdn",
 "byteoversea",

 //analytics
 "lytics",
 "firebase",
 "firebaseinstallations",
 
 "adjust",
 "app-measurement",
 
 //ugly apps
 "facebook",
 

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
