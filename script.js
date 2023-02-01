var btn = document.getElementById("btn");
var activeTheme= "light";

function toggleTheme() {
    if(activeTheme == "dark"){
    document.body.style.backgroundColor ="white";
    document.body.style.color = "grey";
    btn.innerText = "switch to dark theme";
    activeTheme ="light"
    } else {
    document.body.style.backgroundColor ="black";
    document.body.style.color = "white";
    btn.innerText = "switch to light theme";
    activeTheme ="dark"
    }
}

btn.addEventListener("click",toggleTheme);