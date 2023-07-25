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

        setInterval(toggleVisibility, 30);
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
