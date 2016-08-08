var elements = elements || {};

/**
 * 关于学生报告的公共方法
 */
var ReportUtil = {
	/**
	 * 获取总分的考试
	 * @return 总分的考试
	 */	
	getExamData: function(data){
		var userExamDataList = data;
		var examData = null;
		for(var i=0;i<userExamDataList.length;i++){
			//subjectCode为空的视为总分
			if(!userExamDataList[i].subjectCode){
				examData = userExamDataList[i];
				break;
			}
		}
		return examData;
	},	
		
	/**
	 * 是否是学霸
	 * @params data 总成绩
	 */	
	isStudentA: function(data,type){
		var flag = false;
		if(data && type == "all"){
			var examData = this.getExamData(data);
			if(examData.gradeRank.ratio >= 81 && examData.gradeRank.ratio <= 100){
				flag = true;
			}
		}else if(type == "singer"){
			var subjectData = data;
			if(subjectData.gradeRank.ratio >= 81 && subjectData.gradeRank.ratio <= 100){
				flag = true;
			}
		}else{
			flag = false;
		}
		return flag;
	},	
	
	/**
	 * 是否是学民
	 * @params data 总成绩
	 */	
	isStudentB: function(data,type){
		var flag = false;
		if(data && type == "all"){
			var examData = this.getExamData(data);
			if(examData.gradeRank.ratio >= 21 && examData.gradeRank.ratio <= 80){
				flag = true;
			}
		}else if(type == "singer"){
			var subjectData = data;
			if(subjectData.gradeRank.ratio >= 21 && subjectData.gradeRank.ratio <= 80){
				flag = true;
			}
		}else{
			flag = false;
		}
		return flag;
	},	
	
	/**
	 * 是否是学弱
	 * @params data 总成绩
	 */	
	isStudentC: function(data,type){
		var flag = false;
		if(data && type == "all"){
			var examData = this.getExamData(data);
			if(examData.gradeRank.ratio <= 20){
				flag = true;
			}
		}else if(type == "singer"){
			var subjectData = data;
			if(subjectData.gradeRank.ratio <= 20){
				flag = true;
			}
		}else{
			flag = false;
		}
		return flag;
	},
	
	/****************判断 (难题、中等题、简单题)丢分最多的题型**********************/
	getMostLost: function(result){
		if(!result){
			return "";
		}
		var losts = result;
		var maxLostScore = 0;//丢的最多分
		var lostOne = null;
		for(var i=0;i<losts.length;i++){
			maxLostScore = losts[i].lostScoreValue > maxLostScore ? losts[i].lostScoreValue : maxLostScore;
		}
		for(var j=0;j<losts.length;j++){
			if(maxLostScore == 0){
				break;
			}
			if(losts[j].lostScoreValue == maxLostScore){
				lostOne =  losts[j];
				break;
			}
		}
		return lostOne;
	}
};

var ReportDataUtil = {
		/**
		 * 获取丢分题目
		 * @param callback
		 */
		getLostScore: function(callback){
			var url = basePath + "/zhixuebao/feesReport/getSubjectLostScoreByDifficulty/";
			var userId = currentUser.id;
			var paperId = Request.QueryString("paperId");
			$.getJSON(url,{userId:userId,paperId:paperId},callback);
		}


};

/************************丢分题难度*************************/
var diffcult = (function(){
	var diffcult = function(type){
		/**
		 * 单科类型(是学生版还是家长版)
		 */
		this.type = type;
	};
	diffcult.prototype.init = function(){
		this.initLostScoreDiff();
		this.initDiffTipNew();
		// this.initDiffTip();
	};
	
	/**
	 * 初始化丢分题难度柱状图
	 */
	diffcult.prototype.initLostScoreDiff = function(){

		this.getSubjectLostScoreByDifficulty(function(result){
			var lostDifficultyData = result;
			
			//用户总失分
	        var lostAllScore = 0;
	        //简单题在数组中的位置
	        var lostSimpleIndex = 0;
	        //是否丢分、丢分率相同
	        var isDifficultyEqual = true;
			
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
            for (var i = 0; i < lostDifficultyData.length; i++) {
                var lostData = lostDifficultyData[i];
                if (i + 1 < lostDifficultyData.length && (lostData.lostScoreValue != lostDifficultyData[i + 1].lostScoreValue || lostData.lostScoreTypeRatio != lostDifficultyData[i + 1].lostScoreTypeRatio)) {
                    isDifficultyEqual = false;
                }
                lostAllScore += lostData.lostScoreValue;
                if (lostDifficultyData[i].lostScoreTypeName == "难题") {
                    elements.lostScore_hard.height(lostData.lostScoreTypeRatio * 2);
                    elements.lostScore_hardScore.text(lostData.lostScoreValue);
                } else if (lostDifficultyData[i].lostScoreTypeName == "中等题") {
                    elements.lostScore_middle.height(lostData.lostScoreTypeRatio * 2);
                    elements.lostScore_middleScore.text(lostData.lostScoreValue);
                } else if (lostDifficultyData[i].lostScoreTypeName == "简单题") {
                    lostSimpleIndex = i;
                    elements.lostScore_simple.height(lostData.lostScoreTypeRatio * 2);
                    elements.lostScore_simpleScore.text(lostData.lostScoreValue);
                } else {
                    continue;
                }
            }
            
		});
	};

	diffcult.prototype.initDiffTipNew = function(){

		var role = 'student';
		if(this.type.indexOf('Par') > -1) {
			role = 'parent';
		}

		$.getJSON(basePath + "/zhixuebao/feesReport/getDropPointsDifficultyIntro/", {examId: Request.QueryString("examId"), paperId: Request.QueryString("paperId"), role: role}, function (data) {
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
	 * 初始化 丢分题难度的提示语
	 */
	diffcult.prototype.initDiffTip = function(){
		var _this = this;
		//TODO
		//全学科数据
		var dataList = userExamDataList;
		//单学科数据
		var subjectData = userExamData;
		var title = "";
		var remark = "";
		if(subjectData.subjectCode=="01"||subjectData.subjectCode=="01A"){
			if(ReportUtil.isStudentA(subjectData,"singer")){//如果单科是学霸
				ReportDataUtil.getLostScore(function(result){
					var lostOne = ReportUtil.getMostLost(result);
					//丢分最多的
					if(lostOne != null){
						if(lostOne.lostScoreTypeName == "难题"){
							if(_this.type == "reportParSinger"){
								title =  "难题丢分最多属于正常现象。";
								remark =  "难题丢分最多，说明简单题和中等题的得分很高，知识掌握扎实，也够细心。只需要保持对语文的爱好，多阅读多思考，父母可以多与孩子进行一些亲子阅读与互动，帮助孩子拓宽眼界，加深思考问题的深度，这是语文改革的重要的方向。";
							}else{
								title =  "难题丢分最多属于正常现象。";
								remark =  "只在难题丢分，妥妥的学霸！如果觉得还比较轻松的话，就可以适当减少在语文学科上投入的时间和精力了。但是要保持多阅读、多思考、多写读后感、多摘抄精彩语句等有利于语文成绩提高的好习惯。坚持积累才能在语文学习上利于不败之地。";
							}
						}else if(lostOne.lostScoreTypeName == "中等题"){
							if(_this.type == "reportParSinger"){
								title =  "中档题丢分过多是个危险信号！";
								remark =  "语文的中档题多是理解表述的内容，如果在中档题上丢分过多，是个危险的信号。如果丢分集中在一道题目上，可能是发挥失常了；如果分布在不同题目上，可能是理解表述模块出了点问题。不过还好孩子的语文素养比较好，因此需要重点关注下答题规范问题。可以多听听讲解答题规范和技巧的课程。";
							}else{
								title =  "预警！中档题丢分过多！";
								remark =  "语文的中档题多是理解表述的内容，如果在中档题上丢分过多，要多注意了。如果丢分集中在一道题目上，可能是粗心了；如果分布在不同题目上，可能是理解表述模块出了点问题。但是你语文素养比较好，因此重点关注下答题规范问题。可以多听听讲解答题规范和技巧的课程。";
							}
						}else if(lostOne.lostScoreTypeName == "简单题"){
							if(_this.type == "reportParSinger"){
								title =  "简单题丢分太可惜了！";
								remark =  "语文的简单题多以基础识记类内容为主。孩子的语文成绩一向很好，这次考试简单题丢分过多，要注意孩子因为骄傲而轻敌，或者因为语文成绩好而忽视本学科的学习。记得提醒孩子，语文是积累型学科，最重要的就是坚持学习和积累。";
							}else{
								title =  "学霸的低级错误！";
								remark =  "你在语文上一向表现出色，在简单题上失分是最不应该的。语文的简单题，多是依靠识记的题目，在这部分丢分这么多，是不是你这段时间在语文上投入的不够？语文最重要的是持续投入，不能因为成绩出色就忽视它啊！";
							}
						}
					}else{//没丢分情况
						if(_this.type == "reportParSinger"){
							title = "哇！全部无丢分，太难得了！";
							remark = "没有丢分，知识的掌握和临场发挥都无懈可击。";
						}else{
							title = "哇！全部无丢分！快来看逆天学霸！";
							remark = "学霸常有，而满分学霸不常有！";
						}
					}
					elements.subjectScoreTitle.text(title);
					elements.subjectScoreRemark.text(remark);
					return;
				});
			}else if(ReportUtil.isStudentB(subjectData,"singer")){//如果单科是学民
				ReportDataUtil.getLostScore(function(result){
					var lostOne = ReportUtil.getMostLost(result);
					//丢分最多的
					if(lostOne != null){
						if(lostOne.lostScoreTypeName == "难题"){
							if(_this.type == "reportParSinger"){
								title = "难题丢分过多!";
								remark = "难题丢分过多说明孩子这门学科的基本功还是不错的，也比较努力。语文的难题基本集中在阅读和古诗词鉴赏上，这两部分对理解能力、感悟能力和表达能力的要求都比较高。而这些能力都是需要积累才能形成的，每周读一种文体和题材的文章或诗歌，来不断强化对这种类型文本的理解是一个比较有效的方法，其次就是多看看答题规范和答题技巧类的课程，也会有所帮助。";
							}else{
								title =  "难题丢分过多!";
								remark =  "语文的难题基本集中在阅读和古诗词鉴赏上，这两部分对理解能力、感悟能力和表达能力的要求都比较高。多读是提高的最主要办法，另外，分题材地做阅读能够强化对于不同文体、不同题材的文章、诗歌特点的理解，答题的时候会比较顺利。";
							}
						}else if(lostOne.lostScoreTypeName == "中等题"){
							if(_this.type == "reportParSinger"){
								title = "能力预警！语文的中档题多是理解表述的内容，这部分失分过多的话，需要加强阅读和表述能力。";
								remark = "语文的中档题多是理解表述的内容，如果这部分丢分较多，要从几个方面帮助孩子：一是看孩子是否对本门学科有轻微厌学情绪了？二是看孩子是否在阅读理解与表述方面遇到了什么困难？是文章难度加大，无法准确理解，还是理解了但是无法准确表述，总是抓不到得分点？前者需要多阅读多感悟，后者需要多看些讲解答题技巧和答题规范的课程。";
							}else{
								title =  "语文的中档题多是理解表述的内容，这部分失分过多的话，需要加强阅读和表述能力。";
								remark =  "语文的中档题多是理解表述的内容，这部分失分过多的话，需要加强阅读理解能力及语言表达能力。一个办法是多阅读，多思考和讨论，比如写读后感等，阅读和写作能力都能得到提高；二是多看些讲解答题技巧和规范的课程。";
							}
						}else if(lostOne.lostScoreTypeName == "简单题"){
							if(_this.type == "reportParSinger"){
								title = "简单题丢分最多，丢的这些分足够孩子在班级多击败xx%的同学！";
								remark = "语文的简单题多是识记类的基础知识内容。基础知识琐碎，不爱记，阅读和作文分值高但是提高难，这是大部分孩子语文成绩难提高的重要原因。因此每天拿出20分钟来识记练习基础知识内容是提高成绩很重要的方法之一。";
							}else{
								title =  "简单题丢分最多，丢的这些分足够你在班级多击败xx%的同学！";
								remark =  "胜利的关键就是比别人犯更少的错。简单题就是大部分人都能得分的题，这种失误是最不应该的。语文的简单题，多是依靠识记的题目，在这部分丢分这么多，足以说明你在语文上的投入不够！因此，每天拿出20分钟坚持基础知识的识记，是消灭简单题失分的最重要手段。";
							}
						}
					}else{//没丢分情况
						//既然是学民，就肯定木有没丢分情况喽~
					}
					if(title.indexOf("xx")>-1){
						errTopicObj.getUserSubjectClassRank(lostOne.lostScoreValue+userExamData.score, function(result){
							if(result){
								var beatRatio = result.ratio - userExamData.classRank.ratio;
								elements.subjectScoreTitle.text(title.replace("xx",beatRatio));
								elements.subjectScoreRemark.text(remark);
							}
						});
					}else{
						elements.subjectScoreTitle.text(title);
						elements.subjectScoreRemark.text(remark);
					}
					return;
				});
			}else{//如果单科是学弱
				ReportDataUtil.getLostScore(function(result){
					var lostOne = ReportUtil.getMostLost(result);
					//丢分最多的
					if(lostOne != null){
						if(lostOne.lostScoreTypeName == "难题"){
							if(_this.type == "reportParSinger"){
								title = "难题丢分多，是时候检验下语文的基本能力问题了。";
								remark = "语文的难题主要集中在阅读和诗歌鉴赏部分，这部分是所有学生丢分的主要模块。语文的核心只有读和写，但是这两部分提高起来会比较慢，不如鼓励孩子试试每天拿出20分钟做基础知识记忆背诵，这部分分数也很多，提高会比较明显。当然，语文学习离不开每天的阅读和写作练习，带着孩子多阅读，鼓励孩子养成阅读、思考、摘抄的好习惯，培养对语文学习的兴趣，坚持下去，成绩会提高的！";
							}else{
								title =  "难题丢分多，题目是不是太难了啊！";
								remark =  "语文的难题主要集中在阅读和诗歌鉴赏部分，这部分是所有学生丢分的主要模块。语文的核心只有读和写，但是这两部分提高起来会比较慢，不如试试每天拿出20分钟做基础知识记忆背诵，这部分分数也很多，提高会比较明显。当然，语文学习离不开每天的阅读和写作练习，坚持下去，成绩会提高的！";
							}
						}else if(lostOne.lostScoreTypeName == "中等题"){
							if(_this.type == "reportParSinger"){
								title = "中等题丢分多，规范答题是关键！";
								remark = "语文的中档题多是理解表述的内容，这部分失分过多的话，需要加强阅读理解能力及语言表达能力。孩子总体来说语文成绩比较薄弱，可能对学科的兴趣也会受影响。语文是积累型学科，提高的过程会比较缓慢，不要给孩子太多负担，带着孩子多阅读，鼓励孩子养成阅读、思考、摘抄的好习惯，语文成绩就会上来的。";
							}else{
								title =  "中等题丢分多，规范答题是关键！";
								remark =  "语文的中档题多是理解表述的内容，这部分失分过多的话，需要加强阅读理解能力及语言表达能力。不过这也说明你在简单题上表现还不错，有努力在记忆和积累哦。接下来，坚持积累，每天多花点时间摘抄优美文段，你会发现很快你的语文成绩提高得让你惊喜。不要给自己太多负担，学习语文应该是享受。";
							}
						}else if(lostOne.lostScoreTypeName == "简单题"){
							if(_this.type == "reportParSinger"){
								title = "简单题丢分多，多关注孩子的学习兴趣和学习信心吧！";
								remark = "孩子单科偏科，很有可能是对于这门学科已经有了厌学情绪。在简单题上失分这么多，更是说明了这一点。语文的简单题以基础理解和识记内容为主，掌握起来比较容易。鼓励孩子每天花20分钟，完成几道基础题目，或者背一首诗，摘抄一段文章，重要的是不要有压力，也不要试图通过突击式学习提高多少，避免产生挫败感。";
							}else{
								title =  "简单题丢分多，这个不应该哦！";
								remark =  "简单题以基础识记类内容为主。这部分只要愿意下功夫是很好提高的！试试吧！每天花20分钟时间，做3道基础知识题目，背一首诗或者一段文章，或者摘抄一段精彩文章，坚持一段时间你的语文会明显提升。";
							}
						}
					}else{//没丢分情况
						//既然是学弱，就更木有没丢分情况喽~
					}
					elements.subjectScoreTitle.text(title);
					elements.subjectScoreRemark.text(remark);
					return;
				});
			}
		}else{
			if(ReportUtil.isStudentA(subjectData,"singer")){//如果单科是学霸
				ReportDataUtil.getLostScore(function(result){
					var lostOne = ReportUtil.getMostLost(result);
					//丢分最多的
					if(lostOne != null){
						if(lostOne.lostScoreTypeName == "难题"){
							if(_this.type == "reportParSinger"){
								title =  "难题丢分最多属于正常现象。";
								remark =  "难题丢分最多，说明简单题和中等题的得分很高，知识掌握扎实，也够细心。学有余力的话可以适当挖掘潜能，挑战下难题包。或者提前预习，保持优势。";
							}else{
								title =  "难题丢分最多属于正常现象。";
								remark =  "只在难题丢分，妥妥的学霸！如果觉得还比较轻松的话，就可以去挑战下难题包啦！或者提前预习也是不错的选择。";
							}
						}else if(lostOne.lostScoreTypeName == "中等题"){
							if(_this.type == "reportParSinger"){
								title =  "中档题丢分过多是个危险信号！";
								remark =  "中等题考查知识运用能力，是知识向能力转化的重要途径，也是备考阶段面临大综合的必要准备。如果不注意这一部分内容的巩固，很可能下一阶段学习会成绩下滑。";
							}else{
								title =  "预警！中档题丢分过多！";
								remark =  "中等题考查知识运用能力，是备考阶段面临大综合的准备。如果在中档题上丢分过多，要注意总结下这一阶段的学习了，免得为下一阶段留下隐患。";
							}
						}else if(lostOne.lostScoreTypeName == "简单题"){
							if(_this.type == "reportParSinger"){
								title =  "简单题丢分太可惜了！";
								remark =  "简单题以基础识记类内容为主。这部分丢分过多，主要是马虎粗心，要注意帮助孩子克服这一点。还要预防孩子因为骄傲而轻敌，是不是该背该记的都没下功夫记啊？温和地帮助孩子吧，不要发脾气，更不要伤害孩子的自尊心啊！";
							}else{
								title =  "学霸的低级错误！";
								remark =  "简单题丢分过多！你太粗心了！细心是考试成败的关键之一！";
							}
						}
					}else{//没丢分情况
						if(_this.type == "reportParSinger"){
							title = "哇！全部无丢分，太难得了！";
							remark = "没有丢分，知识的掌握和临场发挥都无懈可击。";
						}else{
							title = "哇！全部无丢分！快来看逆天学霸！";
							remark = "学霸常有，而满分学霸不常有！";
						}
					}
					elements.subjectScoreTitle.text(title);
					elements.subjectScoreRemark.text(remark);
					return;
				});
			}else if(ReportUtil.isStudentB(subjectData,"singer")){//如果单科是学民
				ReportDataUtil.getLostScore(function(result){
					var lostOne = ReportUtil.getMostLost(result);
					//丢分最多的
					if(lostOne != null){
						if(lostOne.lostScoreTypeName == "难题"){
							if(_this.type == "reportParSinger"){
								title = "难题丢分过多!";
								remark = "难题丢分过多说明孩子这门学科的基本功还是不错的，也比较努力。不过还没适应大综合的考查方式以及一些深入的答题技巧。这个可以通过多做类型题，以及多看些解题技巧类的内容来补足。";
							}else{
								title =  "难题丢分过多!";
								remark =  "难题丢分过多，说明综合运用让你头疼。这类题目是备考阶段常见的，也是整体能力上升一个台阶的标识。解决方法呢，一是多做好题多思考；二是多看些解题技巧秘籍。";
							}
						}else if(lostOne.lostScoreTypeName == "中等题"){
							if(_this.type == "reportParSinger"){
								title = "中档题丢分过多!";
								remark = "中等题考查知识运用能力，是知识向能力转化的重要途径，也是备考阶段面临大综合的必要准备。要从几个方面帮助孩子：一是看孩子是否对本门学科有轻微厌学情绪了？从而导致平时学习的时候对这门学科不重视，不愿意花时间？二是孩子是否在这门学科的综合运用上产生了瓶颈？适当学习一些解题技巧类的内容，会对提高帮助较大。";
							}else{
								title =  "中档题丢分过多!";
								remark =  "中等题考查知识运用能力，是备考阶段面临大综合的准备。如果在中档题上丢分过多，可能是知识向能力的转化上遇到难题了，注意及时巩固补足。";
							}
						}else if(lostOne.lostScoreTypeName == "简单题"){
							if(_this.type == "reportParSinger"){
								title = "简单题丢分过多!";
								remark = "简单题以基础识记类内容为主。这部分丢分过多，主要是马虎粗心，要注意帮助孩子克服这一点。或者是不是孩子在学习时间和精力的分配上出了些问题？要注意不能偏科啊！";
							}else{
								title =  "简单题丢分过多不能忍!";
								remark =  "简单题丢分过多！你太粗心了！胜利的秘密就是比对手犯更少的错误，粗心的错误就是必须克服的问题！";
							}
						}
					}else{//没丢分情况
						//既然是学民，就肯定木有没丢分情况喽~
					}
					elements.subjectScoreTitle.text(title);
					elements.subjectScoreRemark.text(remark);
					return;
				});
			}else{//如果单科是学弱
				ReportDataUtil.getLostScore(function(result){
					var lostOne = ReportUtil.getMostLost(result);
					//丢分最多的
					if(lostOne != null){
						if(lostOne.lostScoreTypeName == "难题"){
							if(_this.type == "reportParSinger"){
								title = "难题丢分多";
								remark = "难题丢分过多说明孩子这门学科的基本功还是不错的，也比较努力。不过还没适应大综合的考查方式以及一些深入的答题技巧。这个可以通过多做类型题，以及多看些解题技巧类的内容来补足。";
							}else{
								title =  "难题丢分多";
								remark =  "题目难度太大，可以理解。不过还是要在这一科上努力，不要偏科啊！";
							}
						}else if(lostOne.lostScoreTypeName == "中等题"){
							if(_this.type == "reportParSinger"){
								title = "中等题丢分多";
								remark = "中等题以知识运用为主。这部分丢分多，说明孩子可能对这门学科的感觉还没找到，好像暂时没开窍的感觉。这种情况下，盲目的多做题是没用的。反而要少做题，做精题，经典题，精华题，鼓励孩子多思考，尽快树立信心，激发兴趣。";
							}else{
								title =  "中等题丢分多";
								remark =  "中等题以知识运用为主。这部分丢分多，说明你可能对这门学科的感觉还没找到，好像没有打通任督二脉的感觉。不要着急，从难度不大但是比较经典的题型入手，多思考，很快会提高的。不要盲目追求多做题哦。";
							}
						}else if(lostOne.lostScoreTypeName == "简单题"){
							if(_this.type == "reportParSinger"){
								title = "简单题丢分多";
								remark = "孩子单在简单题上失分这么多，是很可惜的。说明一是太粗心，二是忽视基础。简单题多以基础理解和识记内容为主，花点时间很容易掌握，多鼓励孩子，引导学习兴趣，只要有兴趣提高就很快了。";
							}else{
								title =  "简单题丢分多";
								remark =  "简单题以基础识记类内容为主。这部分只要愿意下功夫是很好提高的！试试吧！而且简单题丢分大部分时候是因为粗心，粗心是进步最大的敌人啊！";
							}
						}
					}else{//没丢分情况
						//既然是学弱，就更木有没丢分情况喽~
					}
					elements.subjectScoreTitle.text(title);
					elements.subjectScoreRemark.text(remark);
					return;
				});
			}
		}
	};
	
	/**
	 * 获取丢分题难度
	 * @param callback
	 */
	diffcult.prototype.getSubjectLostScoreByDifficulty = function(callback){
		var url = basePath + "/zhixuebao/feesReport/getSubjectLostScoreByDifficulty/";
		var userId = currentUser.id;
		var paperId = Request.QueryString("paperId");
		$.getJSON(url,{userId:userId,paperId:paperId},callback);
	};
	
	return diffcult;
})();

$(function(){
	//单学科公共元素
	elements.lostScore_simple = $("#lostScore_simple");
	elements.lostScore_middle = $("#lostScore_middle");
	elements.lostScore_hard = $("#lostScore_hard");
	
	elements.lostScore_simpleScore = $("#lostScore_simpleScore");//简单题丢分
	elements.lostScore_middleScore = $("#lostScore_middleScore");//中等题丢分
	elements.lostScore_hardScore = $("#lostScore_hardScore");//难题丢分
	
	elements.subjectScoreTitle = $("#subjectScoreTitle");//丢分题难度提示语 标题
	elements.subjectScoreRemark = $("#subjectScoreRemark");//丢分题难度提示语 内容
	
});
