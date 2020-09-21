var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var giantrule = ["ads",
		"ppq",
		"ocsp",
		"crl",
		"world-gen",
		"click",
		"cnnd",
		"admicro",
		"deqik",
		"amcdn",
		"vungle",
		"unity3d",
		"applovin",
		"applvn",
		"mopub",
		"gop1",
		"inmobi",
		"rayjump",
		"fls-na",
		"app-measurement",
		"umeng",
		"loggly",
		"ppsflyer",
		"flurry",w
		"aj1559",

		"gstatic",
		"google",
		"pardot",
		"amazon",
		"supersonic",
		"tenjin",
		"alytics",
		"advertising",
		"ru",
		"evidon",	
		"gigya",
		"quantcast",
		"analytics",
		"traffic",
		"log",
		"tracking",
		"metric",
		"ad",
		"facebook",
		"adobe",
		"doubleclick",
		"diagnostics",
		"telemetry",
		"gstatic",
		"adjust",
		"avant",
		"crash",
		"share",
		"research",
		


];

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for(var i = 0; i < giantrule.length; i++){
    var copyright = giantrule[i];
    if(shExpMatch(host, "*" + copyright + "*")){
      return PROXY;
    }
  }

  return DIRECT;
}
