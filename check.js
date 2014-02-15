function checkMobile(mobile) {
    var reg = /^[1]\d{10}$/;
    if (mobile.length == 0 || mobile.length > 11) {
        return false;
    }
    return reg.test(mobile);
}
