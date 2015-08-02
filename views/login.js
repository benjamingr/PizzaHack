(function() { 
    var form = document.querySelector("#loginForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();

        if(login(form.user.value, form.passwd.value)){
            var view = document.getElementsByClassName("view")[0];
            sessionStorage.setItem("username", form.user.value);
            view.innerHTML = "<h4>Welcome " + form.user.value +"</h4>";
        } else {
            alert("Failed, now u get rolled >:(");
            location.href = "http://rebecca.blackfriday";
        }
    });
})()