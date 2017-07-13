var http = require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'

function filterChapters(html){
	var $=cheerio.load(html)
	var chapters=$(".mod-chapters")

	var courseData=[]


	chapters.find(".chapter").each(function(item){
		var chapter=$(this)
		var chapterTitle=chapter.find('strong').text().replace(/(\n)/g,'').replace(/( )/g,'')
		var videos=chapter.find('.video').children('li')
		// console.log(chapterTitle)
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}

		videos.each(function(item){
			var video=$(this)
			var videoId=video.find("a").attr("href").split("video/")[
			1]
			var videoTitle=video.find("a").text().replace(/(\n)/g,'').replace(/(开始学习)/g,'').replace(/( )/g,'')
			// videoTitle=$.trim(videoTitle)

			chapterData.videos.push({videoId:videoId,videoTitle:videoTitle})


		})
		// console.log(chapterData)
courseData.push(chapterData)

	})
return courseData
}


function printCourseInfo(courseData){
	courseData.forEach(function(item){
		console.log(item.chapterTitle+'\n')
		item.videos.forEach(function(video){
			console.log("["+video.videoId+"] "+video.videoTitle)
		})
	})
}

http.get(url,function(res){
	var html=''

	res.on('data',function(data){
		html+=data
	})

	res.on('end',function(){
		var courseData= filterChapters(html)

		printCourseInfo(courseData)
	})

}).on('error',function(){
	console.log("获取数据出错！")
})
