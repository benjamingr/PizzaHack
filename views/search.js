(function(){ 

	var query = document.getElementById("searchQuery");
	var button = document.getElementById("searchFormItem");

	button.addEventListener("click", function(e){
		
		var q = query.value;
		if(q === "bird") {
			location.href = "https://www.youtube.com/watch?v=2WNrx2jq184";
		}
		if(q === "life") {
			location.href = "http://copy.sh/life/";
		}
		if(q === "cobol") {
			location.href = "https://en.wikipedia.org/wiki/Grace_Hopper";
		}

		if(q.indexOf("fuck") === 0) {
			alert( "That's not very nice, now is it?");
			location.href = "https://www.youtube.com/watch?v=SQK3K9yoAGQ";
		}

		if(q.indexOf("dog") === 0){
			alert("Woof");
		}


		var pizzas = document.getElementById("pizzas");
		var res = db.execAll("SELECT * FROM pizzas WHERE name LIKE '" + q + "'");
		if(!res || res.length === 0){
			pizzas.innerHTML = "No Results Found :( <br /> <img src='kitten.jpg'> <br /> <br /> <br /> <br /> <br /> <br /> ";
			return;
		}
		var table = "<table class='bordered striped hoverable centered'>"
		for(var i = 0; i < res.length; i++){
			var value = res[i];
			table += "<tr><td><img src='http://lorempizza.com/100/100?breaker="+(new Date())+ "' /></td><td>" + value[0] + "</td><td>" + value[1] + "</td><td>" + value[2] + "</td></tr>"
		}
		table += "</table>";

		pizzas.innerHTML = table;
	});
})()