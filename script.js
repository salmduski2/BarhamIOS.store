
// search code 
const search = () =>{
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("product-list")
	const product = document.querySelectorAll(".product")
	const pname = document.getElementsByTagName("h2")


for(var i=0; i < pname.length; i++){
	let match = product[i].getElementsByTagName('h2')[0];

	if(match){
	  let textvalue = match.textContent || match.innerHTML
	
	if(textvalue.toUpperCase().indexOf(searchbox) > -1){
	product[i].style.display = "";
	 }else{
	 product[i].style.display = "none";
	 }
	}
  }
 }

// writting Number one click
function openpage(){
var x = documnet.getElementById("search-item").value;

if(x === "36"){
window.location.href="https://accounts.snapchat.com/accounts/login?continue=%2Faccounts%2Fdelete_account";
}


}