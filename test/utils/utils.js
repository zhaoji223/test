var obj = {};

obj.is_weixin = function() {
	var ua = navigator.userAgent.toLowerCase();
	return ua.match(/MicroMessenger/i) == "micromessenger";
};

obj.getRequestParams = function() {
	var urlStr = location.search;
	var myRequest = new Object();
	if (urlStr.indexOf("?") != -1) {
		var tempStr = urlStr.substr(urlStr.indexOf("?") + 1);
		var strArr = tempStr.split("&");
		for (var i = 0; i < strArr.length; i++) {
			myRequest[strArr[i].split("=")[0]] = strArr[i].split("=")[1];
		}
	}
	return myRequest;
}

obj.isPC = function() {
	let userAgentInfo = navigator.userAgent;
    let Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
    ];
    let flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

export default obj;