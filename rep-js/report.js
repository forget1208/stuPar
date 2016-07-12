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
//单学科报告数据
var userExamData = {"classRank":{"avgScore":58.7,"highScore":80,"rank":4,"ratio":67,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":56.3,"highScore":87,"rank":12,"ratio":72,"totalNum":40},"isShowRank":false,"paperId":"913b592f-2a9b-444b-93b8-fec473ee3cff","score":67,"standardScore":99,"subjectCode":"01","subjectName":"语文"};
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
    role : 'student',
    parUpdateFlag : true
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
    elements.examName = $(".examName");
    elements.subjectName2 = $("#subjectName2");
    elements.introduction = $("#introduction");//学生导读信息
    elements.introductionPar = $("#introductionPar");//家长导读信息
    elements.examTable = $("#examTable");//考得怎么样
    elements.examTablePar = $("#examTablePar");//家长端 考得怎么样
    elements.top_subjectList = $("#top_subjectList");//科目列表


    elements.loadCompareTable = $('.loadCompareTable');
    elements.compareWithClassmate = $('.compareWithClassmate');
    elements.upPartShow = $('.upPartShow');
    elements.downPartShow = $('.downPartShow');
    elements.loadPosition = $('.loadPosition');
    elements.loadCompare = $('.loadCompare');
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
Report.stuParTab = function () {
    var index = $(this).index();
    $(this).addClass('on').siblings('a').removeClass('on');
    $('.rep-content').eq(index).show().siblings('.rep-content').hide();
    if ($(this).hasClass('stu')) {
        Report.role = 'student';
    } else {
        Report.role = 'parent';
    }

    if (Report.parUpdateFlag) {
        Report.bindUserExamDataPar();
    }

    ///
    Report.bindIntroductionData();
};
//全科/单科 tab
Report.allSingerTab = function () {
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
Report.bindUserExamData = function (data) {
    //总分数列表HTML
    var examAllScoreHtml = "";
    //学科分数列表HTML
    var examSubjectScoreHtml = "";
    elements.examName.text(examAllData.examName);
    examAllScoreHtml = getExamScoreHtml(examAllData);
    for (var i = 0; i < examSubjectData.length; i++) {
        var data = examSubjectData[i];
        examSubjectScoreHtml += getExamScoreHtml(data);
    }
    elements.examTable.append(examAllScoreHtml + examSubjectScoreHtml);
    elements.examTable.find(".knowledgeMap").click(function(){
        var _this=$(this);
        var type=_this.attr("type");
        $("#special_exercise").attr("src", studentUrl + "/student/knowledgeMap/?examId=" + Request.QueryString("examId")+"&type="+type).show();
    });

    /**
     * 获取分数列表HTML
     */
    function getExamScoreHtml(data) {

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
                examScoreHTML += data.score + '</p><a  href="' + basePath + '/zhixuebao/feesReport/reportStuSinger/?paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="score">' + data.subjectName + '</a><a href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">试卷+解析</a>';
            }
        }
        //演示用的账号
        if((data.paperId == "8c816ae8-ed90-45ee-a900-5e42c0d31de8"|| data.paperId == "00b97f50-5d1d-4068-9124-fa45e35f2a67"||data.paperId == "a29b5218-3c53-43fa-a0fd-0cc214345e59"||data.paperId == "3384b58f-1acc-4b60-bf31-bcf098b9bf8e"||data.paperId == "869dd70c-33db-4315-bb8c-c42c81659ca8")
            && (currentUser.id == "4444000020010042980"|| currentUser.id == "2034000020000004442"||currentUser.id == "2244000020000155153"||currentUser.id == "4444000020001475914"||currentUser.id == "2244000020000036254"))
        {
            if( data.paperId == "8c816ae8-ed90-45ee-a900-5e42c0d31de8" || data.paperId == "869dd70c-33db-4315-bb8c-c42c81659ca8" ){
                examScoreHTML += '<a href="javascript:void(0);" class="know knowledgeMap" type="0">知识图谱</a>';
            }else{
                examScoreHTML += '<a href="javascript:void(0);" class="know knowledgeMap" type="0">知识图谱</a>';
            }
        }
        examScoreHTML += '</div></div></li>';
        return examScoreHTML;
    }
};

//获取科目列表
Report.subjectList = function () {
    for (var i = 0; i < userExamDataList.length; i++) {
        var subjectName = [];
        subjectName.push(userExamDataList[i].subjectName);
        for (j = 0; j < subjectName.length; j++) {
            if (subjectName[j] == '总分') {
                elements.top_subjectList.append('<li><a href="#" class="on">全科</a>')
            }
            else {
                elements.top_subjectList.append('<li><a href="#">' + subjectName[j] + '</a>')
            }
            //全科/单科
            $('.warp-ul ul li a').bind('click',Report.allSingerTab);
        }
    }
};

/**
 * 绑定对比数据（与同学的对比）
 */
Report.bindCompareTableData = function () {

    var subjectNameList = [];
    var classAverageList = [];
    var classHighList = [];
    var gradeAverageList = [];
    var gradeHighList = [];
    var unionAverageList = [];
    var unionHighList= [];
    var classNearbyList = [];
    var gradeNearbyList = [];
    var unionNearbyList = [];
    var pageSize = 6;
    var pageNumber = Math.ceil((examSubjectData.length + 1) / 6);
    var currentPage = 0;//默认展示第一页

    for(var i = 0; i < userExamDataList.length; ++i) {
        classAverageList.push(userExamDataList[i].classRank.avgScore);
        classHighList.push(userExamDataList[i].classRank.highScore);
        gradeAverageList.push(userExamDataList[i].gradeRank.avgScore);
        gradeHighList.push(userExamDataList[i].gradeRank.highScore);
        if(isContainUnion) {
            unionAverageList.push(userExamDataList[i].unionRank.avgScore);
            unionHighList.push(userExamDataList[i].unionRank.highScore);
        }
        if(!userExamDataList[i].subjectName) {
            subjectNameList.push('总分');
        }
        else {
            subjectNameList.push(userExamDataList[i].subjectName);
        }
    }

    getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, currentPage);

    /**
     * 获取附近人的分数信息，生成HTML返回
     * @param scope
     * @param nameList
     * @param averageList
     * @param highList
     * @param handleList
     * @param curPage
     */
    function getNearbyScore(scope, nameList, averageList, highList, handleList, curPage) {

        var highScoreList = [];
        var myScoreList = [];
        var lowScoreList = [];
        $.each(userExamDataList, function(k, v) {
            myScoreList.push(v.score);
        });

        if(handleList.length > 0) {
            highScoreList = handleList[0];
            lowScoreList = handleList[2];
            dataShowHandle();
        }
        else {
            switch (scope) {
                case 'class':
                    $.getJSON("2.txt",
                        // $.getJSON(basePath + "/zhixuebao/feesReport/getNearbyUserExamScoreByClass/",
                        {examId: Request.QueryString("examId"), classId: userExamArchives[0].classId, count:5}, callbackDataHandle);
                    break;
                case 'grade':
                    $.getJSON("2.txt",
                        // $.getJSON(basePath + "/zhixuebao/feesReport/getNearbyUserExamScoreByGrade/",
                        {examId: Request.QueryString("examId"), classId: userExamArchives[0].classId, count:5}, callbackDataHandle);
                    break;
                case 'union':
                    dataShowHandle();
                    // $.getJSON(basePath + "/zhixuebao/feesReport/getNearbyUserExamScoreByUnion/",
                    //     {examId: Request.QueryString("examId"), classId: userExamArchives[0].classId, count:5}, callbackDataHandle);
                    break;
                default:
                    break;
            }
        }

        turnPageArrowHandle();

        /**
         * 调用接口的回调，处理附近人考试信息数据
         * @param data
         */
        function callbackDataHandle(data) {

            var tmpList;
            if(!!data) {
                tmpList = data;
            }
            tmpList.sort(function(a, b) {
                var totalScoreA = -1;
                var totalScoreB = -1;
                $.each(a.examScoreList, function(k ,v) {
                    if(v.subjectName == '总分') {
                        totalScoreA = v.score;
                    }
                });
                $.each(b.examScoreList, function(k ,v) {
                    if(v.subjectName == '总分') {
                        totalScoreB = v.score;
                    }
                });
                return totalScoreA - totalScoreB;
            });
            var moreThanList = [];
            var lessThanList = [];
            $.each(tmpList, function(k, v) {
                $.each(v.examScoreList, function(i, j) {
                    if(j.subjectName == '总分') {
                        if(j.score <= examAllData.score) {
                            lessThanList.unshift(v.examScoreList);
                        }
                        else {
                            moreThanList.push(v.examScoreList);
                        }
                    }
                });
            });

            lowScoreList = dataHandle(lessThanList);
            highScoreList = dataHandle(moreThanList);
            handleList.push(highScoreList);
            handleList.push(myScoreList);
            handleList.push(lowScoreList);

            dataShowHandle();

            /**
             * 对单科没有分数的填充'-'
             * @param list
             * @returns {Array}
             */
            function dataHandle(list) {

                var tmpList = [];
                if(list.length == 0) {
                    return tmpList;
                }
                tmpList = list;
                var row = [];
                $.each(tmpList, function(k, v) {
                    var col = [];
                    for(var i = 0; i < userExamDataList.length; ++i) {
                        if(!!v[i]) {
                            col.push(v[i].score);
                        }
                        else {
                            col.push('-');
                        }
                    }
                    row.push(col);
                });

                return row;
            }
        }

        /**
         * 拼接HTML，分页显示
         */
        function dataShowHandle() {

            var nameListHtml = '<div class="fircompare-mod clearfix"><div class="moda">科目</div>';
            var averageListHtml = '<div class="fircompare-mod clearfix"><div class="moda">平均分</div>';
            var highListHtml = '<div class="fircompare-mod clearfix"><div class="moda">最高分</div>';
            var myScoreListHtml = '<div class="fircompare-mod clearfix"><div class="moda my">我的成绩</div>';
            for(var i = curPage * pageSize; i < (curPage + 1) * pageSize; ++i) {
                if(!!nameList[i]) {
                    nameListHtml += '<div class="modb modb-bg">' + nameList[i] + '</div>';
                    averageListHtml += '<div class="modb">' + averageList[i] + '</div>';
                    highListHtml += '<div class="modb">' + highList[i] + '</div>';
                    myScoreListHtml += '<div class="modb my">' + myScoreList[i] + '</div>';
                }
                else {
                    nameListHtml += '<div class="modb modb-bg">-</div>';
                    averageListHtml += '<div class="modb">-</div>';
                    highListHtml += '<div class="modb">-</div>';
                    myScoreListHtml += '<div class="modb">-</div>';
                }
            }
            nameListHtml += '</div>';
            averageListHtml += '</div>';
            highListHtml += '</div>';

            elements.upPartShow.html(nameListHtml + averageListHtml + highListHtml);
            if(highScoreList.length > 0 || lowScoreList.length > 0) {
                elements.downPartShow.html(htmlCreate(highScoreList, 1) + myScoreListHtml + htmlCreate(lowScoreList, 0));
            }

            /**
             * 前5倒序，后5正序，并填充表格'-'
             * @param list
             * @param i
             * @returns {string}
             */
            function htmlCreate(list, i) {

                var tmpHtml = '';
                if(list.length > 0 ) {
                    if(i) {
                        tmpHtml = '<div class="box"><div class="firfive clearfix"><div class="fl left">在我位置前5位同学的成绩</div><div class="fl right">';
                        for(var j = 4; j >= 0; --j) {
                            tmpHtml += '<div class="fircompare-mod clearfix">';
                            if(!!list[j]) {
                                for(var k = curPage * pageSize; k < (curPage + 1) * pageSize; ++k) {
                                    if(!!list[j][k]) {
                                        tmpHtml += '<div class="modb">' + list[j][k] + '</div>';
                                    }
                                    else {
                                        tmpHtml += '<div class="modb">-</div>';
                                    }
                                }
                                tmpHtml += '</div>';
                            }
                            else {
                                for(var k = curPage * pageSize; k < (curPage + 1) * pageSize; ++k) {
                                    tmpHtml += '<div class="modb">-</div>';
                                }
                                tmpHtml += '</div>';
                            }
                        }
                        tmpHtml += '</div>';
                    }
                    else {
                        tmpHtml = '<div class="box"><div class="firfive clearfix"><div class="fl left">在我位置后5位同学的成绩</div><div class="fl right">';
                        for(var j = 0; j < 5; ++j) {
                            tmpHtml += '<div class="fircompare-mod clearfix">';
                            if(!!list[j]) {
                                for(var k = curPage * pageSize; k < (curPage + 1) * pageSize; ++k) {
                                    if(!!list[j][k]) {
                                        tmpHtml += '<div class="modb">' + list[j][k] + '</div>';
                                    }
                                    else {
                                        tmpHtml += '<div class="modb">-</div>';
                                    }
                                }
                                tmpHtml += '</div>';
                            }
                            else {
                                for(var k = curPage * pageSize; k < (curPage + 1) * pageSize; ++k) {
                                    tmpHtml += '<div class="modb">-</div>';
                                }
                                tmpHtml += '</div>';
                            }
                        }
                        tmpHtml += '</div>';
                    }
                }
                return tmpHtml;
            }
        }

        /**
         * 箭头显示或隐藏
         */
        function turnPageArrowHandle() {

            var preArrow =  elements.compareWithClassmate.find('a.pre');
            var nextArrow =  elements.compareWithClassmate.find('a.next');
            if(pageNumber == 1) {
                preArrow.css('visibility', 'hidden');
                nextArrow.css('visibility', 'hidden');
                return;
            }
            if(curPage == 0) {
                preArrow.css('visibility', 'hidden');
                nextArrow.css('visibility', 'visible');
            }
            else if(curPage == pageNumber - 1) {
                preArrow.css('visibility', 'visible');
                nextArrow.css('visibility', 'hidden');
            }
            else {
                preArrow.css('visibility', 'visible');
                nextArrow.css('visibility', 'visible');
            }
        }
    }

    elements.compareWithClassmate.find('a.fircompare-look').on('click', function() {

        var _this = $(this);
        if(elements.downPartShow.is(':hidden')) {
            //暂时屏蔽联考区
            if(compareScore == 'union') {
                return;
            }
            elements.downPartShow.show();
            _this.html('关闭和我成绩接近的十名同学的成绩<em class="arror-up"></em>');
        }
        else {
            elements.downPartShow.hide();
            _this.html('查看和我成绩接近的十名同学的成绩<em class="arror-down"></em>');
        }
    });

    elements.loadCompareTable.find('.currentClass').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.loadCompareTable.find('a').removeClass('on');
        _this.addClass('on');
        elements.compareWithClassmate.find('a.fircompare-look').show();
        compareScore = 'class';currentPage = 0;
        getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, 0);
        elements.loadPosition.find('.proposi-tit').text('成绩在全班的位置');
        bindPositionData();
        elements.loadCompare.find('.procomp-tit').text('成绩与全班平均分、最高分的对比');
        bindCompareData();
    });

    elements.loadCompareTable.find('.currentGrade').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.loadCompareTable.find('a').removeClass('on');
        _this.addClass('on');
        elements.compareWithClassmate.find('a.fircompare-look').show();
        compareScore = 'grade';currentPage = 0;
        getNearbyScore(compareScore, subjectNameList, gradeAverageList, gradeHighList, gradeNearbyList, 0);
        elements.loadPosition.find('.proposi-tit').text('成绩在全年级的位置');
        bindPositionData();
        elements.loadCompare.find('.procomp-tit').text('成绩与全年级平均分、最高分的对比');
        bindCompareData();
    });

    elements.loadCompareTable.find('.currentUnion').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.loadCompareTable.find('a').removeClass('on');
        _this.addClass('on');
        //暂时屏蔽联考区
        elements.compareWithClassmate.find('a.fircompare-look').hide();
        if(elements.downPartShow.is(':visible')) {
            elements.downPartShow.hide();
            elements.compareWithClassmate.find('em').removeClass();
            elements.compareWithClassmate.find('em').addClass('arror-down');
        }
        compareScore = 'union';currentPage = 0;
        getNearbyScore(compareScore, subjectNameList, unionAverageList, unionHighList, unionNearbyList, 0);
        elements.loadPosition.find('.proposi-tit').text('成绩在联考区的位置');
        bindPositionData();
        elements.loadCompare.find('.procomp-tit').text('成绩与联考区平均分、最高分的对比');
        bindCompareData();
    });

    elements.compareWithClassmate.find('a.next').on('click', function() {
        if(currentPage == pageNumber - 1) {
            return;
        }
        ++currentPage;
        switch (compareScore) {
            case 'class':
                getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, currentPage);
                break;
            case 'grade':
                getNearbyScore(compareScore, subjectNameList, gradeAverageList, gradeHighList, gradeNearbyList, currentPage);
                break;
            case 'union':
                getNearbyScore(compareScore, subjectNameList, unionAverageList, unionHighList, unionNearbyList, currentPage);
                break;
            default:
                break;
        }
    });

    elements.compareWithClassmate.find('a.pre').on('click', function() {
        if(currentPage == 0) {
            return;
        }
        --currentPage;
        switch (compareScore) {
            case 'class':
                getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, currentPage);
                break;
            case 'grade':
                getNearbyScore(compareScore, subjectNameList, gradeAverageList, gradeHighList, gradeNearbyList, currentPage);
                break;
            case 'union':
                getNearbyScore(compareScore, subjectNameList, unionAverageList, unionHighList, unionNearbyList, currentPage);
                break;
            default:
                break;
        }
    });
};

/**
 * 绑定位置（成绩在XX的位置）
 */
Report.bindPositionData = function () {

    var myRatio = [];
    var subjectName = [];
    var overRatio = [];
    var lowRatio = [];
    var myRealRatio = [];
    var scopeRank = compareScore + 'Rank';
    for(var i = 0; i < userExamDataList.length; ++i) {
        var tmpRatio = userExamDataList[i][scopeRank].ratio;
        lowRatio.push(tmpRatio);
        myRatio.push(0.5);
        overRatio.push(100 - tmpRatio);
        myRealRatio.push(tmpRatio);
        if(lowRatio[i] == 100) {
            lowRatio[i] -= 0.5;
        }
        if(overRatio[i] != 0) {
            overRatio[i] -= 0.5;
        }
        if(!userExamDataList[i].subjectName) {
            subjectName.push('总分');
        }
        else  {
            subjectName.push(userExamDataList[i].subjectName);
        }
    }

    // var chart = echarts.init(document.getElementById('positionChart'), 'macarons');
    var pcharts = document.getElementsByClassName('positionChart');
    for (var i=0; i<pcharts.length; i++) {
        var chart = echarts.init(pcharts[i], 'macarons');
        //。。。。
    }

    var option = {
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        xAxis: [
            {
                name: '最后一名',
                nameLocation: 'start',
                nameTextStyle: {
                    color: '#344251'
                },
                type: 'category',
                data: subjectName,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#30B398'
                    }
                }
            },
            {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#30B398'
                    }
                },
                axisTick: {show: false},
                axisLabel: {show: false},
                data: subjectName
            }
        ],
        yAxis: [
            {
                name: '第一名',
                nameTextStyle: {
                    color: '#344251'
                },
                type: 'value',
                show: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#30B398'
                    }
                },
                axisLabel: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '得分',
                type: 'bar',
                stack: 'a',
                barWidth: 60,
                barBorderRadius: 0,
                data: lowRatio,
                itemStyle: {
                    normal:{
                        color: '#27b9bb',
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: function(data){
                                if(data.value >= 95) {
                                    var tmpValue = data.value == 99.5 ? 100 : data.value;
                                    return '前' + (100 - tmpValue)  + '%';
                                }
                                return '';
                            },
                            textStyle:{
                                color:'#fdfdfe',
                                fontSize:16
                            }
                        }
                    }
                }
            },
            {
                name: '得分',
                type: 'bar',
                stack: 'a',
                barWidth: 60,
                barBorderRadius: 0,
                data: myRatio,
                itemStyle: {
                    normal: {
                        color: '#f9c443',
                        label: {
                            show: true,
                            position: 'left',
                            formatter: function(data){
                                if(data.name == '总分') {
                                    return '我的位置';
                                }
                                return '';
                            },
                            textStyle: {
                                color: '#344251',
                                fontSize: 12
                            }
                        }
                    }
                }
            },
            {
                name: '得分',
                type: 'bar',
                stack: 'a',
                barBorderRadius: 0,
                barWidth: 60,
                data: overRatio,
                itemStyle: {
                    normal:{
                        color: '#27b9bb',
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: function(data){
                                if(data.value >= 5) {
                                    var tmpValue = data.value != 0 ? (data.value + 0.5) : data.value;
                                    return '前'+ tmpValue +'%';
                                }
                                return '';
//									var tmpValue = data.value != 0 ? (data.value + 0.5) : data.value;
//									return '前'+ tmpValue +'%';
                            },
                            textStyle:{
                                color:'#fdfdfe',
                                fontSize:16
                            }
                        }
                    }
                }
            }
        ]
    };
    if (subjectName.length > (!!isMobile ? 2 : 5)) {
        option.dataZoom = {
            show: true,
            start: 0,
            end: (!!isMobile ? 2 : 5) / subjectName.length * 100,
            showDetail: true,
            zoomLock: true,
            height: 15,
            fillerColor: "#30B398",
            handleColor: "#30B398",
            backgroundColor: "#FFFFFF",
            dataBackgroundColor: "#FFFFFF"
        };
    }
    chart.setOption(option);
};

/**
 * 绑定成绩(与全班平均分、最高分的对比)
 */
Report.bindCompareData = function () {

    var myScore = [];
    var avgScore = [];
    var highScore = [];
    var subjectName = [];
    var chartLegend = ['我的成绩','最高分','平均分'];
    var scopeRank = compareScore + 'Rank';

    for(var i = 0; i < userExamDataList.length; ++i) {
        myScore.push(userExamDataList[i].score);
        avgScore.push(userExamDataList[i][scopeRank].avgScore);
        highScore.push(userExamDataList[i][scopeRank].highScore);
        if(!userExamDataList[i].subjectName) {
            subjectName.push('总分');
        }
        else  {
            subjectName.push(userExamDataList[i].subjectName);
        }
    }

    var chart = echarts.init(document.getElementsByClassName('compareChart'), 'macarons');
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:chartLegend
        },
        xAxis: [
            {
                type: 'category',
                data: subjectName,
                axisLabel: {
                    interval: 0,
                    formatter: function (val) {
                        return val.length > 12 ? val.substring(0, 12) + "…" : val;
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#30B398'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#30B398'
                    }
                }
            }
        ],
        series: [
            {
                name:'我的成绩',
                type: 'bar',
                barWidth: 40,
                data: myScore,
                itemStyle: {
                    normal: {
                        color: '#f9c443'
                    }
                }
            },
            {
                name:'最高分',
                type:'line',
                smooth:false,
                data:highScore,
                itemStyle:{
                    normal:{
                        color:'#99c865'
                    }
                }
            },
            {
                name:'平均分',
                type:'line',
                smooth:false,
                data:avgScore,
                itemStyle:{
                    normal:{
                        color:'#CC4AFC'
                    }
                }
            }
        ]
    };
    if (subjectName.length > 5) {
        option.dataZoom = {
            show: true,
            start: 0,
            end: 5 / subjectName.length * 100,
            showDetail: true,
            zoomLock: true,
            height: 15,
            fillerColor: "#30B398",
            handleColor: "#30B398",
            backgroundColor: "#FFFFFF",
            dataBackgroundColor: "#FFFFFF"
        };
    }
    chart.setOption(option);
};

/**
 * 绑定历史考试记录（这次考试有进步吗?）
 */
Report.bindHistoryRankData = function () {

    var userExamRankHistory = '';
    getScoreImproveIntro(Request.QueryString("examId"), 0);
    $.getJSON("3.txt",
        // $.getJSON(basePath + "/zhixuebao/feesReport/getUserExamRankHistory/",
        {examId: Request.QueryString("examId"), pageIndex: 1, pageSize: 5}, function (data) {
            userExamRankHistory = data;
            historyRankDataHandle(userExamRankHistory, 0);
        });

    /**
     * 历史数据处理
     * @param userExamRankHistory
     * @param scope
     */
    function historyRankDataHandle(userExamRankHistory, scope) {

        if (!userExamRankHistory) {
            return;
        }
        var examNameList = [];
        var classRatioList = [];
        var gradeRatioList = [];
        var thisIndex = -1;
        for (var i = 0; i < 5 && i != userExamRankHistory.list.length; ++i) {
            var userData = userExamRankHistory.list[i];
            if (examAllData.examId == userData.examId) {
                thisIndex = i;
                continue;
            }
            examNameList.unshift(userData.examName);
            classRatioList.unshift(userData.classRank.ratio);
            gradeRatioList.unshift(userData.gradeRank.ratio);
        }
        if(thisIndex != -1) {
            examNameList.push(userExamRankHistory.list[thisIndex].examName);
            classRatioList.push(userExamRankHistory.list[thisIndex].classRank.ratio);
            gradeRatioList.push(userExamRankHistory.list[thisIndex].gradeRank.ratio);
        }
        if(scope) {
            bindHistoryRankChartData(examNameList, gradeRatioList);
        }
        else {
            bindHistoryRankChartData(examNameList, classRatioList);
        }
    }

    /**
     * 绑定图表
     * @param examNameList
     * @param ratioList
     */
    function bindHistoryRankChartData(examNameList, ratioList) {

        var chart = echarts.init(document.getElementById('historyRankChart'), 'macarons');
        var option = {
            xAxis: [
                {
                    type: 'category',
                    data: examNameList,
                    axisLabel: {
                        interval: 0,
                        formatter: function (params) {
                            return formatterEchartsData(params, examNameList.length);
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#30B398'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: function (val) {
                            var tmp = 100 - val;
                            return tmp + '%';
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#30B398'
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'line',
                    smooth: false,
                    data: ratioList,
                    itemStyle: {
                        normal: {
                            color: '#FD6C9B',
                            label: {
                                show: true,
                                formatter: function (param) {
                                    param.value = 100 - param.value;
                                    return '前' + param.value + '%';
                                },
                                textStyle: {
                                    color: '#514F59',
                                    fontSize: 18
                                }
                            }
                        }
                    }
                }
            ]
        };
        chart.setOption(option);
    }

    /**
     * 获取文案（这次考试有进步吗？）
     * @param examId
     * @param scope
     */
    function getScoreImproveIntro(examId, scope) {

        $.getJSON("4.txt",
            // $.getJSON(basePath + "/zhixuebao/feesReport/getScoreImproveIntro/",
            {examId: examId, role: Report.role, scope: scope}, function(data) {
                var text = '';
                if(!!data && !!data.desc) {
                    text += '<b>' + data.desc + '</b>';
                }
                // if(!!data && !!data.title) {
                //     text = '<b>' + data.title + '</b>' + text;
                // }
                elements.historyRankTable.find('.left').html(text);
            });
        if(scope) {
            elements.historyRankTable.find('.col6').html('本学期考试你在年级的位置分别是');
        }
        else {
            elements.historyRankTable.find('.col6').html('本学期考试你在全班的位置分别是');
        }
    }

    elements.historyRankTable.find('.gradeall').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.historyRankTable.find('a').removeClass('on');
        _this.addClass('on');
        historyRankDataHandle(userExamRankHistory, 0);
        getScoreImproveIntro(Request.QueryString("examId"), 0);
    });

    elements.historyRankTable.find('.grade').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.historyRankTable.find('a').removeClass('on');
        _this.addClass('on');
        historyRankDataHandle(userExamRankHistory, 1);
        getScoreImproveIntro(Request.QueryString("examId"), 1);
    });
};

/**
 * 绑定失分数据（丢分题难度）
 */
Report.bindLoseScoreData = function () {

    $.getJSON("5.txt",
        // $.getJSON(basePath + "/zhixuebao/feesReport/getLostScoreOfDifficulty/",
        {examId: Request.QueryString("examId")}, function (data) {
            var totalLostScore = 0;
            $.each(data, function(k, v) {
                totalLostScore += v.lostScoreValue;
            });

            for(var i = 0; i < data.length; i++) {
                var lostData = data[i];
                if (data[i].lostScoreTypeName == "难题") {
                    elements.lostScore_hard.height(totalLostScore == 0 ? 0 : lostData.lostScoreValue / totalLostScore * 200);
                    elements.lostScore_hardScore.text(lostData.lostScoreValue);
                } else if (data[i].lostScoreTypeName == "中等题") {
                    elements.lostScore_middle.height(totalLostScore == 0 ? 0 : lostData.lostScoreValue / totalLostScore * 200);
                    elements.lostScore_middleScore.text(lostData.lostScoreValue);
                } else if (data[i].lostScoreTypeName == "简单题") {
                    elements.lostScore_simple.height(totalLostScore == 0 ? 0 : lostData.lostScoreValue / totalLostScore * 200);
                    elements.lostScore_simpleScore.text(lostData.lostScoreValue);
                } else {
                    continue;
                }
            }
        });

    $.getJSON("6.txt",
        // $.getJSON(basePath + "/zhixuebao/feesReport/getDropPointsDifficultyIntro/",
        {examId: Request.QueryString("examId"), role: Report.role}, function (data) {
            var text = '';
            if(!!data && !!data.desc) {
                text += data.desc;
            }
            if(!!data && !!data.title) {
                text = '<b>' + data.title + '</b>' + text;
            }
            elements.subjectScoreRemark.html(text);
        });

};

/**
 * 绑定数据（我该怎么办）
 */
Report.bindHowDoIData = function () {

    $.getJSON("7.txt",
        // $.getJSON(basePath + "/zhixuebao/feesReport/getHowToDoTitle/",
        {examId: Request.QueryString("examId"), role: Report.role}, function (data) {
            var subjectName = [];
            var score = [];
            if(!!data && data.length > 0) {
                if(data.length == 1) {
                    elements.howDoI_bad.find('.bga').css('margin-left', '30%');
                    elements.howDoI_bad.find('.bgb').hide();
                    var tmp = data[0].title.split('_');
                    subjectName.push(tmp[0]);
                    score.push(tmp[1]);
                    elements.howDoI_score1.text(score + "分");
                    elements.howDoI_subject1.text(subjectName[0]);
                    elements.howDoI_line1.text(data[0].desc);
                }
                else if(data.length == 2) {
                    var tmp0 = data[0].title.split('_');
                    var tmp1 = data[1].title.split('_');
                    subjectName.push(tmp0[0]);
                    score.push(tmp0[1]);
                    subjectName.push(tmp1[0]);
                    score.push(tmp1[1]);
                    elements.howDoI_score1.text(score[0] + "分");
                    elements.howDoI_subject1.text(subjectName[0]);
                    elements.howDoI_line1.text(data[0].desc);
                    elements.howDoI_score2.text(score[1] + "分");
                    elements.howDoI_subject2.text(subjectName[1]);
                    elements.howDoI_line2.text(data[1].desc);
                }
            }
            // elements.howDoI_line1.attr("href", basePath + '/zhixuebao/feesReport/reportParSinger/?paperId=' + examSubjectData2[0].paperId + '&classId=' + examClassId + '&examId=' + examSubjectData2[0].examId);
            // elements.howDoI_line2.attr("href", basePath + '/zhixuebao/feesReport/reportParSinger/?paperId=' + examSubjectData2[1].paperId + '&classId=' + examClassId + '&examId=' + examSubjectData2[1].examId);
        });

    $.getJSON("8.txt",
        // $.getJSON(basePath + "/zhixuebao/feesReport/getHowToDoIntro/",
        {examId: Request.QueryString("examId"), role: Report.role}, function (data) {
            var text = '';
            if(!!data && data.length > 0) {
                if(data.length == 1) {
                    text = '<b>' + data[0].title + '</b>' + data[0].desc;
                }
                else if(data.length == 2) {
                    text = '<b>' + data[0].title + '</b>' + data[0].desc + '<b>' + data[1].title + '</b>' + data[1].desc;
                }
            }
            elements.howDoI_bad.find('.left').html(text);
        });
};

/**
 * 绑定小结数据
 */
Report.bindSummary = function () {

    $.getJSON("9.txt",
        // $.getJSON(basePath + "/zhixuebao/feesReport/getSummaryIntro/",
        {examId: Request.QueryString("examId"), role: 'student'}, function (data) {
            if(!!data && !!data.desc) {
                elements.summary.text(data.desc);
            }
        });
};

/**
 * 家长端 绑定用户考试信息（孩子考得怎么样）
 */
Report.bindUserExamDataPar = function () {
    //总分数列表HTML
    var examAllScoreHtml = "";
    //学科分数列表HTML
    var examSubjectScoreHtml = "";
    elements.examName.text(examAllData.examName);
    examAllScoreHtml += getExamScoreHtml(examAllData);
    for (var i = 0; i < examSubjectData.length; i++) {
        var data = examSubjectData[i];
        examSubjectScoreHtml += getExamScoreHtml(data);
    }
    elements.examTablePar.append(examAllScoreHtml + examSubjectScoreHtml);

    /**
     * 获取学科得分HTML
     */
    function getExamScoreHtml(data) {
        var examScoreHTML = '<li><div class="rel stu-paperli par-paperli"><div class="pic"><img src="' + basePath + '/public/module/global/rep-images/stu-paper.png" width="130" height="155"></div><div class="cover"><p class="mb30">';
        if (scoreToLevel == true) {
            if (data.subjectName == "总分") {
                examScoreHTML += getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:void(0);" class="ana">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += getScoreToLevel(data.score, data.standardScore) + '</p><a href="' + basePath + '/zhixuebao/feesReport/reportParSinger/?paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">' + data.subjectName + '</a>';
            }
        } else {
            if (data.subjectName == "总分") {
                examScoreHTML += data.score + '</p><a href="javascript:void(0);" class="ana">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += data.score + '</p><a href="' + basePath + '/zhixuebao/feesReport/reportParSinger/?paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">' + data.subjectName + '</a>';
            }
        }
        return examScoreHTML;
    }
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
    $('.left-choice a').bind('click',Report.stuParTab);



    Report.init();
    // alert(elements.examName.text('aaaa'));

    // 更新 下拉列表
    // Report.UpdateSelectBox();
    Report.bindIntroductionData();
    Report.processingData();
    Report.bindUserExamData();
    Report.subjectList();
    Report.bindCompareTableData();
    Report.bindPositionData();
    Report.bindCompareData();
    Report.bindHistoryRankData();
    Report.bindLoseScoreData();
    Report.bindHowDoIData();
    Report.bindSummary();
});
