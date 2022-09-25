var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = [

"googletagservices",
"google-analytics",
"googlesyndication",
"adsystem",
"pubnative",
"onetrust",
//"firebase",
"mapbox",
"crashlyticsreports",
"googlesyndication",
"app-measurement",
"scorecardresearch",
"onetrust",
"wlvpn",
"doubleclick",
"downdetector",
  "sectigo",
  "rayjump",
  "byteoversea",
  "unity3d",
  "chartboost",
  "applovin",
  "appsflyer",
  "fyber",
  "inner-active",
  "fbcdn",
  "supersonicads",
  "pointblack",
  "tapjoy",
  "ssacdn",
  "vungle",
  "adcolony",
  "ads",
  "kayzen",
  "logs",
  "inmobi",
  



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
