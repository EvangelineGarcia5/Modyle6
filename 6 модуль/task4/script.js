const TextLink = document.querySelector('#TextLink');

TextLink.addEventListener('click', function (event) { 
    event.preventDefault(); // Предотвращение поведения ссылки по умолчанию.
    const yourText = prompt('Введите Ваш текст'); // Назначение константы для yourText с функцией prompt для ввода пользователем текста.
    const  TextLink = document.querySelector('#TextLink'); 
   TextLink.textContent = yourText; 
})