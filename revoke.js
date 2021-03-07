var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = ["ads",
	     "mesu",
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
		"flurry",
		"aj1559",

		"pardot",
		"supersonic",
		"tenjin",
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
"whatsapp",
	     
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
"yahoo",

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

"iadsdk",
"gameanalytics",

"fbsbx",
"fbcdn",

"appsflyer",
"gstaticadssl",

"googlesyndication",
"googletag",
"googleusercontent",


"braze",
"richaudience",
"presage",
"ogury",
"ogyfmts",
"api.weather",


	     
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
