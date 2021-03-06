/**
 * Created by admin on 16/7/5.
 */

// 全部基础数据
var basePath = 'http://localhost:8092/zhixuebao';
var currentRealStudent = {"id":"2000000020000269186","isAdmin":false,"loginName":"zx30024501","name":"小明一","role":"student"};
var classInfo = {"code":"7dbc8cab-f9a7-4589-8277-7b185ff22d93","createTime":1441953552000,"grade":{"code":"11","name":"高二年级","phase":{"code":"05"},"sort":2},"id":"2000000020000002363","isGraduated":false,"name":"高二年级1班","order":311001,"school":{"areaId":"0","cityId":"3","code":"0","countryId":"1","districtId":"5","educationalSystem":{"code":"04","createTime":1443456000000,"name":"高中(三年制)","phase":"05","updateTime":1443456000000},"id":"2000000020000000513","name":"西城中学","phase":{"code":"05"},"provinceId":"2"},"year":2014};
var userExamArchives = [{"classId":"2000000020000002363","className":"高一年级1班","classRank":7,"classStudentCount":7,"createDateTime":1466410322248,"examCreateDateTime":1466410145000,"examId":"af7699d4-eac2-4563-8fff-3ecbcf2f8ef7","examName":"成绩补录单科","gradeCode":"10","id":"751e7514-0364-4d8a-af41-90cb3889cac4","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":7,"score":55,"subjectCode":"01A","subjectCodes":["01A"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":7,"schoolRank":7,"score":55,"subjectCode":"01A"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":1,"classStudentCount":10,"createDateTime":1462427140096,"examCreateDateTime":1462410970000,"examId":"c0abff51-b173-42cd-aa01-67acb99429c8","examName":"数据指标验证考试2","gradeCode":"11","id":"17e1cc0d-7325-4c02-9405-85cd5cd4ec3c","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":2,"score":83,"subjectCode":"02","subjectCodes":["02"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":1,"schoolRank":2,"score":83,"subjectCode":"02"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":6,"classStudentCount":10,"createDateTime":1462427140096,"examCreateDateTime":1462410970000,"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeCode":"11","id":"d865c07a-1223-4841-b630-3849665e7aad","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":21,"score":110,"subjectCodes":["02","01"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":31,"schoolRank":8,"score":43,"subjectCode":"02"},{"classRank":12,"schoolRank":4,"score":67,"subjectCode":"01"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":-1,"classStudentCount":9,"createDateTime":1467709068228,"examCreateDateTime":1449630642000,"examId":"cdf9d2e3-532e-4290-8f64-175bd540b708","examName":"数据指标验证考试3","gradeCode":"11","id":"99046d0e-1296-490c-9401-deba26518f24","isBeTied":true,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":-1,"score":255,"subjectCodes":["02","01"],"tiArchive":{"tiClassRank":1,"tiSchoolRank":3,"tiScore":255,"tiUserSubjectScores":[{"classRank":-1,"schoolRank":-1,"score":135,"subjectCode":"02"},{"classRank":-1,"schoolRank":-1,"score":120,"subjectCode":"01"}]},"tiStudentCount":1,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":-1,"schoolRank":-1,"score":135,"subjectCode":"02"},{"classRank":-1,"schoolRank":-1,"score":120,"subjectCode":"01"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":1,"classStudentCount":10,"createDateTime":1463452106126,"examCreateDateTime":1449556497000,"examId":"66915a32-6e07-449e-82e2-3a413ec4661c","examName":"数据指标验证考试1","gradeCode":"11","id":"ff3801f0-a2d2-4375-ab60-e6e9bd888ba1","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":2,"score":260,"subjectCodes":["02","01"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":1,"schoolRank":2,"score":140,"subjectCode":"02"},{"classRank":1,"schoolRank":2,"score":120,"subjectCode":"01"}],"version":1001}];
var examClassId = "2000000020000002363";
//用户各科考试数据
var userExamDataList = [{"classRank":{"avgScore":116,"highScore":150,"rank":6,"ratio":44,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":110.3,"highScore":170,"rank":21,"ratio":49,"totalNum":40},"paperId":"","score":110,"standardScore":249,"subjectCode":"","subjectName":"总分"},{"classRank":{"avgScore":57.3,"highScore":75,"rank":8,"ratio":22,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":63.6,"highScore":94,"rank":31,"ratio":9,"totalNum":34},"isShowRank":false,"paperId":"500861b3-d912-433e-87fd-f067ac93adcc","score":43,"standardScore":150,"subjectCode":"02","subjectName":"数学"},{"classRank":{"avgScore":57.3,"highScore":75,"rank":8,"ratio":22,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":63.6,"highScore":94,"rank":31,"ratio":9,"totalNum":34},"isShowRank":false,"paperId":"500861b3-d9433e-87fd-f067ac93adcc","score":89,"standardScore":150,"subjectCode":"02","subjectName":"英语"},{"classRank":{"avgScore":58.7,"highScore":80,"rank":4,"ratio":67,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":78.3,"highScore":87,"rank":12,"ratio":72,"totalNum":40},"isShowRank":false,"paperId":"913b592f-2a9b-444b-93b8-fec47e3cff","score":57,"standardScore":99,"subjectCode":"01","subjectName":"政治"}];
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
var introductionStu = {"desc":"你本次考试班级位置是前56%，中游竞争激烈，逆水行舟，不进则退啊。值得高兴的是，年级位置高于班级位置。对比班级位置和年级位置，你会更容易发现自己的优势和不足，能帮助你更好地制定学习进步计划。数学学科明显薄弱，要注意查看学科报告中给出的原因分析与学习建议。数学学科上，你和前面一名的分差只有几分，中间段成绩比较密集，作为突破学科来拉动成绩提高还是很合适的。知己知彼，方能百战百胜。关注VIP，了解自己，关注全局，大踏步前进吧！"};
var introductionPar = {"desc":"您的孩子小明一本次考试在班级中的位置是前56%，处于压力和风险最大的中游段。但是年级位置高于班级位置，很值得欣喜。结合报告中的年级位置和学情弱点分析，才能更清晰地把握我孩子现在的情况。数学学科拖后腿较严重。要引起重视！中间段成绩比较密集，提高一点成绩排名上，尤其是年级排名上都会有很大进步。扬长和补短是提高成绩的两条路径，优势学科的提高潜力往往不如劣势学科大，比如数学学科上，您孩子和前面一名的分差只有几分，作为突破学科来拉动成绩提高还是很合适的。了解是沟通和帮助的第一步。看VIP报告，获得更多孩子的学情诊断和潜力、薄弱项分析。"};
var knowledges = [{"cityScoreRatio":72,"knowledgeCode":"020549004001004n","knowledgeName":"向量的数量积","score":1,"scoreRatio":5,"totalScore":19},{"cityScoreRatio":58,"knowledgeCode":"020549006000001","knowledgeName":"空间几何体的三视图与直观图","score":0,"scoreRatio":0,"totalScore":6},{"cityScoreRatio":64,"knowledgeCode":"020549006000002","knowledgeName":"空间几何体的表面积与体积","score":1,"scoreRatio":9,"totalScore":11},{"cityScoreRatio":75,"knowledgeCode":"020549007000002","knowledgeName":"两条直线的位置关系","score":0,"scoreRatio":0,"totalScore":6},{"cityScoreRatio":69,"knowledgeCode":"020549007000013n","knowledgeName":"多面体和旋转体上的最短距离（折叠与展开图）","score":7,"scoreRatio":37,"totalScore":19},{"cityScoreRatio":73,"knowledgeCode":"020549007002003","knowledgeName":"圆锥曲线综合","score":11,"scoreRatio":37,"totalScore":30},{"cityScoreRatio":63,"knowledgeCode":"020549007002004","knowledgeName":"椭圆","score":10,"scoreRatio":53,"totalScore":19},{"cityScoreRatio":75,"knowledgeCode":"020549007002005","knowledgeName":"双曲线","score":1,"scoreRatio":20,"totalScore":5},{"cityScoreRatio":66,"knowledgeCode":"020549007004001","knowledgeName":"圆","score":6,"scoreRatio":25,"totalScore":24},{"cityScoreRatio":65,"knowledgeCode":"020549008000001","knowledgeName":"用样本估计总体","score":6,"scoreRatio":100,"totalScore":6},{"cityScoreRatio":90,"knowledgeCode":"020549008004000n","knowledgeName":"圆的标准方程","score":1,"scoreRatio":20,"totalScore":5},{"cityScoreRatio":72,"knowledgeCode":"020549008004003n","knowledgeName":"圆有关的轨迹问题","score":1,"scoreRatio":5,"totalScore":19},{"cityScoreRatio":73,"knowledgeCode":"020549008005002n","knowledgeName":"圆与圆的位置关系及判定","score":9,"scoreRatio":47,"totalScore":19},{"cityScoreRatio":73,"knowledgeCode":"020549008006000n","knowledgeName":"椭圆的概念及标准方程","score":9,"scoreRatio":47,"totalScore":19},{"cityScoreRatio":72,"knowledgeCode":"020549008006002n","knowledgeName":"直线与椭圆的位置关系","score":1,"scoreRatio":5,"totalScore":19},{"cityScoreRatio":86,"knowledgeCode":"020549008009006n","knowledgeName":"圆锥曲线中的综合问题","score":9,"scoreRatio":36,"totalScore":25}];
var classRatioInfo = [{"score":0,"scoreRatio":0,"standardScore":6,"topicNum":1},{"score":0,"scoreRatio":0,"standardScore":6,"topicNum":2},{"score":0.6,"scoreRatio":10,"standardScore":6,"topicNum":3},{"score":5.4,"scoreRatio":90,"standardScore":6,"topicNum":4},{"score":0.6,"scoreRatio":10,"standardScore":6,"topicNum":5},{"score":1.9,"scoreRatio":38,"standardScore":5,"topicNum":6},{"score":1.9,"scoreRatio":38,"standardScore":5,"topicNum":7},{"score":1.9,"scoreRatio":38,"standardScore":5,"topicNum":8},{"score":1.9,"scoreRatio":38,"standardScore":5,"topicNum":9},{"score":1.9,"scoreRatio":38,"standardScore":5,"topicNum":10},{"score":7.5,"scoreRatio":39,"standardScore":19,"topicNum":11},{"score":7.4,"scoreRatio":39,"standardScore":19,"topicNum":12},{"score":8.6,"scoreRatio":45,"standardScore":19,"topicNum":13},{"score":7.1,"scoreRatio":37,"standardScore":19,"topicNum":14},{"score":10.6,"scoreRatio":56,"standardScore":19,"topicNum":15}];
//单学科每题得分率
var subjectRatioInfo = [{"score":0,"scoreRatio":0,"standardScore":6,"topicId":"ad1e24a6-77bb-46ad-931e-a14695ba0fb1","topicNum":1},{"score":0,"scoreRatio":0,"standardScore":6,"topicId":"9d74f027-4a70-4bf9-b059-a35c868c1eff","topicNum":2},{"score":0,"scoreRatio":0,"standardScore":6,"topicId":"2af06930-2068-4dd1-8440-e98ad87bf397","topicNum":3},{"score":6,"scoreRatio":100,"standardScore":6,"topicId":"02281279-b917-4d0a-94d1-218b05705eec","topicNum":4},{"score":0,"scoreRatio":0,"standardScore":6,"topicId":"986919e7-21ea-45d7-8e5e-271a575491b6","topicNum":5},{"score":1,"scoreRatio":20,"standardScore":5,"topicId":"c9f3d938-884f-441f-87f4-bd4f0c6927c4","topicNum":6},{"score":1,"scoreRatio":20,"standardScore":5,"topicId":"fb3e566b-1ca5-4179-970c-b999da22e452","topicNum":7},{"score":1,"scoreRatio":20,"standardScore":5,"topicId":"8eeb138a-359e-40ce-adcd-a3d21795029e","topicNum":8},{"score":1,"scoreRatio":20,"standardScore":5,"topicId":"6ab6f00a-173c-4457-8edb-d66dabfbfbcf","topicNum":9},{"score":1,"scoreRatio":20,"standardScore":5,"topicId":"cdf41f3d-f0ea-45f3-a345-701aa492e4fd","topicNum":10},{"score":7,"scoreRatio":37,"standardScore":19,"topicId":"18436dd4-c444-4cd0-9a72-21a2d495d760","topicNum":11},{"score":5,"scoreRatio":26,"standardScore":19,"topicId":"d92cc687-eb6b-48c4-941e-e29927ae1c82","topicNum":12},{"score":1,"scoreRatio":5,"standardScore":19,"topicId":"ab2e33c0-2115-469c-b97c-e95f75380607","topicNum":13},{"score":9,"scoreRatio":47,"standardScore":19,"topicId":"f340d41f-33c0-4d88-89a0-e69b254e1488","topicNum":14},{"score":10,"scoreRatio":53,"standardScore":19,"topicId":"ca4af6d5-e189-4f1c-9be6-b2fd95f2d0db","topicNum":15}];
var webGaokaoqRootUrl = 'http://zhixue.gaokaoq.com';
var isHideScore = false;
var isMobile = '';
var isFinal = true;
//----------------------

//定义 elements
var elements = elements || {};

//基础 属性
var Report = {
    // role : window.location.href.indexOf('StuAll') > -1 ? 'student' : 'parent',
    role : 'student',
    parUpdateFlag : true,
    paper : {}, //单科 缓存变量
    allSinger : ''
};

//总分数据
var examAllData;
//学科列表数据
var examSubjectData = [];
//单科数据
var userExamData;
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

var studyTask = null;

var popupDialog = {
    //定制弹窗
    setDialog:function(dom) {
        var _hide = $("<div></div>");
        _hide.addClass("pop_hide");
        _hide.css({"z-index": 2000});
        $("body").append(_hide);
        var _container = $("<div></div>");
        _container.addClass("pop");
        _container.css({
            "position": "fixed",
            "left": "27%",
            "top": "25%",
            "z-index": "2001"
        });
        _container.html(dom);
        $("body").append(_container);
        //dom渲染后计算尺寸
        _container.css({
            "margin-left": -(_container.width() / 2),
            "margin-top": -(_container.height() / 2)
        });
        return {
            "hide": _hide,
            "container": _container
        };
    }
};

var isSinger; //无全科
var showEach; //是否显示每门学科考得怎么样

Report.init = function () {
    elements.examName = $(".examName");
    elements.subjectName2 = $("#subjectName2");
    elements.subjectName2Par = $("#subjectName2Par");
    elements.introduction = $("#introduction");//学生导读信息
    elements.introductionPar = $("#introductionPar");//家长导读信息
    elements.examTable = $("#examTable");//考得怎么样
    elements.examTablePar = $("#examTablePar");//考得怎么样
    elements.top_subjectList = $("#top_subjectList");//科目列表
    elements.top_subjectListPar = $("#top_subjectListPar");//科目列表


    elements.loadCompareTable = $('#loadCompareTable');
    elements.loadCompareTablePar = $('#loadCompareTablePar');
    elements.compareWithClassmate = $('#compareWithClassmate');
    elements.compareWithClassmatePar = $('#compareWithClassmatePar');
    elements.upPartShow = $('.upPartShow');
    elements.downPartShow = $('#downPartShow');
    elements.downPartShowPar = $('#downPartShowPar');
    elements.loadPosition = $('.loadPosition');
    elements.loadCompare = $('.loadCompare');
    elements.subjectScoreRemark = $(".subjectScoreRemark");
    elements.subjectScoreRemarkSinger = $("#subjectScoreRemarkSinger");
    elements.historyRankTable = $('.historyRankTable');
    elements.loadEachSubject = $('#loadEachSubject');
    elements.loadEachSubjectPar = $('#loadEachSubjectPar');
    elements.lostScore_simple = $("#lostScore_simple");
    elements.lostScore_simpleSinger = $("#lostScore_simpleSinger");
    elements.lostScore_middle = $("#lostScore_middle");
    elements.lostScore_middleSinger = $("#lostScore_middleSinger");
    elements.lostScore_hard = $("#lostScore_hard");
    elements.lostScore_hardSinger = $("#lostScore_hardSinger");
    elements.lostScore_simpleScore = $("#lostScore_simpleScore");
    elements.lostScore_middleScore = $("#lostScore_middleScore");
    elements.lostScore_hardScore = $("#lostScore_hardScore");
    elements.lostScore_simpleScoreSinger = $("#lostScore_simpleScoreSinger");
    elements.lostScore_middleScoreSinger = $("#lostScore_middleScoreSinger");
    elements.lostScore_hardScoreSinger = $("#lostScore_hardScoreSinger");

    elements.howDoI_best = $(".howDoI_best");
    elements.howDoI_bad = $(".howDoI_bad");
    elements.howDoI_line1 = $(".howDoI_line1");
    elements.howDoI_score1 = $(".howDoI_score1");
    elements.howDoI_subject1 = $(".howDoI_subject1");
    elements.howDoI_line2 = $(".howDoI_line2");
    elements.howDoI_score2 = $(".howDoI_score2");
    elements.howDoI_subject2 = $(".howDoI_subject2");
    elements.summary = $("#summary");
    elements.summaryPar = $("#summaryPar");

    elements.loadExamTask = $("#loadExamTask");
    elements.tempAvatar = $(".report_pkman");
    elements.tempScore = $(".report_score");
    elements.examPKName = $("#examPKName");
    elements.friends = $("#friends");
    elements.message = $("#message");
    elements.btnRandom = $("#btnRandom");
    elements.btnCompare = $("#btnCompare");

    elements.leftBar = $("#leftBar");

    elements.bindParentShow = $('.bindParentShow');
    elements.checkScoreContainer = $('#checkScoreContainer');
    elements.randomDisplay = $('#randomDisplay');

    elements.loseScoreTable = $('#loseScoreTable');
    elements.loseScoreTablePar = $('#loseScoreTablePar');
    elements.rankTable = $(".rankTable");

    elements.lazy_topic = $('.lazy_topic');
    elements.historyRankTableSinger = $('.historyRankTableSinger');
    elements.examChart = $('.examChart');
    elements.difTip = $('#difTip');
    elements.examDifInfo = $('#examDifInfo');
    elements.knowledgeControl = $('#knowledgeControl');
    elements.knowledgeControlPar = $('#knowledgeControlPar');
    elements.currentCityTopTen = $('.currentCityTopTen');
    elements.topTenKnowledge = $('#topTenKnowledge');
    elements.topTenKnowledgePar = $('#topTenKnowledgePar');
    elements.recommondInfo = $('#recommondInfo');
    elements.recommondInfoPar = $('#recommondInfoPar');
    elements.knows = $("#knows");
    elements.knowsPar = $("#knowsPar");

    elements.userName = $("#userName");
    elements.tips = $("#_tipId"); //哪些题我失误了的所有提示
    elements.tipId1 = $("#_tipId1"); //我的得分率与其他同学的对比
    elements.tipId2 = $("#_tipId2"); //哪些题我失误了的题目难度建议
    elements.subjectList = $("#subjectList");

    elements.analysisMain = $("#analysisMain");

    elements.banner_div = $("#banner_div");

    if(!!isMobile) {//移动设备全局处理
        $('div.report-sidebar').hide();
        $('div.main_tag').hide();
        $('div.clear.headMargin').hide();
    }
};

//学生/家长 tab
Report.stuParTab = function () {
    var index = $(this).index();
    $(this).addClass('on').siblings('a').removeClass('on');
    $('.rep-content').eq(index).show().siblings('.rep-content').hide();
    compareScore = 'class';
    Report.allSinger = 'All';
    var paperId = '',
        subjectCode = '';
    var userExamData;
    for ( var i = 0; i < userExamDataList.length; i++){
        if (Report.role == 'student') {
            if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                userExamData = userExamDataList[i];
            }
        }
        else {
            if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                userExamData = userExamDataList[i];
            }
        }
    }
    if ($(this).hasClass('stu')) {
        paperId = elements.top_subjectList.find('a.on').attr('paperId');
        subjectCode = elements.top_subjectList.find('a.on').attr('subjectCode');
        Report.role = 'student';
        Report.bindUserExamData(); //孩子考得怎么样
        Report.bindLoseScoreData(paperId); //丢分题难度
        Report.bindExamTask(); //考点闯关
        $('#loadPK').show();
    } else {
        Report.role = 'parent';
        Report.bindUserExamDataPar(); //孩子考得怎么样
        Report.bindLoseScoreDataPar(); //孩子的分数丢哪了
        $('#loadPK').hide();
    }
    if (showEach) {
        elements.loadEachSubject.show();
        elements.loadEachSubjectPar.show();
        Report.bindEachSubjectData();
    }
    else {
        elements.loadEachSubject.hide();
        elements.loadEachSubjectPar.hide();
    }
    if (isSinger) {
        if (Report.role == 'student') {
            Report.allSingerTabHandler(elements.top_subjectList.find('a.on').html());
        }
        else {
            Report.allSingerTabHandler(elements.top_subjectListPar.find('a.on').html());
        }
    }
    else {
        Report.bindIntroductionData(); //导读
        Report.bindCompareTableData(); //与同学的对比
        Report.bindPositionData(); //成绩在XX的位置
        Report.bindCompareData(); //成绩与全班平均分、最高分的对比
        Report.bindHistoryRankData(); //这次考试有进步吗
        Report.bindHowDoIData(); //我该怎么办/我该怎么督促孩子
        Report.bindSummary(); //小结
        var foot = new Foot();
        foot.init();
    }

    var reportBanner = new Banner();
    reportBanner.init();//banner
};
//全科/单科 tab
Report.allSingerTab = function () {
    $(this).addClass('on').parent().siblings().find('a').removeClass('on');
    var paperId = '',
        subjectCode = '';
    var userExamData;
    for ( var i = 0; i < userExamDataList.length; i++){
        if (Report.role == 'student') {
            if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                userExamData = userExamDataList[i];
            }
        }
        else {
            if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                userExamData = userExamDataList[i];
            }
        }
    }
    if (Report.role == 'student') {
        elements.subjectName2.text($(this).text());
        paperId = elements.top_subjectList.find('a.on').attr('paperId');
        subjectCode = elements.top_subjectList.find('a.on').attr('subjectCode');
        $('#loadPK').show();
        if (elements.top_subjectList.find('a.on').html() == '全科') {
            Report.allSinger = 'All';
            $('.rep-stu-content').eq(0).show().siblings('.rep-stu-content').hide();
            // Report.bindCompareTableData(); //与同学的对比
            // Report.bindPositionData(); //成绩在XX的位置
            // Report.bindCompareData(); //成绩与全班平均分、最高分的对比
            // Report.bindHistoryRankData(); //这次考试有进步吗
            var foot = new Foot();
            foot.init();
        }
        else {
            Report.allSinger = 'Singer';
            $('.rep-stu-content').eq(1).show().siblings('.rep-stu-content').hide();
            //查看试卷解析
            elements.analysisMain.click(function () {
                window.location.href = basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + subjectCode + '&paperId=' + paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId");
            });

            var report = new reportCtrl.parSinger();
            report.init();
            Report.getStuSingleReportData(paperId);
            var topicCollectionObj = new TopicCollect();
            topicCollectionObj.init(paperId); //题目汇总

            var fore = new forewordCtrl();
            fore.init(paperId); //这次考试有进步吗

            var knowledgeControl = new KnowledgeControl();
            knowledgeControl.init(paperId); //知识点

            var topTopic = new TopTopic();
            topTopic.init(paperId); //TOP10

            var how = new howtodoCtrl();
            how.init(paperId);
            how.createTaskHtml("#knowList1", Request.QueryString("examId"), paperId); //单科 考点闯关

            var foot = new Foot(userExamData);
            foot.init();
        }
    }
    else {
        elements.subjectName2Par.text($(this).text());
        $('#loadPK').hide();
        if (elements.top_subjectListPar.find('a.on').html() == '全科') {
            $('.rep-par-content').eq(0).show().siblings('.rep-par-content').hide();
            // Report.bindCompareTableData(); //与同学的对比
            // Report.bindPositionData(); //成绩在XX的位置
            // Report.bindCompareData(); //成绩与全班平均分、最高分的对比
            // Report.bindHistoryRankData(); //这次考试有进步吗
            var foot = new Foot();
            foot.init();
        }
        else {
            paperId = elements.top_subjectListPar.find('a.on').attr('paperId');
            $('.rep-par-content').eq(1).show().siblings('.rep-par-content').hide();

            var report = new reportCtrl.parSinger();
            report.init();
            Report.getStuSingleReportData(paperId);
            var topicCollectionObj = new TopicCollect();
            topicCollectionObj.init(paperId); //题目汇总

            var fore = new forewordCtrl();
            fore.init(paperId); //这次考试有进步吗

            var knowledgeControl = new KnowledgeControl();
            knowledgeControl.init(paperId); //知识点

            var topTopic = new TopTopic();
            topTopic.init(paperId); //TOP10

            var how = new howtodoCtrl();
            how.init(paperId);
            how.createTaskHtml("#knowList1", Request.QueryString("examId"), paperId); //单科 考点闯关

            var foot = new Foot(userExamData);
            foot.init();
        }
    }

    if (Report.role == 'parent') {
        dataUtil.bindScoreParts(0, paperId); //各分数段人数

        var ec = new examCompare();
        ec.init(paperId); //考试难度

        var recommondControl = new RecommondControl();
        recommondControl.init(paperId); //推荐内容
    }
    else {
        Report.bindLoseScoreData(paperId); //丢分题难度
    }

    var dif = new Difficulty();
    dif.init(paperId); //丢分题难度

    var reportBanner = new Banner();
    reportBanner.init();//banner
};

Report.allSingerTabHandler = function (subjectName) {
    var paperId = '',
        subjectCode = '';
    var userExamData;
    for ( var i = 0; i < userExamDataList.length; i++){
        if (Report.role == 'student') {
            if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                userExamData = userExamDataList[i];
            }
        }
        else {
            if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                userExamData = userExamDataList[i];
            }
        }
    }
    if (Report.role == 'student') {
        $('.rep-stu-content').eq(1).show().siblings('.rep-stu-content').hide();
        elements.subjectName2.text(subjectName);
        if (!isFinal) {
            var paperId = userExamDataList[0].paperId;
            var subjectCode = userExamDataList[0].subjectCode;
        }
        else {
            var paperId = userExamDataList[1].paperId;
            var subjectCode = userExamDataList[1].subjectCode;
        }
        Report.allSinger = 'Singer';
        var report = new reportCtrl.parSinger();
        report.init();
        Report.getStuSingleReportData(paperId);
        //查看试卷解析
        elements.analysisMain.click(function () {
            window.location.href = basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + subjectCode + '&paperId=' + paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId");
        });
        var topicCollectionObj = new TopicCollect();
        topicCollectionObj.init(paperId); //题目汇总
        var fore = new forewordCtrl();
        fore.init(paperId); //这次考试有进步吗
        Report.bindLoseScoreData(paperId); //丢分题难度
        var knowledgeControl = new KnowledgeControl();
        knowledgeControl.init(paperId); //知识点
        var how = new howtodoCtrl();
        how.init(paperId);
        how.createTaskHtml("#knowList1", Request.QueryString("examId"), paperId);
        var topTopic = new TopTopic();
        topTopic.init(paperId); //TOP10
        $('#loadPK').show();
    }
    else {
        $('.rep-par-content').eq(1).show().siblings('.rep-par-content').hide();
        elements.subjectName2Par.text(subjectName);
        if (!isFinal) {
            var paperId = userExamDataList[0].paperId;
        }
        else {
            var paperId = userExamDataList[1].paperId;
        }
        var report = new reportCtrl.parSinger();
        report.init();
        var topicCollectionObj = new TopicCollect();
        topicCollectionObj.init(paperId); //题目汇总
        var fore = new forewordCtrl();
        fore.init(paperId); //这次考试有进步吗
        dataUtil.bindScoreParts(0, paperId); //各分数段人数
        var ec = new examCompare();
        ec.init(paperId); //考试难度
        var dif = new Difficulty();
        dif.init(paperId); //丢分题难度
        var knowledgeControl = new KnowledgeControl();
        knowledgeControl.init(paperId); //知识点
        var topTopic = new TopTopic();
        topTopic.init(paperId); //TOP10
        var recommondControl = new RecommondControl();
        recommondControl.init(paperId); //推荐内容
        $('#loadPK').hide();
    }
    var foot = new Foot(userExamData);
    foot.init();
}
//
Report.getStuSingleReportData = function (paperId) {

    if (!!Report.paper[paperId].StuSingleReportData ) {
        Report.getStuSingleReportDataHandler(Report.paper[paperId].StuSingleReportData,paperId);
    } else {
        $.ajax({
            url:basePath + "/zhixuebao/feesReport/getStuSingleReportData/",
            type:'GET',
            contentType:'JSON',
            async:false,
            data:{paperId:paperId,classId: examClassId},
            cache:true,
            success: function (data) {
                Report.paper[paperId].StuSingleReportData = JSON.parse(data);
                Report.getStuSingleReportDataHandler(Report.paper[paperId].StuSingleReportData,paperId);
            }
        });
    }
};
Report.getStuSingleReportDataHandler = function(data,paperId) {

    var localSubjectRatios = data.subjectRatios;
    var localClassRatios = data.classRatios;
    $.each(userExamDataList, function(k, v) {
        if(v.paperId == paperId) {
            userExamData = v;
            return false;
        }
    });

    var compareCtrl;
    if (Report.role == 'student') {
        chartUtilStu.init(localSubjectRatios, localClassRatios);

        tipsUtilStu.init(paperId);
        $("._compare li a").removeClass("on");
        $("._compare li a").eq(0).addClass("on");
        compareCtrl = '';
        compareCtrl = new CompareCtrl(classInfo.school.id, classInfo.id, paperId, currentRealStudent.id, localSubjectRatios);
        compareCtrl.init(); //得分率 对比班级、年级

    }
}

/**
 * 绑定导读信息
 */
Report.bindIntroductionData = function() {
    var _introductionStu = introductionStu;
    var _introductionPar = introductionPar;
    if (Report.role == 'student') {
        if(!!_introductionStu.desc) {
            elements.introduction.text(_introductionStu.desc);
        }
        else {
            elements.introduction.text('暂时无法获取导读信息！');
        }
    }
    else {
        if(!!_introductionPar.desc) {
            elements.introductionPar.text(_introductionPar.desc);
        }
        else {
            elements.introductionPar.text('暂时无法获取导读信息！');
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

        if (!isLostScore && data.standardScore != data.score) {
            isLostScore = true;
        }

    }
    examAllData.standardScore = standardAllScore;
    if (isLostScore) {
        elements.howDoI_bad.show();
    } else {
        elements.howDoI_best.show();
    }
    if (!examAllData.unionRank) {
        $(".loadCompareTable").find('.currentUnion').parent().remove();
        isContainUnion = false;
    }
};

Report.isCoexistAndIsGolden = function () {
    if(isCoexistAndIsGolden) {
        var densePaperPath = basePath + '/zhixuebao/peruPaper/main/?form=reportStuAll';
        var _coexistAndIsGoldenHtml = __coexistAndIsGolden__({densePaperPath:densePaperPath});
        var coexistAndIsGoldenDialog = popupDialog.setDialog(_coexistAndIsGoldenHtml);
        $('div.newest_tk').show();
        $('div.closed_con a').on('click', function() {
            coexistAndIsGoldenDialog.hide.remove();
            coexistAndIsGoldenDialog.container.remove();
        });
        $('div.newest_tk a.study').on('click', function() {
            coexistAndIsGoldenDialog.hide.remove();
            coexistAndIsGoldenDialog.container.remove();
        });
    }
};

/**
 * 绑定用户考试信息（我考得怎么样）
 */
var examScoreInit = true;
Report.bindUserExamData = function (data) {
    if (examScoreInit){
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
        elements.examTable.find(".knowledgeMap").click(function () {
            var _this = $(this);
            var type = _this.attr("type");
            $("#special_exercise").attr("src", studentUrl + "/student/knowledgeMap/?examId=" + Request.QueryString("examId") + "&type=" + type).show();

        });
        examScoreInit = false;
    }

    $('a.active').click(function () {
        var paperId = $(this).attr('paperId');
        var _this = $("#top_subjectList");

        for (i = 0; i < _this.children().length; i++) {
            if (_this.children().eq(i).find('a').attr('paperId') == paperId) {
                _this.children().find('a').removeClass('on');
                _this.children().eq(i).find('a').addClass('on');
                Report.allSingerTabHandler(_this.children().eq(i).find('a').html());
                return;

            }
        }
    })

    /**
     * 获取分数列表HTML
     */
    function getExamScoreHtml(data) {

        var examScoreHTML = '<li><div class="rel stu-paperli"><div class="pic"><img src="' + basePath + '/public/module/global/rep-images/stu-paper.png" width="130" height="175"></div><div class="cover"><p>';
        if (scoreToLevel == true) {
            if (data.subjectName == "总分") {
                examScoreHTML += dataUtil.getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:void(0);" class="score">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += dataUtil.getScoreToLevel(data.score, data.standardScore) + '</p><a  href="javascript:scrollTo(0,0);" paperId="' + data.paperId + '" class="score active">' + data.subjectName + '</a><a  href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">试卷+解析</a>';
            }
        } else {
            if (data.subjectName == "总分") {
                examScoreHTML += data.score + '</p><a href="javascript:void(0);" class="score">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += data.score + '</p><a  href="javascript:scrollTo(0,0);" paperId="' + data.paperId + '" class="score active">' + data.subjectName + '</a><a href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">试卷+解析</a>';
            }
        }

        //演示用的账号
        if((data.paperId == "8c816ae8-ed90-45ee-a900-5e42c0d31de8"|| data.paperId == "00b97f50-5d1d-4068-9124-fa45e35f2a67"||data.paperId == "a29b5218-3c53-43fa-a0fd-0cc214345e59"||data.paperId == "3384b58f-1acc-4b60-bf31-bcf098b9bf8e"||data.paperId == "869dd70c-33db-4315-bb8c-c42c81659ca8"||data.paperId == "774a08f8-eeb3-4653-8758-08a9d0735b6e")
            && (currentRealStudent.id == "4444000020010042980"|| currentRealStudent.id == "2034000020000004442"||currentRealStudent.id == "2244000020000155153"||currentRealStudent.id == "4444000020001475914"||currentRealStudent.id == "2244000020000036254")||currentRealStudent.id == '2000000020000265988')
        {
            if( data.paperId == "8c816ae8-ed90-45ee-a900-5e42c0d31de8" || data.paperId == "869dd70c-33db-4315-bb8c-c42c81659ca8" || data.paperId == '4585faa2-e444-40ae-a9bd-8b16007cce7d' ){
                examScoreHTML += '<a href="javascript:void(0);" class="know knowledgeMap" type="0">知识图谱</a>';
            }
        }

        examScoreHTML += '</div></div></li>';

        return examScoreHTML;
    }
};

//获取科目列表
Report.subjectList = function () {
    var subjectName = [];
    var subjectPaperId = [];
    for (var i = 0; i < userExamDataList.length; i++) {
        subjectName.push(userExamDataList[i].subjectName);
        subjectPaperId.push(userExamDataList[i].paperId);

        //获取paperId 初始化变量 进行缓存
        Report.paper[userExamDataList[i].paperId] = {};
        Report.paper[userExamDataList[i].paperId].initFlag = true;
    }
    if (isSinger) {
        for (j = 0; j < subjectName.length; j++) {
            if (subjectName[j] != '总分') {
                $('.top_subjectList').append('<li><a href="javascript:void(0);" paperId="'+ subjectPaperId[j] + '">' + subjectName[j] + '</a>');
                elements.top_subjectList.children().eq(0).find('a').addClass('on');
                elements.top_subjectListPar.children().eq(0).find('a').addClass('on');
            }
        }
        if (Report.role == 'student') {
            Report.allSingerTabHandler(elements.top_subjectList.find('a.on').html());
        }
        else {
            Report.allSingerTabHandler(elements.top_subjectListPar.find('a.on').html());
        }
    }
    else {
        for (j = 0; j < subjectName.length; j++) {
            if (subjectName[j] == '总分') {
                $('.top_subjectList').append('<li><a href="javascript:void(0);" paperId="allId" class="on">全科</a>');
            }
            else {
                $('.top_subjectList').append('<li><a href="javascript:void(0);" paperId="'+ subjectPaperId[j] + '">' + subjectName[j] + '</a>');
            }
        }
    }
    //全科/单科
    $('.top_subjectList li a').bind('click',Report.allSingerTab);
};

/**
 * 绑定对比数据（与同学的对比）
 */
var compareTableData = true;
var compareTableDataPar = true;
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

    var currentClass = '',
        downPartShow = '',
        currentGrade = '',
        currentUnion = '',
        loadCompareTable = '',
        fircompareLook = '',
        proposiTit = '',
        procompTit = '',
        compareWithClassmate = '';
    if (Report.role == 'student') {
        currentClass = '#currentClass';
        currentGrade = '#currentGrade';
        currentUnion = '#currentUnion';
        fircompareLook = '#fircompare-look';
        proposiTit = '#proposi-tit';
        procompTit = '#procomp-tit';
        compareWithClassmate = elements.compareWithClassmate;
        loadCompareTable = $('#loadCompareTable');
        downPartShow = elements.downPartShow;
        if(compareTableData) {
            getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, currentPage);

            compareWithClassmate.find(fircompareLook).on('click', function() {

                var _this = $(this);
                if(downPartShow.is(':hidden')) {
                    //暂时屏蔽联考区
                    if(compareScore == 'union') {
                        return;
                    }
                    downPartShow.show();
                    _this.html('关闭和我成绩接近的十名同学的成绩<em class="arror-up"></em>');
                }
                else {
                    downPartShow.hide();
                    _this.html('查看和我成绩接近的十名同学的成绩<em class="arror-down"></em>');
                }
            });

            loadCompareTable.find(currentClass).on('click', function() {
                var _this = $(this);
                if(_this.hasClass('on')) {
                    return;
                }
                loadCompareTable.find('a').removeClass('on');
                _this.addClass('on');
                compareWithClassmate.find(fircompareLook).show();
                compareScore = 'class';currentPage = 0;
                getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, 0);
                elements.loadPosition.eq(0).find(proposiTit).text('成绩在全班的位置');
                Report.bindPositionData();
                elements.loadCompare.eq(0).find(procompTit).text('成绩与全班平均分、最高分的对比');
                Report.bindCompareData();
            });

            loadCompareTable.find(currentGrade).on('click', function() {
                var _this = $(this);
                if(_this.hasClass('on')) {
                    return;
                }
                loadCompareTable.find('a').removeClass('on');
                _this.addClass('on');
                compareWithClassmate.find(fircompareLook).show();
                compareScore = 'grade';currentPage = 0;
                getNearbyScore(compareScore, subjectNameList, gradeAverageList, gradeHighList, gradeNearbyList, 0);
                elements.loadPosition.eq(0).find(proposiTit).text('成绩在全年级的位置');
                Report.bindPositionData();
                elements.loadCompare.eq(0).find(procompTit).text('成绩与全年级平均分、最高分的对比');
                Report.bindCompareData();
            });

            loadCompareTable.find(currentUnion).on('click', function() {
                var _this = $(this);
                if(_this.hasClass('on')) {
                    return;
                }
                loadCompareTable.find('a').removeClass('on');
                _this.addClass('on');
                //暂时屏蔽联考区
                compareWithClassmate.find(fircompareLook).hide();
                if(downPartShow.is(':visible')) {
                    downPartShow.hide();
                    compareWithClassmate.find('em').removeClass();
                    compareWithClassmate.find('em').addClass('arror-down');
                }
                compareScore = 'union';currentPage = 0;
                getNearbyScore(compareScore, subjectNameList, unionAverageList, unionHighList, unionNearbyList, 0);
                elements.loadPosition.eq(0).find(proposiTit).text('成绩在联考区的位置');
                Report.bindPositionData();
                elements.loadCompare.eq(0).find(procompTit).text('成绩与联考区平均分、最高分的对比');
                Report.bindCompareData();
            });

            compareWithClassmate.find('a.next').on('click', function() {
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

            compareWithClassmate.find('a.pre').on('click', function() {
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
            compareTableData = false;
        }
    }
    else {
        currentClass = '#currentClassPar';
        currentGrade = '#currentGradePar';
        currentUnion = '#currentUnionPar';
        fircompareLook = '#fircompare-lookPar';
        proposiTit ='#proposi-titPar';
        procompTit = '#procomp-titPar';
        compareWithClassmate = elements.compareWithClassmatePar;
        loadCompareTable = $('#loadCompareTablePar');
        downPartShow = elements.downPartShowPar;
        if(compareTableDataPar) {
            getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, currentPage);

            compareWithClassmate.find(fircompareLook).on('click', function() {

                var _this = $(this);
                if(downPartShow.is(':hidden')) {
                    //暂时屏蔽联考区
                    if(compareScore == 'union') {
                        return;
                    }
                    downPartShow.show();
                    _this.html('关闭和我成绩接近的十名同学的成绩<em class="arror-up"></em>');
                }
                else {
                    downPartShow.hide();
                    _this.html('查看和我成绩接近的十名同学的成绩<em class="arror-down"></em>');
                }
            });

            loadCompareTable.find(currentClass).on('click', function() {
                var _this = $(this);
                if(_this.hasClass('on')) {
                    return;
                }
                loadCompareTable.find('a').removeClass('on');
                _this.addClass('on');
                compareWithClassmate.find(fircompareLook).show();
                compareScore = 'class';currentPage = 0;
                getNearbyScore(compareScore, subjectNameList, classAverageList, classHighList, classNearbyList, 0);
                elements.loadPosition.eq(1).find(proposiTit).text('成绩在全班的位置');
                Report.bindPositionData();
                elements.loadCompare.eq(1).find(procompTit).text('成绩与全班平均分、最高分的对比');
                Report.bindCompareData();
            });

            loadCompareTable.find(currentGrade).on('click', function() {
                var _this = $(this);
                if(_this.hasClass('on')) {
                    return;
                }
                loadCompareTable.find('a').removeClass('on');
                _this.addClass('on');
                compareWithClassmate.find(fircompareLook).show();
                compareScore = 'grade';currentPage = 0;
                getNearbyScore(compareScore, subjectNameList, gradeAverageList, gradeHighList, gradeNearbyList, 0);
                elements.loadPosition.eq(1).find(proposiTit).text('成绩在全年级的位置');
                Report.bindPositionData();
                elements.loadCompare.eq(1).find(procompTit).text('成绩与全年级平均分、最高分的对比');
                Report.bindCompareData();
            });

            loadCompareTable.find(currentUnion).on('click', function() {
                var _this = $(this);
                if(_this.hasClass('on')) {
                    return;
                }
                loadCompareTable.find('a').removeClass('on');
                _this.addClass('on');
                //暂时屏蔽联考区
                compareWithClassmate.find(fircompareLook).hide();
                if(downPartShow.is(':visible')) {
                    downPartShow.hide();
                    compareWithClassmate.find('em').removeClass();
                    compareWithClassmate.find('em').addClass('arror-down');
                }
                compareScore = 'union';currentPage = 0;
                getNearbyScore(compareScore, subjectNameList, unionAverageList, unionHighList, unionNearbyList, 0);
                elements.loadPosition.eq(1).find(proposiTit).text('成绩在联考区的位置');
                Report.bindPositionData();
                elements.loadCompare.eq(1).find(procompTit).text('成绩与联考区平均分、最高分的对比');
                Report.bindCompareData();
            });

            compareWithClassmate.find('a.next').on('click', function() {
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

            compareWithClassmate.find('a.pre').on('click', function() {
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
            compareTableDataPar = false;
        }
    }

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
                    $.getJSON(basePath + "/zhixuebao/feesReport/getNearbyUserExamScoreByClass/",
                        {examId: Request.QueryString("examId"), classId: userExamArchives[0].classId, count:5}, callbackDataHandle);
                    break;
                case 'grade':
                    $.getJSON(basePath + "/zhixuebao/feesReport/getNearbyUserExamScoreByGrade/",
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
                elements.downPartShowPar.html(htmlCreate(highScoreList, 1) + myScoreListHtml + htmlCreate(lowScoreList, 0));
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

            var preArrow =  compareWithClassmate.find('a.pre');
            var nextArrow =  compareWithClassmate.find('a.next');
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

    if (Report.role =='student') {
        var chart = echarts.init(document.getElementById('positionChart'), 'macarons');
    }
    else {
        var chart = echarts.init(document.getElementById('positionChartPar'), 'macarons');
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

    // var chart = echarts.init(document.getElementById('compareChart'), 'macarons');
    if (Report.role =='student') {
        var chart = echarts.init(document.getElementById('compareChart'), 'macarons');
    }
    else {
        var chart = echarts.init(document.getElementById('compareChartPar'), 'macarons');
    }
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
    if (userExamRankHistory ===  '') {
        $.getJSON(basePath + "/zhixuebao/feesReport/getUserExamRankHistory/",
            {examId: Request.QueryString("examId"), pageIndex: 1, pageSize: 5}, function (data) {
                userExamRankHistory = data;
                historyRankDataHandle(userExamRankHistory, 0);
            });
    }
    else {
        historyRankDataHandle(userExamRankHistory, 0);
    }

    elements.historyRankTable.eq(0).find('.gradeall').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.historyRankTable.eq(0).find('a').removeClass('on');
        _this.addClass('on');
        historyRankDataHandle(userExamRankHistory, 0);
        getScoreImproveIntro(Request.QueryString("examId"), 0);
    });

    elements.historyRankTable.eq(0).find('.grade').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.historyRankTable.eq(0).find('a').removeClass('on');
        _this.addClass('on');
        historyRankDataHandle(userExamRankHistory, 1);
        getScoreImproveIntro(Request.QueryString("examId"), 1);
    });

    elements.historyRankTable.eq(1).find('.gradeall').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.historyRankTable.eq(1).find('a').removeClass('on');
        _this.addClass('on');
        historyRankDataHandle(userExamRankHistory, 0);
        getScoreImproveIntro(Request.QueryString("examId"), 0);
    });

    elements.historyRankTable.eq(1).find('.grade').on('click', function() {
        var _this = $(this);
        if(_this.hasClass('on')) {
            return;
        }
        elements.historyRankTable.eq(1).find('a').removeClass('on');
        _this.addClass('on');
        historyRankDataHandle(userExamRankHistory, 1);
        getScoreImproveIntro(Request.QueryString("examId"), 1);
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

        // var chart = echarts.init(document.getElementById('historyRankChart'), 'macarons');
        if (Report.role =='student') {
            var chart = echarts.init(document.getElementById('historyRankChart'), 'macarons');
        }
        else {
            var chart = echarts.init(document.getElementById('historyRankChartPar'), 'macarons');
        }
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
        var _index = 0;
        if (Report.role =='student') {
            _index = 0;
        }
        else {
            _index = 1;
        }
        var scoreImproveIntroData = '';

        if (scoreImproveIntroData === '') {
            $.getJSON(basePath + "/zhixuebao/feesReport/getScoreImproveIntro/",
                {examId: examId, role: Report.role, scope: scope}, function(data) {
                    scoreImproveIntroData = data;
                    getScoreImproveIntroHandler(scoreImproveIntroData);
                });
        }
        else {
            getScoreImproveIntroHandler(scoreImproveIntroData);
        }

        var getScoreImproveIntroHandler = function (data) {
            var text = '';
            if(!!data && !!data.desc) {
                text += '<b>' + data.desc + '</b>';
            }
            // if(!!data && !!data.title) {
            //     text = '<b>' + data.title + '</b>' + text;
            // }
            elements.historyRankTable.eq(_index).find('.left').html(text);
        };

        if(scope) {
            elements.historyRankTable.eq(_index).find('.col6').html('本学期考试你在年级的位置分别是');
        }
        else {
            elements.historyRankTable.eq(_index).find('.col6').html('本学期考试你在全班的位置分别是');
        }
    }
};

/**
 * 绑定数据(每门学科考得怎么样)
 */
Report.bindEachSubjectData = function () {

    var subjectScoreList = [];
    var chartIndicator = [];
    for(var i = 0; i < examSubjectData.length; ++i) {
        subjectScoreList.push(examSubjectData[i].gradeRank.ratio);
        chartIndicator.push({text: examSubjectData[i].subjectName, max: 100});
    }
    bindEachSubjectChartData(subjectScoreList, chartIndicator);
    $.getJSON(basePath + "/zhixuebao/feesReport/getEachSubjectIntro/", {examId: Request.QueryString("examId"), role: Report.role}, function(data) {
        var text = '';
        if(!!data && !!data.desc) {
            text += data.desc;
        }
        if(!!data && !!data.title) {
            text = '<b>' + data.title + '</b>' + text;
        }
        if (Report.role == 'student') {
            elements.loadEachSubject.find('.left').html(text);
        }
        else {
            elements.loadEachSubjectPar.find('.left').html(text);
        }
    });

    /**
     * 绑定雷达图数据
     * @param subjectScoreList
     * @param chartIndicator
     */
    function bindEachSubjectChartData(subjectScoreList, chartIndicator) {

        if (Report.role == 'student') {
            var myChart = echarts.init(document.getElementById('eachSubjectChart'), 'macarons');
        }
        else {
            var myChart = echarts.init(document.getElementById('eachSubjectChartPar'), 'macarons');
        }
        var option = {
            polar : [
                {
                    indicator : chartIndicator
                }
            ],
            series : [
                {
                    name: '分数',
                    type: 'radar',
                    data : [
                        {
                            value : subjectScoreList,
                            name : '分数'
                        }
                    ],
                    itemStyle:{
                        normal:{
                            color:'#628DC2'
                            // areaStyle: {
                            // color:'#CFDEF3',
                            // type: 'default'
                            // }
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    }

}

/**
 * 全科绑定失分数据（丢分题难度）
 */
Report.bindLoseScoreData = function (paperId) {

    var jsonUrl = '',
        option = {},
        optionTxt = {};
    if (Report.allSinger == 'All') {
        jsonUrl = 'getLostScoreOfDifficulty';
        option = {"examId":Request.QueryString("examId")};
        optionTxt = {examId: Request.QueryString("examId"), role: 'student'};
    }
    else {
        jsonUrl = 'getSubjectLostScoreByDifficulty';
        option = {userId: currentRealStudent.id, paperId: paperId};
        optionTxt = {examId: Request.QueryString("examId"), paperId: paperId, role: 'student'};
    }
    $.getJSON(basePath + "/zhixuebao/feesReport/" + jsonUrl + "/",
        option, function (data) {
            var totalLostScore = 0;
            $.each(data, function(k, v) {
                totalLostScore += v.lostScoreValue;
            });

            if (paperId != 'allId') {
                for(var i = 0; i < data.length; i++) {
                    var lostData = data[i];
                    if (data[i].lostScoreTypeName == "难题") {
                        elements.lostScore_hardSinger.height(totalLostScore == 0 ? 0 : lostData.lostScoreValue / totalLostScore * 200);
                        elements.lostScore_hardScoreSinger.text(lostData.lostScoreValue);
                    } else if (data[i].lostScoreTypeName == "中等题") {
                        elements.lostScore_middleSinger.height(totalLostScore == 0 ? 0 : lostData.lostScoreValue / totalLostScore * 200);
                        elements.lostScore_middleScoreSinger.text(lostData.lostScoreValue);
                    } else if (data[i].lostScoreTypeName == "简单题") {
                        elements.lostScore_simpleSinger.height(totalLostScore == 0 ? 0 : lostData.lostScoreValue / totalLostScore * 200);
                        elements.lostScore_simpleScoreSinger.text(lostData.lostScoreValue);
                    } else {
                        continue;
                    }
                }
            }
            else {
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
            }

        });

    $.getJSON(basePath + "/zhixuebao/feesReport/getDropPointsDifficultyIntro/",
        optionTxt, function (data) {
            var text = '';
            if(!!data && !!data.desc) {
                text += data.desc;
            }
            if(!!data && !!data.title) {
                text = '<b>' + data.title + '</b>' + text;
            }
            elements.subjectScoreRemark.html(text);
        });
}

/**
 * 绑定数据（我该怎么办）
 */
Report.bindHowDoIData = function () {

    $.getJSON(basePath + "/zhixuebao/feesReport/getHowToDoTitle/",
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
        });

    $.getJSON(basePath + "/zhixuebao/feesReport/getHowToDoIntro/",
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

    $.getJSON(basePath + "/zhixuebao/feesReport/getSummaryIntro/",
        {examId: Request.QueryString("examId"), role: Report.role}, function (data) {
            if(!!data && !!data.desc) {
                if (Report.role == 'student') {
                    elements.summary.text(data.desc);
                }
                else {

                    elements.summaryPar.text(data.desc);
                }
            }
        });
};

/**
 * 考点闯关
 */
Report.bindExamTask = function () {
    var examId = Request.QueryString("examId");
    var subjectCssList = {"语文": "subbtnb-chinese", "英语": "subbtnb-english", "数学": "subbtnb-math", "化学": "subbtnb-chemistry", "物理": "subbtnb-physical", "生物": "subbtnb-biology", "政治": "subbtnb-politics", "政治2": "subbtnb-politics", "历史": "subbtnb-history", "地理": "subbtnb-geography", "信息技术": "subbtnb-computer", "文综": "subbtnb-heddle", "理综": "subbtnb-daniel", "科学": "subbtnb-science", "全学科": "subbtnb-all"};
    if (examScoreLine && examScoreLine.length > 0) {
        elements.loadExamTask.show();
        $.ajax({
            url: basePath + "/zhixuebao/studytask/getTaskByExam/",
            data: {examId: examId},
            type: "GET",
            dataType: "json",
            success: function (data) {
                try {
                    if (data && data.length != 0) {
                        createTaskHtml(data);
                    } else {
                        elements.loadExamTask.hide();
                    }
                } catch (e) {
                    elements.loadExamTask.hide();
                }
            },
            error: function (data) {
                elements.loadExamTask.hide();
            }
        });
    } else {
        elements.loadExamTask.hide();
    }

    function createTaskHtml(data) {
        var html = '';
        var size = data.length;
        var num = 0;
        for (var i = 0; i < size; i++) {
            if (!data[i].missions || ( data[i].missions && data[i].missions.length == 0)) {
                num++;
                continue;
            }
            var css = subjectCssList[data[i].subjectName] || subjectCssList["全学科"];
            html += '<div class="cg-report-pane clearfix">';
            html += '<div class="left fl"><div class="icon"><div class="subbtnb ' + css + '"></div></div>';
            html += '<p class="sub">' + data[i].subjectName + '</p>';
            html += '<p class="col6 ft14 tc">共计' + data[i].missions.length + '个知识点需要立马掌握</p></div>';
            html += '<div class="cg-mod">';
            var missions = data[i].missions;
            var count = missions && missions.length;
            for (var j = 0; j < count; j++) {
                if (missions[j].locked) {
                    html += '<a href="javascript:void(0);" title="' + filterKnowledgeName(missions[j].knowledge.knowledgeName) + '" class="cg-mod-lock rel">';
                } else {
                    if (((j + 1) == count) && ((i + 1) == size)) {
                        html += '<a href="' + basePath + '/zhixuebao/studytask/index/?subjectCode=' + data[i].subjectCode + '&knowledge=' +
                            missions[j].knowledge.knowledgeCode + '&missionId=' + missions[j].missionId + '&examId=' + examId + '&last=true&flag=list" class="cg-mod-nor rel last">';
                    } else {
                        html += '<a href="' + basePath + '/zhixuebao/studytask/index/?subjectCode=' + data[i].subjectCode + '&knowledge=' +
                            missions[j].knowledge.knowledgeCode + '&missionId=' + missions[j].missionId + '&examId=' + examId + '&last=false&flag=list" class="cg-mod-nor rel">';
                    }
                }
                html += '<p class="ft14 col3 txt"><b>关卡' + (j + 1) + '：</b>' + interceptString(filterKnowledgeName(missions[j].knowledge.knowledgeName), 36, true) + '</p>';
                html += '<div style="display:none;" class="percent-warp"><div class="percent-mor" style="width: 20%;"></div></div><div class="clearfix star-posi">';
                if (missions[j].locked) {
                    html += '<div class="fen-lock"></div>';
                } else {
                    var star = 0;
                    if (missions[j].scoredOne) {
                        star++;
                    }
                    if (missions[j].scoredTwo) {
                        star++;
                    }
                    if (missions[j].scoredThree) {
                        star++;
                    }
                    if (star == 1) {
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                    } else if (star == 2) {
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                    } else if (star == 3) {
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn"></div>';
                    } else {
                        html += '<div class="star-btn star-unbtn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                    }
                }
                html += '</div>';
                html += '</a>';
            }
            html += '</div>';
            html += '</div>';
        }
        if (size == num) {
            elements.loadExamTask.hide();
        } else {
            //演示用的名称替换
            /*if(currentUser.id == "2244000020000036254" || currentUser.id == "2000000020000265988" || currentUser.id == "2244000020000155153"){
             html = html.replace("全等三角形的判定", "全等三角形的性质");
             html = html.replace("勾股定理", "全等三角形的判定");
             html = html.replace("旋转的性质", "等腰三角形的性质");

             html = html.replace("等腰三角形的判定", "全等三角形的性质");
             html = html.replace("等式的性质", "等腰三角形的性质");

             }*/
            elements.loadExamTask.find(".cg-report").html(html);

            //演示用
            if(currentRealStudent.id == "2244000020000036254" || currentRealStudent.id == "2000000020000265988" || currentRealStudent.id == "2244000020000155153"){
                var as = $("div.cg-report-pane:first .cg-mod a");
                var p = $("div.cg-report-pane:first .cg-mod a>p");
                var tp0 = '<p class="ft14 col3 txt"><b>关卡1：</b>全等三角形的性质</p>';
                var tp1 = '<p class="ft14 col3 txt"><b>关卡2：</b>全等三角形的判定</p>';
                var tp2 = '<p class="ft14 col3 txt"><b>关卡3：</b>等腰三角形的性质</p>';

                $(p[0]).replaceWith(tp0);
                $(p[1]).replaceWith(tp1);
                $(p[2]).replaceWith(tp2);

                /* 第一个链接给第二个*/
                var demo1 = as[0];//第一个
                var herf1 = $(demo1).attr("href");
                var demo2 = as[1];//第二个
                $(demo2).attr("href",herf1);

                /*第一个添加新链接
                 * /zhixuebao/studytask/index/?subjectCode=
                 * ["020449003002007n","020449004001000n","020449003003010n"];
                 * */
                herf1 = basePath + "/zhixuebao/studytask/index/";
                var para = "?subjectCode=02&knowledge=020449003002008n&last=false&flag=list";//拼接新链接020449003003010n
                para = para + "&missionId=3ef2605b8961f2b261a8df53584dd649&examId=c4a0db83-98bc-4c10-8c86-09b84f52bfc0";//missionId=de4fd4f326d29fab702cc7dfac4270ac
                para += "&demo=1";
                $(demo1).attr("href",herf1+para);

                var demo3 = as[2];//第三个链接去掉
                $(demo3).attr("href","javascript:void(0);");
                $(demo3).css('cursor','default');
            }

        }
    }

    function filterKnowledgeName(name) {
        var ary = name.split('>>');
        return ary.length == 1 ? ary[0] : ary[ary.length - 1];
    }
}

/**
 * 家长端 绑定用户考试信息（孩子考得怎么样）
 */
var examScoreInitPar = true;
Report.bindUserExamDataPar = function () {
    if (examScoreInitPar){
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
        examScoreInitPar = false;
    }

    $('a.active').click(function () {
        var paperId = $(this).attr('paperId');
        var _this = $("#top_subjectListPar")
        for (i = 0; i < _this.children().length; i++) {
            if (_this.children().eq(i).find('a').attr('paperId') == paperId) {
                _this.children().find('a').removeClass('on');
                _this.children().eq(i).find('a').addClass('on');
                Report.allSingerTabHandler(_this.children().eq(i).find('a').html());
                return;

            }
        }
    })

    /**
     * 获取学科得分HTML
     */
    function getExamScoreHtml(data) {
        var examScoreHTML = '<li><div class="rel stu-paperli par-paperli"><div class="pic"><img src="' + basePath + '/public/module/global/rep-images/stu-paper.png" width="130" height="155"></div><div class="cover"><p class="mb30">';
        if (scoreToLevel == true) {
            if (data.subjectName == "总分") {
                examScoreHTML += dataUtil.getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:void(0);" class="ana">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += dataUtil.getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:scrollTo(0,0);" paperId="' + data.paperId + '" class="ana active">' + data.subjectName + '</a>';
            }
        } else {
            if (data.subjectName == "总分") {
                examScoreHTML += data.score + '</p><a href="javascript:void(0);" class="ana">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += data.score + '</p><a href="javascript:scrollTo(0,0);" paperId="' + data.paperId + '" class="ana active">' + data.subjectName + '</a>';
            }
        }
        return examScoreHTML;
    }
};

/**
 * 家长端 绑定失分数据（孩子的分数丢哪了？）
 */
Report.bindLoseScoreDataPar = function () {

    var lostDifficultyData;
    //用户总失分
    var lostAllScore = 0;
    //简单题在数组中的位置
    var lostSimpleIndex = 0;
    //是否丢分、丢分率相同
    var isDifficultyEqual = true;
    //获取文案
    $.getJSON(basePath + "/zhixuebao/feesReport/getDropPointsDifficultyIntro/",
        {examId: Request.QueryString("examId"), role: Report.role}, function (data) {
            var text = '';
            if(!!data && !!data.desc) {
                text += data.desc;
            }
            if(!!data && !!data.title) {
                text = '<b>' + data.title + '</b>' + text;
            }
            elements.loseScoreTable.find('.left').html(text);
        });
    $.getJSON(basePath + "/zhixuebao/feesReport/getLostScoreOfDifficulty/",
        {examId: Request.QueryString("examId")}, function (data) {
            lostDifficultyData = data;
            //这里对数据进行排序，使丢分最多、丢分率最多的排前面
            for (var i = 0; i < lostDifficultyData.length; i++) {
                for (var j = i; j < lostDifficultyData.length; j++) {
                    if (lostDifficultyData[i].lostScoreValue < lostDifficultyData[j].lostScoreValue || (lostDifficultyData[i].lostScoreValue == lostDifficultyData[j].lostScoreValue && lostDifficultyData[i].lostScoreTypeRatio < lostDifficultyData[j].lostScoreTypeRatio)) {
                        var temp = lostDifficultyData[i];
                        lostDifficultyData[i] = lostDifficultyData[j];
                        lostDifficultyData[j] = temp;
                    }
                }
            }
            bindLoseScoreChartData(lostDifficultyData);
        });

    /**
     * 绑定丢分图表
     * @param lostDifficultyData
     */
    function bindLoseScoreChartData(lostDifficultyData) {

        var radius = !!isMobile ? [25, 45] : [60, 80];
        var fontSize = !!isMobile ? 9 : 18;
        var itemGap = !!isMobile ? 25 : 123;

        var labelTop = {
            normal: {
                label: {
                    show: true,
                    position: 'center',
                    formatter: '{b}',
                    textStyle: {
                        baseline: 'bottom'
                    }
                },
                labelLine: {
                    show: false
                }
            }
        };
        var label = {
            formatter: function (params) {
                return '共' + params.series.totalScore + '分';
            },
            textStyle: {
                color: '#676767',
                baseline: 'top',
                fontSize: fontSize
            }
        };
        var labelBottom = {
            normal: {
                color: '#ccc',
                label: {
                    show: true,
                    position: 'center'
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var series = [];
        var legendData = {};
        for (var i = 0; i < lostDifficultyData.length; i++) {
            var lostData = lostDifficultyData[i];
            if (i + 1 < lostDifficultyData.length && (lostData.lostScoreValue != lostDifficultyData[i + 1].lostScoreValue || lostData.lostScoreTypeRatio != lostDifficultyData[i + 1].lostScoreTypeRatio)) {
                isDifficultyEqual = false;
            }
            lostAllScore += lostData.lostScoreValue;
            legendData[lostData.lostScoreTypeName] = lostData.lostScoreValue;
            if (lostData.lostScoreTypeName == "难题") {
                series.push({
                    type: 'pie',
                    center: ['82%', '50%'],
                    radius: radius,
                    totalScore: lostData.totalScoreValue,
                    x: '66%', // for funnel
                    itemStyle: {
                        normal: {
                            color: '#D66C45',
                            label: label
                        }
                    },
                    data: [
                        {name: 'other', value: 100 - lostData.lostScoreTypeRatio, itemStyle: labelBottom},
                        {name: '难题', value: lostData.lostScoreTypeRatio, itemStyle: labelTop}
                    ]
                });
            } else if (lostData.lostScoreTypeName == "中等题") {
                series.push({
                    type: 'pie',
                    center: ['49%', '50%'],
                    radius: radius,
                    totalScore: lostData.totalScoreValue,
                    x: '33%', // for funnel
                    itemStyle: {
                        normal: {
                            color: '#FFB03F',
                            label: label
                        }
                    },
                    data: [
                        {name: 'other', value: 100 - lostData.lostScoreTypeRatio, itemStyle: labelBottom},
                        {name: '中等题', value: lostData.lostScoreTypeRatio, itemStyle: labelTop}
                    ]
                });
            } else if (lostData.lostScoreTypeName == "简单题") {
                lostSimpleIndex = i;
                series.push({
                    type: 'pie',
                    center: ['16%', '50%'],
                    radius: radius,
                    totalScore: lostData.totalScoreValue,
                    x: '0%', // for funnel
                    itemStyle: {
                        normal: {
                            color: '#6293D6',
                            label: label
                        }
                    },
                    data: [
                        {name: 'other', value: 100 - lostData.lostScoreTypeRatio, itemStyle: labelBottom},
                        {name: '简单题', value: lostData.lostScoreTypeRatio, itemStyle: labelTop}
                    ]
                });
            } else {
                continue;
            }
        }
        var chart = echarts.init(document.getElementById('loseScoreChart'), 'macarons');
        var option = {
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['简单题', '中等题', '难题'],
                textStyle: {fontSize: fontSize},
                itemGap: itemGap,
                formatter: function (data) {
                    return "丢" + legendData[data] + "分";
                }
            },
            series: series
        };
        chart.setOption(option);
    }
};

//单科 孩子考得怎么样
var rankByScoreArray = [];//题目汇总对应的进步几名缓存
window.reportCtrl = window.reportCtrl || {};

reportCtrl.parSinger = (function(){

    var parSinger = function(){};

    parSinger.prototype.init = function(){
        this.initUserExamData();
        // this.initFoot();
    };

    parSinger.prototype.initUserExamData = function(){
        // elements.subjectName2.html(userExamData.subjectName);
        // elements.examName.html(userExamData.examName);
        var userExamData;
        for ( var i = 0; i < userExamDataList.length; i++){
            if (Report.role == 'student') {
                if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                    userExamData = userExamDataList[i];
                }
            }
            else {
                if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                    userExamData = userExamDataList[i];
                }
            }

        }
        if (scoreToLevel == true) {
            elements.rankTable.find('b.stu-yel').html(dataUtil.getScoreToLevel(userExamData.score, userExamData.standardScore));
        } else {
            elements.rankTable.find('b.stu-yel').html(userExamData.score);
        }
        if (forbidAvgScore == true) {
            elements.rankTable.find('.classAverage').html("--");
            elements.rankTable.find('.gradeAverage').html("--");
        } else if (scoreToLevel == true) {
            elements.rankTable.find('.classAverage').html(dataUtil.getScoreToLevel(userExamData.classRank.avgScore, userExamData.standardScore));
            elements.rankTable.find('.gradeAverage').html(dataUtil.getScoreToLevel(userExamData.gradeRank.avgScore, userExamData.standardScore));
        } else {
            elements.rankTable.find('.classAverage').html(userExamData.classRank.avgScore);
            elements.rankTable.find('.gradeAverage').html(userExamData.gradeRank.avgScore);
        }
        if (forbidRatio == true) {
            elements.rankTable.find('.classPosition').html("--");
            elements.rankTable.find('.gradePosition').html("--");
        } else if (ratioToLevel == true) {
            elements.rankTable.find('.classPosition').html(dataUtil.getRatioToLevel(userExamData.classRank.ratio));
            elements.rankTable.find('.gradePosition').html(dataUtil.getRatioToLevel(userExamData.gradeRank.ratio));
        } else {
            elements.rankTable.find('.classPosition').html('前<b>' + (100 - userExamData.classRank.ratio) + '%</b>');
            elements.rankTable.find('.gradePosition').html('前<b>' + (100 - userExamData.gradeRank.ratio) + '%</b>');
        }
        // elements.clickAndDownload.hide();//暂时不实现
        // elements.clickAndDownload.find('.down-dtk').on('click', function() {});
        // elements.clickAndDownload.find('.down-paper').on('click', function() {});
    };

    // parSinger.prototype.initFoot = function(){
    //     var foot = new Foot(userExamData);
    //     foot.init();
    // };

    return parSinger;
})();

// var lazyCtrl = {
//
//     init: function(){
//         //对可视区域进行懒加载
//         var Winload = $class(Lazyload, proto);
//
//         //0. 懒加载 [题目汇总]
//         new Winload({
//             elems: $id("lazy_topic"),
//             container: window,
//             ondataload: function (elem) {
//                 if(!!isMobile) {
//                     elements.lazy_topic.remove();
//                 }
//                 else {
//                     var topicCollectionObj = new TopicCollect();
//                     topicCollectionObj.init();
//                 }
//             }
//         });
//         //1. 懒加载 [这次考试有进步吗？]
//         new Winload({
//             elems: $id("lazy_historyRank"),
//             container: window,
//             ondataload: function (elem) {
//                 var fore = new forewordCtrl();
//                 fore.init();
//             }
//         });
//         //2. 懒加载 [从考试情况看孩子学习-各分数段人员数量]
//         new Winload({
//             elems: $id("examChart"),
//             container: window,
//             ondataload: function (elem) {
//                 dataUtil.bindScoreParts(0);
//             }
//         });
//         //3. 懒加载 [考试难度]
//         new Winload({
//             elems: $id("lazy_examDif"),
//             container: window,
//             ondataload: function (elem) {
//                 var ec = new examCompare();
//                 ec.init();
//             }
//         });
//         //4. 懒加载 [丢分题难度]
//         new Winload({
//             elems: $id("lazy_loseScoreDif"),
//             container: window,
//             ondataload: function (elem) {
//                 // var dif = new diffcult("reportParSinger");
//                 // dif.init();
//                 var dif = new Difficulty();
//                 dif.init();
//             }
//         });
//         //5. 懒加载[知识点掌握情况]
//         new Winload({
//             elems: $id("howToImprove"),
//             container: window,
//             ondataload: function (elem) {
//                 var knowledgeControl = new KnowledgeControl();
//                 knowledgeControl.init();
//             }
//         });
//         //6. 懒加载[根据您孩子的情况，我们推荐补习以下内容]
//         new Winload({
//             elems: $id("recommondControl"),
//             container: window,
//             ondataload: function (elem) {
//                 var recommondControl = new RecommondControl();
//                 recommondControl.init();
//             }
//         });
//     }
// };

var chartUtil = {
    /**
     * 绑定图表数据
     * @param chartParams
     */
    bindScorePartsChart: function(chartParams){

        var dataFormatter = [];
        $.each(chartParams.scoreParts, function(k, v) {
            dataFormatter.push({value:chartParams.stuCounts[k],name:v});
        });
        var radius = !!isMobile ? '50%' : '80%';
        // var myChart = echarts.init(document.getElementById('scorePartsChart'), 'macarons');
        if (Report.role =='student') {
            var myChart = echarts.init(document.getElementById('scorePartsChartSinger'), 'macarons');
        }
        else {
            var myChart = echarts.init(document.getElementById('scorePartsChartSingerPar'), 'macarons');
        }
        option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}人 ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                data:chartParams.scoreParts
            },
            series : [
                {
                    name:'各分数段人数',
                    type:'pie',
                    radius : radius,
                    center: ['45%', '50%'],
                    data:dataFormatter,
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'inner',
                                formatter : function (params) {
                                    return params.value;
                                }
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                position: 'outer'
                            },
                            labelLine: {
                                show: true,
                                lineStyle: {
                                    color: 'red'
                                }
                            }
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    }
};


var dataUtil = {
    /**
     * 数据缓存
     */
    classScoreParts: {},
    gradeScoreParts: {},
    scorePartsInfo: '',
    /**
     * 获取学生班级、年级排名信息
     */
    getRankTableTemplate: function(){
        var data = userExamData;
        var html = __rankTableTemplate__({"rankData":data,
            "ratioToLevelText":dataUtil.ratioToLevelText(data),
            "scoreToLevelText":dataUtil.scoreToLevelText(data),
            "isForbidAvgScore":dataUtil.isForbidAvgScore(forbidAvgScore),
            "isForbidRatio":dataUtil.isForbidRatio(forbidRatio)});
        return html;
    },
    isRatioToLevel: function(isRatioToLevel){
        if(isRatioToLevel){
            return isRatioToLevel;
        }
        return false;
    },
    /**
     * 班级击败比率 等级text。
     * 上海某些学校要求 将报告中的击败率修改为等级.
     * add: 2015-12-08
     */
    classRatioLeval: function(ueDate){
        var data = ueDate;
        var result = "D";
        if(data.classRank.ratio >= 75){
            result = "A";
        }else if(data.classRank.ratio >= 50){
            result = "B";
        }else if(data.classRank.ratio >= 25){
            result = "C";
        }else{
            result = "D";
        }
        return result;
    },
    /**
     * 年级击败比率 等级text。
     * @param ueDate
     * @returns {String}
     */
    gradeRatioLeval: function(ueDate){
        var data = ueDate;
        var result = "D";
        if(data.gradeRank.ratio >= 75){
            result = "A";
        }else if(data.gradeRank.ratio >= 50){
            result = "B";
        }else if(data.gradeRank.ratio >= 25){
            result = "C";
        }else{
            result = "D";
        }
        return result;
    },
    /**
     * 击败比率 等级text。
     * (包括班级、年级的击败比率)
     * @param data
     * @returns {{classRatioText: null, gradeRatioText: null}}
     */
    ratioToLevelText: function(data){
        var result = {classRatioText:null,gradeRatioText:null};
        var is = this.isRatioToLevel(ratioToLevel);
        if(is){
            result.classRatioText = this.classRatioLeval(data);
            result.gradeRatioText = this.gradeRatioLeval(data);
        }
        return result;
    },
    /**
     * 分数转为等级情况下：需展示的等级文本.
     * @param data
     * @returns {{classHighScoreText: null, gradeHighScoreText: null, myRankText: null}}
     */
    scoreToLevelText: function(data){
        var result = {classHighScoreText:null,gradeHighScoreText:null,myRankText:null};
        var is = this.isScoreToLevel(scoreToLevel);
        if(is){
            //满分
            var sScore = data.standardScore;
            result.classHighScoreText = this.getScoreToLevel(data.classRank.highScore,sScore);
            result.gradeHighScoreText = this.getScoreToLevel(data.gradeRank.highScore,sScore);
            result.myScoreText = this.getScoreToLevel(data.score,sScore);
        }
        return result;
    },
    /**
     * 是否将分数展示为等级
     * @param is
     * @returns 是否
     */
    isScoreToLevel: function(is){
        if(is){
            return is;
        }
        return false;
    },
    /**
     * 分数等级
     * 安徽某些学校要将 最高分、我的得分展示为等级.
     * @param score
     * @param standardScore
     * @returns {String} 等级[A B C D]
     */
    getScoreToLevel: function(score,standardScore){
        var level="D";
        if(score >= standardScore*0.85){
            level="A";
        }else if(score >= standardScore*0.7){
            level="B";
        }else if(score >= standardScore*0.6){
            level="C";
        }else{
            level="D";
        }
        return level;
    },
    /**
     * 获取击败率等级
     */
    getRatioToLevel: function (ratio) {
        var level = "D";
        if (ratio >= 75) {
            level = "A"
        } else if (ratio >= 50) {
            level = "B"
        } else if (ratio >= 25) {
            level = "C"
        } else {
            level = "D"
        }
        return level;
    },
    /**
     * 是否屏蔽平均分。
     * (始终展示为 --)
     * @param is
     * @returns 是否
     */
    isForbidAvgScore: function(is){
        if(is){
            return is;
        }
        return false;
    },
    /**
     * 是否屏蔽击败比率
     * @param is
     * @returns 是否
     */
    isForbidRatio: function(is){
        if(is){
            return is;
        }
        return false;
    },
    geneRankChartParams: function(ranks){
        if(!ranks){
            return null;
        }
        var _examNames = [];
        var _ranks = [];
        var _thisIndex = -1;
        for(var i = ranks.length - 1; i >= 0; i--){
            _examNames.push(ranks[i].examName);
            _ranks.push(ranks[i].classRank.ratio);
            if (userExamData.examId == ranks[i].examId) {
                _thisIndex = ranks.length - 1 - i;
            }
        }
        var charParams = {};
        charParams.examNames = _examNames;
        charParams.ratios = _ranks;
        charParams.thisIndex = _thisIndex;
        return charParams;
    },
    /**
     * 生成图表展示数据
     * @param scores
     * @returns {*}
     */
    getExamChartParams: function(scores){
        if(!scores){
            return null;
        }

        var chartParams = {};
        var scoreParts = [];
        var stuCounts = [];
        $.each(scores, function(k, v) {
            var tmpArrParts = [];
            tmpArrParts.push(v.minScore);
            tmpArrParts.push(v.maxScore);
            scoreParts.push(tmpArrParts.join("-"));
            stuCounts.push(v.count);
        });
        chartParams.scoreParts = scoreParts;
        chartParams.stuCounts = stuCounts;

        return chartParams;
    },
    /**
     * 生成已经掌握的知识点
     * @param knows
     * @returns {Array}
     */
    geneControl: function(knows) {
        if(!knows) {
            return [];
        }
        var tmpArr = [];
        $.each(knows, function(k, v) {
            if(v.scoreRatio == 100) {
                tmpArr.push(v);
            }
        });
        return tmpArr;
    },
    /**
     * 生成没有掌握的知识点
     * @param knows
     * @returns {Array}
     */
    geneNotControl: function(knows) {
        if(!knows) {
            return [];
        }
        var tmpArr = [];
        $.each(knows, function(k, v) {
            if(v.scoreRatio != 100) {
                tmpArr.push(v);
            }
        });
        return tmpArr;
    },
    /**
     * 计算掌握不太好的知识点个数
     * @param knows
     */
    geneNotGoodKnowCount: function(knows){
        if(!knows){
            return 0;
        }
        var count = 0;
        for(var i=0;i<knows.length;i++){
            var r = knows[i].scoreRatio;
            if(r < 100){
                count += 1;
            }
        }
        return count;
    },
    /**
     * 生成需要学习的知识html
     * @param knows
     * @returns {*}
     */
    geneNeedToKnow: function(knows){
        if(!knows){
            return '';
        }
        var easy = knows.easy2learn;
        var free = knows.free2learn;
        var tmpArray = [];
        if(easy.length > 0) {
            $.each(easy, function(k, v) {
                var tmpArr = v.name.split('>>');
                var real = tmpArr[tmpArr.length - 1];
                tmpArray.push(real);
            });
        }
        if(free.length > 0) {
            $.each(free, function(k, v) {
                var tmpArr = v.name.split('>>');
                var real = tmpArr[tmpArr.length - 1];
                tmpArray.push(real);
            });
        }

        var html = '<tr>';
        for(var i = 0; i < tmpArray.length; i++) {
            if(!!i && (i % 3 == 0)) {
                html += '</tr><tr>';
            }
            html += "<td>" + tmpArray[i] + "</td>";
        }
        html += '</tr>';
        return html;
    },
    /**
     * 考试难度图片展示
     * @param examDifficult
     */
    initExamDiff: function(examDifficult){
        if(!examDifficult){
            elements.difTip.addClass("par-qk-difd");//只有一次考试的UI
            return;
        }
        if(false == examDifficult.isMoreDifficult){
            elements.difTip.addClass("par-qk-difc");//难度降低的UI
        }else if(!examDifficult.isMoreDifficult){
            elements.difTip.addClass("par-qk-difb");//难度持平的UI
        }else{
            //默认就是难度上升的
        }
    },
    /**
     * 获取年级分数段及人数
     * @param callback
     */
    getClassScoreParts: function(paperId, callback) {
        var url = basePath + "/zhixuebao/feesReport/getClassScoreParts/";
        //$.getJSON(url,{"classId":classId,"paperId":Request.QueryString("paperId")},callback);
        $.getJSON(url,{"classId":examClassId,"paperId":paperId},callback);
    },
    /**
     * 获取学校分数段及人数
     * @param callback
     */
    getGradeScoreParts: function(paperId, callback) {
        var url = basePath + "/zhixuebao/feesReport/getSchoolScoreParts/";
        $.getJSON(url,{"paperId":paperId},callback);
    },
    /**
     * 获取各分数段文案
     * @param callback
     */
    getSummaryOfScorePhaseInfo: function(paperId, callback) {
        var url = basePath + "/zhixuebao/feesReport/getSummaryOfScorePhaseInfo/";
        $.getJSON(url,{"examId":Request.QueryString("examId"),"paperId":paperId},callback);
    },
    /**
     * 各分数段主处理函数
     * @param score
     */
    bindScoreParts: function(score, paperId) {
        this.paperId = paperId;
        var self = this;
        if(!score) {
            if($.isEmptyObject(self.classScoreParts)) {
                self.getClassScoreParts(self.paperId, function (result) {
                    self.classScoreParts = self.getExamChartParams(result);
                    chartUtil.bindScorePartsChart(self.classScoreParts);
                });
            }
            else {
                chartUtil.bindScorePartsChart(self.classScoreParts);
            }
            if(!self.scorePartsInfo) {
                self.getSummaryOfScorePhaseInfo(self.paperId, function(data) {
                    var text = '';
                    if(!!data && !!data.desc) {
                        text += data.desc;
                    }
                    if(!!data && !!data.title) {
                        text = '<b>' + data.title + '</b>' + text;
                    }
                    self.scorePartsInfo = text;
                    elements.examChart.find('td.left').html(self.scorePartsInfo);
                });
            }
            else {
                elements.examChart.find('td.left').html(self.scorePartsInfo);
            }
        }
        else {
            if($.isEmptyObject(self.gradeScoreParts)) {
                self.getGradeScoreParts(self.paperId, function(result){
                    self.gradeScoreParts = self.getExamChartParams(result);
                    chartUtil.bindScorePartsChart(self.gradeScoreParts);
                });
            }
            else {
                chartUtil.bindScorePartsChart(self.gradeScoreParts);
            }
        }

        elements.examChart.find('.classScope').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.examChart.find('a').removeClass('on');
            _this.addClass('on');
            self.bindScoreParts(0, self.paperId);
        });

        elements.examChart.find('.gradeScope').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.examChart.find('a').removeClass('on');
            _this.addClass('on');
            self.bindScoreParts(1, self.paperId);
        });
    }
};

var tipsUtil = {
    /**
     * 考试难度提示语
     * @param dif
     * @returns {*}
     */
    getDifTip: function(dif){
        if(!dif){
            return "只有一次考试数据，无法分析";
        }
        var tip = "";
        if(true == dif.isMoreDifficult){
            tip = "本次试卷的难度相比上次有所提高";
        }else if(false == dif.isMoreDifficult){
            tip = "本次试卷的难度相比上次有所降低";
        }else{
            tip = "本次试卷的难度相比上次持平";
        }
        return tip;
    }
};

//题目汇总
var TopicCollect = (function () {

    var topicCollect = function () {
        this.topics = [];
        this.pageCount = 0;
        this.paperId = '';
    };

    topicCollect.prototype.init = function (paperId) {
        this.paperId = paperId;
        this.initErrTopicHtml();
    };

    /**
     * 初始化我的题目汇总
     */
    topicCollect.prototype.initErrTopicHtml = function () {
        var _this = this;
        _this.getWrongTopicList(function (data) {
            if (data.topicList.length > 0) {
                var startNum = 0;
                var endNum = 0;
                _this.topicStartNum = 0;
                if(data.topicList.length >= 10) {
                    _this.topicEndNum = endNum = 9;
                }
                else {
                    _this.topicEndNum =  endNum =  data.topicList.length - 1;
                }
                _this.topics = data.topicList;
                _this.initErrTopicHtml2(startNum,endNum);
            }
            else {
                //显示没有题目的相关信息
                if (Report.role == 'student'){
                    $('#topicNumberList').text("暂无相关题目");
                    $('#topicCollectProblemAnalysis').parent().hide();
                }
                else {
                    $('#topicNumberListPar').text("暂无相关题目");
                    $('#topicCollectProblemAnalysisPar').parent().hide();
                }
            }
        });
    };

    /**
     * 箭头点击事件
     * @param startNum
     * @param endNum
     */
    topicCollect.prototype.preNextEvent = function (startNum,endNum) {
        var _this = this;

        if(startNum > 1 ) {
            //显示手状
            $('#topicPreId').css('cursor','pointer');
        }
        else {
            $('#topicPreId').css('cursor','');
        }
        if(endNum < _this.topics.length-1) {
            //显示手状
            $('#topicNextId').css('cursor','pointer');
        }
        else {
            $('#topicPreId').css('cursor','');

        }

        $("#topicPreId").click(function () {

            if(_this.topicStartNum != 0 ){
                var endMode = endNum%10;
                _this.topicEndNum = endNum -endMode-1;
                _this.topicStartNum = (startNum/10-1) *10;
            }

            //遍历取起始的list
            var topicArray =[];
            for(var i=_this.topicStartNum ;i< _this.topicEndNum;i++){
                topicArray[i] = _this.topics[i];
            }
            _this.topicNumberListHtml(topicArray);
            _this.initErrTopicHtml2(_this.topicStartNum,_this.topicEndNum);
        });

        $("#topicNextId").click(function () {

            if(endNum < _this.topics.length -1){
                _this.topicStartNum = startNum +10;
                if(_this.topics.length - endNum > 10 ){
                    _this.topicEndNum = endNum + 10;
                }else{
                    _this.topicEndNum = _this.topics.length - 1;
                }

                //遍历取起始的list
                var topicArray =[];
                for(var i=_this.topicStartNum ;i< _this.topicEndNum;i++){
                    topicArray[i] = _this.topics[i];
                }
                _this.topicNumberListHtml(topicArray);
                _this.initErrTopicHtml2(_this.topicStartNum,_this.topicEndNum);

                //if(startNum > 1 ){
                //显示手状
                $('#topicPreId').css('cursor','pointer');
                // }
            }
        });
    };

    /**
     * 获取题目分析和排名
     * @param topic
     * @param improveRank
     * @returns {*}
     */
    topicCollect.prototype.getTopicAnalysisHtml = function(topic,improveRank){
        var topicAnalysisHtml = __topicCollectProblemAnalysisTemplate__({"topic1": topic, "rankImprove": improveRank});
        return topicAnalysisHtml;
    };

    /**
     * 获取一道题目及其解析
     * @param _this
     * @param topic
     */
    topicCollect.prototype.getTopic = function(_this,topic) {
        var scoreMinus = topic.standardScore - topic.score;
        var rankResult = 0;
        //从缓存数组中查询
        if(!topic.isCorrect) {
            var buffer = rankByScoreArray[topic.topicNumber];
            if(null != buffer || buffer != undefined) {
                rankResult = buffer;
            }
            else {
                _this.getUserSubjectClassRank(scoreMinus, function (result) {
                    if (null == result || result == undefined) {
                        result = 0;
                    }
                    //放入缓存中
                    rankByScoreArray[topic.topicNumber] = result;
                    rankResult = result;
                });
            }
        }
        var topicAnswerHtml = _this.getTopicAnalysisHtml(topic, rankResult);

        if (Report.role == 'student'){
            $("#topicCollectProblemAnalysis").html(topicAnswerHtml);
        }
        else {
            $("#topicCollectProblemAnalysisPar").html(topicAnswerHtml);
        }
    };

    /**
     * 显示题号列表
     * @param topics
     * @param startNum
     * @param endNum
     */
    topicCollect.prototype.topicNumberListHtml =function(topics,startNum,endNum) {
        var topicNoHtml = __topicCollectListTemplate__({"errTopics":topics,"startNum":startNum,"endNum":endNum});

        if (Report.role == 'student'){
            $('#topicNumberList').html(topicNoHtml);
        }
        else {
            $('#topicNumberListPar').html(topicNoHtml);
        }
    };

    /**
     * 展示前N个题目
     * @param startNum
     * @param endNum
     */
    topicCollect.prototype.initErrTopicHtml2 = function (startNum,endNum) {
        var _this = this;
        var topicArray =[];
        for(var i = startNum; i <= endNum; i++){
            topicArray[i] = _this.topics[i];
        }
        _this.topicNumberListHtml(topicArray,startNum,endNum);
        //展示题的答案和解析
        _this.getTopic(_this,topicArray[startNum]);
        //加入监听
        _this.mouseMoveEvent();
        _this.initTopicEvent();
        _this.preNextEvent(startNum,endNum);
    };

    /**
     * 获取题目列表信息
     * @param callback
     */
    topicCollect.prototype.getWrongTopicList = function (callback) {
        var _this = this;

        if(!!Report.paper[_this.paperId].WrongTopicList) {
            callback(Report.paper[_this.paperId].WrongTopicList);
        } else {
            var url = basePath + "/zhixuebao/feesReport/getUserSubjectTopicList/";
            var userId = currentRealStudent.id;
            // var paperId = Request.QueryString("paperId");
            $.getJSON(url, {userId: userId, paperId:_this.paperId, pageIndex: 1, pageSize: 10}, function (data) {Report.paper[_this.paperId].WrongTopicList=data; callback(Report.paper[_this.paperId].WrongTopicList);});
        }
        // $.getJSON(url, {userId: userId, paperId:_this.paperId, pageIndex: 1, pageSize: 10}, callback);

    };

    /**
     * 获取-这道题做对了，我就可以进步X名！
     * @param score
     * @param callback
     */
    topicCollect.prototype.getUserSubjectClassRank = function (score, callback) {
        var _this = this;
        var url = basePath + "/zhixuebao/feesReport/getUserSubjectClassRankNew/";
        // var paperId = Request.QueryString("paperId");
        var classId = Request.QueryString("classId");
        var userId = currentRealStudent.id;
        //$.getJSON(url, {userId:userId,classId: classId, paperId: paperId, score: score}, callback);
        $.ajax({
            url:url,
            type:'GET',
            contentType:'JSON',
            async:false,
            data:{userId:userId,classId: classId, paperId:_this.paperId, score: score},
            cache:true,
            success:callback
        });
    };

    /**
     * 题目列表加入鼠标移动事件
     */
    topicCollect.prototype.mouseMoveEvent= function (){
        var topicHeaderNumObj =$("#topicListNumberShow a.on");
        $("#topicListNumberShow").mousemove(function(){
            $("#topicListNumberShow a").removeClass("on")
        });
        $("#topicListNumberShow").mousedown(function(){
            topicHeaderNumObj = $(event.target);
        });
        $("#topicListNumberShow").mouseleave(function(){
            topicHeaderNumObj.addClass("on")
        });
    };

    /**
     * 题号点击事件
     */
    topicCollect.prototype.initTopicEvent = function () {
        var _this = this;
        var startNum = $('#topicListStartNum').attr("data-num");//起始号码
        $('.hd-ul a').on("click", function () {
            var num = parseInt($(this).attr('data-topicid'));
            num += parseInt(startNum);//当前的对应题号
            _this.getTopic(_this,_this.topics[num]);
        });
    };

    return topicCollect;
})();

/**
 * 这次考试有进步吗?
 */
var forewordCtrl = (function(){
    var forewordCtrl  = function(){};

    forewordCtrl.prototype.init = function(paperId){
        this.paperId = paperId;
        var self = this;

        getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 0);

        var userExamRankHistory = '';
        if (userExamRankHistory ===  '')
        {
            $.getJSON(basePath + "/zhixuebao/feesReport/getUserSubjectRankHistory/",
                {userId: currentRealStudent.id, paperId:self.paperId, pageIndex: 1, pageSize: 5}, function (data) {
                    userExamRankHistory = data;
                    historyRankDataHandle(userExamRankHistory, 0);
                });
        } else {
            historyRankDataHandle(userExamRankHistory, 0);
        }


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
                // if (userExamData.examId == userData.examId) {
                //     thisIndex = i;
                //     continue;
                // }
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

            var chart;
            //chart = echarts.init(document.getElementById('historyRankChartSinger'), 'macarons');
            if (Report.role =='student') {
                chart = echarts.init(document.getElementById('historyRankChartSinger'), 'macarons');
            }
            else {
                chart = echarts.init(document.getElementById('historyRankChartSingerPar'), 'macarons');
            }
            var option = {
                xAxis: [
                    {
                        type: 'category',
                        data: examNameList,
                        axisLabel: {
                            interval: 0,
                            formatter: function (val) {
                                if(!!isMobile) {
                                    return val.length > 5 ? val.substring(0, 5) + "…" : val;
                                }
                                return formatterEchartsData(val, examNameList.length);
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
            if (!!isMobile && examNameList.length > 2) {
                option.dataZoom = {
                    show: true,
                    start: 0,
                    end: 2 / examNameList.length * 100,
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
        }

        /**
         * 获取文案（这次考试有进步吗？）
         * @param examId
         * @param paperId
         * @param scope
         */
        function getScoreImproveIntro(examId, paperId, scope) {
            var _index = 0;
            if (Report.role =='student') {
                _index = 0;
            }
            else {
                _index = 1;
            }

            var scoreImproveIntroData = '';

            if (scoreImproveIntroData === '') {
                $.getJSON(basePath + "/zhixuebao/feesReport/getScoreImproveIntro/",
                    {examId: examId, paperId: paperId, role: Report.role, scope: scope}, function(data) {

                        scoreImproveIntroData = data;
                        getScoreImproveIntroHandler(scoreImproveIntroData);
                    });
            } else {
                getScoreImproveIntroHandler(scoreImproveIntroData);
            }


            var getScoreImproveIntroHandler = function (data) {
                var text = '';
                if(!!data && !!data.desc) {
                    text += '<b>' + data.desc + '</b>';
                }
                // if(!!data && !!data.title) {
                // 	text = '<b>' + data.title + '</b>' + text;
                // }
                elements.historyRankTableSinger.eq(_index).find('.left').html(text);
            };

            if(scope) {
                elements.historyRankTableSinger.eq(_index).find('.col6').html('本学期考试你在年级的位置分别是');
            }
            else {
                elements.historyRankTableSinger.eq(_index).find('.col6').html('本学期考试你在全班的位置分别是');
            }
        }

        elements.historyRankTableSinger.eq(0).find('.gradeall').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.historyRankTableSinger.eq(0).find('a').removeClass('on');
            _this.addClass('on');
            historyRankDataHandle(userExamRankHistory, 0);
            getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 0);
        });

        elements.historyRankTableSinger.eq(0).find('.grade').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.historyRankTableSinger.eq(0).find('a').removeClass('on');
            _this.addClass('on');
            historyRankDataHandle(userExamRankHistory, 1);
            getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 1);
        });

        // parent
        elements.historyRankTableSinger.eq(1).find('.gradeall').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.historyRankTableSinger.eq(1).find('a').removeClass('on');
            _this.addClass('on');
            historyRankDataHandle(userExamRankHistory, 0);
            getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 0);
        });

        elements.historyRankTableSinger.eq(1).find('.grade').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.historyRankTableSinger.eq(1).find('a').removeClass('on');
            _this.addClass('on');
            historyRankDataHandle(userExamRankHistory, 1);
            getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 1);
        });
    };
    return forewordCtrl;

})();

/**
 * 考试难度
 */
var examCompare = (function(){

    var examCompare = function(){
        this.examDifficult = null;
    };

    examCompare.prototype.init = function(paperId){
        this.paperId = paperId;
        this.initHtml();
        this.initText();
    };

    examCompare.prototype.initHtml = function(){

        var _this = this;
        this.getLastExamCompareResult(function(result){
            _this.examDifficult = result;
            _this.initTips(_this.examDifficult);
        });
    };

    examCompare.prototype.initText = function(){

        this.getLastExamText(function(data){
            var text = '';
            if(!!data && !!data.desc) {
                text += data.desc;
            }
            if(!!data && !!data.title) {
                text = '<b>' + data.title + '</b>' + text;
            }
            elements.examDifInfo.find('.left').html(text);
        });
    };

    examCompare.prototype.getLastExamText = function(callback) {
        var _this = this;
        if(!!Report.paper[_this.paperId].LastExamText) {
            callback(Report.paper[_this.paperId].LastExamText);
        } else {
            var url = basePath + '/zhixuebao/feesReport/getSummaryOfDifficultyInfo/';
            $.getJSON(url,{examId:Request.QueryString("examId"),paperId:this.paperId,role:Report.role},function (data) {Report.paper[_this.paperId].LastExamText=data; callback(Report.paper[_this.paperId].LastExamText);});
        }

        // $.getJSON(url,{examId:Request.QueryString("examId"),paperId:this.paperId,role:Report.role},callback);
    };

    examCompare.prototype.getLastExamCompareResult = function(callback){
        var _this = this;
        if(!!Report.paper[_this.paperId].LastExamCompareResult) {
            callback(Report.paper[_this.paperId].LastExamCompareResult);
        } else {
            var url = basePath + "/zhixuebao/feesReport/getLastExamCompareResult/";
            $.getJSON(url,{"userId":currentRealStudent.id,"paperId":this.paperId},function (data) {Report.paper[_this.paperId].LastExamCompareResult=data; callback(Report.paper[_this.paperId].LastExamCompareResult);});
        }
        // $.getJSON(url,{"userId":currentUser.id,"paperId":this.paperId},callback);
    };

    examCompare.prototype.initTips = function(examDifficult){

        var tip1 = tipsUtil.getDifTip(examDifficult);
        dataUtil.initExamDiff(examDifficult);
        elements.difTip.html(tip1);
    };

    return examCompare;
})();

/**
 * 丢分题难度
 */
var Difficulty = (function() {

    var difficulty = function(){};

    difficulty.prototype.init = function(paperId) {

        var lostDifficultyData;
        //用户总失分
        var lostAllScore = 0;
        //简单题在数组中的位置
        var lostSimpleIndex = 0;
        //是否丢分、丢分率相同
        var isDifficultyEqual = true;
        //获取文案
        this.paperId = paperId;
        var _this = this;
        $.getJSON(basePath + "/zhixuebao/feesReport/getDropPointsDifficultyIntro/",
            {examId: Request.QueryString("examId"), paperId:_this.paperId, role: Report.role}, function (data) {
                var text = '';
                if(!!data && !!data.desc) {
                    text += data.desc;
                }
                if(!!data && !!data.title) {
                    text = '<b>' + data.title + '</b>' + text;
                }
                if (Report.role == 'student') {
                    elements.loseScoreTable.find('.left').html(text);
                }
                else {
                    elements.loseScoreTablePar.find('.left').html(text);
                }
            });
        $.getJSON(basePath + "/zhixuebao/feesReport/getSubjectLostScoreByDifficulty/",
            {userId:currentRealStudent.id,paperId:_this.paperId}, function (data) {
                lostDifficultyData = data;
                //这里对数据进行排序，使丢分最多、丢分率最多的排前面
                for (var i = 0; i < lostDifficultyData.length; i++) {
                    for (var j = i; j < lostDifficultyData.length; j++) {
                        if (lostDifficultyData[i].lostScoreValue < lostDifficultyData[j].lostScoreValue || (lostDifficultyData[i].lostScoreValue == lostDifficultyData[j].lostScoreValue && lostDifficultyData[i].lostScoreTypeRatio < lostDifficultyData[j].lostScoreTypeRatio)) {
                            var temp = lostDifficultyData[i];
                            lostDifficultyData[i] = lostDifficultyData[j];
                            lostDifficultyData[j] = temp;
                        }
                    }
                }
                bindLoseScoreChartData(lostDifficultyData);
            });

        /**
         * 绑定丢分图表
         * @param lostDifficultyData
         */
        function bindLoseScoreChartData(lostDifficultyData) {

            var radius = !!isMobile ? [25, 45] : [60, 80];
            var fontSize = !!isMobile ? 9 : 18;
            var itemGap = !!isMobile ? 25 : 123;

            var labelTop = {
                normal: {
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{b}',
                        textStyle: {
                            baseline: 'bottom'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            };
            var label = {
                formatter: function (params) {
                    return '共' + params.series.totalScore + '分';
                },
                textStyle: {
                    color: '#676767',
                    baseline: 'top',
                    fontSize: fontSize
                }
            };
            var labelBottom = {
                normal: {
                    color: '#ccc',
                    label: {
                        show: true,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var series = [];
            var legendData = {};
            for (var i = 0; i < lostDifficultyData.length; i++) {
                var lostData = lostDifficultyData[i];
                if (i + 1 < lostDifficultyData.length && (lostData.lostScoreValue != lostDifficultyData[i + 1].lostScoreValue || lostData.lostScoreTypeRatio != lostDifficultyData[i + 1].lostScoreTypeRatio)) {
                    isDifficultyEqual = false;
                }
                lostAllScore += lostData.lostScoreValue;
                legendData[lostData.lostScoreTypeName] = lostData.lostScoreValue;
                if (lostData.lostScoreTypeName == "难题") {
                    series.push({
                        type: 'pie',
                        center: ['82%', '50%'],
                        radius: radius,
                        totalScore: lostData.totalScoreValue,
                        x: '66%', // for funnel
                        itemStyle: {
                            normal: {
                                color: '#D66C45',
                                label: label
                            }
                        },
                        data: [
                            {name: 'other', value: 100 - lostData.lostScoreTypeRatio, itemStyle: labelBottom},
                            {name: '难题', value: lostData.lostScoreTypeRatio, itemStyle: labelTop}
                        ]
                    });
                } else if (lostData.lostScoreTypeName == "中等题") {
                    series.push({
                        type: 'pie',
                        center: ['49%', '50%'],
                        radius: radius,
                        totalScore: lostData.totalScoreValue,
                        x: '33%', // for funnel
                        itemStyle: {
                            normal: {
                                color: '#FFB03F',
                                label: label
                            }
                        },
                        data: [
                            {name: 'other', value: 100 - lostData.lostScoreTypeRatio, itemStyle: labelBottom},
                            {name: '中等题', value: lostData.lostScoreTypeRatio, itemStyle: labelTop}
                        ]
                    });
                } else if (lostData.lostScoreTypeName == "简单题") {
                    lostSimpleIndex = i;
                    series.push({
                        type: 'pie',
                        center: ['16%', '50%'],
                        radius: radius,
                        totalScore: lostData.totalScoreValue,
                        x: '0%', // for funnel
                        itemStyle: {
                            normal: {
                                color: '#6293D6',
                                label: label
                            }
                        },
                        data: [
                            {name: 'other', value: 100 - lostData.lostScoreTypeRatio, itemStyle: labelBottom},
                            {name: '简单题', value: lostData.lostScoreTypeRatio, itemStyle: labelTop}
                        ]
                    });
                } else {
                    continue;
                }
            }
            // var chart = echarts.init(document.getElementById('loseScoreChart'), 'macarons');
            if (Report.role == 'student') {
                var chart = echarts.init(document.getElementById('loseScoreChart'), 'macarons');
            }
            else {
                var chart = echarts.init(document.getElementById('loseScoreChartPar'), 'macarons');
            }
            var option = {
                legend: {
                    x: 'center',
                    y: 'bottom',
                    data: ['简单题', '中等题', '难题'],
                    textStyle: {fontSize: fontSize},
                    itemGap: itemGap,
                    formatter: function (data) {
                        return "丢" + legendData[data] + "分";
                    }
                },
                series: series
            };
            chart.setOption(option);
        }
    };

    return difficulty;
})();

//知识点
var KnowledgeControl = (function() {

    var knowledgeControl = function(){};

    knowledgeControl.prototype.init = function(paperId){

        this.paperId = paperId;
        this.knowledges = '';
        var self = this;
        self.getKnowledgeCountData(function(data) {

            self.knowledges = data;

            self.getKnowledgeCountInfo(function(info) {
                var countInfo = '';
                if(!!info) {
                    countInfo = info.desc;
                }
                var counts = dataUtil.geneNotGoodKnowCount(self.knowledges);
                var _html = __knowledgeControlTemplate__({control:dataUtil.geneControl(self.knowledges), notControl:dataUtil.geneNotControl(self.knowledges),
                    counts:counts, info:countInfo});
                if (Report.role == 'student') {
                    elements.knowledgeControl.html(_html);
                    elements.knowledgeControl.find('div.rep-ps-dc').hide();
                }
                else {
                    elements.knowledgeControlPar.html(_html);
                }
            });
        });

    };

    knowledgeControl.prototype.getKnowledgeCountData = function(callback){
        var _this = this;
        if(!!Report.paper[_this.paperId].KnowledgeCountData) {
            callback(Report.paper[_this.paperId].KnowledgeCountData);
        }
        else {
            var url = basePath + '/zhixuebao/feesReport/getknowledges/';
            $.getJSON(url,{paperId:_this.paperId,role:Report.role},function (data) {Report.paper[_this.paperId].KnowledgeCountData=data; callback(Report.paper[_this.paperId].KnowledgeCountData);});
        }

        // $.getJSON(url,{paperId:_this.paperId,role:Report.role},callback);
    };

    knowledgeControl.prototype.getKnowledgeCountInfo = function(callback){
        var _this = this;
        var url = basePath + '/zhixuebao/feesReport/getKnowledgeInfo/';
        $.getJSON(url,{examId:Request.QueryString("examId"),paperId:_this.paperId,role:Report.role},callback);
    };

    return knowledgeControl;
})();

//TOP10
var TopTopic = (function() {

    var topTopic = function(){};

    topTopic.prototype.init = function(paperId) {
        this.paperId = paperId;
        this.getData();
    };

    topTopic.prototype.getData = function() {
        var _this = this;
        this.getTopicData(function(data) {
            if(!data || data.length == 0) {
                elements.currentCityTopTen.hide();
            }
            else {
                var _html = __topTenKnowledgeTemplate__({dataList:_this.dataFormatter(data)});
                if (Report.role == 'student') {
                    elements.topTenKnowledge.html(_html);
                }
                else {
                    elements.topTenKnowledgePar.html(_html);
                }
                elements.buttonEvent = $('button.btn-sh');
                _this.eventListen();
            }
        });
    };

    topTopic.prototype.getTopicData = function(callback){
        var _this = this;
        if(!!Report.paper[_this.paperId].TopicData) {
            callback(Report.paper[_this.paperId].TopicData);
        }
        else {
            var url = basePath + '/zhixuebao/feesReport/getCityTopKnowledges/';
            $.getJSON(url,{classId:examClassId,paperId:this.paperId},function (data) {Report.paper[_this.paperId].TopicData=data; callback(Report.paper[_this.paperId].TopicData);});
        }
        // $.getJSON(url,{classId:examClassId,paperId:this.paperId},callback);
    };

    topTopic.prototype.dataFormatter = function(data) {
        var tmpData = data;
        $.each(tmpData, function(k, v) {
            v.schoolName = '';
            if(v.knowledgeName.indexOf('>>') > -1) {
                var tmp = v.knowledgeName.split('>>');
                v.knowledgeName = tmp[tmp.length - 1];
            }
            if(v.schoolList.length > 3) {
                v.schoolName = v.schoolList[0] + '、' +  v.schoolList[1] + '、' +  v.schoolList[2] + '等' + v.schoolList.length + '所学校';
            }
            else if(v.schoolList.length != 0){
                $.each(v.schoolList, function(kk, vv) {
                    if(kk == v.schoolList.length - 1) {
                        v.schoolName += vv;
                    }
                    else {
                        v.schoolName += vv + '、';
                    }
                });
            }
        });
        return tmpData;
    };

    topTopic.prototype.eventListen = function() {
        elements.buttonEvent.on('click', function() {
            $(".btn-sh-s").toggleClass("btn-sh-h");
            $(".bth-sh-txt-s").toggle();
            $(".bth-sh-txt-h").toggle();
            $(".w-change").toggleClass("w-large");
            $(".s-h").toggle();
        });
    };

    return topTopic;
})();

//推荐内容
var RecommondControl = (function() {

    var recommondControl = function(){};

    recommondControl.prototype.init = function(paperId){
        this.paperId = paperId;
        this.getInfo();
        this.getData();
    };

    recommondControl.prototype.getInfo = function() {

        this.getRecommondControlInfo(function(info) {
            var recommondInfo = '';
            if(Array.isArray(info) && info.length > 0) {
                if(info.length == 1) {
                    recommondInfo = info[0].desc;
                }
                else if(info.length == 2) {
                    recommondInfo = info[0].desc + info[1].desc;
                }
            }
            if (Report.role == 'student') {
                elements.recommondInfo.html(recommondInfo);
            }
            else {
                elements.recommondInfoPar.html(recommondInfo);
            }
        });
    };

    recommondControl.prototype.getData = function() {

        this.getRecommondControlData(function(data) {
            if(!data || (data.easy2learn.length == 0 && data.free2learn.length == 0) ) {
                if (Report.role == 'student') {
                    elements.knows.html("<td>暂无知识点</td>");
                }
                else {
                    elements.knowsPar.html("<td>暂无知识点</td>");
                }
            }
            else {
                if (Report.role == 'student') {
                    elements.knows.html(dataUtil.geneNeedToKnow(data));
                }
                else {
                    elements.knowsPar.html(dataUtil.geneNeedToKnow(data));
                }

            }
        });
    };

    recommondControl.prototype.getRecommondControlInfo = function(callback){
        var _this = this;
        if(!!Report.paper[_this.paperId].RecommondControlInfo) {
            callback(Report.paper[_this.paperId].RecommondControlInfo);
        } else {
            var url = basePath + '/zhixuebao/feesReport/getKnowledgeDetail/';
            $.getJSON(url,{examId:Request.QueryString("examId"),paperId:_this.paperId,role:'parent'},function (data) {Report.paper[_this.paperId].RecommondControlInfo=data; callback(Report.paper[_this.paperId].RecommondControlInfo);});
        }
        // $.getJSON(url,{examId:Request.QueryString("examId"),paperId:_this.paperId,role:'parent'},callback);
    };

    recommondControl.prototype.getRecommondControlData = function(callback) {
        var _this = this;
        if(!!Report.paper[_this.paperId].RecommondControlData) {
            callback(Report.paper[_this.paperId].RecommondControlData);
        } else {
            var url = basePath + '/zhixuebao/feesReport/getLearnKnowledgeList/';
            $.getJSON(url,{paperId:_this.paperId},function (data) {Report.paper[_this.paperId].RecommondControlData=data; callback(Report.paper[_this.paperId].RecommondControlData);});
        }
        // $.getJSON(url,{paperId:_this.paperId},callback);
    };

    return recommondControl;
})();

// 更新考试下拉列表
Report.UpdateSelectBox= function () {
    var role = Report.role == 'student'?'StuAll':'ParAll';
    var currentExamId = Request.QueryString("examId");
    for (var i = 0; i < userExamArchives.length; i++) {
        var className = '';
        if (userExamArchives[i].examId == currentExamId) {
            className = 'on';
            $('.examNameOn').html(userExamArchives[i].examName);
        }
        $('.topSlt').append('<a href="' +  basePath + '/zhixuebao/feesReport/report' + role +'/?examId=' + userExamArchives[i].examId + '&classId=' + userExamArchives[i].classId + '" class="' + className +'">' + userExamArchives[i].examName +'</a>');
    }

    $('.listDownUp').click(function () {
        $(".topSlt").toggle();
        $('.arror-in').toggleClass('arror-up').toggleClass('arror-down');
    });

    $('.topSlt a').click(function () {
        var examName = $(this).attr('title');
        $('.examNameOn').html(examName);
        $(".topSlt").hide();
        $('.arror-in').toggleClass('arror-up').toggleClass('arror-down');
    });
};

//我的得分率与其他同学的对比文案信息
var tipsStudentInfo =[{},{}];

var tipsUtilStu = {

    init: function (paperId) {
        this.paperId = paperId;
        this.initTipData();
    },

    /**
     * 初始化提示信息
     */
    initTipData: function (ratioInfo,id) {
        var _this = this;

        if(id){
            if(tipsStudentInfo[1][_this.paperId]){
                // tips[1]=tipsStudentInfo[1];
                $('#_tipId').text(tipsStudentInfo[1][_this.paperId]['title']);
                $('#_tipId1').text(tipsStudentInfo[1][_this.paperId]['desc']);
            }else{
                $.get(basePath+"/zhixuebao/feesReport/getCompareToOthersIntro/",
                    {examId:Request.QueryString("examId"),paperId:_this.paperId,role:"student", scope:1},function(data){
                        tipsStudentInfo[1][_this.paperId] =$.parseJSON(data);
                        $('#_tipId').text(tipsStudentInfo[1][_this.paperId]['title']);
                        $('#_tipId1').text(tipsStudentInfo[1][_this.paperId]['desc']);
                    });
            }
        }else{
            if(tipsStudentInfo[0][_this.paperId]){
                // tips[0]=tipsStudentInfo[0];
                $('#_tipId').text(tipsStudentInfo[0][_this.paperId]['title']);
                $('#_tipId1').text(tipsStudentInfo[0][_this.paperId]['desc']);
            }else{
                $.get(basePath+"/zhixuebao/feesReport/getCompareToOthersIntro/",
                    {examId:Request.QueryString("examId"),paperId:_this.paperId,role:"student", scope:0},function(data){
                        tipsStudentInfo[0][_this.paperId] =$.parseJSON(data);
                        $('#_tipId').text(tipsStudentInfo[0][_this.paperId]['title']);
                        $('#_tipId1').text(tipsStudentInfo[0][_this.paperId]['desc']);
                    });
            }
        }
    },

    /**
     * 哪些题我失误了提示语。
     * @param subjectRatio 学生得分率
     * @param ratioInfos 得分率(可能为：班级、年级、跟我相近的同学)。
     */
    getTips: function (subjectRatios, ratioInfos) {
        if (!subjectRatios || !ratioInfos) {
            return "";
        }
        var tips = [];
        var topicNums1 = [], topicNums2 = []; //
        var len = subjectRatios.length;
        for (var i = 0; i < len; i++) {
            if (ratioInfos[i].scoreRatio - subjectRatios[i].scoreRatio > 25) {
                topicNums1.push(subjectRatios[i].topicNum);
            } else if (subjectRatios[i].scoreRatio - ratioInfos[i].scoreRatio > 25) {
                topicNums2.push(subjectRatios[i].topicNum);
            }
        }
        if (topicNums1.length > 0) {
            tips.push("<h1>第" + topicNums1.join("、") + "题做对的人很多哦，你怎么这么粗心呢?</h1>");
        }
        if (topicNums2.length > 0) {
            tips.push("<h1>第" + topicNums2.join("、") + "题做对的人不多哦，你就是其中一个！你的学霸之气又显露出来了！</h1>");
        }
        if (topicNums1.length == 0 && topicNums2.length == 0) {
            return "<h1>你每道题的得分率都和班级平均得分率紧紧吻合，一点儿不脱离群众！</h1>";
        }
        return tips.join("");
    },
    /**
     * 简单题、中档题、难题的提示信息
     */
    getDiffcultTip: function (result) {
        if (!result) {
            return "";
        }
        var tipArr = [];
        var tip1 = ""; //简单题、中等题、难题的提示信息
        var tip2 = ""; //建议信息
        var losts = result;
        var maxLostScore = 0;//丢的最多分
        var lostOne = null;
        for (var i = 0; i < losts.length; i++) {
            maxLostScore = losts[i].lostScoreValue > maxLostScore ? losts[i].lostScoreValue : maxLostScore;
        }
        for (var j = 0; j < losts.length; j++) {
            if (maxLostScore == 0) {
                break;
            }
            if (losts[j].lostScoreValue == maxLostScore) {
                lostOne = losts[j];
                break;
            }
        }

        var userExamData;
        for ( var i = 0; i < userExamDataList.length; i++){
            if (Report.role == 'student') {
                if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                    userExamData = userExamDataList[i];
                }
            }
            else {
                if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                    userExamData = userExamDataList[i];
                }
            }

        }

        //丢分情况，判断该怎么提示
        if (lostOne != null) {
            if (lostOne.lostScoreTypeName == "难题") {
                tip1 = "在难题上丢分最多已经是比较理想的情况了。学霸体质妥妥的。";
                tip2 = "难题上丢分是可以理解的事情，多练习不同题型，多钻研解题技巧就好了！";
            } else if (lostOne.lostScoreTypeName == "中等题") {
                tip1 = "知识基本掌握了，但要注意易混内容，扫清死角。";
                tip2 = "中档题失分多是因为知识出现死角或者熟练度不够，要注意复习的全面性，多关注错题本哦！";
            } else if (lostOne.lostScoreTypeName == "简单题") {
                var ifSocre = userExamData.score + lostOne.lostScoreValue;
                errTopicObj.getUserSubjectClassRank(ifSocre, function (result) {
                    if (result) {
                        var beatRatio = result.ratio - userExamData.classRank.ratio;
                        tip1 = "简单题丢这么多分，你够粗心的！丢的这些分足够你在班级多击败" + beatRatio + "%的同学。";
                        tip2 = "要克服粗心的毛病哦！另外，提高熟练度也能够有效克服粗心的问题。在智学做练习的时候多关注熟练度指数啊。";

                        elements.tipId1.html("<h2>" + tip1 + "</h2>");
                        elements.tipId2.html("<p>" + tip2 + "</p>");

                        return new Array();
                    }
                });
            }
        } else {//没丢分情况
            tip1 = currentRealStudent.name + "的表现太棒了！满分！";
            tip2 = currentRealStudent.name + "能够轻松自如驾驭各种难度的题型，说明你学习比较游刃有余，潜力也比较大，这种情况下，可以适度开发一下潜能，挑战下更高难度的题型，学习一些综合性的专题内容等。";
        }
        tipArr.push("<h2>" + tip1 + "</h2>");
        tipArr.push("<p>" + tip2 + "</p>");
        return tipArr;
    },

    initRankTipData: function (ranks) {
        if (!ranks) {
            return;
        }
        var _ratios = [];//每次的班级得分率(击败率)
        //排序，最后一次考试放最后
        for (var i = ranks.length - 1; i >= 0; i--) {
            _ratios.push(ranks[i].classRank.ratio);
        }

        var title = "";
        var tip = "";
        if (_ratios.length == 1) {
            tip = "我只知道你一次考试成绩，还需要时间来了解你哦！";
        } else if (dataUtilStu.isMaxScore(ranks)) {
            if (userExamData.subjectCode == "01" || userExamData.subjectCode == "01A") {
                title = "语文学习渐入佳境，最高成绩出现！";
                tip = "语文学科创历史新高了！语文上的每一点进步都很不容易，因为背后都是每一天的坚持换来的。一定要总结自己的学习方法，基础知识多记多练，坚持多阅读多感悟，多摘抄多练笔，这就是语文的捷径了。";
            } else {
                title = "当当当当！个人最好成绩出现了！";
                tip = "这一刻应该与家人朋友分享啊！相信你以后还会创造新的记录！";
            }
        } else if (dataUtilStu.isMinScore(ranks)) {
            title = "哎呀呀，这是你发挥最不好的一次。";
            if (userExamData.subjectCode == "01" || userExamData.subjectCode == "01A") {
                tip = "你语文从来没考的这么糟糕过是吧？比沮丧更重要的是总结教训。是不是最近忽视了语文的学习？是不是该背诵的没好好背？或者最近的阅读文段有点难？又或者，有时候不是你不够努力，只是别人更努力！但是不管怎么样，你都要记住，持每天积累学习，坚持多阅读多感悟，多摘抄多练笔。还可以跟着后面的学习建议及时查漏补缺。";
            } else {
                tip = "有时候不是你不够努力，只是别人更努力！相信下次你会大反击！";
            }
        } else {
            var len = _ratios.length;
            if (userExamData.subjectCode == "01" || userExamData.subjectCode == "01A") {
                if (_ratios[len - 1] > _ratios[len - 2]) {//进步的情况
                    if (_ratios[len - 1] - _ratios[len - 2] > 15) {
                        title = "见证奇迹！语文成绩大幅提高！";
                        tip = "语文成绩是不太容易迅速提高的，你能进步这么多，离不开这段时间的努力，而且我相信你一定是在这门学科上越来越有感觉了。";
                    } else if (_ratios[len - 1] - _ratios[len - 2] > 5 && _ratios[len - 1] - _ratios[len - 2] <= 15) {
                        title = "语文进步很快！坚持和积累才是语文的捷径。";
                        tip = "语文属于积累型学科，不在于今天学了几个小时，重要的是，是否每天坚持学习。爱上语文，坚持积累，语文成绩就会进步。";
                    } else if (_ratios[len - 1] - _ratios[len - 2] > 0 && _ratios[len - 1] - _ratios[len - 2] <= 5) {
                        title = "成绩小幅进步，比较平稳。";
                        tip = "语文属于积累型学科，不太容易取得大幅度进步。积累型学科最重要的就是坚持，不需要每天花太多时间做额外的补习，但是一定要每天坚持学习。多读好的文章对于提高阅读和写作能力都有帮助，每天做一道基础知识题目，有助于积累知识，避免基础知识部分丢分。这都是很好的学习方法。";
                    }
                } else if (_ratios[len - 1] == _ratios[len - 2]) {
                    title = "成绩很平稳，居然和上次一样！";
                    tip = "成绩平稳也是件很不容易的事情。语文是积累型学科，进步本来就不太容易。如果你已经有成熟的适合自己的学习方法，就按照自己的方法和节奏坚持下去吧，如果还没有，就赶快找到适合自己的学习方法和学习节奏。每天一道基础知识题，每天阅读一篇好文章，都是很重要的语文学习方法。";
                } else {//退步的情况
                    if (_ratios[len - 2] - _ratios[len - 1] <= 5) {
                        title = "有一种成绩小幅度下滑叫做迂回前进。";
                        tip = "成绩的波动在所难免，前进的道路都是曲折的！不必过于紧张，不过还是要总结哪部分成绩下降了。阅读和写作是语文的两大核心能力，但是这部分提分是比较慢的，基础知识比较琐碎，每天做一道题坚持一个月就能明显进步。根据自己的情况制定适合自己的学习策略吧，或者看看我们的学习建议。";
                    } else if (_ratios[len - 2] - _ratios[len - 1] > 5 && _ratios[len - 2] - _ratios[len - 1] <= 15) {
                        title = "成绩下滑了，及时总结教训吧！";
                        tip = "语文成绩明显下降，这是一件危险的事情。语文虽然不建议每天投入大量时间突击式学习，但是坚持学习是很重要的，哪怕每天只能做一道基础知识题目也行。另外，合理安排学习时间和学习内容是很重要的，多听听建议吧！";
                    } else {
                        title = "成绩下滑严重，需要详细的诊断分析。";
                        tip = "语文是积累型学科，不太容易产生大的波动，这次成绩下滑这么严重，什么原因呢？语文的重要性毋容置疑，语文学不会，数学读题能读懂吗？物理说啥能理解吗？英语语法能学会吗？更不用说大段大段文字的历史地理政治了！即使是件发挥失常事件，也要想到所有的偶然都包含必然，所以你还是要检讨下是不是最近对语文的投入不够？别忘了，语文必须坚持积累！基础识记的内容一定要花时间多积累，不是考前抱佛脚，一定要每天固定投入半个小时来做基础题、背诗文。语文就是一个长期积累，厚积薄发的学科，请一定结合学习建议及时查漏补缺！";
                    }
                }
            } else {
                if (_ratios[len - 1] > _ratios[len - 2]) {//进步的情况
                    if (_ratios[len - 1] - _ratios[len - 2] > 15) {
                        title = "成绩起飞！地球已经阻挡不了你前进的步伐了！";
                        tip = "成绩快速提高是你努力的结果，记得分享你的心得给大家啊！";
                    } else if (_ratios[len - 1] - _ratios[len - 2] > 5 && _ratios[len - 1] - _ratios[len - 2] <= 15) {
                        title = "成绩提速！隐隐露出学霸的气质了！";
                        tip = "相信你一定在这门课程的学习上颇有心得，试试用学习这门课程的热情去对待别的学科，你也会提高的！";
                    } else if (_ratios[len - 1] - _ratios[len - 2] > 0 && _ratios[len - 1] - _ratios[len - 2] <= 5) {
                        title = "进步啦！请保持进步的姿势！";
                        tip = "就是这个姿势！带着你良好的进步感觉继续前进吧！也许你对于提高这门学科成绩已经有一些心得了，无论如何，学习热情、良好的学习习惯和有重点的学习策略都是很重要的，这些都可以在学习建议中找到！";
                    }
                } else if (_ratios[len - 1] == _ratios[len - 2]) {
                    title = "这一刻应该与家人朋友分享啊！相信你以后还会创造新的记录！";
                    tip = "成绩平稳也是件很不容易的事情，保持这门学科的优势吧！努力的付出是需要时间来收获成果的，保持热情，认真查看学习建议！";
                } else {//退步的情况
                    if (_ratios[len - 2] - _ratios[len - 1] <= 5) {
                        title = "有一种成绩小幅度下滑叫做迂回前进。";
                        tip = "成绩的波动在所难免，前进的道路都是曲折的！";
                    } else if (_ratios[len - 2] - _ratios[len - 1] > 5 && _ratios[len - 2] - _ratios[len - 1] <= 15) {
                        title = "成绩下滑了，及时总结教训吧！";
                        tip = "成绩下滑超过正常波动范围，需要对照后面的原因分析及时总结教训。即使是发挥失常或者马虎大意，也要重视，因为马虎大意和不会只有一步之遥。";
                    } else {
                        title = "成绩下滑严重，需要详细的诊断分析。";
                        tip = "成绩严重下滑，是发挥失常还是这阶段的学习出了问题？需要及时总结原因，多注意看后面的原因分析啊。同时，合理分配学习时间也是很重要的。请认真参看学习建议，并及时听取老师的指导意见。";
                    }
                }
            }
        }
        var html = "<h1>" + title + "</h1><p>" + tip + "</p>";
        $("#rankTip").html(html);
    }
};
/**
 * 对比班级、年级。
 */
var CompareCtrl = (function () {

    var compareCtrl = function (schoolId, classId, paperId, userId, subjectRatio) {
        this.schoolId = schoolId;
        this.classId = classId;
        this.paperId = paperId;
        this.userId = userId;
        this.subjectRatio = subjectRatio;
        this.count = 10; //默认比较10位同学
    };

    compareCtrl.prototype.init = function () {
        this.initEvent();
    };

    compareCtrl.prototype.initEvent = function () {
        var _this = this;
        $("._compare").unbind();
        $("._compare").on("click",function (event) {
            //$(this).parent().children().removeClass("on");
            event.target = event.target ? event.target : event.srcElement;
            $("._compare li a").removeClass("on");
            $(event.target).addClass("on");
            var id = $(event.target).attr("id");
            var params = {};
            if (id == "compareGrade") {
                params.schoolId = _this.schoolId;
                params.paperId = _this.paperId;
                _this.getTopicRatioInfo(id, params, function (data) {
                    var chartParams = dataUtilStu.geneChartParams(_this.subjectRatio, data);//年级得分率
                    chartUtilStu.bindSubjectScoreChartData(chartParams, "年级得分率");
                    tipsUtilStu.initTipData(data,id);
                });
            } else if (id == "compareNearby") {
                params.userId = _this.userId;
                params.paperId = _this.paperId;
                params.count = _this.count;
                _this.getTopicRatioInfo(id, params, function (data) {
                    var chartParams = dataUtilStu.geneChartParams(_this.subjectRatio, data);//相近同学得分率
                    chartUtilStu.bindSubjectScoreChartData(chartParams, "相近同学得分率");
                    tipsUtilStu.initTipData(data);
                });
            } else {
                params.classId = _this.classId;
                params.paperId = _this.paperId;
                _this.getTopicRatioInfo(id, params, function (data) {
                    var chartParams = dataUtilStu.geneChartParams(_this.subjectRatio, data);//班级得分率
                    chartUtilStu.bindSubjectScoreChartData(chartParams, "班级得分率");
                    tipsUtilStu.initTipData(data);
                });
            }
        })


    };

    compareCtrl.prototype.getTopicRatioInfo = function (id, params, callback) {
        var url = "";
        switch (id) {
            case "compareGrade":
                url = "/zhixuebao/feesReport/getGradeSubjectTopicRatio/";
                break;
            case "compareNearby":
                url = "/zhixuebao/feesReport/getNearbySubjectTopicRatio/";
                break;
            default:
                url = "/zhixuebao/feesReport/getClassSubjectTopicRatio/";
        }
        var URL = basePath + url;
        $.getJSON(URL, params, callback);
    };

    return compareCtrl;
})();

var chartUtilStu = {
    /**
     * 一些初始化信息
     */
    init: function (subjectRatioInfo, classRatioInfo) {
        this.bindSubjectScoreChartData(dataUtilStu.geneChartParams(subjectRatioInfo, classRatioInfo), "班级得分率");
        this.bindUserExamData();
        //this.bindUserInfo();
        this.initHeadFoot();
    },
    /**
     * 初始化学生信息
     */
    bindUserExamData: function () {

        var userExamData;
        for ( var i = 0; i < userExamDataList.length; i++){
            if (Report.role == 'student') {
                if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                    userExamData = userExamDataList[i];
                }
            }
            else {
                if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                    userExamData = userExamDataList[i];
                }
            }

        }

        elements.subjectName2.html(userExamData.subjectName);
        elements.examName.html(userExamData.examName);
        elements.userName.html(currentRealStudent.name);
        if (scoreToLevel == true) {
            elements.rankTable.find('b.stu-yel').html(dataUtilStu.getScoreToLevel(userExamData.score, userExamData.standardScore));
        } else {
            elements.rankTable.find('b.stu-yel').html(userExamData.score);
        }
        if (forbidAvgScore == true) {
            elements.rankTable.find('.classAverage').html("--");
            elements.rankTable.find('.gradeAverage').html("--");
        } else if (scoreToLevel == true) {
            elements.rankTable.find('.classAverage').html(dataUtilStu.getScoreToLevel(userExamData.classRank.avgScore, userExamData.standardScore));
            elements.rankTable.find('.gradeAverage').html(dataUtilStu.getScoreToLevel(userExamData.gradeRank.avgScore, userExamData.standardScore));
        } else {
            elements.rankTable.find('.classAverage').html(userExamData.classRank.avgScore);
            elements.rankTable.find('.gradeAverage').html(userExamData.gradeRank.avgScore);
        }
        if (forbidRatio == true) {
            elements.rankTable.find('.classPosition').html("--");
            elements.rankTable.find('.gradePosition').html("--");
        } else if (ratioToLevel == true) {
            elements.rankTable.find('.classPosition').html(dataUtilStu.getRatioToLevel(userExamData.classRank.ratio));
            elements.rankTable.find('.gradePosition').html(dataUtilStu.getRatioToLevel(userExamData.gradeRank.ratio));
        } else {
            elements.rankTable.find('.classPosition').html('前<b>' + (100 - userExamData.classRank.ratio) + '%</b>');
            elements.rankTable.find('.gradePosition').html('前<b>' + (100 - userExamData.gradeRank.ratio) + '%</b>');
        }
    },

    /**
     * 绑定用户基本信息
     */
    bindUserInfo: function () {
        var userName = currentRealStudent.name;
        if (userName.length > 6) {
            userName = userName.substring(0, 6) + "…";
        }
        elements.userName.text(userName);
        initUserAvatar(currentRealStudent.avatar, elements.userAvatar);
    },

    /**
     * 初始化头部底部
     */
    initHeadFoot: function () {

        var foot = new Foot(userExamData);
        foot.init();

        // var examSubjectData = [];
        // examSubjectData = $.grep(userExamDataList, function (n, i) {
        //     return n.subjectCode;
        // });
        // var foot = new Foot(userExamData);
        // foot.init();
        // var subjectListHtml = "";
        // for (var i = 0; i < examSubjectData.length; i++) {
        //     var data = examSubjectData[i];
        //     var onClass = "";
        //     if (Request.QueryString("paperId") == data.paperId) {
        //         onClass = 'class="on cur"';
        //     }
        //     subjectListHtml += '<a ' + onClass + ' href="' + basePath + '/zhixuebao/feesReport/reportStuSinger/?paperId=' + data.paperId + '&classId=' + Request.QueryString("classId") + '&examId=' + Request.QueryString("examId") + '">' + data.subjectName + '</a>';
        // }
        // elements.subjectList.html(subjectListHtml);
        // if (!isVip) {
        //     elements.subjectList.find("a").attr("href", "#");
        //     elements.subjectList.find("a").click(function () {
        //         if (!$(this).hasClass("cur")) {
        //             var url = studentUrl + "/vip/goodsList/";
        //             window.open(url);
        //         }
        //     });
        // }
    },

    /**
     * 初始化图表(我的得分率与其他同学的对比)
     * @param chartParams 图标参数
     * @param ratioName 被学生比较的标题(如：班级得分率)
     */
    bindSubjectScoreChartData: function (chartParams, ratioName) {
        var subjectName = chartParams['topicNums'];
        var myScore = chartParams['ratios'];
        var avgScore= chartParams['ratioInfo'];
        var myChart = echarts.init(document.getElementById('subjectScoreChart'), 'macarons');
        var chartLegend = ['我的成绩','平均分'];
        var option = {
            title: {
                text:'我的分数与平均得分率的对比'
            },
            tooltip : {
                trigger: 'axis',
                formatter : '{b}<br/>{a0}:{c0}%<br/>{a1}:{c1}%'
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
                    },
                    axisLabel: {
                        show: true,
                        formatter: function(data){
                            return data + '%';
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
                            color: '#f9c443',
                            label: {
                                show: true,
                                position: 'top',
                                formatter: function(data){
                                    return data.value + '%';
                                },
                                textStyle:{
                                    color:'#000000',
                                    fontSize:16
                                }
                            }
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
                            color:'#99c865',
                            label: {
                                show: true,
                                position: 'top',
                                formatter: function(data){
                                    return data.value + '%';
                                },
                                textStyle:{
                                    color:'#EF2647',
                                    fontSize:16
                                }
                            }
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

        myChart.setOption(option);
    },

    /**
     * 这次考试有进步吗20160612
     * @param chartParams
     */
    bindRankChartData: function (chartParams) {
        var examNameList = [];
        var ratioList =[];
        if(chartParams.ratios.length >5){
            for (var i = 1; i <= 5; i++) {

                examNameList.push(chartParams.examNames[chartParams.ratios.length-i]);
                ratioList.push(chartParams.ratios[chartParams.ratios.length-i]);
            }
        }else{
            for (var i = 0; i < chartParams.ratios.length; i++) {

                examNameList.push(chartParams.examNames[i]);
                ratioList.push(chartParams.ratios[i]);
            }
        }


        var chart = echarts.init(document.getElementById('rankChart'), 'macarons');
        var option = {
            xAxis: [
                {
                    type: 'category',
                    data: examNameList,
                    axisLabel: {
                        interval: 0,
                        formatter: function (val) {
                            return val.length > 10 ? val.substring(0, 10) + "…" : val;
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
                                    return '前'+param.value + "%";
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


};

var dataUtilStu = {
    /**
     * 获取学生班级、年级排名信息
     */
    getRankTableTemplate: function () {
        var data = userExamData;
        var html = __rankTableTemplate__({"rankData": data,
            "ratioToLevelText": dataUtilStu.ratioToLevelText(data),
            "scoreToLevelText": dataUtilStu.scoreToLevelText(data),
            "isForbidAvgScore": dataUtilStu.isForbidAvgScore(forbidAvgScore),
            "isForbidRatio": dataUtilStu.isForbidRatio(forbidRatio)});
        return html;
    },
    isRatioToLevel: function (isRatioToLevel) {
        if (isRatioToLevel) {
            return isRatioToLevel;
        }
        return false;
    },
    /**
     * 班级击败比率 等级text。
     * 上海某些学校要求 将报告中的击败率修改为等级.
     * add: 2015-12-08
     */
    classRatioLeval: function (ueDate) {
        var data = ueDate;
        var result = "D";
        if (data.classRank.ratio >= 75) {
            result = "A";
        } else if (data.classRank.ratio >= 50) {
            result = "B";
        } else if (data.classRank.ratio >= 25) {
            result = "C";
        } else {
            result = "D";
        }
        return result;
    },
    /**
     * 年级击败比率 等级text。
     * @param ueDate
     * @returns {String}
     */
    gradeRatioLeval: function (ueDate) {
        var data = ueDate;
        var result = "D";
        if (data.gradeRank.ratio >= 75) {
            result = "A";
        } else if (data.gradeRank.ratio >= 50) {
            result = "B";
        } else if (data.gradeRank.ratio >= 25) {
            result = "C";
        } else {
            result = "D";
        }
        return result;
    },

    /**
     * 击败比率 等级text。
     * (包括班级、年级的击败比率)
     * @param data
     * @returns {___anonymous8437_8477}
     */
    ratioToLevelText: function (data) {
        var result = {classRatioText: null, gradeRatioText: null};
        var is = this.isRatioToLevel(ratioToLevel);
        if (is) {
            result.classRatioText = this.classRatioLeval(data);
            result.gradeRatioText = this.gradeRatioLeval(data);
        }
        return result;
    },


    /**
     * 分数转为等级情况下：需展示的等级文本.
     */
    scoreToLevelText: function (data) {
        var result = {classHighScoreText: null, gradeHighScoreText: null, myRankText: null};
        var is = this.isScoreToLevel(scoreToLevel);
        if (is) {
            //满分
            var sScore = data.standardScore;
            result.classHighScoreText = this.getScoreToLevel(data.classRank.highScore, sScore);
            result.gradeHighScoreText = this.getScoreToLevel(data.gradeRank.highScore, sScore);
            result.myScoreText = this.getScoreToLevel(data.score, sScore);
        }
        return result;
    },

    /**
     * 是否将分数展示为等级
     * @param is
     * @returns 是否
     */
    isScoreToLevel: function (is) {
        if (is) {
            return is;
        }
        return false;
    },

    /**
     * 分数等级
     * 安徽某些学校要将 最高分、我的得分展示为等级.
     * @param score
     * @param standardScore
     * @returns {String} 等级[A B C D]
     */
    getScoreToLevel: function (score, standardScore) {
        var level = "D";
        if (score >= standardScore * 0.85) {
            level = "A";
        } else if (score >= standardScore * 0.7) {
            level = "B";
        } else if (score >= standardScore * 0.6) {
            level = "C";
        } else {
            level = "D";
        }
        return level;
    },

    /**
     * 获取击败率等级
     */
    getRatioToLevel: function (ratio) {
        var level = "D";
        if (ratio >= 75) {
            level = "A"
        } else if (ratio >= 50) {
            level = "B"
        } else if (ratio >= 25) {
            level = "C"
        } else {
            level = "D"
        }
        return level;
    },

    /**
     * 是否屏蔽平均分。
     * (始终展示为 --)
     * @param is
     * @returns 是否
     */
    isForbidAvgScore: function (is) {
        if (is) {
            return is;
        }
        return false;
    },

    /**
     * 是否屏蔽击败比率
     * @param is
     * @returns 是否
     */
    isForbidRatio: function (is) {
        if (is) {
            return is;
        }
        return false;
    },

    /**
     * 获取错题题号列表html
     */
    getErrTopicNoTemplate: function (topics) {
        var html = __errTopicNoTemplate__({"errTopics": topics});
        return html;
    },

    /**
     * 获取错题答案解析html
     */
    getErrTopicAnswerTemplate: function (topic, improveRank) {
        var html = __errTopicAnswerTemplate__({"topic1": topic, "rankImprove": improveRank});
        return html;
    },
    /**
     * 这里只传入ratioInfo，可能是班级或年级题目得分率信息
     * 因为始终拿当前学生得分率和班级或年级得分率比较
     */
    geneChartParams: function (subjectRatioInfo, ratioInfo) {
        var _subjectRatio = subjectRatioInfo;
        var _ratioInfo = ratioInfo;
        if (!_subjectRatio && !_ratioInfo) {
            return null;
        }
        //1.我的得分率
        var topicNums = [], subjectRatios = [];
        for (var i = 0, topic; topic = _subjectRatio[i++];) {
            topicNums.push(topic.topicNum + "题");
            subjectRatios.push(topic.scoreRatio);
        }

        //2.班级得分率
        var ratios = [];
        for (var i = 0, topic; topic = _ratioInfo[i++];) {
            ratios.push(topic.scoreRatio);
        }

        var chartParams = {};
        chartParams.topicNums = topicNums;//题号
        chartParams.ratios = subjectRatios;//我的得分率
        chartParams.ratioInfo = ratios; //班级或年级得分率
        return chartParams;
    },

    geneRankChartParams: function (ranks) {
        if (!ranks) {
            return null;
        }
        var _examNames = [];
        var _ranks = [];
        var _thisIndex = -1;
        for (var i = ranks.length - 1; i >= 0; i--) {
            _examNames.push(ranks[i].examName);
            _ranks.push(ranks[i].classRank.ratio);
            if (userExamData.examId == ranks[i].examId) {
                _thisIndex = ranks.length - 1 - i;
            }
        }
        var charParams = {};
        charParams.examNames = _examNames;
        charParams.ratios = _ranks;
        charParams.thisIndex = _thisIndex;
        return charParams;
    },
    /**
     * 从历史考试中判断单科，最后一次考试是否为最高分数
     */
    isMaxScore: function (ranks) {
        if (!ranks || ranks.length == 1) {
            return false;
        }
        var maxScore = 0;
        for (var i = 1; i < ranks.length; i++) {
            maxScore = ranks[i].score > maxScore ? ranks[i].score : maxScore;
        }
        //最后一次考试 和 以前所有次考试的最高分比较
        if (ranks[0].score > maxScore) {
            return true;
        }
        return false;
    },
    /**
     * 最后一次考试-是否为最低分
     * @param ranks
     * @returns {Boolean}
     */
    isMinScore: function (ranks) {
        if (!ranks || ranks.length == 1) {
            return false;
        }
        var minScore = 999;
        for (var i = 1; i < ranks.length; i++) {
            minScore = ranks[i].score < minScore ? ranks[i].score : minScore;
        }
        //最后一次考试 和 以前所有次考试的最低分比较
        if (ranks[0].score < minScore) {
            return true;
        }
        return false;
    }

};

// 单科 考点闯关
Report.dealName = function (knowName) {
    if (!knowName) {
        return "";
    }
    var index = knowName.lastIndexOf(">>");
    if (index != -1) {
        var newName = knowName.substring(index + 2);
        return newName;
    } else {
        return knowName;
    }
    return "";
};
var howtodoCtrl = (function () {
    var howtodoCtrl = function () {};
    howtodoCtrl.prototype.init = function (paperId) {
        this.paperId = paperId;
        this.initLearnKnow();
    };
    howtodoCtrl.prototype.initLearnKnow = function () {
        this.getLearnKnowledgeList(function (result) {
            var knows1 = [];//现在立马学-简单，很快能学会
            var knows2 = [];//期末前必须学


            for (var i = 0; i < result.easy2learn.length; i++) {
                var newName1 = Report.dealName(result.easy2learn[i].name);
                var newName2 = Report.dealName(result.free2learn[i].name);
                knows1.push("<li>" + newName1 + "</li>");
                knows2.push("<li>" + newName2 + "</li>");
            }

            if (knows1.length == 0) {
                knows1.push("<li>暂无知识点</li>");
            }
            if (knows2.length == 0) {
                knows2.push("<li>暂无知识点</li>");
            }

//			$("#knowList1").html(knows1.join(""));
            $("#knowList2").html(knows2.join(""));
        });
    };
    howtodoCtrl.prototype.getLearnKnowledgeList = function (callback) {
        var _this = this;
        if(!!Report.paper[_this.paperId].LearnKnowledgeList) {
            callback(Report.paper[_this.paperId].LearnKnowledgeList);
        }
        else {
            var url = basePath + "/zhixuebao/feesReport/getLearnKnowledgeList/";
            $.getJSON(url, {"paperId": _this.paperId, "isMaster": false}, function (data) {Report.paper[_this.paperId].LearnKnowledgeList=data; callback(Report.paper[_this.paperId].LearnKnowledgeList);});
        }
        // $.getJSON(url, {"paperId": this.paperId, "isMaster": false}, callback);
    };

    howtodoCtrl.prototype.getTaskByPaper = function (paperId, callback) {
        $.ajax({
            url: basePath + "/zhixuebao/studytask/getTaskByPaper/",
            data: {paperId: paperId},
            type: "GET",
            dataType: "json",
            success: function (data) {
                try {
                    var _data = data;
                    if (typeof data == "string") {
                        _data = eval('(' + data + ')');
                    }
                    if (typeof callback == "function") {
                        callback(data);
                    }
                } catch (e) {
                    if (typeof callback == "function") {
                        callback(null);
                    }
                }
            },
            error: function (data) {
                if (typeof callback == "function") {
                    callback(null);
                }
            }
        });
    }
    /**
     * 生成任务关卡
     * @param element 包含任务关卡的标签id
     * @param examId 考试Id
     * @param paperId 试卷Id
     */
    howtodoCtrl.prototype.createTaskHtml = function (element, examId, paperId) {
        var _this = this;
        if(!!Report.paper[paperId].studyTask) {
            taskHtml(Report.paper[paperId].studyTask);
        } else {

            this.getTaskByPaper(paperId, function (data) {
                Report.paper[paperId].studyTask = data;
                taskHtml(Report.paper[paperId].studyTask);
            });
        }

        function taskHtml(data) {
            var html = '';
            var missions;
            var count = 0;

            if (data && data.missions) {
                missions = data.missions;
                count = missions && missions.length;
            }

            if (count == 0) {
                html = '<p style="color: gray;font-size: 24px;margin: 40px 0 0 100px;">暂时无法获取到闯关任务</p>';
            }else{
                var subName = elements.top_subjectList.find('a.on').html();
                var iconCss = _this.getSubjectIconCss(subName);
                html+='<div class="left fl">'+
                    '<div class="icon"><div class="subbtnb '+iconCss+'"></div></div>'+
                    '<p class="sub">'+subName+'</p>'+
                    '<p class="col6 ft14 tc">共计'+count+'个知识点未掌握</p>'+
                    "</div>"
            }



            for (var j = 0; j < count; j++) {
                if (missions[j].locked) {
                    html += '<a href="javascript:void(0);" title="' + _this.filterKnowledgeName(missions[j].knowledge.knowledgeName) + '" class="cg-mod-lock fl">';
                } else {
                    if (j + 1 == count) {
                        html += '<a href="javascript:void(0)" title="' + _this.filterKnowledgeName(missions[j].knowledge.knowledgeName) + '" data-subject="' + data.subjectCode +
                            '" data-mission="' + missions[j].missionId + '" data-knowledge="' + missions[j].knowledge.knowledgeCode + '" class="cg-mod-nor fl last">';
                    } else {
                        html += '<a href="javascript:void(0)" title="' + _this.filterKnowledgeName(missions[j].knowledge.knowledgeName) + '" data-subject="' + data.subjectCode +
                            '" data-mission="' + missions[j].missionId + '" data-knowledge="' + missions[j].knowledge.knowledgeCode + '" class="cg-mod-nor fl">';
                    }
                }
                html += '<p class="ft14 col3 txt"><b>关卡' + (j + 1) + '：</b>' + interceptString(_this.filterKnowledgeName(missions[j].knowledge.knowledgeName), 36, true) + '</p>';
                html += '<div class="clearfix">';
                if (missions[j].locked) {
                    html += '<div class="fen-lock"></div>';
                } else {
                    var star = 0;
                    if (missions[j].scoredOne) {
                        star++;
                    }
                    if (missions[j].scoredTwo) {
                        star++;
                    }
                    if (missions[j].scoredThree) {
                        star++;
                    }
                    if (star == 1) {
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                    } else if (star == 2) {
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                    } else if (star == 3) {
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn"></div>';
                        html += '<div class="star-btn"></div>';
                    } else {
                        html += '<div class="star-btn star-unbtn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                        html += '<div class="star-btn star-unbtn"></div>';
                    }
                }
                html += '</div>';
                html += '</a>';
            }
            $(element).html(html);
            $(element).find("a").click(function () {
                if (!$(this).hasClass("cg-mod-lock")) {
                    var knowledge = $(this).attr("data-knowledge"),
                        subjectCode = $(this).attr("data-subject"),
                        last = false,
                        missionId = $(this).attr("data-mission");
                    window.location.href = basePath + "/zhixuebao/studytask/index/?subjectCode=" + subjectCode + "&knowledge=" +
                        knowledge + "&missionId=" + missionId + "&examId=" + examId + "&last=" + last + "&flag=report" +
                        "&paperId=" + _this.paperId + "&classId=" + Request.QueryString("classId");
                }
            });
        }
    }

    /**
     * 通过不同的科目获取到不同的图标
     */
    howtodoCtrl.prototype.getSubjectIconCss =function(subjectName){
        var iconCss;
        switch(subjectName)
        {
            case '化学':
                iconCss='subbtnb-chemistry';
                break;
            case '历史':
                iconCss='subbtnb-history';
                break;
            case '语文':
                iconCss='subbtnb-chinese';
                break;
            case '物理':
                iconCss='subbtnb-physical';
                break;
            case '地理':
                iconCss='subbtnb-geography';
                break;
            case '英语':
                iconCss='subbtnb-english';
                break;
            case '生物':
                iconCss='subbtnb-biology';
                break;
            case '数学':
                iconCss='subbtnb-math';
                break;
            case '政治':
                iconCss='subbtnb-politics';
                break;
            case '计算机':
                iconCss='subbtnb-computer';
                break;
            case '科学':
                iconCss='subbtnb-science';
                break;
            /*  case '':
             iconCss='subbtnb-heddle';
             break;
             case 2:
             iconCss='subbtnb-daniel';
             break;*/
            default:
                iconCss='subbtnb-chinese';
        }
        return iconCss;
    }

    howtodoCtrl.prototype.filterKnowledgeName = function (name) {
        var ary = name.split('>>');
        return ary.length == 1 ? ary[0] : ary[ary.length - 1];
    }

    return howtodoCtrl;
})();

//显示单科/全科
Report.singer = function () {
    if (!isFinal) {
        isSinger = true;
        showEach = false;
    }
    else {
        if (userExamDataList.length < 3) {
            isSinger = true;
            showEach = false;
        }
        else {
            isSinger = false;
            if (userExamDataList.length > 4) {
                showEach = true;
            }
        }
    }
};

//判断初始页面
Report.defaultPage = function () {
    Transcripts.bindPKEvent();
    Transcripts.randomChangeEvent();
    if (Report.role == 'student') {
        $('.stu').addClass('on');
        $('.rep-content').eq(0).show().siblings('.rep-content').hide();
        if (elements.top_subjectList.find('a.on').html() == '全科') {
            Report.allSinger = 'All';
            Report.bindIntroductionData(); //导读信息
            Report.bindUserExamData(); //我考得怎么样
            Report.bindCompareTableData(); //与同学的对比
            Report.bindPositionData(); //成绩在XX的位置
            Report.bindCompareData(); //与全班平均分、最高分的对比
            Report.bindHistoryRankData(); //这次考试有进步吗?
            if (showEach) {
                elements.loadEachSubject.show();
                Report.bindEachSubjectData();
            }
            Report.bindLoseScoreData('allId'); //丢分题难度
            Report.bindHowDoIData(); //我该怎么办
            Report.bindExamTask(); //考点闯关
            Report.bindSummary(); //绑定小结数据
            Report.isCoexistAndIsGolden(); //弹窗
            var foot = new Foot();
            foot.init();
            $('#loadPK').show();
        }
        // else {
        //     if (!isFinal) {
        //         var paperId = userExamDataList[0].paperId;
        //         var subjectCode = userExamDataList[0].subjectCode;
        //     }
        //     else {
        //         var paperId = userExamDataList[1].paperId;
        //         var subjectCode = userExamDataList[1].subjectCode;
        //     }
        //     Report.allSinger = 'Singer';
        //     var report = new reportCtrl.parSinger();
        //     report.init();
        //     Report.getStuSingleReportData(paperId);
        //     //查看试卷解析
        //     elements.analysisMain.click(function () {
        //         window.location.href = basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + subjectCode + '&paperId=' + paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId");
        //     });
        //     var topicCollectionObj = new TopicCollect();
        //     topicCollectionObj.init(paperId); //题目汇总
        //     var fore = new forewordCtrl();
        //     fore.init(paperId); //这次考试有进步吗
        //     Report.bindLoseScoreData(paperId); //丢分题难度
        //     var knowledgeControl = new KnowledgeControl();
        //     knowledgeControl.init(paperId); //知识点
        //     var how = new howtodoCtrl();
        //     how.init(paperId);
        //     how.createTaskHtml("#knowList1", Request.QueryString("examId"), paperId);
        //     var topTopic = new TopTopic();
        //     topTopic.init(paperId); //TOP10
        // }
    }
    else {
        $('.par').addClass('on');
        $('.rep-content').eq(1).show().siblings('.rep-content').hide();
        $('#loadPK').hide();
        if (elements.top_subjectListPar.find('a.on').html() == '全科') {
            Report.bindIntroductionData(); //导读信息
            Report.bindUserExamDataPar(); //孩子考得怎么样
            Report.bindCompareTableData(); //与同学的对比
            Report.bindPositionData(); //成绩在XX的位置
            Report.bindCompareData(); //与全班平均分、最高分的对比
            Report.bindHistoryRankData(); //这次考试有进步吗?
            if (showEach) {
                elements.loadEachSubjectPar.show();
                Report.bindEachSubjectData();
            }
            Report.bindLoseScoreDataPar(); //孩子的分数丢哪了
            Report.bindHowDoIData(); //我该怎么督促孩子
            Report.bindSummary(); //绑定小结数据
            var foot = new Foot();
            foot.init();
        }
        // else {
        //     if (!isFinal) {
        //         var paperId = userExamDataList[0].paperId;
        //     }
        //     else {
        //         var paperId = userExamDataList[1].paperId;
        //     }
        //     var report = new reportCtrl.parSinger();
        //     report.init();
        //     var topicCollectionObj = new TopicCollect();
        //     topicCollectionObj.init(paperId); //题目汇总
        //     var fore = new forewordCtrl();
        //     fore.init(paperId); //这次考试有进步吗
        //     dataUtil.bindScoreParts(0, paperId); //各分数段人数
        //     var ec = new examCompare();
        //     ec.init(paperId); //考试难度
        //     var dif = new Difficulty();
        //     dif.init(paperId); //丢分题难度
        //     var knowledgeControl = new KnowledgeControl();
        //     knowledgeControl.init(paperId); //知识点
        //     var topTopic = new TopTopic();
        //     topTopic.init(paperId); //TOP10
        //     var recommondControl = new RecommondControl();
        //     recommondControl.init(paperId); //推荐内容
        // }
    }
}

$(document).ready(function(){

    //学生/家长
    $('.left-choice a').bind('click',Report.stuParTab);

    //回到顶部
    $("#btnBackTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    Report.init();
    // alert(elements.examName.text('aaaa'));

    // 更新 下拉列表
    Report.UpdateSelectBox();
    if(isFinal) {
        Report.processingData(); //全局数据处理
    }
    Report.singer();
    Report.subjectList(); //科目列表
    Report.defaultPage();
});
