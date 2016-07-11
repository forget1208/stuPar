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


Report.init = function () {
    elements.examName = $("#examName");
    elements.introduction = $("#introduction");//导读信息

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
    // console.log(Report.role);
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
    // 遍历 导读 信息 数组
    for (var _tmpIntr in introduction) {
        if(_tmpIntr.role == Report.role) {
            if(!!_tmpIntr.desc) { //判断 数据源 是否正确
                elements.introduction.text(introduction.desc);
            }
            else {
                elements.introduction.text('暂时无法获取导读信息！');
            }
            return; // 如果 完成 直接 return 不必循环两次
        }

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

// Report.ExamData =function () {
//     for (var i = 0; i < userExamDataList.length; i++) {
//
//         if (userExamDataList[i].paperId =='') {
//             $('#examTable').append('<li><div class="rel stu-paperli"><div class="pic"><img src="rep-images/stu-paper.png" width="130" height="175"></div><div class="cover"><p>' + userExamDataList[i].score + '</p><a href="#" class="score">总分</a></div></div></li>');
//         } else {
//             $('#examTable').append('<li><div class="rel stu-paperli"><div class="pic"><img src="rep-images/stu-paper.png" width="130" height="175"></div><div class="cover"><p>' + userExamDataList[i].score + '</p><a href="#" class="score">总分</a><a href="#" class="ana">试卷+解析</a></div></div></li>');
//         }
//
//
//     // <a href="#" class="score">总分</a><a href="#" class="ana">试卷+解析</a>
//     }
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
    // Report.ExamData();
    Report.bindIntroductionData();
});
