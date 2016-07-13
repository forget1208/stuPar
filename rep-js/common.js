/**
 * utils
 * User: xlzhou2@iflytek.com
 * Date: 14-2-21
 * Time: 下午3:43
 */


/**
 * 利用占位符格式化字符串
 * 例如："你好，{0}, {1}".format('aa', 'Nice to meet you!') = "你好，aa Nice to meet you!";
 */
String.prototype.format = function () {
    var s = this, i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};


/**
 * 截获URL参数
 * @type {{QueryString: Function}}
 */
var Request = {
    //获取URL参数
    QueryString: function (item) {
        var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
        return svalue ? svalue[1] : svalue;
    },

    /**
     * url 目标url
     * arg 需要替换的参数名称
     * arg_val 替换后的参数的值
     * return url 参数替换后的url
     */
    changeURLArg: function (url, arg, arg_val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + arg_val;
        if (url.match(pattern)) {//如果没有此参数，添加
            var tmp = '/(' + arg + '=)([^&]*)/gi';
            tmp = url.replace(eval(tmp), replaceText);
            return tmp;
        } else {//如果有此参数，修改
            if (url.match('[\?]')) {
                return url + '&' + replaceText;
            } else {
                return url + '?' + replaceText;
            }
        }
        return url + '\n' + arg + '\n' + arg_val;
    },

    /**
     *
     * @param url 目标url
     * @param params 参数对象，可是是多个
     *                 格式如：[{arg:01,arg_val:11},{arg:00,arg_val:12}]
     */
    changeURLArgs:function(url,params){
        var lastPattern ="";
         for(var item in params){
             var pattern = params[item].arg + '=([^&]*)';
             var replaceText = params[item].arg + '=' + params[item].arg_val;
             if (url.match(pattern)) {//如果没有此参数，添加
                 var tmp = '/(' + params[item].arg + '=)([^&]*)/gi';
                 tmp = url.replace(eval(tmp), replaceText);
                 return tmp;
             } else {//如果有此参数，修改
                 if (url.match('[\?]')) {
                     return url + '&' + replaceText;
                 } else {
                     return url + '?' + replaceText;
                 }
             }
         }
    },

    /**
     * 去除指定的url参数
     * @param url
     * @param param
     * @returns {*}
     */
    cutURLParam: function (url, param) {
        var url1 = url;
        if (url.indexOf(param) > 0) {
            if (url.indexOf("&", url.indexOf(param) + param.length) > 0) {
                url1 = url.substring(0, url.indexOf(param)) + url.substring(url.indexOf("&", url.indexOf(param) + param.length) + 1);
            }
            else {
                url1 = url.substring(0, url.indexOf(param) - 1);
            }
            return url1;
        }
        else {
            return url1;
        }
    }


}

/**
 * 格式化时间戳显示
 * @param x 待显示的日期时间，例如new Date()
 * @param y 需要显示的格式，例如"yyyy-MM-dd hh:mm:ss"
 * @returns {XML|string}
 * @example dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss")
 *          或 dateFormat(new Date(1392912000 * 1000),"yyyy/MM/dd hh:mm:ss") 结果为 "2014/02/21 00:00:00"
 */
function dateFormat(x, y) {
    var z = {M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds()};
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });
    return y.replace(/(y+)/g, function (v) {
        return x.getFullYear().toString().slice(-v.length)
    });
}


/**
 * 警告提示框
 * @param title    标题
 * @param content  内容
 * @param isLock   开启锁屏。 中断用户对话框之外的交互，用于显示非常重要的操作/消息，所以不建议频繁使用它，它会让操作变得繁琐
 */
function dialogBox(title, content, isLock) {
    art.dialog({
        lock: isLock,
        background: 'gray', // 背景色
        title: title,
        content: content,
        ok: true,
        okVal: '确定'
    });
}

/**
 * 确定提示框
 * @param title    标题
 * @param content  内容
 * @param okCallBack 确定后回调
 * @param cancelCallBack 取消后回调
 * @param isLock   开启锁屏。 中断用户对话框之外的交互，用于显示非常重要的操作/消息，所以不建议频繁使用它，它会让操作变得繁琐
 */
function confirmBox(title, content, okCallBack, cancelCallBack, isLock) {
    art.dialog({
        lock: isLock ? false : true,
        background: 'gray', // 背景色
        title: title,
        content: content,
        ok: function () {
            if (typeof okCallBack == "function") {
                okCallBack();
            }
        },
        okVal: '确定',
        cancelVal: '关闭',
        cancel: function () {
            if (typeof cancelCallBack == "function") {
                cancelCallBack();
            }
        }
    });
}

/**
 * 格式化时间类
 */
var DateFormat = (function () {
    /**
     * 构造函数
     * @param type time的类型 0:Unix时间戳格式 1:日期时间格式
     * @param time Unix时间戳格式 如：1393579588； 日期时间格式 如：2014-02-28 17:26:28
     * @constructor
     */
    var DateFormat = function (type, time) {
        switch (type) {
            case 0: // 时间戳格式
                this.timestamp = time;
                break;
            case 1: // 日期时间格式
                this.timestamp = parseInt(this.toTimeStamp(time));
                break;
            default :
                break;
        }
        this.formatDateTime = null;
    };

    /**
     * 格式化显示时间日期
     * @param time Unix时间戳格式, 如：1393579588
     * @param format 希望的时间格式，如:"yyyy-MM-dd hh:mm:ss"
     * @returns string 格式化后的时间字符串
     */
    DateFormat.prototype.toDateTime = function (time, format) {
        var x = new Date(parseInt(time)),
            y = format;
        var z = {M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds()};
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
        });
        this.formatDateTime = y.replace(/(y+)/g, function (v) {
            return x.getFullYear().toString().slice(-v.length)
        });
        return this.formatDateTime;
    };

    /**
     * 获取日期时间的时间戳
     * @param datetime 格式为"2014-03-03 09:36:00"
     * @returns {Number} 时间戳
     */
    DateFormat.prototype.toTimeStamp = function (datetime) {
        var dateAndTime = datetime.split(' ');
        var date = dateAndTime[0].split('-');
        //如果时间格式没有传递时分秒，在下面补上
        if (dateAndTime.length == 1) {
            dateAndTime.push("00:00:00");
        }
        var time = dateAndTime[1].split(':');
        return parseInt(new Date(date[0], date[1] - 1, date[2], time[0], time[1], time[2]).getTime());
    };

    /**
     * 获取一个时间段的开始时间和结束时间时间戳
     * @param days 向后多少天，如为向前，则为负数
     * @returns {{beginTime: Number, endTime: Number}}
     */
    DateFormat.prototype.getDateInterval = function (days) {
        var anotherTime = parseInt(this.timestamp) + 60 * 60 * 24 * 1000 * days;
        if (days > 0) {
            var beginTime = this.toTimeStamp(this.toDateTime(this.timestamp, 'yyyy-MM-dd') + " 00:00:00");
            var endTime = this.toTimeStamp(this.toDateTime(anotherTime, 'yyyy-MM-dd') + " 23:59:59");
        } else {
            var beginTime = this.toTimeStamp(this.toDateTime(anotherTime, 'yyyy-MM-dd') + " 00:00:00");
            var endTime = this.toTimeStamp(this.toDateTime(this.timestamp, 'yyyy-MM-dd') + " 23:59:59");
        }
        var dateInterval = {
            "beginTime": beginTime,
            "endTime": endTime
        };
        return dateInterval;
    };

    return DateFormat;
})();


/**
 * 获取本周、本月的开端日期、停止日期
 */

var GetWeekMouth = (function () {

    var GetWeekMouth = function (date) {
        if (date == undefined) {
            this.now = new Date(); //当前日期
        } else {
            this.now = new Date(date); //当前日期
        }

        //将本周的开始时间设置为周一，结束时间设置为周日
        this.nowDayOfWeek = this.now.getDay(); //今天本周的第几天
        if(this.nowDayOfWeek==0){
            this.nowDayOfWeek =6;
        }else if(this.nowDayOfWeek==6){
            this.nowDayOfWeek=1;
        }else{
            this.nowDayOfWeek--;
        }

        this.nowDay = this.now.getDate(); //当前日
        this.nowMonth = this.now.getMonth(); //当前月
        this.nowYear = this.now.getYear(); //当前年
        this.nowYear += (this.nowYear < 2000) ? 1900 : 0; //
        this.lastMonthDate = new Date(); //上月日期
        this.lastMonthDate.setDate(1);
        this.lastMonthDate.setMonth(this.lastMonthDate.getMonth() - 1);
    };

    //格局化日期：yyyy-MM-dd
    GetWeekMouth.prototype.formatDate = function (date) {
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();

        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth + "-" + myweekday);
    };

    //获得本周的开端日期
    GetWeekMouth.prototype.getWeekStartDate = function () {
        var weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek);
        return this.formatDate(weekStartDate);
    };

    //获得本周的停止日期
    GetWeekMouth.prototype.getWeekEndDate = function () {
        var weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek));
        return this.formatDate(weekEndDate);
    };

    //获得本月的开端日期
    GetWeekMouth.prototype.getMonthStartDate = function () {
        var monthStartDate = new Date(this.nowYear, this.nowMonth, 1);
        return this.formatDate(monthStartDate);
    };

    //获得本月的停止日期
    GetWeekMouth.prototype.getMonthEndDate = function () {
        var monthEndDate = new Date(this.nowYear, this.nowMonth, this.getMonthDays(this.nowMonth));
        return this.formatDate(monthEndDate);
    };

    //获得某月的天数
    GetWeekMouth.prototype.getMonthDays = function (myMonth) {
        var monthStartDate = new Date(this.nowYear, myMonth, 1);
        var monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    };

    return GetWeekMouth;
})();

/**
 * 截取含有汉字的字符串
 *
 * @param str：字符串 len ：截取长度 hasDot：是否需要添加省略号（true或false）
 * @author hlwang3
 */
function interceptString(str, len, hasDot) {
    if (str == "" || str == undefined) {
        return "";
    }
    var newLength = 0, newStr = "",
        chineseRegex = /[^\x00-\xff]/g, singleChar = "",
        strLength = str.replace(chineseRegex, "**").length;

    if (strLength <= len) {
        return str;
    }
    if (hasDot) {
        len = len - 2;
    }
    for (var i = 0; i < strLength; i++) {
        singleChar = str.charAt(i).toString();
        if (singleChar.match(chineseRegex) != null) {
            newLength += 2;
        } else {
            newLength++;
        }
        if (newLength > len) {
            break;
        }
        newStr += singleChar;
    }
    if (hasDot) {
        newStr += "...";
    }
    return newStr;
}
var CommonDialog = {
    /**
     * 异步加载页面
     * @param title
     * @param url
     * @param callback
     * @param options
     */
    load:function(title,url,callback,options){
        options = options || {};
        var d = art.dialog({
            title: title,
            content: "",
            backdropBackground: "gray",
            backdropOpacity: 0.3,
            width: options.width || 990,
            height: options.height || 577,
            lock: true,
            resize: false,
            drag:true
        });
        $(d.DOM.content[0]).load(url,callback);
    },
    /**
     * artDialog 锁屏
     */
    lock: function () {
        var content = '数据获取中，请稍后...';
        if (arguments[0] == "commit") {
            content = '数据提交中，请稍后...';
        } else if (arguments[0] == "check") {
            content = '数据检测中，请稍后...';
        }
        var d = art.dialog({
            lock: true,
            background: 'black', // 背景色
            opacity: 0.3,	// 透明度
            content: content,
            fixed:true,
            esc:false,
            cancel: false
        });
        return d;
        //d.showModal();
    },

    /**
     * artDialog 关闭（全部关闭）
     */
    close: function () {
        var list = art.dialog.list;
        for (var i in list) {
            list[i].close();
        }
    },

    /**
     * 暂停练习
     * @param title
     * @param content
     * @param okCallback
     */
    stop: function (title, content, okCallback) {
        var d = art.dialog({
            title: title,
            content: "<p style='font-size: 16px;'>"+content+"</p>",
            backdropBackground: "white",
            backdropOpacity: 1,
            ok: function () {
                if (typeof  okCallback === "function") {
                    var res = okCallback();
                    if (res == false) {
                        return false;
                    }
                }
            },
            cancel:false,
            okValue: '确定',
            width: 300,
            height:150,
            drag:true,
            esc:false,
            resize: false,
            fixed:true,
            lock: true
        });
        //d.showModal();
    },

    /**
     * 一般弹框
     * @param title
     * @param content
     * @param callback
     */
    normal: function (title,content,callback) {
        var d = art.dialog({
            title: title,
            content: "<p style='font-size: 16px;'>"+content+"</p>",
            backdropBackground: "gray",
            backdropOpacity: 0.3,
            ok: function () {
                if (typeof  callback === "function") {
                    setTimeout(callback,100);
                    return true;
                }else{
                    return true;
                }
            },
            close: function () {
                if (typeof  callback === "function") {
                    setTimeout(callback,100);
                    return true;
                }else{
                    return true;
                }
            },
            okValue: '确定',
            width: 300,
            height:150,
            drag:true,
            fixed:true,
            lock: true
        });
        //d.showModal();
    },

    /**
     * 一般弹框
     * @param title
     * @param content
     * @param callback
     */
    show: function (title,content,callback) {
        var d = art.dialog({
            title: title,
            content: content,
            backdropBackground: "gray",
            backdropOpacity: 0.3,
            ok: false,
            close: function () {
                if (typeof  callback === "function") {
                    setTimeout(callback,100);
                    return true;
                }else{
                    return true;
                }
            },
            drag:false,
            fixed:true,
            lock: true
        });
        //d.showModal();
    },
    setDialog:function(dom){
        var _hide = $("<div></div>");
        _hide.addClass("pop_hide");
        _hide.css({"z-index":1000});
        $("body").append(_hide);
        var _container = $("<div></div>");
        _container.addClass("pop");
        _container.css({
            "position": "fixed",
            "left"    : "50%",
            "top"     : "55%",
            "z-index" : "1001"
        });
        _container.html(dom);
        $("body").append(_container);
        //dom渲染后计算尺寸
        _container.css({
            "margin-left" : -(_container.width()/2),
            "margin-top"  : -(_container.height()/2+50)
        });
        return {
            "hide":_hide,
            "container":_container
        };
    },
    setMainDialog:function(dom){
        var _hide = $("<div></div>");
        _hide.addClass("pop_hide");
        _hide.css({"z-index":1000});
        $("body").append(_hide);
        var _container = $("<div></div>");
        //_container.addClass("pop");
        _container.css({
            "position": "fixed",
            "left"    : "50%",
            "top"     : "50%",
            "z-index" : "1001"
        });
        _container.html(dom);
        $("body").append(_container);
        //dom渲染后计算尺寸
        _container.css({
            "margin-left" : -(_container.width()/2),
            "margin-top"  : -(_container.height()/2+50)
        });
        return {
            "hide":_hide,
            "container":_container
        };
    },

    /**
     * 页面提示消息
     * @param content
     * @param time
     */
    tips:function(content,time){
//        var d = art.dialog({
//            background: 'black', // 背景色
//            content: content,
//            cancel: false,
//            title:false,
//            fixed:true
//        });
//        d.time(time || 1);
        var tips = $("<div style='position: fixed;padding-left: 10px;padding-right: 10px;left: 50%;top: 50%;height: 50px;background: white;border: 1px solid rgb(148, 148, 148);min-width: 100px;text-align: center;line-height: 50px;z-index: 9000;'></div>");
        $("body").append(tips);
        tips.text(content);
        tips.css({"margin-left":"-"+tips.width()/2+"px"});
        //console.log(tips.width());
        setTimeout(function(){
            tips.remove();
        },time*1000 || 1000);
    }
};

//计算字符串长度
String.prototype.strLen = function() {
    var len = 0;
    for (var i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 255 || this.charCodeAt(i) < 0) len += 2; else len ++;
    }
    return len;
}
//将字符串拆成字符，并存到数组中
String.prototype.strToChars = function(){
    var chars = new Array();
    for (var i = 0; i < this.length; i++){
        chars[i] = [this.substr(i, 1), this.isCHS(i)];
    }
    String.prototype.charsArray = chars;
    return chars;
}
//判断某个字符是否是汉字
String.prototype.isCHS = function(i){
    if (this.charCodeAt(i) > 255 || this.charCodeAt(i) < 0)
        return true;
    else
        return false;
}
//截取字符串（从start字节到end字节）
String.prototype.subCHString = function(start, end){
    var len = 0;
    var str = "";
    this.strToChars();
    for (var i = 0; i < this.length; i++) {
        if(this.charsArray[i][1])
            len += 2;
        else
            len++;
        if (end < len)
            return str;
        else if (start < len)
            str += this.charsArray[i][0];
    }
    return str;
}

/**
 * 弹框一直居中显示，能响应滚动和窗口大小变化
 * @param obj
 */
function commShowAtCenter(obj) {
    // obj为jQuery对象
    var divWidth = obj.width() / 2;
    var divHeight = obj.height() / 2;
    obj.css({
        'position' : 'fixed',
        'top' : '50%',left:'50%',
        'margin-top' : '-' + divHeight + 'px',
        'margin-left': '-' + divWidth + 'px'
    });
}

/**
 * 设置cookie
 * @param options
 * @returns {boolean}
 */
function setBarCookie(options){
    try{
        var topicSetIds = $.cookie("topicSetIds");
        var tabBarList = [];
        var _isAnalysis = false;
        var _isReport = false;
        if(topicSetIds){
            tabBarList = eval('('+topicSetIds+')');
            for(var i = 0;i<tabBarList.length;i++){
                //判断当前试题解析tab是否存在cookie中
                if(options.id == tabBarList[i].id && 1 == tabBarList[i].type){
                    _isAnalysis = true;
                }

                //判断当前成绩报告tab是否存在cookie中
                if(options.id == tabBarList[i].id && 2 == tabBarList[i].type){
                    _isReport = true;
                }
            }
        }
        if(tabBarList.length == 4){
            tabBarList = removeItem(tabBarList);
            //tabBarList.remove(0);
        }

        if(!_isReport && options.type == 2){
            var _reportOptions = {};
            _reportOptions.name = "成绩报告："+options.name;
            _reportOptions.type = 2;
            _reportOptions.id = options.id;
            tabBarList.push(_reportOptions);
        }

        //增加试题解析cookie
        if(!_isAnalysis && options.type == 1){
            //增加试题解析tab
            var _options = {};
            _options.name = "试题解析："+options.name;
            _options.type = 1;
            _options.id = options.id;
            tabBarList.push(_options);
        }
        $.cookie('topicSetIds', $.toJSON(tabBarList),{expires:7,path:'/'});
    }catch(e){
        if(console){
            console.log("cookie数据异常"+ e.message);
        }
    }
}

function removeItem(data){
    var _data = [];
    for(var i = 1;i<data.length;i++){
        _data.push(data[i]);
    }
    return _data;
}

/**
 * 统计用户行为
 * @param options
 */
function setUserAction(options){
    //记录用户行为
    /*var _params ={
        "userId":currentUser.id,
        "app": "student",
        "action": "exercise",
        "data" : "/zhixuebao/transcript/exercises"
    };*/
    $.ajax({
        url:basePath+"/stat/useraction",
        type:"POST",
        data:options,
        dataType:"text",
        success:function(){},
        error:function(){}
    });
}

/**
 * 初始化用户头像
 * @param avatar 用户头像路径
 * @param img 加载头像的img对象
 */
function initUserAvatar(avatar,img){
    return;
    if(avatar){
        img.attr("src",avatar);
        img.error(function(){
            getUserAvatar();
        });
    }else{
        getAvatarUrl(function(imgUrl){
			img.attr("src",imgUrl);
		});
    }
}

/**
 * 获取用户头像
 * @param callback 回调
 */
function getAvatarUrl(callback){
    return;
	$.ajax({
		url:basePath + "/zhixuebao/getAvatar/",
		type:"POST",
		success:function(data){
			var _data = eval('('+data+')');
			if(_data.result == "success" && _data.message){
				if(typeof(callback)=="function"){
					callback(_data.message);
				}
			}else{
				if(typeof(callback)=="function"){
					callback("/zhixuebao/public/module/global/images/admin01.jpg");
				}
			}
		},
		error: function(data){
			if(typeof(callback)=="function"){
				callback("/zhixuebao/public/module/global/images/admin01.jpg");
			}
		}
	});
}

/**
 * 上传用户做题日志
 * @param data 日志JSON数据
 */
function setPracticeLog(dataStr,topicSetId){	
	$.post(basePath + "/zhixuebao/setPracticeLog/", {"otherInfos":dataStr,"topicSetId":topicSetId}, function (result) {
		
	},"json");
}

var Logger = Logger || {};
Logger.log = function(msg){
    if(window && window.console && window.console.log){
        window.console.log(msg);
    }
};

Logger.warn = function(msg){
    if(window && window.console && window.console.warn){
        window.console.warn(msg);
    }
};

Logger.error = function(msg){
    if(window && window.console && window.console.error){
        window.console.error(msg);
    }
};

Logger.debug = function(msg){
    if(window && window.console && window.console.debug){
        window.console.debug(msg);
    }
};

var DateTimeUtil = {
    /**
     * 获取时长
     * @param timestamp
     */
    getTimeStr:function(timestamp){
        //天数
        var _day = Math.floor(timestamp/(60*60*24));
        //小时
        var _hour = Math.floor((timestamp-_day*24*60*60)/3600);
        //最大单位小时，天数换算成小时
        var _hourMax = _day*24+_hour;
        //分钟
        var _minute = Math.floor((timestamp-_day*24*60*60-_hour*3600)/60);
        //秒
        var _second = Math.floor(timestamp-_day*24*60*60-_hour*3600-_minute*60);
        if(_hourMax > 0){
            return _hourMax+":"+DateTimeUtil.getTimes(_minute)+":"+DateTimeUtil.getTimes(_second);
        }else{
            return DateTimeUtil.getTimes(_minute)+":"+DateTimeUtil.getTimes(_second);
        }
    },

    /**
     * 获取个位和十位数字
     * @param time
     * @returns {Array}
     */
    getTimes:function(time){
        if(time > 9){
            return time;
        }else{
            return "0"+time;
        }
    }
};

function formatterEchartsData(params, length) {

    var lengthMap = {1 : 42, 2 : 20, 3 : 14, 4 : 10, 5 : 8},
        newParamsName = '',
        paramsNameNumber = params.length,
        provideNumber = lengthMap[length],
        rowNumber = Math.ceil(paramsNameNumber / provideNumber);

    if (paramsNameNumber > provideNumber) {
        for (var p = 0; p < rowNumber; p++) {
            var tempStr = '';
            var start = p * provideNumber;
            var end = start + provideNumber;
            if (p == rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber);
            } else {
                tempStr = params.substring(start, end) + '\n';
            }
            newParamsName += tempStr;
        }
    } else {
        newParamsName = params;
    }
    return newParamsName;
}