var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var giantrule = ["ads",
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
		"flurry",
		"aj1559",

		"pardot",
		"supersonic",
		"tenjin",
		"alytics",
		"advertising",
		"evidon",	
		"gigya",
		"quantcast",
	
		"adobe",
		"doubleclick",
	        "diagnostics",
		"telemetry",
		"adjust",
		"avant",
		"crash",
		
"gstatic",
"widgets",
"collector",

"acloudimages",
"offer",
"mixpanel",
"criteo",
"tag",

"brightcove",
"taboola",
"newrelic",
"gigya",
"adcolony",
"demdex",


		


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
