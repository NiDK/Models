/*var j=0;
while(j<100){
	j++;
	console.log(j);
		

}
*/

var c=0;

function printIt(){
	console.log(c);
}

function plus(callback){
	setTimeout(function(){
		c+=1
		callback(c)
	},1000)
}

plus(printIt)