// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
		document.getElementById("header").style.backgroundColor = "#FFFFFF";
		document.getElementById("header").className = "navbar fixed-top navbar-light shadow-sm";
  } else {
		document.getElementById("header").style.backgroundColor = "#ffffff00";
		document.getElementById("header").className = "navbar fixed-top navbar-light";
  }
}

function openNav() {
  document.getElementById("mySidenav").classList.add('showNav');
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove('showNav');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
	this.classList.toggle("dd-active");
	var content = this.nextElementSibling;
	if (content.style.maxHeight){
	  content.style.maxHeight = null;
	} else {
	  content.style.maxHeight = content.scrollHeight + "px";
	} 
  });
}

