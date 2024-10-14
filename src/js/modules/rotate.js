// document.querySelector('.menu-btn-2').addEventListener('click', function(event) {
//   event.preventDefault(); // Предотвратить переход по ссылке
//   const squares = document.querySelectorAll('.sq-1, .sq-2, .sq-3, .sq-4');
  
//   squares.forEach(square => {
//       square.classList.toggle('rotate');
//   });
// });

//КОД 2

// document.addEventListener('DOMContentLoaded', function() {
//   const button = document.querySelector('.menu-btn-2');
//   const menuHeader = document.querySelector('.menu-header-2');

//   button.addEventListener('click', function(event) {
//       event.preventDefault(); // Предотвратить переход по ссылке

//       // Поворачиваем квадраты
//       const squares = document.querySelectorAll('.sq-1, .sq-2, .sq-3, .sq-4');
//       squares.forEach(square => {
//           square.classList.toggle('rotate');
//       });

//       // Показать/скрыть меню
//       if (menuHeader.style.width === '100%') {
//           menuHeader.style.width = '0%';
//           menuHeader.style.height = '0vh';
//       } else {
//           menuHeader.style.width = '100%';
//           menuHeader.style.height = 'auto'; // Или установите нужное значение
//       }
//   });
// });

//КОД 3

document.addEventListener("DOMContentLoaded", function() {
  const menuBtn2 = document.querySelector('.menu-btn-2');
  const menuHeader2 = document.querySelector('.menu-header-2');

  menuBtn2.addEventListener('click', function() {
    // Проверяем текущее состояние отображения меню
    if (menuHeader2.style.display === 'none' || menuHeader2.style.display === '') {
      // Показываем меню
      menuHeader2.style.display = 'flex'; // или 'block', в зависимости от ваших требований
      menuHeader2.style.height = '100vh'; // Устанавливаем высоту меню
      menuHeader2.style.width = '100%'; // Устанавливаем ширину меню
      menuHeader2.style.transition = 'height 0.3s ease'; // Анимация появления
    } else {
      // Скрываем меню
      menuHeader2.style.height = '0';
      setTimeout(() => {
        menuHeader2.style.display = 'none';
      }, 300); // Задержка перед скрытием, чтобы закончилась анимация
    }
  });
});


