function clickIt(e){
	Window.alert('Button is clicked.')
}

var button = document.getElementById('#button');

button.addEventListener(clickIt);