var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
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
  