window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Get the navbar element
  const navbar = document.querySelector(".navBar");

  // Check if the page is scrolled more than 50px
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(183, 76, 76, .85)";  // Fully opaque
  } else {
    navbar.style.backgroundColor = "rgba(33, 32, 32, 0)";  // Transparent
  }
}

document.getElementById('bookNow').addEventListener('click', function() {
  window.location.href = "booking.html";
});


//clickable pictures

document.getElementById('lash1').addEventListener('click', function() {
  window.location.href = "#";
});

document.getElementById('lash2').addEventListener('click', function() {
  window.location.href = "#"; 
});

document.getElementById('lash3').addEventListener('click', function() {
  window.location.href = "#";
});


document.getElementById('fm1').addEventListener('click', function() {
  window.location.href = "#";
});

document.getElementById('fm2').addEventListener('click', function() {
  window.location.href = "#"; 
});

document.getElementById('fm3').addEventListener('click', function() {
  window.location.href = "#";
});


document.getElementById('bookNow').addEventListener('click', function() {
  window.location.href = "booking.html";
});


let menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px";


function toggleMenu(){
  if(menuList.style.maxHeight=="0px"){
    menuList.style.maxHeight="300px"
  }
  else{
    menuList.style.maxHeight="0px"
  }
}