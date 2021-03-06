function getCookie(sName) {
    var sReg = "(?:;)?" + sName + "=([^;]*);?";
    var oReg = new RegExp(sReg);

    if (oReg.test(document.cookie)) {
        return decodeURIComponent(RegExp["$1"]);
    }
    return null;
}


function setCookie(sName, sValue, oExpires, sPath, sDomain, bSecure) {
    var sCookie = sName + "=" + encodeURIComponent(sValue);

    if (oExpires) {
        sCookie += ";expires=" + oExpires.toGMTString();
    }
    if (sPath) {
        sCookie += ";path=" + sPath;
    }
    if (sDomain) {
        sCookie += ";domain=" + sDomain;
    }
    if (bSecure) {
        sCookie += ";secure" + bSecure;
    }
    document.cookie = sCookie;
}


function deleteCookie(sName, sPath, sDomain) {
    cookie.set(sName, sPath, sDomain);
}
