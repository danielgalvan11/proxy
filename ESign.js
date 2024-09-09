var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = [
 
//para poder instalar apps con Esign de un perfil revocado
//"ocsp.apple.com",
//"ocsp2.apple.com",
//"mesu.apple.com",
"valid.apple.com",
"crl.apple.com",
"certs.apple.com",
"appattest.apple.com",
"vpp.itunes.apple.com",
"guzzoni-apple-com.v.aaplimg.com",
"gdmf.apple.com",
"axm-app.apple.com",
"comm-cohort.ess.apple.com",
"comm-main.ess.apple.com",
 

//telemetry esing app
"qmuiteam.com",
"h.trace.qq.com",
"ios.bugly.qq.com",
"ios.bugly.qcloud.com",
"ucc.umeng.com",
"aspect-upush.umeng.com",
"ulogs.umeng.com",
"ulogs.umengcloud.com",
"alogus.umeng.com",
"http://baidu.com",
"utoken.umeng.com",
"aladdinsys.com",
	
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
