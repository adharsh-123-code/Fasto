const icon1 = document.getElementById("img1")
const icon2 = document.getElementById("img2")
const nav = document.getElementById("nnav")

icon1.onclick = function () {
    nav.style.display = "block";
    icon1.style.display = "none";
    icon2.style.display = "block";
    nav.style.marginTop = "40px"
    nav.style.position = "absolute"
    icon2.style.marginTop = "20px"
}
icon2.onclick = function(){
    nav.style.display = "none"
    icon2.style.display = "none"
    icon1.style.display = "block"
}