/**
 * 前端答题卡渲染
 * @author xwliu
 */
var Checksheet = Checksheet || {};
//答题卡来源
var SHEET_FLAG = 0;
//用户得分标示字体大小
var USER_SCORE_FONT_SIZE = 18;
//试题标准分标示字体大小
var FULL_SCORE_FONT_SIZE = 14;
//试卷总分标示字体大小
var TOTAL_SCORE_FONT_SIZE = 80;
//A3答题卡宽高信息 单位px
var A3_SHEET={WIDTH:420,HEIGHT:297};
//A4答题卡宽高信息 单位px
var A4_SHEET={WIDTH:210,HEIGHT:297};
//A3答题卡宽高信息 单位mm
var A3_SHEETMM={WIDTH:2199,HEIGHT:1555};
//A4答题卡宽高信息 单位mm
var A4_SHEETMM={WIDTH:1100,HEIGHT:1555};
/**
 * 展示答题卡原图
 */
Checksheet.showPaperImage = function(){
    var paperImages=sheetImages;
    if(typeof sheetImages == "string"){
        paperImages = eval('('+sheetImages+')');
    }
    Checksheet.initSheetImage(paperImages);
}
/**
 * 渲染答题卡标记信息
 */
Checksheet.initSheet = function(){
    var sheetInfoList = {},scoleList={},iconList={},paperData=sheetDatas;
    if(typeof sheetDatas == "string"){
        paperData = eval('('+sheetDatas+')');
    }
    try{
        Checksheet.maxWidth=Checksheet.minWidth = Checksheet.imgMain.width();
        if(paperData.answerSheetLocationDTO.comeFrom == 1){
            SHEET_FLAG = 1;//第三方答题卡
            var imgWidth = $(Checksheet.imgMain.find("img")[0]).css("width").split('px')[0]
                ,imgHeight = $(Checksheet.imgMain.find("img")[0]).css("height").split('px')[0];
            if(paperData.answerSheetLocationDTO.paperType == "A3"){
                paperData.widthMM2PX = imgWidth/A3_SHEETMM.WIDTH;
                paperData.heightMM2PX = imgHeight/A3_SHEETMM.HEIGHT;
            }else if(paperData.answerSheetLocationDTO.paperType == "A4"){
                paperData.widthMM2PX = imgWidth/A4_SHEETMM.WIDTH;
                paperData.heightMM2PX = imgHeight/A4_SHEETMM.HEIGHT;
            }
        }else{
            if(paperData.answerSheetLocationDTO.paperType == "A3"){
                paperData.widthMM2PX = (Checksheet.minWidth-16)/A3_SHEET.WIDTH;
            }else if(paperData.answerSheetLocationDTO.paperType == "A4"){
                paperData.widthMM2PX = (Checksheet.minWidth-16)/A4_SHEET.WIDTH;
            }
            paperData.heightMM2PX = paperData.widthMM2PX;
        }
        sheetInfoList = Checksheet._countScorePosition(paperData);
        scoleList = sheetInfoList.textLabels;
        iconList = sheetInfoList.iconLabels;
        var tempObj = Checksheet._countTotalScore(scoleList);
        scoleList[0].reverse();
        scoleList[0].push(tempObj);
        scoleList[0].reverse();
        iconList[0].reverse();
        iconList[0].push({
            mark:{
                isMarkIcon:false
            },
            position:{
                left:0,
                top:0,
                width:0,
                height:0
            }
        });
        iconList[0].reverse();
        Checksheet.initSheetMark(scoleList,iconList);
    }catch (e){
        console.log(e);
    }
}
/**
 * 计算试卷总分以及分数位置信息
 * @param scoleList 试卷section分数信息 格式array[array[object{}]]
 * @returns {{position: {left: number, top: number}, score: {userScore: number, fullScore: number}}}
 * @private
 */
Checksheet._countTotalScore = function(scoleList){
    //计算试卷总分以及分数位置信息
    var size = scoleList && scoleList.length,userScore=0,fullScore=0,left=0,top= 0,width=0,height=0,widthScale=sheetDatas.widthMM2PX,heightScale=sheetDatas.heightMM2PX;
    for(var i=0; i<size; i++){
        var length = scoleList[i] && scoleList[i].length;
        for(var j=0; j<length; j++){
            var tempScore = scoleList[i][j].score;
            if(!scoleList[i][j].position.left && scoleList[i][j].position.left !=0){//如果没有位置信息，说明一题被分成了两个section,两个section只加一个section的分数
                continue;
            }
            userScore += !tempScore.userScore? 0:tempScore.userScore;
            fullScore += tempScore.fullScore;
        }
    }
    left = Math.round(scoleList[0][0].position.left);
    top = Math.round(scoleList[0][0].position.top);
    width = Math.round(scoleList[0][0].position.width/2);
    height = Math.round(scoleList[0][0].position.height*heightScale);
    userScore = Math.round(userScore*10)/10;
    fullScore = Math.round(fullScore*10)/10;
    console.log(scoleList[0][0]);
    return {
        position:{
            left:left,
            top:top,
            width:width,
            height:height
        },
        score:{
            userScore:userScore,
            fullScore:fullScore
        }
    };
}
/**
 * 计算试题得分以及分数和正误标记位置
 * @param sheetData 答题卡数据
 */
Checksheet._countScorePosition = function (sheetData) {
    var textLabels=[],iconLabels=[],preSection={},curSection={},nextSection={},preNumList = [],curNumList = [],nextNumList = [],tempObj={}
        ,heightScale = sheetData && sheetData.heightMM2PX
        ,widthScale = sheetData && sheetData.widthMM2PX
        ,topics = sheetData && sheetData.userAnswerRecordDTO && sheetData.userAnswerRecordDTO.answerRecordDetails
        ,size = sheetData && sheetData.answerSheetLocationDTO && sheetData.answerSheetLocationDTO.pageSheets && sheetData.answerSheetLocationDTO.pageSheets.length;
    for(var i=0; i<size; i++){
        var tempPageSheet = sheetData.answerSheetLocationDTO.pageSheets[i]
            ,tempTextLabel = [],tempIconLabel = []
            ,sectionSize = tempPageSheet.sections && tempPageSheet.sections.length;
        for(var j=0; j<sectionSize; j++){
            if(j == 0){   //一页答题卡中第一个section
                if(i != 0){ //当前页的答题卡不是试卷全部答题卡的第一页
                    var prePageSheet = sheetData.answerSheetLocationDTO.pageSheets[i-1].sections;
                    preSection = prePageSheet[prePageSheet.length -1];
                    curSection = tempPageSheet.sections[0];
                    preNumList = preSection.contents.branch[preSection.contents.branch.length-1].ixList;
                    curNumList = curSection.contents.branch[0].ixList;
                    if(i == size-1){ //当前页的答题卡是试卷全部答题卡的最后一页
                        if(curNumList[0] == preNumList[0]){ //一大题被分成两个section
                            tempObj = Checksheet._countCurSectionByCondition(preSection,curSection,null,topics,heightScale,widthScale,1);
                        }else{ //一大题是一个section
                            tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
                        }
                    }else{
                        var nextPageSheet = sheetData.answerSheetLocationDTO.pageSheets[i+1].sections;
                        nextSection = nextPageSheet[nextPageSheet.length-1];
                        //正常情况下要根据3个section来判断当前section中要展示的分数以及正误信息
                        tempObj = Checksheet._countScorePositionByNormal(preSection,curSection,nextSection,topics,heightScale,widthScale,null);
                    }
                }else{
                    curSection = tempPageSheet.sections[0];
                    if(sectionSize == 1){//一页答题卡就一个section
                        tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
                    }else{
                        nextSection = tempPageSheet.sections[1];
                        curNumList = curSection.contents.branch[curSection.contents.branch.length-1].ixList;
                        nextNumList = nextSection.contents.branch[0].ixList;
                        if(curNumList[0] == nextNumList[0]){  //一大题被分成两个section

                            tempObj = Checksheet._countCurSectionByCondition(null,curSection,nextSection,topics,heightScale,widthScale,2);
                        }else{  //一大题是一个section

                            tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
                        }
                    }
                }
            }else if(j == sectionSize-1){   //一页答题器卡中最后一个section
                preSection = tempPageSheet.sections[j-1];
                curSection = tempPageSheet.sections[j];
                preNumList = preSection.contents.branch[preSection.contents.branch.length-1].ixList;
                curNumList = curSection.contents.branch[0].ixList;
                if(i<size-1){   //当前页的答题卡不是试卷全部答题卡的最后一页，这种情况下一题如果有两个section，这两个section可能跨页
                    var nextPageSheet = sheetData.answerSheetLocationDTO.pageSheets[i+1].sections;
                    nextSection = nextPageSheet[0];
                    //正常情况下要根据3个section来判断当前section中要展示的分数以及正误信息
                    tempObj = Checksheet._countScorePositionByNormal(preSection,curSection,nextSection,topics,heightScale,widthScale,null);
                }else{  //当前页的答题卡是试卷全部答题卡的最后一页,section不会跨页

                    if(curNumList[0] == preNumList[0]){  //一大题被分成两个section

                        tempObj = Checksheet._countCurSectionByCondition(preSection,curSection,null,topics,heightScale,widthScale,1);
                    }else{  //一大题是一个section

                        tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
                    }
                }
            }else{
                preSection = tempPageSheet.sections[j-1];
                curSection = tempPageSheet.sections[j];
                nextSection = tempPageSheet.sections[j+1];
                var prePageSections = null;
                if(i>0){
                    prePageSections = sheetData.answerSheetLocationDTO.pageSheets[i-1].sections;
                }
                //正常情况下要根据3个section来判断当前section中要展示的分数以及正误信息
                tempObj = Checksheet._countScorePositionByNormal(preSection,curSection,nextSection,topics,heightScale,widthScale,prePageSections);
            }
            tempTextLabel.push(tempObj.tempText);
            tempIconLabel.push(tempObj.tempIcon);
        }
        textLabels.push(tempTextLabel);
        iconLabels.push(tempIconLabel);
    }
    return {
        textLabels:textLabels,
        iconLabels:iconLabels
    }
}
/**
 * 判断题目在上一页是否存在
 * @param index
 * @param prePageSheet
 * @returns {boolean}
 * @private
 */
Checksheet._isInNextPageSheet = function(index,prePageSheet){
    var size = prePageSheet && prePageSheet.length;
    for(var i=0; i<size; i++){
        var branch = prePageSheet[i].contents.branch;
        var length = branch && branch.length;
        for(var k=0; k<length; k++){
            var ixList = branch[k].ixList;
            if(ixList && (index == ixList[ixList.length-1])){
                return true;
            }
        }
    }
    return false;
}
/**
 * 正常情况下根据答题卡中的上个section，当前section以及下个section计算当前section的分数以及正误标示位置信息
 * @param preSection 上个section
 * @param curSection 当前section
 * @param nextSection 下个section
 * @param topics 试卷的试题列表
 * @param heightScale 高度比例 答题卡自有属性
 * @param widthScale 宽度比例 答题卡自有属性
 * @private object{}
 */
Checksheet._countScorePositionByNormal = function(preSection,curSection,nextSection,topics,heightScale,widthScale,prePageSections){
    var tempObj = {}
        ,preNumList = preSection.contents.branch[preSection.contents.branch.length-1].ixList
        ,curNumList = curSection.contents.branch[0].ixList
        ,nextNumList = nextSection.contents.branch[0].ixList;
    if(preNumList[0] == curNumList[0]){//一题分成两个section，上个section，当前section
        tempObj = Checksheet._countCurSectionByCondition(preSection,curSection,null,topics,heightScale,widthScale,1);
    }else if(curNumList[0] == nextNumList[0]){//一题分成两个section，当前section，下个section
        tempObj = Checksheet._countCurSectionByCondition(null,curSection,nextSection,topics,heightScale,widthScale,2);
    }else{//一题一个section
        if(!prePageSections || !Checksheet._isInNextPageSheet(curNumList[0],prePageSections)){
            tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
        }else{
            tempObj = {
                tempText:{
                    score:{},
                    position:{}
                },
                tempIcon:{
                    position:{},
                    mark:{}
                }
            }
        }
    }
    return tempObj;
}
/**
 * 一题被分成两块时，计算当前块的分数以及正误信息 有两种情况：一题被分成上个section，当前section；一题被分成当前section，下个section
 * @param preSection 上个section
 * @param curSection 当前section
 * @param nextSection 下个section
 * @param topics 试卷的试题列表
 * @param heightScale 高度比例 答题卡自有属性
 * @param widthScale 宽度比例 答题卡自有属性
 * @param type 1 一题被分成上个section，当前section
 *              2 一题被分成当前section，下个section
 * @private
 */
Checksheet._countCurSectionByCondition = function(preSection,curSection,nextSection,topics,heightScale,widthScale,type){
    var tempObj={};
    switch (type){
        case 1:
            if(curSection.contents.position.height < preSection.contents.position.height){ //当前section的高度小于上个section的高度

                if(curSection.contents.position.height*heightScale <= 30){ //当前section的高度小于正误标示高度，当前section既不展示分数也不展示正误，在上个section中展示分数和正误标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,1);
                }else{ //当前section的高度大于正误标示高度，当前section展示正误标示，上个section展示分数标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,3);
                }
            }else{ //当前section的高度大于上个section的高度

                if( preSection.contents.position.height*heightScale <= USER_SCORE_FONT_SIZE){//上个section的高度小于分数标示高度，当前section展示分数和正误标示，上个section不展示分数和正误标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
                }else{ //上个section的高度大于分数标示高度，当前section展示正误标示，上个section展示分数标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,3);
                }
            }
            break;
        case 2:
            if(curSection.contents.position.height < nextSection.contents.position.height){ //当前section的高度小于下个section的高度

                if(curSection.contents.position.height*heightScale <= USER_SCORE_FONT_SIZE){ //当前section的高度小于分数标示高度，当前section既不展示分数也不展示正误，在下个section中展示分数和正误标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,1);
                }else{ //当前section的高度大于分数标示高度，当前section展示分数标示，下个section展示正误标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,2);
                }
            }else{ //当前section的高度大于下个section的高度

                if( nextSection.contents.position.height*heightScale <= 30){//下个section的高度小于正误标示高度，当前section展示分数和正误标示，下个section不展示分数和正误标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,4);
                }else{ //下个section的高度大于正误标示高度，当前section展示分数标示，下个section展示正误标示

                    tempObj = Checksheet._countScorePositionByCondition(curSection,topics,heightScale,widthScale,2);
                }
            }
            break;
        default :
            tempObj = {
                tempText:{
                    score:{},
                    position:{}
                },
                tempIcon:{
                    position:{},
                    mark:{}
                }
            }
            break;
    }
    return tempObj;
}
/**
 *根据条件生成当前块的分数得分信息以及位置信息和正误标示的位置信息以及是否展示
 * @param curSection 当前section
 * @param topics 试卷的试题列表
 * @param heightScale 高度比例 答题卡自有属性
 * @param widthScale 宽度比例 答题卡自有属性
 * @param type 1 既不生成分数信息也不生成正误信息   2 只生成分数信息不生成正误信息
 *              3 不生成分数信息只生成正误信息       4 即生成分数信息又生成正误信息
 * @private object{}
 */
Checksheet._countScorePositionByCondition = function(curSection,topics,heightScale,widthScale,type){
    var tempText = {},tempIcon = {};
    switch (type){
        case 1:
            //计算分数以及分数显示位置
            tempText={
                score:{},
                position:{}
            }
            //计算正误标示位置以及当前块是否展示正误标示
            tempIcon={
                position:{},
                mark:{}
            }
            break;
        case 2:
            if(!curSection.contents.position){
                //计算分数以及分数显示位置
                tempText={
                    score:Checksheet._countSectionScore(curSection.contents.branch,topics,curSection.type),
                    position:Checksheet._countSectionPosition(curSection.position,1,heightScale,widthScale)
                }
            }else{
                //计算分数以及分数显示位置
                tempText={
                    score:Checksheet._countSectionScore(curSection.contents.branch,topics,curSection.type),
                    position:Checksheet._countSectionPosition(curSection.contents.position,1,heightScale,widthScale)
                }
            }

            //计算正误标示位置以及当前块是否展示正误标示
            tempIcon={
                position:{},
                mark:{}
            }
            break;
        case 3:
            //计算分数以及分数显示位置,不想加字段了，所以这里根据位置信息来判断是否展示分数，没有位置信息不展示分数，有则展示
            tempText={
                score:Checksheet._countSectionScore(curSection.contents.branch,topics,curSection.type),
                position:{}
            }
            if(!curSection.contents.position){
                //计算正误标示位置以及当前块是否展示正误标示
                tempIcon={
                    position:Checksheet._countSectionPosition(curSection.position,0,heightScale,widthScale),
                    mark:Checksheet._isMarkIcon(curSection.contents.branch,topics)
                }
            }else{
                //计算正误标示位置以及当前块是否展示正误标示
                tempIcon={
                    position:Checksheet._countSectionPosition(curSection.contents.position,0,heightScale,widthScale),
                    mark:Checksheet._isMarkIcon(curSection.contents.branch,topics)
                }
            }

            break;
        case 4:
            if(!curSection.contents.position){
                //计算分数以及分数显示位置
                tempText={
                    score:Checksheet._countSectionScore(curSection.contents.branch,topics,curSection.type),
                    position:Checksheet._countSectionPosition(curSection.position,1,heightScale,widthScale)
                }
                //计算正误标示位置以及当前块是否展示正误标示
                tempIcon={
                    position:Checksheet._countSectionPosition(curSection.position,0,heightScale,widthScale),
                    mark:Checksheet._isMarkIcon(curSection.contents.branch,topics)
                }
            }else{
                //计算分数以及分数显示位置
                tempText={
                    score:Checksheet._countSectionScore(curSection.contents.branch,topics,curSection.type),
                    position:Checksheet._countSectionPosition(curSection.contents.position,1,heightScale,widthScale)
                }
                //计算正误标示位置以及当前块是否展示正误标示
                tempIcon={
                    position:Checksheet._countSectionPosition(curSection.contents.position,0,heightScale,widthScale),
                    mark:Checksheet._isMarkIcon(curSection.contents.branch,topics)
                }
            }
            break;
        default :
            tempText={
                score:{},
                position:{}
            }
            tempIcon={
                position:{},
                mark:{}
            }
            break;
    }
    return {
        tempText:tempText,
        tempIcon:tempIcon
    };
}
/**
 * 初始化答题卡图片
 * @param sheetImages答题卡图片格式 array[url]
 */
Checksheet.initSheetImage=function(sheetImages){
    var html='',size = sheetImages && sheetImages.length;
    Checksheet.paperHide.show();
    Checksheet.paperPanel.show();
    try{
        for(var i=0; i<size; i++){
            var imgPath = sheetImages[i];
            if(i == size-1){
                html+='<div style="position: relative"><img src="'+ imgPath +'" onload="Checksheet.initSheet();"></div>';
            }else{
                html+='<div style="position: relative"><img src="'+ imgPath +'"></div>';
            }

        }
        Checksheet.imgMain.html(html);
        $("#img_loading").hide();
    }catch (e){
        Checksheet.paperHide.show();
        Checksheet.paperPanel.show();
        $("#img_loading").hide();
        Checksheet.imgMain.empty().append('<p style="margin-top:35%;font-size: 1.5em;color:darkgrey">获取答题卡出错，刷新页面后重试</p>');
    }
};
/**
 * 初始化答题卡标记
 * @param textLabels  字体标记    格式array[array[object{}]]
 * @param iconLabels  符号标记    格式array[array[object{}]]
 */
Checksheet.initSheetMark=function(textLabels,iconLabels){
    var size = Checksheet.imgMain.find("div").length;
    try{
        Checksheet.imgMain.find("div").each(function(i){
            if(i<=textLabels.length){
                var html=''
                    ,tempTextLabels = textLabels[i]
                    ,tempIconLabels = iconLabels[i]
                    ,size1 = tempTextLabels && tempTextLabels.length
                    ,size2 = tempIconLabels && tempIconLabels.length;
                //添加文字标记
                for(var j=0; j<size1; j++){
                    if(!tempTextLabels[j].position.left && tempTextLabels[j].position.left != 0){//根据位置信息判断分数是否显示
                        continue;
                    }
                    if(i==0 && j==0){//标试卷总分
                        if(SHEET_FLAG == 1){//第三方答题卡试卷总分位置矫正
                            html += '<p class="total" style="position: absolute;color:red;top: '+ (tempTextLabels[j].position.top-10) +'px;left:'+ (tempTextLabels[j].position.left+40) +'px;font-size:'+ TOTAL_SCORE_FONT_SIZE +'px;">'+
                                tempTextLabels[j].score.userScore +'</p>';
                        }else{
                            html += '<p class="total rel" style="position: absolute;color:red;top: '+ Math.round(tempTextLabels[j].position.top/2) +'px;width: '+ (tempTextLabels[j].position.width-15) +'px;height: '+ tempTextLabels[j].position.height +'px;left:'+ tempTextLabels[j].position.left +'px;font-size:'+ (TOTAL_SCORE_FONT_SIZE/1.5) +'px;margin:0;line-height:' + tempTextLabels[j].position.height +'px">'+
                                tempTextLabels[j].score.userScore +'<a href="#" target="_blank" class="bgGrey">点击此区域跳转<br/>本科考试报告</a></p>';
                        }
                    }else if( SHEET_FLAG == 1 && (tempTextLabels[j].score.type=="SingleChoice" || tempTextLabels[j].score.type=="MultiChoice" || tempTextLabels[j].score.type=="Object")){//第三方答题卡选择题不展示满分
                        html += '<p class="section" style="position: absolute;font-weight:bold;color:red;top: '+ (tempTextLabels[j].position.top - 10) +'px;left:'+ (tempTextLabels[j].position.left + 45) +'px;font-size:'+ USER_SCORE_FONT_SIZE +'px;">'+
                            tempTextLabels[j].score.userScore +'分</p>';
                    }else{
                        html += '<p class="section" style="position: absolute;font-weight:bold;color:red;top: '+ (tempTextLabels[j].position.top+3) +'px;left:'+ tempTextLabels[j].position.left +'px;font-size:'+ USER_SCORE_FONT_SIZE +'px;width: '+ (tempTextLabels[j].position.width-15) +'px;height: '+ tempTextLabels[j].position.height +'px;box-sizing: border-box;padding-top:5px;">'+
                            tempTextLabels[j].score.userScore +'分<span style="font-size: '+ FULL_SCORE_FONT_SIZE +'px;">'+ '（满分'+tempTextLabels[j].score.fullScore +'分）'+'</span><a href="#" target="_blank" class="bgGrey bgGrey2" style="line-height:' +  tempTextLabels[j].position.height + 'px;">点此区域跳转到本部分试题解析</a></p>';
                    }
                }
                //添加图片标记
                for(var k=0; k<size2; k++){
                    var score = tempTextLabels[k].score
                        ,classLabel;
                    if(!tempIconLabels[k].mark.isMarkIcon){
                        continue;
                    }
                    if(score.userScore == score.fullScore && score.userScore != 0){
                        classLabel = "normal-right";
                    }else if(score.userScore == 0){
                        classLabel = "normal-wrong";
                    }else{
                        classLabel = "normal-half";
                    }
                    html += '<i style="position: absolute;width:45px;height:30px;top: '+ tempIconLabels[k].position.top +'px;left: '+ tempIconLabels[k].position.left +'px;" class="'+ classLabel +'"></i>';
                }
                $(this).append(html);
            }
        });
    }catch (e){

    }
}
/**
 * 判断答题卡中一个块是否显示正误标示
 * 题型code 00 单选题 01 多选题 02 主观题 03 双选题 04 填空题 05 判断题 06 作文题
 * @param section 答题卡块中试题序号     格式array[object{array[number]}]
 * @param topics 试卷试题详情      格式array[object{}]
 * @private
 */
Checksheet._isMarkIcon = function(section,topics){
    var size = section && section.length;
    topics = Checksheet._handleTopics(topics);
    try{
        var typeId = topics[section[size-1].ixList[section[size-1].ixList.length-1]-1].topicTypeId;

        if(!typeId || typeId == "00" ||  typeId == "01" || typeId == "03" || typeId == "06"){
            return {
                isMarkIcon:false
            };
        }else{
            return {
                isMarkIcon:true
            };
        }
    }catch (e){
        return {
            isMarkIcon:false
        };
    }
}
/**
 * 计算答题卡中一个块中用户得分和标准分
 * @param sections 答题卡块中试题序号     格式array[object{array[number]}]
 * @param topics 试卷试题详情      格式array[object{}]
 */
Checksheet._countSectionScore = function(sections,topics,type){
    var userScore=0,fullScore=0,size=sections && sections.length;
    topics = Checksheet._handleTopics(topics);
    try{
        for(var i=0; i<size; i++){
            var length = sections[i] && sections[i].ixList && sections[i].ixList.length;
            for(var j=0; j<length; j++){
                var topic = topics[sections[i].ixList[j]-1];
                if( topic && (!topic.isCandidate || (topic.isCandidate && topic.isSelected))){
                    userScore += topic.score;
                    fullScore += topic.standardScore;
                }
            }
        }
    }catch(e) {
        return {
            userScore:0,
            fullScore:0,
            type:type
        };
    }
    return {
        userScore:Math.round(userScore*10)/10,
        fullScore:Math.round(fullScore*10)/10,
        type:type
    };
}
/**
 * 重新生成答题列表，有缺题情况，缺题时，试题信息全部赋值为空
 * @private
 */
Checksheet._handleTopics = function(topics){
    for(var i=0; i<topics.length; i++){
        if(topics[i].topicNumber > i+1){
            var length = topics[i].topicNumber - i - 1;
            for(var j=0; j<length; j++){
                topics.splice(i,0,{
                    score:0,
                    standardScore:0,
                    topicTypeId:"",
                    topicNumber: i+1,
                    error:"当前题目缺失"
                });
            }
        }
    }
    return topics;
}
/**
 * 计算答题卡中一个块中分数或正误标记位置
 * @param position 答题卡中块的位置信息   格式object{}
 * @param type 计算类型   type=1分数标记位置，type=0正误标记位置
 * @param heightScale 高度位置比例转换 答题卡自有属性
 * @param widthScale 宽度位置比例转换 答题卡自有属性
 */
Checksheet._countSectionPosition = function(position,type,heightScale,widthScale){
    var left = 0,top = 0,width = 0,height = 0;
    width = Math.abs(Math.round((position.width+5)*widthScale));
    height = Math.abs(Math.round((position.height-5)*heightScale));
    if(type==1){
        left = Math.abs(Math.round((position.left+6)*widthScale));
        top = Math.abs(Math.round((position.top-6)*heightScale));
    }else{
        left = Math.abs(Math.round((position.left + position.width)*widthScale))-50;
        top = Math.abs(Math.round((position.top + position.height)*heightScale))-30;
    }
    return {
        left:left,
        top:top,
        width:width,
        height:height
    }
}
/**
 * 调整标记大小
 * @param scale 调整比例 窗口最大化变化比例
 * @param type 1 放大； 0 缩小
 */
Checksheet.resizeMarkSize = function(scale,type){
    Checksheet.imgMain.find("div").each(function(){
        var _this = this;
        $(_this).find("p").each(function () {
            var oriSize = $(this).css("font-size").split("px")[0], newSize = ''
                ,oriTop = $(this).css("top").split("px")[0] ,newTop = ''
                ,oriLeft = $(this).css("left").split("px")[0],newLeft = '';
            if (type == 1) {
                newSize = Math.round(oriSize * scale);
                newTop = Math.round(oriTop * scale);
                newLeft = Math.round(oriLeft * scale);
            } else {
                newSize = Math.round(oriSize / (!scale ? 1 : scale));
                newTop = Math.round(oriTop / (!scale ? 1 : scale));
                newLeft = Math.round(oriLeft / (!scale ? 1 : scale));
            }
            $(this).css("font-size", newSize + "px").css("top",newTop + "px").css("left",newLeft + "px");
        });
        $(_this).find("span").each(function () {
            var oriSize = $(this).css("font-size").split("px")[0], newSize = '';
            if (type == 1) {
                newSize = Math.round(oriSize * scale);
            } else {
                newSize = Math.round(oriSize / (!scale ? 1 : scale));
            }
            $(this).css("font-size", newSize + "px");
        });
        $(_this).find("i").each(function(){
            var oriTop = $(this).css("top").split("px")[0] ,newTop = ''
                ,oriLeft = $(this).css("left").split("px")[0],newLeft = '';
            if(type == 1){
                if($(this).hasClass("normal-right")){
                    $(this).removeClass("normal-right").addClass("max-right");
                }else if($(this).hasClass("normal-half")){
                    $(this).removeClass("normal-half").addClass("max-half");
                }else if($(this).hasClass("normal-wrong")){
                    $(this).removeClass("normal-wrong").addClass("max-wrong");
                }
                newTop = Math.round(oriTop * scale);
                newLeft = Math.round(oriLeft * scale);
                $(this).css("width","114px").css("height","86px").css;
            }else{
                if($(this).hasClass("max-right")){
                    $(this).removeClass("max-right").addClass("normal-right");
                }else if($(this).hasClass("max-half")){
                    $(this).removeClass("max-half").addClass("normal-half");
                }else if($(this).hasClass("max-wrong")){
                    $(this).removeClass("max-wrong").addClass("normal-wrong");
                }
                newTop = Math.round(oriTop / (!scale ? 1 : scale));
                newLeft = Math.round(oriLeft / (!scale ? 1 : scale));
                $(this).css("width","45px").css("height","30px");
            }
            $(this).css("top",newTop + "px").css("left",newLeft + "px");
        });
    })
}
Checksheet.bindEventPaper = function () {

    //tag=1,最大化；tag=0,原始尺寸
    Checksheet.btnZoom.off("click").click(function () {
        if ($(this).attr("tag") == 1) {
            $(this).removeClass().addClass("small");
            $("#questionNavigator",parent.document).show();
            Checksheet.paperPanel.css({
                "width": "745px",
                "height": "586px",
                "top": "12%",
                "left": "47%",
                "margin-left": "-340px"
            });
            $(this).attr("tag", "0");
            if(!Checksheet.scaling && Checksheet.maxWidth){
                Checksheet.minWidth = Checksheet.imgMain.width();
                Checksheet.scaling = Checksheet.maxWidth/Checksheet.minWidth;
            }
            Checksheet.resizeMarkSize(Checksheet.scaling,0);
        } else {
            $(this).removeClass().addClass("small1");
            $("#questionNavigator",parent.document).hide();
            Checksheet.paperPanel.css({
                "width": "100%",
                "height": "100%",
                "top": "0px",
                "left": "0px",
                "margin-left": "0px"
            });
            if(!Checksheet.scaling && Checksheet.minWidth){
                Checksheet.maxWidth = Checksheet.imgMain.width();
                Checksheet.scaling = Checksheet.maxWidth/Checksheet.minWidth;
            }
            $(this).attr("tag", "1");
            Checksheet.resizeMarkSize(Checksheet.scaling,1);
        }
    });
    //关闭
    Checksheet.btnClose.off("click").click(function () {
        $("#questionNavigator",parent.document).show();
        Checksheet.paperHide.hide();
        Checksheet.paperPanel.hide();
        $('#special_exercise', parent.document).hide();
    });
}
$(function () {
    Checksheet.paperHide = $("#paperHide");
    Checksheet.paperPanel = $("#paperPanel");
    Checksheet.btnZoom = $("#btnZoom");
    Checksheet.btnClose = $("#btnClose");
    Checksheet.imgMain = $("#imgMain");
    Checksheet.imgBox = $("#imgBox");
    Checksheet.scaling = '';
    Checksheet.minWidth = '';
    Checksheet.maxWidth = '';
    if ( (charge&&charge.length==0) || charge.indexOf(paperId) > -1) {
        Checksheet.bindEventPaper();
        Checksheet.showPaperImage();
    } else {
        var imgPath = '/zhixuebao/public/module/global/images/banner12.png',
            interalPath = studentUrl + '/vip/goodsList/?from=web-analysis';
        var _html = '<div class="taste" style="margin-top: 18%">'
            + '<div class="pic fl" style="float:left;width: 430px;"><img src="' + imgPath + '"/></div>'
            + '<div class="txt">'
            + '<h3>试卷存储空间已满！</h3>'
            + '<h2>开通会员获取无限量存储空间</h2>'
            + '<p><a href="' + interalPath + '"' + 'target="_blank" class="taste_btn_a mt10">开通VIP会员</a></p>'
            + '<p class="mt10"></p>'
            + '</div>'
            + '</div>';
        Checksheet.paperHide.show();
        Checksheet.paperPanel.show();
        Checksheet.btnZoom.hide();
        $("#imgBox").html(_html);
        Checksheet.btnClose.click(function () {
            $("#questionNavigator",parent.document).show();
            Checksheet.paperHide.hide();
            Checksheet.paperPanel.hide();
            $('#special_exercise', parent.document).hide();
        });
    }
})