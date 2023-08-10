// var container = document.querySelector(".robot-container");
//         var images = document.getElementsByClassName("robot-image");
//         var currentIndex = 0;
//         var imageWidth = 10; // Зсув зображення вправо

//         function toggleVisibility() {
//             var currentImage = images[currentIndex];
//             var nextIndex = (currentIndex + 1) % images.length;
//             var nextImage = images[nextIndex];

//             currentImage.style.opacity = 0;
//             currentImage.style.transform = "translateX(" + imageWidth + "px)";

//             setTimeout(function() {
//                 currentImage.style.display = "none";
//                 nextImage.style.display = "block";
//                 nextImage.style.opacity = 1;
//                 nextImage.style.transform = "translateX(0)";
//             }, 100);

//             currentIndex = nextIndex;
//         }

//         setInterval(toggleVisibility, 30);

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // отменяем отправку формы по умолчанию

  const name = form.querySelector('#name').value;
  const phone = form.querySelector('#phone').value;
  const question = form.querySelector('#question').value;

  // Отправляем данные формы на сервер
  fetch('sendmail.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `name=${name}&phone=${phone}&question=${question}`
  })
  .then((response) => {
    if (response.ok) {
      // Если сервер успешно обработал запрос, показываем сообщение об успехе
      alert('Ваша заявка отправлена!');
      form.reset(); // Очищаем форму
    } else {
      // Если сервер вернул ошибку, показываем сообщение об ошибке
      alert('При отправке заявки произошла ошибка. Пожалуйста, попробуйте еще раз.');
    }
  })
  .catch((error) => {
    // Если произошла ошибка при отправке запроса, показываем сообщение об ошибке
    alert('При отправке заявки произошла ошибка. Пожалуйста, попробуйте еще раз.');
  });
});


function myFunction(x) {
  let menuBurger = document.querySelector(".menu-burger")

  if(  x.classList.toggle("change")){
    menuBurger.style.display = "block"
  }
  else{
    menuBurger.style.display = "none"
  }
}



// const slider = document.querySelector('.slider');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let slideIndex = 0;

// function showSlide(index) {
//   slider.style.transform = `translateX(-${index * 100}%)`;
// }

// function nextSlide() {
//   slideIndex = (slideIndex + 1) % 4;
//   showSlide(slideIndex);
// }

// function prevSlide() {
//   slideIndex = (slideIndex - 1 + 4) % 4;
//   showSlide(slideIndex);
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// // Automatically switch slides every 5 seconds
// setInterval(nextSlide, 5000);



// document.addEventListener('DOMContentLoaded', function() {
//   const slider = document.querySelector('.slider');
//   const prevSlide = document.querySelector('.prev-slide');
//   const nextSlide = document.querySelector('.next-slide');

//   let slideIndex = 0;

//   prevSlide.addEventListener('click', function() {
//       slideIndex = Math.max(slideIndex - 1, 0);
//       updateSlider();
//   });

//   nextSlide.addEventListener('click', function() {
//       slideIndex = Math.min(slideIndex + 1, slider.children.length - 1);
//       updateSlider();
//   });

//   function updateSlider() {
//       const slideWidth = slider.offsetWidth;
//       const slideOffset = -slideIndex * slideWidth;
//       slider.style.transform = `translateX(${slideOffset}px)`;
//   }
// });



$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 5
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 4
              }
          },
          {
              breakpoint: 520,
              settings: {
                  slidesToShow: 3
              }
          }
      ]
  });

  // Handle navigation arrows
  $('.prev-slide').click(function() {
      $('.customer-logos').slick('slickPrev');
  });

  $('.next-slide').click(function() {
      $('.customer-logos').slick('slickNext');
  });
});


console.log(1)

