$(document).ready(function(){
	var inputNum= prompt("Number 1-100");

	inputNum=parseInt(inputNum);

function fizzBuzz() {
	for(i=1;i<=inputNum;i++){
		if(i%3 === 0 && i%5 === 0){
			$("#list").append("<li>FizzBuzz</li>");
		}else if (i%3 === 0){
			$("#list").append("<li>FizzBuzz</li>");
	}else if (i%5 === 0){
		$("#list").append("<li>FizzBuzz</li>");
	}else {
		$("#list").append("<li>" + i + "</li>");
	}
	}
}
fizzBuzz(inputNum);
});