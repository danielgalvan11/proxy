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
		"alytics",
		"advertising",
		"evidon",	
		"gigya",
		"quantcast",
	
		"adobe",
		"doubleclick",
	        "diagnostics",
		"telemetry",
		"avant",
		"crash",
		
"collector",
"fbcdn",
"facebook",
	     
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
"firebase",
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
"helpshift",
"pikpok",
"amplitude",
"psicdn",
"ketchapp",
"noodlecake",
"auxbrain",
"appspot",
"tapjoy",
"bitmango",
"maxmind",
"applifier",
"apsalar",
"sometwo",
"lbtls",
"godaddy",
"kochava",
"playgendary",
"plg",
"ntp",
"branch",
"comscore",
"nielsen",
"salesforce",
"stats",
"edgecastcdn",
"tfbnw",
"appnexus",
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
"pixel",
"mediation",
	     "pangle",
	     "saygames",
	     "saypromo",
	     "digitalocean",
	     "hwcdn",
	     "snssdk",
	     "saymediation",
	     "markmonitor",
	     "edgecast",
"deltadna",
"ssacdn",
"inner-active",
"leanplum",
"iadsdk",
"gameanalytics",
"simharif",
"trafficmanager",
"event",
"winner",
"appsflyer",
"gstaticadssl",
"exchange",
"kwalee",
"bkrtx",
"imrworldwide",
"quantserve",
"googlesyndication",
"colordefense",
"your-server",
"googleusercontent",
"mcpeppergames",

"braze",
"richaudience",
"presage",
"ogury",
"ogyfmts",
"api.weather",
"consensu",
"googlesyndication",
"googletag",
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
"fbsbx",
"playfabapi",
"oath",
"google.com",

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
