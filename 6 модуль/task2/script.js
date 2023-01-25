const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('alert выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК» или «Закрыть».');
})

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    alert('При помощи функции prompt() можно вывести на экран пользователя модальное окно c полем ввода и текстом-пояснением.');
})

