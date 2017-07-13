var student=require('./student')
var teacher=require('./teache')

teacher.add("da kun");
function add(teachers,students){
	teacher.add(teachers);
	students.forEach(function(item,index){
	student.add(item);


	})
}

exports.add=add;

