function submit2() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("feedback", feedback);

    return false;
}

function init() {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var feedback = localStorage.getItem("feedback");

    document.getElementById("start").innerHTML = "You have sent the following:"
    document.getElementById("text").innerHTML = "name = " + (name) + "</br>" + "email = " + (email) + "<br>" + "feedback = " + (feedback);
}

