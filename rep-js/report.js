/**
 * Created by admin on 16/7/5.
 */

// 全部基础数据
var basePath = 'http://localhost:8092/zhixuebao';
var currentUser = {"id":"2000000020000269186","isAdmin":false,"loginName":"zx30024501","name":"小明一","role":"student"};
var classInfo = {"code":"7dbc8cab-f9a7-4589-8277-7b185ff22d93","createTime":1441953552000,"grade":{"code":"11","name":"高二年级","phase":{"code":"05"},"sort":2},"id":"2000000020000002363","isGraduated":false,"name":"高二年级1班","order":311001,"school":{"areaId":"0","cityId":"3","code":"0","countryId":"1","districtId":"5","educationalSystem":{"code":"04","createTime":1443456000000,"name":"高中(三年制)","phase":"05","updateTime":1443456000000},"id":"2000000020000000513","name":"西城中学","phase":{"code":"05"},"provinceId":"2"},"year":2014};
var userExamArchives = [{"classId":"2000000020000002363","className":"高一年级1班","classRank":7,"classStudentCount":7,"createDateTime":1466410322248,"examCreateDateTime":1466410145000,"examId":"af7699d4-eac2-4563-8fff-3ecbcf2f8ef7","examName":"成绩补录单科","gradeCode":"10","id":"751e7514-0364-4d8a-af41-90cb3889cac4","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":7,"score":55,"subjectCode":"01A","subjectCodes":["01A"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":7,"schoolRank":7,"score":55,"subjectCode":"01A"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":1,"classStudentCount":10,"createDateTime":1462427140096,"examCreateDateTime":1462410970000,"examId":"c0abff51-b173-42cd-aa01-67acb99429c8","examName":"数据指标验证考试2","gradeCode":"11","id":"17e1cc0d-7325-4c02-9405-85cd5cd4ec3c","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":2,"score":83,"subjectCode":"02","subjectCodes":["02"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":1,"schoolRank":2,"score":83,"subjectCode":"02"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":6,"classStudentCount":10,"createDateTime":1462427140096,"examCreateDateTime":1462410970000,"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeCode":"11","id":"d865c07a-1223-4841-b630-3849665e7aad","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":21,"score":110,"subjectCodes":["02","01"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":31,"schoolRank":8,"score":43,"subjectCode":"02"},{"classRank":12,"schoolRank":4,"score":67,"subjectCode":"01"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":-1,"classStudentCount":9,"createDateTime":1467709068228,"examCreateDateTime":1449630642000,"examId":"cdf9d2e3-532e-4290-8f64-175bd540b708","examName":"数据指标验证考试3","gradeCode":"11","id":"99046d0e-1296-490c-9401-deba26518f24","isBeTied":true,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":-1,"score":255,"subjectCodes":["02","01"],"tiArchive":{"tiClassRank":1,"tiSchoolRank":3,"tiScore":255,"tiUserSubjectScores":[{"classRank":-1,"schoolRank":-1,"score":135,"subjectCode":"02"},{"classRank":-1,"schoolRank":-1,"score":120,"subjectCode":"01"}]},"tiStudentCount":1,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":-1,"schoolRank":-1,"score":135,"subjectCode":"02"},{"classRank":-1,"schoolRank":-1,"score":120,"subjectCode":"01"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":1,"classStudentCount":10,"createDateTime":1463452106126,"examCreateDateTime":1449556497000,"examId":"66915a32-6e07-449e-82e2-3a413ec4661c","examName":"数据指标验证考试1","gradeCode":"11","id":"ff3801f0-a2d2-4375-ab60-e6e9bd888ba1","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":2,"score":260,"subjectCodes":["02","01"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":1,"schoolRank":2,"score":140,"subjectCode":"02"},{"classRank":1,"schoolRank":2,"score":120,"subjectCode":"01"}],"version":1001}];
var examClassId = "2000000020000002363";
//用户各科考试数据
var userExamDataList = [{"classRank":{"avgScore":116,"highScore":150,"rank":6,"ratio":44,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":110.3,"highScore":170,"rank":21,"ratio":49,"totalNum":40},"paperId":"","score":110,"standardScore":249,"subjectCode":"","subjectName":"总分"},{"classRank":{"avgScore":57.3,"highScore":75,"rank":8,"ratio":22,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":63.6,"highScore":94,"rank":31,"ratio":9,"totalNum":34},"isShowRank":false,"paperId":"500861b3-d912-433e-87fd-f067ac93adcc","score":43,"standardScore":150,"subjectCode":"02","subjectName":"数学"},{"classRank":{"avgScore":58.7,"highScore":80,"rank":4,"ratio":67,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":56.3,"highScore":87,"rank":12,"ratio":72,"totalNum":40},"isShowRank":false,"paperId":"913b592f-2a9b-444b-93b8-fec473ee3cff","score":67,"standardScore":99,"subjectCode":"01","subjectName":"语文"}];
//学科分数线数据
var examScoreLine = [{"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","excellentScore":89.1,"goodScore":84.2,"paperId":"913b592f-2a9b-444b-93b8-fec473ee3cff","passScore":69.3,"subjectCode":"01","subjectName":"语文"},{"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","excellentScore":135,"goodScore":127.5,"paperId":"500861b3-d912-433e-87fd-f067ac93adcc","passScore":105,"subjectCode":"02","subjectName":"数学"}];
//1显示排名，2显示百分比
var rankModel = 2;
var isVip = true;
var ratioToLevel = false;
var scoreToLevel = false;
var forbidAvgScore = false;
var forbidRatio = false;
var isProject120 = false;
var freeSubjectCode = '01';
var isCoexistAndIsGolden = true;
var isNceeVolunteer = false;
var userInfo = {"birthday":1441900800000,"clazz":{"code":"7dbc8cab-f9a7-4589-8277-7b185ff22d93","createTime":1441953552000,"grade":{"code":"11","name":"高二年级","phase":{"code":"05"},"sort":2},"id":"2000000020000002363","isGraduated":false,"name":"高二年级1班","order":311001,"school":{"areaId":"0","cityId":"3","code":"0","countryId":"1","districtId":"5","educationalSystem":{"code":"04","createTime":1443456000000,"name":"高中(三年制)","phase":"05","updateTime":1443456000000},"id":"2000000020000000513","name":"西城中学","phase":{"code":"05"},"provinceId":"2"},"year":2014},"code":"30024501","gender":"1","id":"2000000020000269186","loginName":"zx30024501","name":"小明一","roles":[{"cName":"学生","eName":"student"}]};
var studentUrl = 'http://localhost:8088/student';
var introduction = [{"role":"student","desc":"你本次考试班级位置是前56%，中游竞争激烈，逆水行舟，不进则退啊。值得高兴的是，年级位置高于班级位置。对比班级位置和年级位置，你会更容易发现自己的优势和不足，能帮助你更好地制定学习进步计划。数学学科明显薄弱，要注意查看学科报告中给出的原因分析与学习建议。数学学科上，你和前面一名的分差只有几分，中间段成绩比较密集，作为突破学科来拉动成绩提高还是很合适的。知己知彼，方能百战百胜。关注VIP，了解自己，关注全局，大踏步前进吧！"},{"role":"parent","desc":"您的孩子小明一本次考试在班级中的位置是前56%，处于压力和风险最大的中游段。但是年级位置高于班级位置，很值得欣喜。结合报告中的年级位置和学情弱点分析，才能更清晰地把握我孩子现在的情况。数学学科拖后腿较严重。要引起重视！中间段成绩比较密集，提高一点成绩排名上，尤其是年级排名上都会有很大进步。扬长和补短是提高成绩的两条路径，优势学科的提高潜力往往不如劣势学科大，比如数学学科上，您孩子和前面一名的分差只有几分，作为突破学科来拉动成绩提高还是很合适的。了解是沟通和帮助的第一步。看VIP报告，获得更多孩子的学情诊断和潜力、薄弱项分析。"}];
var webGaokaoqRootUrl = 'http://zhixue.gaokaoq.com';
var isHideScore = false;
var isMobile = '';
//----------------------

//定义 elements
var elements = elements || {};

//基础 属性
var Report = {
    role : 'student'
};

//总分数据
var examAllData;
//学科列表数据
var examSubjectData = [];
//排序后的各学科分数数据
var examSubjectData2 = [];
//是否各科排名相同
var isSubEqual = true;
//用户等级
var userLevel;
//是否丢分
var isLostScore = false;
//是否有联考
var isContainUnion = true;
//学科顺序列表
var subList = [
    {"subjectCode": "02", "subjectName": "数学", "index": 1},
    {"subjectCode": "02A", "subjectName": "数学2", "index": 2},
    {"subjectCode": "03", "subjectName": "英语", "index": 3},
    {"subjectCode": "01", "subjectName": "语文", "index": 4},
    {"subjectCode": "01A", "subjectName": "语文2", "index": 5},
    {"subjectCode": "05", "subjectName": "物理", "index": 6},
    {"subjectCode": "06", "subjectName": "化学", "index": 7},
    {"subjectCode": "12", "subjectName": "历史", "index": 8},
    {"subjectCode": "27", "subjectName": "政治", "index": 9},
    {"subjectCode": "14", "subjectName": "地理", "index": 10},
    {"subjectCode": "13", "subjectName": "生物", "index": 11},
    {"subjectCode": "19", "subjectName": "科学", "index": 12},
    {"subjectCode": "26", "subjectName": "信息技术", "index": 13},
    {"subjectCode": "116", "subjectName": "社思品", "index": 14},
    {"subjectCode": "08", "subjectName": "历史与社会", "index": 15},
    {"subjectCode": "115", "subjectName": "理综", "index": 16},
    {"subjectCode": "114", "subjectName": "文综", "index": 17}
];
//当前比较scope，默认比较班级
var compareScore = 'class';
//等级LIST
var levelList = {
    best: "best",
    middle: "middle",
    last: "last"
};

var provinceList={"2":"1","21":"3","40":"5","235":"6","377":"7","500":"8","629":"9","707":"10","861":"2","881":"11","1010":"12","1123":"13","1262":"14","1366":"15","1489":"16","1664":"17","1859":"18","1989":"19","2139":"20","2301":"21","2439":"22","2469":"4","2510":"23","2731":"24","2832":"25","2985":"26","3067":"27","3195":"28","3308":"29","3361":"30","3394":"31","3510":"32","3511":"33","3512":"34"};

Report.init = function () {
    elements.examName = $("#examName");
    elements.introduction = $("#introduction");//学生导读信息
    elements.introductionPar = $("#introductionPar");//家长导读信息
    elements.examTable = $("#examTable");//考得怎么样
    elements.loadCompareTable = $('#loadCompareTable');
    elements.compareWithClassmate = $('#compareWithClassmate');
    elements.upPartShow = $('#upPartShow');
    elements.downPartShow = $('#downPartShow');
    elements.loadPosition = $('#loadPosition');
    elements.loadCompare = $('#loadCompare');
    elements.subjectScoreRemark = $("#subjectScoreRemark");
    elements.historyRankTable = $('#historyRankTable');
    elements.loadEachSubject = $('#loadEachSubject');
    elements.lostScore_simple = $("#lostScore_simple");
    elements.lostScore_middle = $("#lostScore_middle");
    elements.lostScore_hard = $("#lostScore_hard");
    elements.lostScore_simpleScore = $("#lostScore_simpleScore");
    elements.lostScore_middleScore = $("#lostScore_middleScore");
    elements.lostScore_hardScore = $("#lostScore_hardScore");

    elements.howDoI_best = $("#howDoI_best");
    elements.howDoI_bad = $("#howDoI_bad");
    elements.howDoI_line1 = $("#howDoI_line1");
    elements.howDoI_score1 = $("#howDoI_score1");
    elements.howDoI_subject1 = $("#howDoI_subject1");
    elements.howDoI_line2 = $("#howDoI_line2");
    elements.howDoI_score2 = $("#howDoI_score2");
    elements.howDoI_subject2 = $("#howDoI_subject2");
    elements.summary = $("#summary");

    elements.loadExamTask = $("#loadExamTask");
    elements.tempAvatar = $(".report_pkman");
    elements.tempScore = $(".report_score");
    elements.examPKName = $("#examPKName");
    elements.friends = $("#friends");
    elements.message = $("#message");
    elements.btnRandom = $("#btnRandom");
    elements.btnCompare = $("#btnCompare");

    elements.btnBackTop = $("#btnBackTop");
    elements.leftBar = $("#leftBar");

    elements.bindParentShow = $('.bindParentShow');
    elements.checkScoreContainer = $('#checkScoreContainer');
    elements.randomDisplay = $('#randomDisplay');
};

//学生/家长 tab
Report.StuParTab = function () {
    var index = $(this).index();
    $(this).addClass('on').siblings('a').removeClass('on');
    $('.rep-content').eq(index).show().siblings('.rep-content').hide();
    if ($(this).hasClass('stu')) {
        Report.role = 'student';
    } else {
        Report.role = 'parent';
    }

    ///
    Report.bindIntroductionData();
};

//全科/单科 tab
Report.AllSingerTab = function () {
    var index = $(this).parent().index();
    $(this).addClass('on').parent().siblings().children().removeClass('on');
    if ($(this).parent().parent().parent().parent().find('div').hasClass('warp-ul-stu')) {
        $('.rep-stu-content').eq(index).show().siblings('.rep-stu-content').hide();
    } else {
        $('.rep-par-content').eq(index).show().siblings('.rep-par-content').hide();
    }
};

/**
 * 绑定导读信息
 */
Report.bindIntroductionData = function() {
    // 遍历 导读 信息 数组 // in 无法取出 单个 obj 需要 下标 取
    for(var i = 0; i < introduction.length; i++) {
        var _tmpIntr = introduction[i];
        if(_tmpIntr.role == Report.role) {
            if(!!_tmpIntr.desc) { //判断 数据源 是否正确
                if(Report.role == 'student') {
                    elements.introduction.text(_tmpIntr.desc);
                } else {
                    elements.introductionPar.text(_tmpIntr.desc);
                }
            }
            else {
                elements.introduction.text('暂时无法获取导读信息！');
                elements.introductionPar.text('暂时无法获取导读信息！');
            }
            return; // 如果 完成 直接 return 不必循环两次
        }
    }
};

/**
 * 全局数据处理
 */
Report.processingData = function () {
    //所有学科总分
    var standardAllScore = 0;
    for (var i = 0; i < userExamDataList.length; i++) {
        var data = userExamDataList[i];
        if (data.subjectCode == "") {
            examAllData = data;
            continue;
        }
        examSubjectData.push(data);
        standardAllScore += data.standardScore;
        for (var j = 0; j < examScoreLine.length; j++) {
            var examLineData = examScoreLine[j];
            if (data.subjectCode == examLineData.subjectCode) {
                data.examLine = examLineData;
                if (data.score >= examLineData.excellentScore) {
                    data.lineName = "优秀";
                    data.lineId = 1;
                } else if (data.score >= examLineData.goodScore) {
                    data.lineName = "良好";
                    data.lineId = 2;
                } else if (data.score >= examLineData.passScore) {
                    data.lineName = "及格";
                    data.lineId = 3;
                } else {
                    data.lineName = "不及格";
                    data.lineId = 4;
                }
                continue;
            }
        }
        if (isSubEqual && i + 1 < userExamDataList.length && data.classRank.ratio != userExamDataList[i + 1].classRank.ratio) {
            isSubEqual = false;
        }
        if (!isLostScore && data.standardScore != data.score) {
            isLostScore = true;
        }
        //设置学科分类（后面提示语用，先处理后减少循环）
        if (data.subjectCode == "27" || data.subjectCode == "12" || data.subjectCode == "14" || data.subjectCode == "114" || data.subjectCode == "116" || data.subjectCode == "08") {
            data.type = "1";
        } else if (data.subjectCode == "02" || data.subjectCode == "02A" || data.subjectCode == "05" || data.subjectCode == "06" || data.subjectCode == "13" || data.subjectCode == "115" || data.subjectCode == "19" || data.subjectCode == "26") {
            data.type = "2";
        } else if (data.subjectCode == "01" || data.subjectCode == "03" || data.subjectCode == "01A") {
            data.type = "3";
        } else {
            data.type = "0";
        }
    }
    examAllData.standardScore = standardAllScore;
    if (examSubjectData.length == 1) {
        window.location.href = basePath + '/zhixuebao/feesReport/reportStuSinger/?paperId=' + examSubjectData[0].paperId + '&classId=' + examClassId + '&examId=' + examSubjectData[0].examId;
    }
    //按照学科顺序排列数据
    for (var i = 0; i < subList.length; i++) {
        for (var j = 0; j < examSubjectData.length; j++) {
            var examData = examSubjectData[j];
            //按照学科顺序排列数据
            if (examData.subjectCode == subList[i].subjectCode) {
                examData.subjectIndex = subList[i].index;
                examSubjectData2.push(examData);
                break;
            }
        }
    }
    if (isLostScore && !isSubEqual) {
        //冒泡排序，把排名最差的放最前面
        for (var i = 0; i < examSubjectData2.length; i++) {
            for (var j = i; j < examSubjectData2.length; j++) {
                if (examSubjectData2[i].classRank.ratio > examSubjectData2[j].classRank.ratio || (examSubjectData2[i].classRank.ratio == examSubjectData2[j].classRank.ratio && (examSubjectData2[i].subjectIndex > examSubjectData2[j].subjectIndex || examSubjectData2[i].lineId < examSubjectData2[j].lineId))) {
                    var temp = examSubjectData2[i];
                    examSubjectData2[i] = examSubjectData2[j];
                    examSubjectData2[j] = temp;
                }
            }
        }
    }
    if (isLostScore) {
        elements.howDoI_bad.show();
    } else {
        elements.howDoI_best.show();
    }
    if (!examAllData.unionRank) {
        elements.loadCompareTable.find('.currentUnion').parent().remove();
        isContainUnion = false;
    }
};

/**
 * 绑定用户考试信息（我考得怎么样）
 */
Report.bindUserExamData = function () {
    //总分数列表HTML
    var examAllScoreHtml = "";
    //学科分数列表HTML
    var examSubjectScoreHtml = "";
    elements.examName.text(examAllData.examName);
    examAllScoreHtml = Report.getExamScoreHtml(examAllData);
    for (var i = 0; i < examSubjectData.length; i++) {
        var data = examSubjectData[i];
        examSubjectScoreHtml += Report.getExamScoreHtml(data);
        console.log(data);
    }
    elements.examTable.append(examAllScoreHtml + examSubjectScoreHtml);
    elements.examTable.find(".knowledgeMap").click(function () {
        var _this = $(this);
        var type = _this.attr("type");
        $("#special_exercise").attr("src", studentUrl + "/student/knowledgeMap/?examId=" + Request.QueryString("examId") + "&type=" + type).show();
    });
    Report.getExamScoreHtml();
};

/**
 * 获取分数列表HTML
 */
Report.getExamScoreHtml = function (data) {

    var examScoreHTML = '<li><div class="rel stu-paperli"><div class="pic"><img src="' + basePath + '/public/module/global/rep-images/stu-paper.png" width="130" height="175"></div><div class="cover"><p>';
    if (scoreToLevel == true) {
        if (data.subjectName == "总分") {
            examScoreHTML += getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:void(0);" class="score">' + data.subjectName + '</a>';
        } else {
            examScoreHTML += getScoreToLevel(data.score, data.standardScore) + '</p><a  href="' + basePath + '/zhixuebao/feesReport/reportStuSinger/?paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="score">' + data.subjectName + '</a><a  href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">试卷+解析</a>';
        }
    } else {
        if (data.subjectName == "总分") {
            examScoreHTML += data.score + '</p><a href="javascript:void(0);" class="score">' + data.subjectName + '</a>';
        } else {
            examScoreHTML += data.score + '</p><a  href="' + basePath + '/zhixuebao/feesReport/reportStuSinger/?paperId=' + data.paperId + '&classId=' + examClassId + '&examId='
                // + Request.QueryString("examId")
                + '" class="score">' + data.subjectName + '</a><a href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId='
                // + Request.QueryString("examId")
                + '" class="ana">试卷+解析</a>';
        }
    }
    examScoreHTML += '</div></div></li>';
    return examScoreHTML;
};



// 更新 下拉列表
// Report.UpdateSelectBox= function () {
//     $('#examName').html(userExamArchives[0].examName);
//     for (var i = 0; i < userExamArchives.length; i++) {
//         $('.topSlt').append('<a title="' + userExamArchives[i].examName + '" href="javascript:void(0);" emamid="'  + userExamArchives[i].examId +'">' + userExamArchives[i].examName + '</a>');
//     }
//
//     $('#examName').click(function () {
//         $(".topSlt").toggle();
//         $('.arror-in').toggleClass('arror-up').toggleClass('arror-down');
//     });
//
//     $('.topSlt a').click(function () {
//         var examId = $(this).attr('emamid');
//         var examName = $(this).attr('title');
//         $('#examName').html(examName);
//         $(".topSlt").hide();
//         $('.arror-in').toggleClass('arror-up').toggleClass('arror-down');
//
//     });
// };


$(document).ready(function(){

    //学生/家长
    $('.left-choice a').bind('click',Report.StuParTab);

    //全科/单科
    $('.warp-ul ul li a').bind('click',Report.AllSingerTab);

    Report.init();
    // alert(elements.examName.text('aaaa'));

    // 更新 下拉列表
    // Report.UpdateSelectBox();
    Report.bindIntroductionData();
    Report.processingData();
    Report.bindUserExamData();
});
