/**
 * 学生报告扩展
 *
 * User: zzwang@iflytek.com
 * Date: 16-3-07
 * Time: 下午1:51
 */

var classUserCache = {};
var Transcripts = Transcripts || {};
var elements = elements || {};

var ReportExpandUtil = {
    /**
     * 比较字符串相似度
     * @param s
     * @param t
     * @returns {string}
     */
    stringDistancePercent: function (s, t) {
        var _flag = 0;
        for (var i = 0; i < t.length; i++) {
            if (t.substring(i, i + 1) && s.indexOf(t.substring(i, i + 1)) > -1) {
                _flag = 1;
                break;
            }
        }
        return _flag;
    },
    /**
     * 搜索姓名
     * @param key
     * @param {Array} data 班级学生
     * @param {Array} friendList 好友列表
     * @returns {Array}
     */
    searchResult: function (key, data, friendList) {
        var _temp = [];
        var _isFried = false;
        for (var i = 0; i < data.length; i++) {
            _isFried = false;
            //是否是好友关系，防止重名。
            for (var j = 0; j < friendList.length; j++) {
                if (data[i]['name'] == friendList[j]['friendName'] && data[i]['id'] == friendList[j]['friendId']) {
                    _isFried = true;
                    break;
                }
            }
            if (!_isFried && data[i]['id'] != currentUser.id && ReportExpandUtil.stringDistancePercent(data[i]['name'], key.toString()) > 0) {
                _temp.push(data[i]);
            }
        }
        return _temp;
    },
    /**
     * 设置好友pk好友数据
     * @param {array} data 好友成绩
     * @param {array} baseData 我的成绩
     */
    setCompareView: function (data, baseData) {

        var _avatar = {};
        _avatar.friend = data;
        _avatar.user = baseData;

        var _score = {};
        _score.friend = {};
        _score.user = {};
        _score.user.template = '';
        _score.friend.template = '';

        if (baseData.subjectList.length > 1) {
            _score.user.classPercent = baseData.subjectList[0].classPercent || '-';
            _score.user.score = Math.round(baseData.subjectList[0].score * 10) / 10;
        } else {
            _score.user.classPercent = "-";
            _score.user.score = "-";
        }

        if (data.subjectList.length > 1) {
            _score.friend.classPercent = data.subjectList[0].classPercent || '-';
            _score.friend.score = Math.round(data.subjectList[0].score * 10) / 10;
        } else {
            _score.friend.classPercent = "-";
            _score.friend.score = "-";
        }

        for (var i = 1; i < baseData.subjectList.length; i++) {
            var subjectScore = Math.round(baseData.subjectList[i].score * 10) / 10;
            _score.user.template += '<span class="dt-white" style="width: 80px;display: block;float: left;" title="' + subjectScore + '">' + baseData.subjectList[i].subjectName + ':' + subjectScore + '分</span>';
        }

        for (var i = 1; i < data.subjectList.length; i++) {
            var subjectScore = Math.round(data.subjectList[i].score * 10) / 10;
            _score.friend.template += '<span class="dt-white" style="width: 80px;display: block;float: left;" title="' + subjectScore + '">' + data.subjectList[i].subjectName + ':' + subjectScore + '分</span>';
        }
        if (_score.user.score == "-" || _score.friend.score == "-") {
            _score.diffValue = "-";
        } else if (_score.user.score > _score.friend.score) {
            _score.diffValue = Math.round(_score.user.score - _score.friend.score);
        } else if (_score.friend.score > _score.user.score) {
            _score.diffValue = Math.round(_score.friend.score - _score.user.score);
        } else {
            _score.diffValue = 0;
        }
        var tempAvatar = __avatarTemplate__({"basePath": basePath, "user": _avatar.user, "friend": _avatar.friend});

        var tempScore = __scoreTemplate__({"user": _score.user, "friend": _score.friend, diffValue: _score.diffValue});
        elements.tempAvatar.html(tempAvatar);
        elements.tempScore.html(tempScore);

        $("#btnAddFriend").on("click", function () {
            Transcripts.inviteFriends($(this).attr("data-id"));
        });
        elements.examPKName.text(userExamArchives.length > 0 ? userExamArchives[0].examName : '');
    }
};

/**
 * 好友对比
 */
Transcripts.compareEvent = function () {
    $.getJSON(basePath + "/zhixuebao/getFriends/?d=" + Math.random(), {}, function (data) {
        if (data.length > 0) {
            var selectId;
            var _html = __friendCompare__({"data": data});
            var dialog = CommonDialog.setDialog(_html);
            $(".pop_closed").on("click", function () {
                dialog.container.remove();
                dialog.hide.remove();
            });
            //选择好友
            $("#friendList").on("click", "a", function () {
                var _this = $(this);
                if (!_this.hasClass("y_btnon")) {
                    $("#friendList").find("a").removeClass("y_btnon").addClass("y_btn");
                    _this.addClass("y_btnon");
                    selectId = _this.attr("data-id");
                    $(".l_unbtn").removeClass("l_unbtn").addClass("l_btn");
                }
            });

            $("#btnSetFriend").on("click", function () {
                var _this = $(this);
                if (_this.hasClass("l_btn")) {
                    Transcripts.randomChangeEvent(selectId);
                    dialog.container.remove();
                    dialog.hide.remove();
                }
            });
            //调整弹框位置
            dialog.container.css({
                "margin-left": -(dialog.container.width() / 2),
                "margin-top": -(dialog.container.height() / 2)
            });
        } else {
            CommonDialog.tips("你没有好友哦~");
        }
    });
}

/**
 * 好友管理
 */
Transcripts.friendManageEvent = function () {
    var check = true;
    var friendList = [];
    var elementStuList;
    var elementStuName;
    var elementErrorMsg;
    var elementInvite;
    var currentStudent = {};
    var _dateTime = new Date().getTime();
    //获取好友数据
    $.getJSON(basePath + "/zhixuebao/friendmanage/?d=" + _dateTime, {}, function (data) {
        var studentList;
        var friendList = data.friendList;
        var studentClazz = data.studentClazz;
        var clazzs = [];
        if (studentClazz.grade.code == "100" || studentClazz.grade.code == "101" || studentClazz.grade.code == "102") {
            clazzs.push(studentClazz);
        } else {
            clazzs = data.clazzs;
        }
        classUserCache[studentClazz.id] = data.studentList;
        var _html = __friendManage__({"friendList": friendList, "clazzs": clazzs, "studentClazz": studentClazz});
        var dialog = CommonDialog.setDialog(_html);
        dialog.container.removeClass().addClass("pop rel");
        elementStuList = $("#studentList");
        elementStuName = $("#studentName");
        elementErrorMsg = $("#errorMsg");
        elementInvite = $("#btnInvite");

        var selClass = $("#selClass");
        var btnSelClass = $(selClass.find(".btnSelClass"));
        var classListDiv = $(selClass.find(".classList"));
        var classList = $(selClass.find(".classList a"));
        getClassStudent(btnSelClass.attr("classId"));

        btnSelClass.click(function () {
            if (classListDiv.is(":hidden")) {
                classListDiv.show();
            } else {
                classListDiv.hide();
            }
        });

        classList.click(function () {
            var _this = $(this);
            classList.removeClass("on");
            _this.addClass("on");
            classListDiv.hide();
            btnSelClass.text(_this.text());
            btnSelClass.attr("classId", _this.attr("classId"));
            getClassStudent(_this.attr("classId"));
        });

        function getClassStudent(classId) {
            if (classUserCache[classId]) {
                studentList = classUserCache[classId];
                elementStuName.attr("disabled", false);
            } else {
                elementStuName.attr("disabled", true);
                $.getJSON(basePath + "/zhixuebao/getClassStudent/?classId=" + classId + "&d=" + _dateTime, {}, function (classData) {
                    classUserCache[classId] = classData;
                    studentList = classData;
                    elementStuName.attr("disabled", false);
                });
            }
        }

        $("#checkFriend").on("click", function () {
            var _this = $(this);
            if (!_this.hasClass("sure_boxon")) {
                _this.removeClass("sure_box").addClass("sure_boxon");
                check = true;
            } else {
                _this.removeClass("sure_boxon").addClass("sure_box");
                check = false;
            }
        });
        $("#closeFriManage").on("click", function () {
            dialog.container.remove();
            dialog.hide.remove();
        });
        /*elementStuList.on("mouseover",function(){
         elementStuList.show();
         });

         elementStuList.on("mouseout",function(){
         elementStuList.hide();
         });*/

        dialog.container.on("click", function () {
            elementStuList.hide();
        });
        elementStuName.on("keyup", function (e) {
            elementStuName.trigger("click");
        });
        elementStuName.on("focus", function () {
            elementStuName.trigger("click");
            elementErrorMsg.empty();
        });
        elementStuName.on("click", function (e) {
            e = e || window.event;
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            } else {
                e.cancelBubble = true;
            }
            var _this = $(this);
            if (_this.val() == currentStudent.name) {
                elementStuList.show();
            } else if (_this.val()) {
                elementStuList.empty();
                currentStudent = {};
                elementStuList.show();
                elementInvite.removeClass("l_btn").addClass("l_unbtn");
                var _studentData = ReportExpandUtil.searchResult(_this.val(), studentList, friendList);
                if (_studentData.length > 0) {
                    for (var i = 0; i < _studentData.length; i++) {
                        elementStuList.append('<a href="javascript:;" data-id="' + _studentData[i]['id'] + '">' + _studentData[i]['name'] + '</a>');
                    }
                    //elementInvite.removeClass("l_unbtn").addClass("l_btn");
                } else {
                    currentStudent = {};
                    elementStuList.empty();
                    elementStuList.hide();
                    elementInvite.removeClass("l_btn").addClass("l_unbtn");
                }
            } else {
                currentStudent = {};
                elementStuList.empty();
                elementStuList.hide();
                elementInvite.removeClass("l_btn").addClass("l_unbtn");
            }
        });

        elementStuList.on("click", "a", function () {
            var _this = $(this);
            currentStudent.id = _this.attr("data-id");
            currentStudent.name = _this.text();
            elementStuName.val(currentStudent.name);
            elementStuList.hide();
            elementInvite.removeClass("l_unbtn").addClass("l_btn");
        });

        elementInvite.on("click", function () {
            if (elementInvite.hasClass("l_unbtn")) {
                return false;
            }
            if (!currentStudent.name || !currentStudent.id) {
                elementErrorMsg.text("请输入好友姓名");
                elementStuList.hide();
                return false;
            }
            //邀请好友
            var _options = {};
            //好友姓名
            _options.name = currentStudent.name;
            //好友Id
            _options.friendId = currentStudent.id;
            _options.classId = btnSelClass.attr("classId");
            _options.isTwoWay = check;
            var _dateTime = new Date().getTime();
            $.getJSON(basePath + "/zhixuebao/addFriend/?d=" + _dateTime, _options, function (data) {
                if (data.result == "success") {
                    currentStudent = {};
                    elementStuName.val("");
                    elementErrorMsg.text("邀请发送成功，需等待对方回复，您还可继续邀请好友PK！");
                    elementInvite.removeClass("l_btn").addClass("l_unbtn");
                } else {
                    if (data.message.indexOf("已发送过邀请，等待对方答复") > -1) {
                        elementErrorMsg.text("已发送过邀请，等待对方答复!");
                    } else {
                        elementErrorMsg.text("添加好友失败！");
                    }
                }
            });
        });
    });
}

/**
 * 消息管理
 */
Transcripts.messageManageEvent = function () {
    var check = false;
    var msgData = [];
    var _dateTime = new Date().getTime();
    //获取消息
    $.getJSON(basePath + "/zhixuebao/msgmanage/?d=" + _dateTime, {}, function (data) {
        msgData = data;
        var _html = __messageManage__({data: data});
        var dialog = CommonDialog.setDialog(_html);
        dialog.container.removeClass().addClass("pop rel");
        $("#closeMsgManage").on("click", function () {
            dialog.container.remove();
            dialog.hide.remove();
        });
        dialog.container.css({
            "margin-left": -(dialog.container.width() / 2),
            "margin-top": -(dialog.container.height() / 2)
        });
        if (data.length == 0) {
            dialog.container.find(".bd").html("<div style='height: 400px;text-align: center;  font-size: 20px;'>暂无消息</div>");
        } else {
            //标记消息已读
            var messageIds = '';
            for (var i = 0; i < data.length; i++) {
                if (data[i].status == "untreated") {
                    messageIds += data[i].id + '|';
                }
            }
            messageIds = messageIds.substring(0, messageIds.length - 1);
            if (messageIds !== "") {
                $.getJSON(basePath + "/zhixuebao/checkMessage/?d=" + Math.random(), {"messageIds": messageIds}, function (info) {
                    if (info.result == 'success') {
                        $("#messageCount").hide();
                    }
                });
            }
        }
    });
}

/**
 * 随机变换
 */
Transcripts.randomChangeEvent = function (userId) {
    var options = {};
    var examId = "";
    if (userExamArchives && userExamArchives.length > 0) {
        examId = userExamArchives[0].examId;
    } else {
        return;
    }
    if (userId) {
        options.pkId = userId;
    }
    $.getJSON(basePath + "/zhixuebao/personal/studentPkData/?examId=" + examId + "&d=" + Math.random(), options, function (data) {
        if (data.length == 2) {
            //ReportExpandUtil.setExamScore(data[0]);
            ReportExpandUtil.setCompareView(data[1], data[0]);
        } else {
            //CommonDialog.tips("无");
        }
    });
}

/**
 * 管理消息
 * @param {number} type 操作类别
 * @param {string} userId 用户Id
 * @param {element} element
 * @param {string} sendUserId
 */
Transcripts.messageManage = function (type, userId, element, sendUserId) {
    var _dateTime = new Date().getTime();
    switch (type) {
        case 1:
            $.getJSON(basePath + "/zhixuebao/dealMessage/?d=" + _dateTime, {"msgId": userId, "dealResult": "agree", "sendUserId": sendUserId}, function (data) {
                if (data.result == "success") {
                    $(element).parent("td").next()
                        .attr("colspan", "2")
                        .removeClass()
                        .addClass("td6 tc")
                        .html('<span class="col3 ml20">已同意</span>');
                    $(element).parent("td").remove();
                } else {
                    $(element).parent("td").next()
                        .removeClass()
                        .addClass("td6 tc")
                        .attr("colspan", "2")
                        .html('<span class="col3 ml20">已同意</span>');
                    $(element).parent("td").remove();
                    CommonDialog.tips(data.message);
                }
            });
            break;
        case 2:
            $.getJSON(basePath + "/zhixuebao/dealMessage/?d=" + _dateTime, {"msgId": userId, "dealResult": "refuse"}, function (data) {
                if (data.result == "success") {
                    $(element).parent("td").prev().remove();
                    $(element).parent("td")
                        .removeClass()
                        .addClass("td6 tc")
                        .attr("colspan", "2")
                        .html('<span class="col3 ml20">已拒绝</span>');
                } else {
                    //CommonDialog.tips("已拒绝失败，请稍后重试！");
                }
            });
            break;
        case 3:
            //删除消息
            $.getJSON(basePath + "/zhixuebao/deleteMessage/?d=" + _dateTime, {"msgId": userId}, function (data) {
                if (data.result == "success") {
                    if ($(element).parent("td").parent("tr").siblings().length == 0) {
                        $(element).parents(".bd").html("<div style='height: 400px;text-align: center;  font-size: 20px;'>暂无消息</div>");
                        $("#messageCount").hide();
                    } else {
                        $(element).parent("td").parent("tr").remove();
                    }
                } else {
                    CommonDialog.tips("删除消息失败，请稍后重试！");
                }
            });
            break;
        case 4:
            //删除好友
            $.getJSON(basePath + "/zhixuebao/delFriend/?d=" + _dateTime, {"friendId": userId}, function (data) {
                if (data.result == "success") {
                    $(element).parent("td").parent("tr").remove();
                } else {
                    CommonDialog.tips("删除好友失败，请稍后重试！");
                }
            });
            break;
    }
}

/**
 * 邀请好友
 * @param {string} name 好友名
 * @param {string} userId 好友id
 */
Transcripts.inviteFriends = function (userId) {
    var _html = __sendFriend__({});
    var dialog = CommonDialog.setDialog(_html);
    var check = true;
    $(".closeSend").on("click", function () {
        dialog.container.remove();
        dialog.hide.remove();
    });
    $("#checkBind").on("click", function () {
        var _this = $(this);
        if (!_this.hasClass("sure_boxon")) {
            _this.removeClass("sure_box").addClass("sure_boxon");
            check = true;
        } else {
            _this.removeClass("sure_boxon").addClass("sure_box");
            check = false;
        }
    });

    //发送请求
    $("#btnSend").on("click", function () {
        var _options = {};
        //好友姓名
        _options.name = name;
        //好友Id
        _options.friendId = userId;
        _options.isTwoWay = check;
        var _dateTime = new Date().getTime();
        $.getJSON(basePath + "/zhixuebao/addFriend/?d=" + _dateTime, _options, function (data) {
            dialog.container.remove();
            dialog.hide.remove();
            if (data.result == "success") {
                CommonDialog.tips("邀请发送成功，需等待对方回复，您还可继续邀请好友PK！");
            } else {
                if (data.message.indexOf("已发送过邀请，等待对方答复") > -1) {
                    CommonDialog.tips("已发送过邀请，等待对方答复!");
                } else {
                    CommonDialog.tips("添加好友失败！");
                }
            }
        });
    });
}

/**
 * 绑定pk事件
 */
Transcripts.bindPKEvent = function () {

    //消息管理
    elements.message.on("click", function () {
        Transcripts.messageManageEvent.apply(this, arguments);
    });

    //好友管理
    elements.friends.on("click", function () {
        Transcripts.friendManageEvent.apply(this, arguments);
    });

    //随机对比
    elements.btnRandom.on("click", function () {
        Transcripts.randomChangeEvent.apply(this, null);
    });

    //好友对比
    elements.btnCompare.on("click", function () {
        Transcripts.compareEvent.apply(this, arguments);
    });

    //获取消息数量
    var _dateTime = new Date().getTime();
    $.getJSON(basePath + "/zhixuebao/msgmanage/?d=" + _dateTime, {}, function (data) {
        var _data = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].status == "untreated") {
                _data.push(data[i]);
            }
        }
        if (_data.length == 0) {
            $("#messageCount").hide();
        } else {
            $("#messageCount").text(_data.length > 100 ? 99 : _data.length);
            $("#messageCount").show();
        }
    });

    //ReportExpandUtil.setExamScore(studentPkData[0]);
    //ReportExpandUtil.setCompareView(studentPkData[1],studentPkData[0]);
}
