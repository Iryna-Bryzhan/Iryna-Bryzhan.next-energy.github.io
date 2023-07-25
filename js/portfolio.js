var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 

var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex-1].style.display = "block";  
    dots2[slideIndex-1].className += " active";
  } 
  var slideIndex = 1;
showSlides3(slideIndex);

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function currentSlide2(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex-1].style.display = "block";  
    dots3[slideIndex-1].className += " active";
  } 

  function myFunction(x) {
    let menuBurger = document.querySelector(".menu-burger")
  
    if(  x.classList.toggle("change")){
      menuBurger.style.display = "block"
    }
    else{
      menuBurger.style.display = "none"
    }
  }
  