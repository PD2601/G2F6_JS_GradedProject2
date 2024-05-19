window.history.forward();
function noBack() {
    window.history.forward();
}

sessionStorage.setItem("credentials", JSON.stringify({ name: ["Prajakta"], passcode: ["12345"] }))
var result = sessionStorage.getItem("credentials");
console.log(result);

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var credential = JSON.parse(result);

    credential.name.map((item, ind) => {
        if (username === item && password === credential.passcode[ind]) {
            location.href = "Resume.html"
        } else {
            document.getElementById("error").innerHTML = "Invalid username/password";
        }
    });
}