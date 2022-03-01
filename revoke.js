var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var ruler = [
  
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
