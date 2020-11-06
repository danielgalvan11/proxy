var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = ["ads",
	     "mesu",
	     "ocsp",
	     "gdmf",
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

"acloudimages",
"mixpanel",
"criteo",
"tag",

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
"facebook",
"yahoo",

"office",
"chartboost",
"hwcdn",
"liftoff",
"sectigo",
"spyware",
"adtilt",
"herokuapp",
"edgecastcdn",
"fyber",
"helpshift",
"pikpok",
"amplitude",
"braze",
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

"fbcdn",
"byte",
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
"stats",
"google.com",
"mediation",
	     "pangle",
	     "saygames",
	     "saypromo",
	     "digitalocean",
	     "hwcdn",
	     "snssdk",
	     "saymediation",
	     "gstatic",
	     "markmonitor",
	     "edgecast",


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
