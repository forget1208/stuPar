/**
 * Created by admin on 16/7/20.
 */
// 全部基础数据
var basePath = 'http://localhost:8092/zhixuebao';
var currentUser = {"id":"2000000020000269186","isAdmin":false,"loginName":"zx30024501","name":"小明一","role":"student"};
var classInfo = {"code":"7dbc8cab-f9a7-4589-8277-7b185ff22d93","createTime":1441953552000,"grade":{"code":"11","name":"高二年级","phase":{"code":"05"},"sort":2},"id":"2000000020000002363","isGraduated":false,"name":"高二年级1班","order":311001,"school":{"areaId":"0","cityId":"3","code":"0","countryId":"1","districtId":"5","educationalSystem":{"code":"04","createTime":1443456000000,"name":"高中(三年制)","phase":"05","updateTime":1443456000000},"id":"2000000020000000513","name":"西城中学","phase":{"code":"05"},"provinceId":"2"},"year":2014};
var userExamArchives = [{"classId":"2000000020000002363","className":"高一年级1班","classRank":7,"classStudentCount":7,"createDateTime":1466410322248,"examCreateDateTime":1466410145000,"examId":"af7699d4-eac2-4563-8fff-3ecbcf2f8ef7","examName":"成绩补录单科","gradeCode":"10","id":"751e7514-0364-4d8a-af41-90cb3889cac4","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":7,"score":55,"subjectCode":"01A","subjectCodes":["01A"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":7,"schoolRank":7,"score":55,"subjectCode":"01A"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":1,"classStudentCount":10,"createDateTime":1462427140096,"examCreateDateTime":1462410970000,"examId":"c0abff51-b173-42cd-aa01-67acb99429c8","examName":"数据指标验证考试2","gradeCode":"11","id":"17e1cc0d-7325-4c02-9405-85cd5cd4ec3c","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":2,"score":83,"subjectCode":"02","subjectCodes":["02"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":1,"schoolRank":2,"score":83,"subjectCode":"02"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":6,"classStudentCount":10,"createDateTime":1462427140096,"examCreateDateTime":1462410970000,"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeCode":"11","id":"d865c07a-1223-4841-b630-3849665e7aad","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":21,"score":110,"subjectCodes":["02","01"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":31,"schoolRank":8,"score":43,"subjectCode":"02"},{"classRank":12,"schoolRank":4,"score":67,"subjectCode":"01"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":-1,"classStudentCount":9,"createDateTime":1467709068228,"examCreateDateTime":1449630642000,"examId":"cdf9d2e3-532e-4290-8f64-175bd540b708","examName":"数据指标验证考试3","gradeCode":"11","id":"99046d0e-1296-490c-9401-deba26518f24","isBeTied":true,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":-1,"score":255,"subjectCodes":["02","01"],"tiArchive":{"tiClassRank":1,"tiSchoolRank":3,"tiScore":255,"tiUserSubjectScores":[{"classRank":-1,"schoolRank":-1,"score":135,"subjectCode":"02"},{"classRank":-1,"schoolRank":-1,"score":120,"subjectCode":"01"}]},"tiStudentCount":1,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":-1,"schoolRank":-1,"score":135,"subjectCode":"02"},{"classRank":-1,"schoolRank":-1,"score":120,"subjectCode":"01"}],"version":1001},{"classId":"2000000020000002363","className":"高二年级1班","classRank":1,"classStudentCount":10,"createDateTime":1463452106126,"examCreateDateTime":1449556497000,"examId":"66915a32-6e07-449e-82e2-3a413ec4661c","examName":"数据指标验证考试1","gradeCode":"11","id":"ff3801f0-a2d2-4375-ab60-e6e9bd888ba1","isBeTied":false,"isFinal":true,"schoolId":"2000000020000000513","schoolRank":2,"score":260,"subjectCodes":["02","01"],"tiStudentCount":0,"userId":"2000000020000269186","userName":"小明一","userNum":"30024501","userSubjectScores":[{"classRank":1,"schoolRank":2,"score":140,"subjectCode":"02"},{"classRank":1,"schoolRank":2,"score":120,"subjectCode":"01"}],"version":1001}];
var examClassId = "2000000020000002363";
//用户各科考试数据
var userExamDataList = [{"classRank":{"avgScore":116,"highScore":150,"rank":6,"ratio":44,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":110.3,"highScore":170,"rank":21,"ratio":49,"totalNum":40},"paperId":"","score":110,"standardScore":249,"subjectCode":"","subjectName":"总分"},{"classRank":{"avgScore":57.3,"highScore":75,"rank":8,"ratio":22,"totalNum":10},"examId":"ba111c26-50c0-40c1-99df-3be01a25228a","examName":"数据指标验证考试2","gradeRank":{"avgScore":63.6,"highScore":94,"rank":31,"ratio":9,"totalNum":34},"isShowRank":false,"paperId":"500861b3-d912-433e-87fd-f067ac93adcc","score":43,"standardScore":150,"subjectCode":"02","subjectName":"数学"}];
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
var isCoexistAndIsGolden = false;
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
var reportSubjectCode = '01';

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
//排序后的各学科分数数据
var examSubjectData2 = [];
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
    elements.summary = $(".summary");

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
    elements.checkScoreContainer = $('.checkScoreContainer');
    elements.randomDisplay = $('#randomDisplay');
    elements.randomDisplayPar = $('#randomDisplayPar');
    elements.randomDisplaySinger = $('#randomDisplaySinger');
    elements.randomDisplaySingerPar = $('#randomDisplaySingerPar');

    elements.loseScoreTable = $('#loseScoreTable');
    elements.loseScoreTablePar = $('#loseScoreTablePar');
    elements.rankTable = $("#rankTable");
    elements.rankTablePar = $("#rankTablePar");

    elements.lazy_topic = $('.lazy_topic');
    elements.historyRankTableSinger = $('.historyRankTableSinger');
    elements.examChart = $('.examChart');
    elements.difTip = $('#difTip');
    elements.examDifInfo = $('#examDifInfo');
    elements.knowledgeControl = $('#knowledgeControl');
    elements.knowledgeControlPar = $('#knowledgeControlPar');
    elements.currentCityTopTen = $('#currentCityTopTen');
    elements.currentCityTopTenPar = $('#currentCityTopTenPar');
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

    elements.free_allScore = $("#free_allScore");
    elements.free_classRatio = $("#free_classRatio");
    elements.free_classAvgScore = $("#free_classAvgScore");
    elements.free_classHighScore = $("#free_classHighScore");

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
    if ($(this).hasClass('stu')) {
        Report.role = 'student';
    } else {
        Report.role = 'parent';
        Report.bindUserExamDataPar();
    }

    Report.bindIntroductionData(); //导读
    Report.unvip();
    if (userExamDataList.length < 4) {
        if (Report.role == 'student') {
            Report.allSingerTabHandler(elements.top_subjectList.find('a.on').html());
        }
        else {
            Report.allSingerTabHandler(elements.top_subjectListPar.find('a.on').html());
        }
    }

};
//全科/单科 tab
Report.allSingerTab = function () {
    var index = $(this).parent().index();
    if (userExamDataList.length < 4 || isFinal == 'false') {
        index++;
    }
    $(this).addClass('on').parent().siblings().children().removeClass('on');
    var paperId = '',
        localSubjectRatios = '',
        localClassRatios = '';

    if (Report.role == 'student') {
        elements.subjectName2.text($(this).text());
        paperId = elements.top_subjectList.find('a.on').attr('paperId');
        if (elements.top_subjectList.find('a.on').html() == '全科') {
            Report.allSinger = 'All';
        }
        else {
            Report.allSinger = 'Singer';
        }
        //查看试卷解析
        elements.analysisMain.click(function () {
            window.location.href = basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + userExamData.subjectCode + '&paperId=' + paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId");
        });
    }
    else {
        elements.subjectName2Par.text($(this).text());
        paperId = elements.top_subjectListPar.find('a.on').attr('paperId');
    }
    if ($(this).parent().parent().parent().parent().find('div').hasClass('warp-ul-stu')) {
        $('.rep-stu-content').eq(index).show().siblings('.rep-stu-content').hide();
    } else {
        $('.rep-par-content').eq(index).show().siblings('.rep-par-content').hide();
    }
    // 进行缓存 如果第一次 则加载  ajax 数据 第二次切换 直接显示 内容 div
    if(Report.paper[paperId].initFlag) {
        //
        // Report.getStuSingleReportData(paperId);

        // var report = new reportCtrl.parSinger();
        // report.init();

        var topicCollectionObj = new TopicCollect();
        topicCollectionObj.init(paperId); //题目汇总

        // var fore = new forewordCtrl();
        // fore.init(paperId); //这次考试有进步吗
        //
        // var dif = new Difficulty();
        // dif.init(paperId); //丢分题难度
        //
        // var knowledgeControl = new KnowledgeControl();
        // knowledgeControl.init(paperId); //知识点
        //
        // var topTopic = new TopTopic();
        // topTopic.init(paperId); //TOP10

        Report.unvipSinger();
        Report.paper[paperId].initFlag = false;
    }
};

Report.allSingerTabHandler = function (subjectName) {
    var paperId = '',
        localSubjectRatios = '',
        localClassRatios = '';
    if (Report.role == 'student') {
        $('.rep-stu-content').eq(1).show().siblings('.rep-stu-content').hide();
        elements.subjectName2.text(subjectName);
        paperId = elements.top_subjectList.find('a.on').attr('paperId');
        if (elements.top_subjectList.find('a.on').html() == '全科') {
            Report.allSinger = 'All';
        }
        else {
            Report.allSinger = 'Singer';
        }
    }
    else {
        $('.rep-par-content').eq(1).show().siblings('.rep-par-content').hide();
        elements.subjectName2Par.text(subjectName);
        paperId = elements.top_subjectListPar.find('a.on').attr('paperId');
    }
};

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

    $('.examNameOn').click(function () {
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
        $(".loadCompareTable").find('.currentUnion').parent().remove();
        isContainUnion = false;
    }
};

//获取科目列表
Report.subjectList = function () {
    var subjectName = [],
        subjectPaperId = [],
        subjectCode = [];
    for (var i = 0; i < userExamDataList.length; i++) {
        subjectName.push(userExamDataList[i].subjectName);
        subjectPaperId.push(userExamDataList[i].paperId);
        subjectCode.push(userExamDataList[i].subjectCode)

        //获取paperId 初始化变量 进行缓存
        Report.paper[userExamDataList[i].paperId] = {};
        Report.paper[userExamDataList[i].paperId].initFlag = true;
    }
    if (userExamDataList.length < 4 || isFinal == 'false') {
        for (j = 0; j < subjectName.length; j++) {
            if (subjectName[j] != '总分') {
                $('.top_subjectList').append('<li><a href="javascript:void(0);" paperId="'+ subjectPaperId[j] +'" subjectCode="'+ subjectCode[j] + '">' + subjectName[j] + '</a>');
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
                $('.top_subjectList').append('<li><a href="javascript:void(0);" class="on">全科</a>');
            }
            else {
                $('.top_subjectList').append('<li><a href="javascript:void(0);" paperId="'+ subjectPaperId[j] +'" subjectCode="'+ subjectCode[j] + '">' + subjectName[j] + '</a>');
            }
        }
    }

    // for (k = 0; k < elements.top_subjectList.find('a').length; k++) {

        // if (elements.top_subjectList.find('a')[k].attr('subjectCode') == freeSubjectCode && freeSubjectCode == reportSubjectCode) {
        //     elements.top_subjectList.find('a')[k].append('<div style="display: block;" class="icon"><img src="/module/global/images-report/vip.png"></div>');
        // }



    // }
    // console.log(elements.top_subjectList.find('a.on').html());
    //全科/单科
    $('.top_subjectList li a').bind('click',Report.allSingerTab);
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
    elements.examTable.find(".knowledgeMap").click(function () {
        var _this = $(this);
        var type = _this.attr("type");
        $("#special_exercise").attr("src", studentUrl + "/student/knowledgeMap/?examId=" + Request.QueryString("examId") + "&type=" + type).show();

    });

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
                examScoreHTML += getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:void(0);" class="score">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += getScoreToLevel(data.score, data.standardScore) + '</p><a  href="javascript:void(0);" paperId="' + data.paperId + '" class="score active">' + data.subjectName + '</a><a  href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">试卷+解析</a>';
            }
        } else {
            if (data.subjectName == "总分") {
                examScoreHTML += data.score + '</p><a href="javascript:void(0);" class="score">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += data.score + '</p><a  href="javascript:void(0);" paperId="' + data.paperId + '" class="score active">' + data.subjectName + '</a><a href="' + basePath + '/zhixuebao/transcript/analysis/main/?subjectCode=' + data.subjectCode + '&paperId=' + data.paperId + '&classId=' + examClassId + '&examId=' + Request.QueryString("examId") + '" class="ana">试卷+解析</a>';
            }
        }
        examScoreHTML += '</div></div></li>';

        return examScoreHTML;
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
        var url = basePath + "/zhixuebao/feesReport/getUserSubjectTopicList/";
        var userId = currentUser.id;
        // var paperId = Request.QueryString("paperId");
        $.getJSON(url, {userId: userId, paperId:_this.paperId, pageIndex: 1, pageSize: 10}, callback);

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
        var userId = currentUser.id;
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

Report.unvip = function () {
    if (Report.role == 'student') {
        if(isHideScore) {
            elements.bindParentShow.remove();
            var html = __checkScoreTemplate__({});
            elements.checkScoreContainer.html(html);
            elements.checkScore = $('#checkScore');
            elements.checkScorePopup = $('#checkScorePopup');
            elements.checkScore.find('.report-cover-btn').on('click', function() {
                elements.checkScorePopup.show();
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScoreButtonClick",
                    "data" : "/zhixuebao/feesReport/reportStuAll/nonVip/checkScoreButtonClick"
                });
            });
            elements.checkScorePopup.find('.report-dialog-close').on('click', function() {
                elements.checkScorePopup.find('.report-dialog-btn').text('复制链接');
                elements.checkScorePopup.hide();
            });
            elements.checkScorePopup.find('.report-dialog-btn').on('click', function() {
                var _this = $(this);
                var url = elements.checkScorePopup.find('#copy-url');
                var text = elements.checkScorePopup.find('#copy-txt').get(0);
                text.value = currentUser.name + "考完试了，请点击此链接，注册智学家长端优先查分" + url.text();
                text.select();
                document.execCommand("Copy");
                _this.text('已复制');
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScorePopupCopyButtonClick",
                    "data" : "/zhixuebao/feesReport/reportStuAll/nonVip/checkScorePopupCopyButtonClick"
                });
            });
            setUserAction({
                "userId":currentUser.id,
                "app": "zhixuebao",
                "action": "checkScoreBannerShow",
                "data" : "/zhixuebao/feesReport/reportStuAll/nonVip/checkScoreBannerShow"
            });
        }

        if(!isNceeVolunteer&&classInfo.grade.code=="12"){
            var element = {};
            if($.cookie("popNcee_tip")!="1"){
                var html = __nceeVolunteerPopTemplate__({"userScore":examAllData.score});
                element.dialog = CommonDialog.setDialog(html);
                element.dialog.container.removeClass().addClass("popbox");
                element.popNcee = $("#popNcee");
                element.popNcee_user = element.popNcee.find(".popNcee_user");
                element.popNcee_tip = element.popNcee.find(".popNcee_tip");
                element.popNcee_close = element.popNcee.find(".popNcee_close");

                element.popNcee_tip.click(function(){
                    if(element.popNcee_tip.hasClass("on")){
                        element.popNcee_tip.removeClass("on");
                    }else{
                        element.popNcee_tip.addClass("on");
                    }
                });
                element.popNcee_user.click(function(){
                    setShowPopState();
                    var province=provinceList[userInfo.clazz.school.provinceId];
                    window.open(webGaokaoqRootUrl+"/forecast.html?from=reportStuAll&score="+examAllData.score+"&city="+province);
                });

                element.popNcee_close.click(function(){
                    setShowPopState();
                });
            }

            function setShowPopState(){
                if(element.popNcee_tip.hasClass("on")){
                    $.cookie("popNcee_tip","1",{expires:10000,path: "/"});
                }
                element.dialog.hide.remove();
                element.dialog.container.remove();
            }
        }

        var _html = __randomDisplayTemplate__({'userName':currentUser.name, 'basePath':basePath});
        elements.randomDisplay.html(_html);
    }
    else {
        if(isHideScore) {
            elements.bindParentShow.remove();
            var html = __checkScoreTemplate__({});
            elements.checkScoreContainer.html(html);
            elements.checkScore = $('#checkScore');
            elements.checkScorePopup = $('#checkScorePopup');
            elements.checkScore.find('.report-cover-btn').on('click', function() {
                elements.checkScorePopup.show();
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScoreButtonClick",
                    "data" : "/zhixuebao/feesReport/reportParAll/nonVip/checkScoreButtonClick"
                });
            });
            elements.checkScorePopup.find('.report-dialog-close').on('click', function() {
                elements.checkScorePopup.find('.report-dialog-btn').text('复制链接');
                elements.checkScorePopup.hide();
            });
            elements.checkScorePopup.find('.report-dialog-btn').on('click', function() {
                var _this = $(this);
                var url = elements.checkScorePopup.find('#copy-url');
                var text = elements.checkScorePopup.find('#copy-txt').get(0);
                text.value = currentUser.name + "考完试了，请点击此链接，注册智学家长端优先查分" + url.text();
                text.select();
                document.execCommand("Copy");
                _this.text('已复制');
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScorePopupCopyButtonClick",
                    "data" : "/zhixuebao/feesReport/reportParAll/nonVip/checkScorePopupCopyButtonClick"
                });
            });
            setUserAction({
                "userId":currentUser.id,
                "app": "zhixuebao",
                "action": "checkScoreBannerShow",
                "data" : "/zhixuebao/feesReport/reportParAll/nonVip/checkScoreBannerShow"
            });
        }

        if(!isNceeVolunteer&&classInfo.grade.code=="12"){
            var element = {};
            if($.cookie("popNcee_tip")!="1"){
                var html = __nceeVolunteerPopTemplate__({"userScore":examAllData.score});
                element.dialog = CommonDialog.setDialog(html);
                element.dialog.container.removeClass().addClass("popbox");
                element.popNcee = $("#popNcee");
                element.popNcee_user = element.popNcee.find(".popNcee_user");
                element.popNcee_tip = element.popNcee.find(".popNcee_tip");
                element.popNcee_close = element.popNcee.find(".popNcee_close");

                element.popNcee_tip.click(function(){
                    if(element.popNcee_tip.hasClass("on")){
                        element.popNcee_tip.removeClass("on");
                    }else{
                        element.popNcee_tip.addClass("on");
                    }
                });
                element.popNcee_user.click(function(){
                    setShowPopState();
                    var province=provinceList[userInfo.clazz.school.provinceId];
                    window.open(webGaokaoqRootUrl+"/forecast.html?from=reportParAll&score="+examAllData.score+"&city="+province);
                });

                element.popNcee_close.click(function(){
                    setShowPopState();
                });
            }

            function setShowPopState(){
                if(element.popNcee_tip.hasClass("on")){
                    $.cookie("popNcee_tip","1",{expires:10000,path: "/"});
                }
                element.dialog.hide.remove();
                element.dialog.container.remove();
            }
        }

        var _html = __randomDisplayTemplatePar__({'userName':currentUser.name, 'basePath':basePath, 'score':examAllData.score});
        elements.randomDisplayPar.html(_html);
    }
};

Report.unvipSinger = function () {
    var userExamData;
    if (Report.role == 'student') {
        for ( var i = 0; i < userExamDataList.length; i++){
            if (userExamDataList[i].subjectName == elements.subjectName2.text()) {
                userExamData = userExamDataList[i];
            }
        }
        if (scoreToLevel == true) {
            elements.rankTable.find('b.stu-yel').html(dataUtil.getScoreToLevel(userExamData.score, userExamData.standardScore));
        } else {
            elements.rankTable.find('b.stu-yel').html(userExamData.score);
        }

        var _html = __randomDisplayTemplateSinger__({'userName':currentUser.name, 'basePath':basePath, 'subjectName':userExamData.subjectName});
        elements.randomDisplaySinger.html(_html);

        //非vip用户，单科体验vip报告，展示开通vip提示
        if (!isVip && freeSubjectCode == reportSubjectCode) {
            $(".kt-vip").show();
            setUserAction({
                "userId":currentUser.id,
                "app": "zhixuebao",
                "action": "freeReportCheck",
                "data" : "/zhixuebao/feesReport/reportStuSinger/nonVip/freeReportCheck_" + userExamData.subjectName
            });
        }

        if(isHideScore) {
            elements.analysisMain.hide();
            elements.bindParentShow.remove();
            var html = __checkScoreTemplate__({});
            elements.checkScoreContainer.html(html);
            elements.checkScore = $('#checkScore');
            elements.checkScorePopup = $('#checkScorePopup');
            elements.checkScore.find('.report-cover-btn').on('click', function() {
                elements.checkScorePopup.show();
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScoreButtonClick",
                    "data" : "/zhixuebao/feesReport/reportStuSinger/nonVip/checkScoreButtonClick"
                });
            });
            elements.checkScorePopup.find('.report-dialog-close').on('click', function() {
                elements.checkScorePopup.find('.report-dialog-btn').text('复制链接');
                elements.checkScorePopup.hide();
            });
            elements.checkScorePopup.find('.report-dialog-btn').on('click', function() {
                var _this = $(this);
                var url = elements.checkScorePopup.find('#copy-url');
                var text = elements.checkScorePopup.find('#copy-txt').get(0);
                text.value = currentUser.name + "考完试了，请点击此链接，注册智学家长端优先查分" + url.text();
                text.select();
                document.execCommand("Copy");
                _this.text('已复制');
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScorePopupCopyButtonClick",
                    "data" : "/zhixuebao/feesReport/reportStuSinger/nonVip/checkScorePopupCopyButtonClick"
                });
            });
            setUserAction({
                "userId":currentUser.id,
                "app": "zhixuebao",
                "action": "checkScoreBannerShow",
                "data" : "/zhixuebao/feesReport/reportStuSinger/nonVip/checkScoreBannerShow"
            });
        }
        else {
            if (scoreToLevel == true) {
                elements.free_allScore.text(dataUtil.getScoreToLevel(userExamData.score, userExamData.standardScore));
                elements.free_classHighScore.text(dataUtil.getScoreToLevel(userExamData.classRank.highScore, userExamData.standardScore));
            } else {
                elements.free_allScore.text(userExamData.score);
                elements.free_classHighScore.text(userExamData.classRank.highScore);
            }
            if (forbidAvgScore == true) {
                elements.free_classAvgScore.attr("title", "学校未发布").text("--");
            } else if (scoreToLevel == true) {
                elements.free_classAvgScore.text(dataUtil.getScoreToLevel(userExamData.classRank.avgScore, userExamData.standardScore));
            } else {
                elements.free_classAvgScore.text(userExamData.classRank.avgScore.toFixed(1));
            }
            if (forbidRatio == true) {
                elements.free_classRatio.attr("title", "学校未发布").text("--");
            } else if (ratioToLevel == true) {
                elements.free_classRatio.text(dataUtil.getRatioToLevel(userExamData.classRank.ratio));
            } else {
                elements.free_classRatio.text(userExamData.classRank.ratio + "%");
            }
        }
    }
    else {
        for ( var i = 0; i < userExamDataList.length; i++){
            if (userExamDataList[i].subjectName == elements.subjectName2Par.text()) {
                userExamData = userExamDataList[i];
            }
        }
        if (scoreToLevel == true) {
            elements.rankTablePar.find('b.stu-yel').html(dataUtil.getScoreToLevel(userExamData.score, userExamData.standardScore));
        } else {
            elements.rankTablePar.find('b.stu-yel').html(userExamData.score);
        }

        var _html = __randomDisplayTemplateSingerPar__({'userName':currentUser.name, 'basePath':basePath, 'subjectName':userExamData.subjectName, 'isMobile':isMobile,
            'isHideScore': isHideScore});
        elements.randomDisplaySingerPar.html(_html);

        if(isHideScore) {
            elements.bindParentShow.remove();
            var html = __checkScoreTemplate__({});
            elements.checkScoreContainer.html(html);
            elements.checkScore = $('#checkScore');
            elements.checkScorePopup = $('#checkScorePopup');
            elements.checkScore.find('.report-cover-btn').on('click', function() {
                elements.checkScorePopup.show();
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScoreButtonClick",
                    "data" : "/zhixuebao/feesReport/reportParSinger/nonVip/checkScoreButtonClick"
                });
            });
            elements.checkScorePopup.find('.report-dialog-close').on('click', function() {
                elements.checkScorePopup.find('.report-dialog-btn').text('复制链接');
                elements.checkScorePopup.hide();
            });
            elements.checkScorePopup.find('.report-dialog-btn').on('click', function() {
                var _this = $(this);
                var url = elements.checkScorePopup.find('#copy-url');
                var text = elements.checkScorePopup.find('#copy-txt').get(0);
                text.value = currentUser.name + "考完试了，请点击此链接，注册智学家长端优先查分" + url.text();
                text.select();
                document.execCommand("Copy");
                _this.text('已复制');
                setUserAction({
                    "userId":currentUser.id,
                    "app": "zhixuebao",
                    "action": "checkScorePopupCopyButtonClick",
                    "data" : "/zhixuebao/feesReport/reportParSinger/nonVip/checkScorePopupCopyButtonClick"
                });
            });
            setUserAction({
                "userId":currentUser.id,
                "app": "zhixuebao",
                "action": "checkScoreBannerShow",
                "data" : "/zhixuebao/feesReport/reportParSinger/nonVip/checkScoreBannerShow"
            });
        }
    }
};

/**
 * 家长端 绑定用户考试信息（孩子考得怎么样）
 */
var examScoreInit = true;
Report.bindUserExamDataPar = function () {
    if (examScoreInit){
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
        examScoreInit = false;
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
                examScoreHTML += dataUtil.getScoreToLevel(data.score, data.standardScore) + '</p><a href="javascript:void(0);" paperId="' + data.paperId + '" class="ana active">' + data.subjectName + '</a>';
            }
        } else {
            if (data.subjectName == "总分") {
                examScoreHTML += data.score + '</p><a href="javascript:void(0);" class="ana">' + data.subjectName + '</a>';
            } else {
                examScoreHTML += data.score + '</p><a href="javascript:void(0);" paperId="' + data.paperId + '" class="ana active">' + data.subjectName + '</a>';
            }
        }
        return examScoreHTML;
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

Report.getStuSingleReportData = function (paperId) {
    $.ajax({
        url:basePath + "/zhixuebao/feesReport/getStuSingleReportData/",
        type:'GET',
        contentType:'JSON',
        async:false,
        data:{paperId:paperId,classId: examClassId},
        cache:true,
        success: function (data) {
            data = JSON.parse(data);
            console.log('data:' + JSON.stringify(data));
            localSubjectRatios = data.subjectRatios;
            localClassRatios = data.classRatios;
            $.each(userExamDataList, function(k, v) {
                if(v.paperId == paperId) {
                    userExamData = v;
                    return false;
                }
            });

            if (Report.role == 'student') {
                chartUtilStu.init(localSubjectRatios, localClassRatios);

                tipsUtilStu.init(paperId);

                var compareCtrl = new CompareCtrl(classInfo.school.id, classInfo.id, paperId, currentUser.id, localSubjectRatios);
                compareCtrl.init(); //得分率 对比班级、年级

                $(".rep-ps-dc").hide(); //隐藏知识点统计
            }
        }
    });
};

/**
 * 这次考试有进步吗?
 */
var forewordCtrl = (function(){

    var forewordCtrl  = function(){};

    forewordCtrl.prototype.init = function(paperId){
        this.paperId = paperId;
        var self = this;
        var userExamRankHistory = '';
        getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 0);
        $.getJSON(basePath + "/zhixuebao/feesReport/getUserSubjectRankHistory/",
            {userId: currentUser.id, paperId:self.paperId, pageIndex: 1, pageSize: 5}, function (data) {
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

            var chart = '';
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

            $.getJSON(basePath + "/zhixuebao/feesReport/getScoreImproveIntro/",
                {examId: examId, paperId: paperId, role: Report.role, scope: scope}, function(data) {
                    var text = '';
                    if(!!data && !!data.desc) {
                        text += '<b>' + data.desc + '</b>';
                    }
                    // if(!!data && !!data.title) {
                    // 	text = '<b>' + data.title + '</b>' + text;
                    // }
                    elements.historyRankTableSinger.find('.left').html(text);
                });
            if(scope) {
                elements.historyRankTableSinger.find('.col6').html('本学期考试你在年级的位置分别是');
            }
            else {
                elements.historyRankTableSinger.find('.col6').html('本学期考试你在全班的位置分别是');
            }
        }

        elements.historyRankTableSinger.find('.gradeall').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.historyRankTableSinger.find('a').removeClass('on');
            _this.addClass('on');
            historyRankDataHandle(userExamRankHistory, 0);
            getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 0);
        });

        elements.historyRankTableSinger.find('.grade').on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                return;
            }
            elements.historyRankTableSinger.find('a').removeClass('on');
            _this.addClass('on');
            historyRankDataHandle(userExamRankHistory, 1);
            getScoreImproveIntro(Request.QueryString("examId"), self.paperId, 1);
        });
    };

    return forewordCtrl;

})();

/**
 * 全科绑定失分数据（丢分题难度）
 */
Report.bindLoseScoreData = function (paperId) {
    $.getJSON(basePath + "/zhixuebao/feesReport/getSubjectLostScoreByDifficulty/",
        {userId: currentUser.id, paperId: paperId}, function (data) {
            var totalLostScore = 0;
            $.each(data, function(k, v) {
                totalLostScore += v.lostScoreValue;
            });

            if (!!paperId) {
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
        {examId: Request.QueryString("examId"), paperId: paperId, role: 'student'}, function (data) {
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
                }
                else {
                    elements.knowledgeControlPar.html(_html);
                }
            });
        });

    };

    knowledgeControl.prototype.getKnowledgeCountData = function(callback){
        var _this = this;
        var url = basePath + '/zhixuebao/feesReport/getknowledges/';
        $.getJSON(url,{paperId:_this.paperId,role:Report.role},callback);
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
                if (Report.role == 'student') {
                    elements.currentCityTopTen.hide();
                }
                else {
                    elements.currentCityTopTenPar.hide();
                }
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
        var url = basePath + '/zhixuebao/feesReport/getCityTopKnowledges/';
        $.getJSON(url,{classId:examClassId,paperId:this.paperId},callback);
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
            if(currentUser.id == "2244000020000036254" || currentUser.id == "2000000020000265988" || currentUser.id == "2244000020000155153"){
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

//判断初始页面
Report.defaultPage = function () {
    if (Report.role == 'student') {
        $('.stu').addClass('on');
        $('.rep-content').eq(0).show().siblings('.rep-content').hide();
        if (elements.top_subjectList.find('a.on').html() == '全科') {
            Report.allSinger = 'All';
            Report.bindIntroductionData(); //导读信息
            Report.bindUserExamData(); //我考得怎么样
            Report.unvip();
        }
        else {
            Report.allSinger = 'Singer';
            var paperId = userExamDataList[1].paperId;
            var topicCollectionObj = new TopicCollect();
            topicCollectionObj.init(paperId); //题目汇总
            
            if (a == '体验') {
                var report = new reportCtrl.parSinger();
                report.init();
                Report.getStuSingleReportData(paperId);
                var fore = new forewordCtrl();
                fore.init(paperId); //这次考试有进步吗
                Report.bindLoseScoreData(paperId); //丢分题难度
                var knowledgeControl = new KnowledgeControl();
                knowledgeControl.init(paperId); //知识点
                var topTopic = new TopTopic();
                topTopic.init(paperId); //TOP10
                Report.bindExamTask(); //考点闯关
            }
            else {
                Report.unvipSinger();
            }
        }
    }
    else {
        $('.par').addClass('on');
        $('.rep-content').eq(1).show().siblings('.rep-content').hide();
        if (elements.top_subjectListPar.find('a.on').html() == '全科') {
            Report.bindIntroductionData(); //导读信息
            Report.bindUserExamDataPar(); //孩子考得怎么样
            Report.unvip();
            if (userExamDataList.length >= 4) {
                Report.bindEachSubjectData();
            }
        }
        else {
            var paperId = userExamDataList[1].paperId;
            // var report = new reportCtrl.parSinger();
            // report.init();
            Report.unvipSinger();
            var topicCollectionObj = new TopicCollect();
            topicCollectionObj.init(paperId); //题目汇总

        }
    }
};

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

    // 更新 下拉列表
    Report.UpdateSelectBox();
    Report.processingData(); //全局数据处理
    Report.subjectList(); //科目列表
    Report.defaultPage();
});