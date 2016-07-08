/**
 * Created by admin on 16/7/5.
 */

var Report ={};

//属性
Report.vipFlag = 0; // 0 非vip 1 vip
Report.score = {};



Report.GetData = function () {
    //发送 ajax
    // alert(1);
};

//学生/家长 tab
Report.StuParTab = function () {
    var index = $(this).index();
    $(this).addClass('on').siblings('a').removeClass('on');
    $('.rep-content').eq(index).show().siblings('.rep-content').hide();
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

// $.post("1.txt",
//     {
//     },
//     function(data,status){
//         dataStr = data;
//         eval(dataStr);
//         $("#stuBd").html(introduction.desc);
//     }
// );

$(document).ready(function(){
    Report.GetData();




    //学生/家长
    $('.left-choice a').bind('click',Report.StuParTab);

    //全科/单科
    $('.warp-ul ul li a').bind('click',Report.AllSingerTab);

});
