var navbtn = document.getElementById("navbtn");
var navmenu = document.getElementById("navmenu");
var more = document.getElementById("more");
var moremenu = document.getElementById("moremenu");

navbtn.addEventListener('click', function(){
    if (navmenu.style.visibility === "hidden" || navmenu.style.visibility === "") {
        navmenu.style.visibility = "visible";
    } else {
        navmenu.style.visibility = "hidden";
    }
});
more.addEventListener('click', function(){
    if (moremenu.style.display === "none" || moremenu.style.display === "") {
        moremenu.style.display = "flex";
    } else {
        moremenu.style.display = "none";
    }
})
