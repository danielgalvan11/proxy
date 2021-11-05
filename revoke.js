var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = ["ads",
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
"analitics",
		"alytics",
		"advertising",
		"evidon",	
		
	
		"adobe",
		"doubleclick",
	        "diagnostics",
		"telemetry",
		"avant",
		"crash",
		
"collector",
"facebook",
"appcenter",
"firebase",

"mqou0t73",
"safebrowsing",


"acloudimages",
"mixpanel",
"criteo",


"brightcove",
"taboola",
"newrelic",
"gigya",
"adcolony",
"mdex",

"research",
"track",
"adjust",
"widgets",
"offer",
"mailchimp",
"taboo",

"office",
"chartboost",
"hwcdn",
"liftoff",
"sectigo",
"spyware",
"adtilt",
"herokuapp",

"fyber",
"pikpok",
"amplitude",
"ketchapp",
"noodlecake",
"auxbrain",
"appspot",
"tapjoy",
"bitmango",
"maxmind",
"applifier",
	     

	     
"sharethis",
"addthis",
"adchoice",
"adform",
"advertisation",
"adxns",
"bluecava",
"bluelithium",
"btstatic",
"catchpoint",
"chartbeat",
"criteo",
"exelator",
"cmcore",
"mpulse",
"moat",
"adroll",
"optimizely",
"outbrain",
"pagefair",
"sizmek",
"parsely",
"chaturbate",

	     "pangle",
	     "saygames",
	     "saypromo",

	     "saymediation",

             "markmonitor",

"iadsdk",
"gameanalytics",


"appsflyer",
"gstaticadssl",

"googlesyndication",
"googletag",


"braze",
"richaudience",
"presage",
"ogury",
"ogyfmts",


	     
"indexww",
"springserve",
"bidswitch",
"ezoic",
"onesignal",
"imrworldwide",
"marketo",
"gumgum",
"hellobar",
"newrelic",
"trustpilot",
"qualtrics",
"easebar",
"playfabapi",


"marketplace",
"hyprmx",
"freshdesk",

"ibyte", 
"byteoversea",
"ipstatp",

"voodoo",
"trafficjunky",
"newdreamglobal",
"onetrust",
"haoictdev",
"sentry",
"aan",
"luckyorange",
"bugsnag",
"yandex",
"naver",
"log.snow.me",
"api.revenuecat.com",
"gjg",
"sayollo",
"ipify",
"mintegral",

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
