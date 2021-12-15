function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}


function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}


mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
function saveEdits() {
  
  var editElem = document.getElementById("edit");

  
  var userVersion = editElem.innerHTML;

  
  localStorage.userEdits = userVersion;

  
  document.getElementById("update").innerHTML="Edits saved!";
}

$('#submit').click(function(){
  $('#rightAd').text("HELLO EVERYBODY");
});
