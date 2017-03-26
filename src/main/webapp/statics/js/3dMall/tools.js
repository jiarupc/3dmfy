/*!
* 	tools.js
*********************************************/
function jGet(e) { return document.getElementById(e); };
function Random(n) { return (Math.floor(Math.random() * n)); };
function AjaxRnd() { return new Date().getTime() + '' + Random(10000); };

function FixUrl(url) {
    if (url.indexOf('arnd=') > 0) { return url; };
    return (url + (url.indexOf('?') > 0 ? '&' : '?') + 'arnd=' + AjaxRnd());
};

function FixUrlEncode(url) {
    return encodeURI(FixUrl(url));
};

function AjaxErrorCallback() {
    alert('閫氫俊鍑洪敊锛佽鍒锋柊鍐嶈瘯锛�');
    self.location.reload();
};

/*******************************
* from Validate 
*******************************/
function isEngNum(val) { if (val == '') { return false; }; var reg = /^[a-zA-Z0-9]*$/; return reg.test(val); }
function isNumber(val) { if (val == '') { return false; }; var reg = /^-?\d*\.?\d+$/; return reg.test(val); };
function isInt(val) { if (val == '') { return false; }; var reg = /^-?\d+$/; return reg.test(val); };
function isZInt(val) { if (val == '') { return false; } var reg = /^[0-9]*[1-9][0-9]*$/; return reg.test(val); };
function isUInt(val) { if (val == '') { return false; }; var reg = /^\d+$/; return reg.test(val); };
function isFloat(val) { if (val == '') { return false; }; var reg = /^\d*\.?\d+$/; return reg.test(val); };
function isEmail(val) { var reg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/; return reg.test(val); };
function isMobile(val) { var reg = /^(13[0-9]|15[012356789]|18[012356789]|14[57])\d{8}$/; return reg.test(val); };
function isPic(val) { if (val == "") { return false; }; return val.match(/\.(jpg|gif|png|jpeg|bmp)?$/i); };
function isUserName(val) { if (val == "") { return false; }; var reg = /^[a-zA-Z0-9_@.]*$/; return reg.test(val); }

//date:2012-1-1
function isDate(val) { var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/; return reg.test(val); };

//date:2012-1-1 23:59:59
function isTime(val) { var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-)) (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/; return reg.test(val); };

/*******************************
* browser
*******************************/
function isIE6() { return $.browser.msie && ($.browser.version == "6.0") && !$.support.style; };
function isIE9lt() { return $.browser.msie && (parseInt($.browser.version) < 9); };

/*******************************
* timer 
*******************************/
//get now unix Timestamp
function getNowUnixtime() {
    return parseInt(new Date().getTime() / 1000);
};

//datetime to unix Timestamp
function DatetimeToUnixtime2(year, month, day, hour, minute, second) {
    var now = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    return parseInt(now.getTime() / 1000);
};

function DatetimeToUnixtime(sTime) {

    if (!isTime(sTime)) {
        return 0;
    };
    var year = 0, month = 0, day = 0, hour, minute = 0, second = 0;

    try {
        var dt = new Date(sTime);
        year = dt.getFullYear();
        month = dt.getMonth() + 1;
        day = dt.getDate();
        hour = dt.getHours();
        minute = dt.getMinutes();
        second = dt.getSeconds();
    } catch (err) {
        return 0;
    };

    if (year == 0 || day == 0) { return 0; };

    return DatetimeToUnixtime2(year, month, day, hour, minute, second);
};
//datetime to unix Timestamp
function UnixtimeToDatetime(unixtime) {
    var now = new Date(unixtime * 1000);
    return now.toLocaleString();
};

//format time 
function FmtTimeStr(v) {
    var s = parseInt0(v);
    if (s > 0 && s < 10) {
        return '0' + s;
    } else if (s == 0) {
        return '00';
    }
    return s;
};

//鏍煎紡鍖栦骇鍝佹椂闂�
function PrdFmtTimerEnd(sec) {
    if (parseInt0(sec) == 0) {
        return '';
    }

    var dt = new Date(sec * 1000);
    return FmtTimeStr(dt.getUTCDay()) + '澶�' +
        FmtTimeStr(dt.getUTCHours()) + '鏃�'+
        FmtTimeStr(dt.getUTCMinutes()) + '鍒�' + 
        FmtTimeStr(dt.getUTCSeconds()) + '绉�';

//    var ret = '';

//    var second = Math.floor(sec % 60),
//		minite = Math.floor((sec / 60) % 60),
//		hour = Math.floor((sec / 3600) % 24);

//    if (hour > 0) { ret += hour + '灏忔椂'; }
//    if (minite > 0) { ret += minite + '鍒�'; }
//    ret += second + '绉�';

//    return ret;

};
/*******************************
* keyEnter to Focus
*******************************/
function keyEnterNextFocus(jqId, event) {
    var evt = event || window.event;
    if (evt.which == 13 || evt.keyCode == 13) {
        $(jqId).focus();
    };
};

function keyEnterNextSubmit(jqId, event) {
    var evt = event || window.event;
    if (evt.which == 13 || evt.keyCode == 13) {
        $(jqId).click();
    };
};

/*******************************
* Math 
*******************************/
function parseFloat0(v) {
    v = v || 0;
    v = parseFloat(v);
    if (isNaN(v)) { v = 0; };
    if (v < 0) { v = 0; };
    return v;
};

function parseInt1(v) {
    v = v || 1;
    v = parseInt(v);
    if (isNaN(v)) { v = 1; };
    if (v < 1) { v = 1; };
    return v;
};

function parseInt0(v) {
    v = v || 0;
    v = parseInt(v);
    if (isNaN(v)) { v = 0; };
    if (v < 0) { v = 0; };
    return v;
};

function MyRound(v, d) {
    var k = Math.pow(10, d);
    var c = Math.round(v * k) / k;
    return parseFloat(c.toFixed(d));
};

//淇濈暀2浣嶏紝骞惰繑鍥炲瓧绗﹀瀷銆�
function MyRound2(v) {
    var k = Math.pow(10, 2);
    var c = Math.round(v * k) / k;
    return c.toFixed(2);
};

//淇濈暀灏忔暟鐐瑰悗2浣�,涓€鑸敤浜庨噾棰�
function FmtPrice(v) {
    var s = new String(v);

    if (s.indexOf('.') == -1) {
        return s + '.00';
    } else {
        return MyRound2(v);
    };
};

//淇濈暀灏忔暟鐐瑰悗6浣�,涓€鑸敤浜庢暟閲�
function FmtFloat(v) {
    return MyRound(v, 6);
};

/*************************************/
//Input check
/*************************************/
//鍙兘杈撳叆鏁存暟
function LimitInputInt(the, delValue) {
    delValue = delValue || '';
    var reg = /^\d+$/;
    if (!reg.test(the.value)) {
        the.value = delValue;
    };
};

//鍙兘杈撳叆閲戦
function LimitInputFloat(the) {
    var reg = /^\d+\.?\d{0,2}$/;
    if (!reg.test(the.value)) {
        the.value = '';
    };
};


function fixIdList(str) {
    if (!str) { return ''; }

    str += '';
    var rs = str.split(',');
    var sb = [],
        ss = '',
        ti = rs.length;

    for (var i = 0; i < ti; i++) {
        ss = rs[i];
        if (parseInt0(ss) > 0) {
            sb.push(ss);
        };
    };
    return sb.join(',');
};


/*
* 鏍规嵁json缁撴瀯鍙栧洖瀵瑰簲锛孫bject
* 鍙傛暟锛�
* 		json:	json缁撴瀯
* 		fName:	鏌ヨ鐨勫瓧娈靛悕
* 		fVal:	鏌ヨ鐨勫€�/id
* 杩斿洖锛氬搴旂殑object锛屽鏋滄病鏈夋煡璇㈠埌锛岃繑鍥� false
*/
function JsonGetObject(json, fName, fVal) {
    if (json) {
        for (var x in json) {
            var o = json[x];
            if (o[fName] == fVal) {
                return o;
            };
        };
    };
    return false;
};

/*
* 寰皟鎺т欢鍔犲噺鍑芥暟
* 鍙傛暟锛�
* 		theId锛� input.this
* 		typeId锛氭搷浣滅被鍨嬶紝1=鍔狅紝0=鍑�
* 		maxValue:	鏈€澶у€硷紝杈撳嚭鏂囦欢涓�99999
* 		minValue:	鏈€灏戝€硷紝榛樿涓�0
*/
function btnRangeAddNum(theId, typeId, maxValue, minValue) {
    var $item = $(theId).closest('.item');
    if (!$item.size()) {
        return 0;
    };
    var $num = $item.find('.btnRangeNum');
    if (!$num.size()) {
        return 0;
    };

    return btnRangeAddNum2($num, typeId, maxValue, minValue);
};


/*
* 寰皟鎺т欢鍔犲噺鍑芥暟
* 鍙傛暟锛�
* 		theId锛� 鏁板瓧鎺т欢鐨刬d,渚嬪锛� '#num'
* 		typeId锛氭搷浣滅被鍨嬶紝1=鍔狅紝0=鍑�
* 		maxValue:	鏈€澶у€硷紝杈撳嚭鏂囦欢涓�99999
* 		minValue:	鏈€灏戝€硷紝榛樿涓�0
*/
function btnRangeAddNum2(theId, typeId, maxValue, minValue) {
    maxValue = maxValue || 99999;
    minValue = minValue || 0;


    if (!$(theId).size()) {
        return;
    };

    var num = parseInt0($(theId).val());

    if (typeId == 1) {//鍔�
        num++;
        if (num > maxValue) {
            num = maxValue;
        };
    } else {//鍑�
        num--;
        if (num < minValue) {
            num = minValue;
        };
    };

    $(theId).val(num);
    return num;
};


//===========================================================
//鐢熸垚楠岃瘉鐮�
function ShowKey(obj, strKey) {
    var src = '/Handles/VerifyImg.ashx?_t=' + AjaxRnd() + '&name=' + strKey;
    $('#' + obj).attr('src', src);
    //document.getElementById(obj).src = '/handles/VerifyImg.ashx?_t=' + AjaxRnd() + '&name=' + strKey;
};


//鑾峰彇URL鍙傛暟
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
        context = r[2];

    //reg = null;
    //r = null;

    return context == null || context == "" || context == "undefined" ? "" : context;
};

//娴嬭瘯cookies
function cookiesTest() {
    var ret = false,
		key = 'cookiesTest',
		val = 'test';

    $.cookie(key, val);
    if ($.cookie(key) === val) {
        $.removeCookie(key);
        ret = true;
    }
    return ret;
};