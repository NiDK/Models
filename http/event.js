// function clickIt(e){
// 	Window.alert('Button is clicked.')
// }

// var button = document.getElementById('#button');

// button.addEventListener(clickIt);
// 

var EventEmitter=require('events').EventEmitter
var life=new EventEmitter()

life.setMaxListeners(11)

function water(who){
	console.log('给 ' +who+ ' ..1')
}

life.on('submit',water)

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..2')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..3')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..4')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..5')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..6')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..7')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..8')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..9')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..10')
})

life.on('submit',function(who){
	console.log('给 ' +who+ ' ..11')
})

life.on('cancle',function(who){
	console.log('给 ' +who+ ' ..a')
})

life.on('cancle',function(who){
	console.log('给 ' +who+ ' ..b')
})

life.removeListener('submit',water);
life.removeAllListeners('submit')
console.log(EventEmitter.listenerCount(life,'submit'))

var hasSubmitListener= life.emit('submit','汉子')

var hasCancleListener=life.emit('cancle','妹子')

console.log(hasSubmitListener)
console.log(hasCancleListener)