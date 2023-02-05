
var of =
document.getElementById("off");

of.onclick = function(){
alert('cert has been expired join telegram for more ')    
}

//search code
function search() {
input = document.getElementById('searcht');
filter = input.value.toUpperCase();li = document.getElementsByClassName('post-card');for (i = 0; i < li.length; i++) {h1 = li[i].getElementsByTagName("p")[0];txtValue = h1.textContent || h1.innerText; if (txtValue.toUpperCase().indexOf(filter) > -1) {li[i].style.display = "";} else {li[i].style.display = "none";}}
}
