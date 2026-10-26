// 1. Находим элементы на странице по их id
const image = document.getElementById('myImage');
const button = document.getElementById('changeBtn');

// 2. Вешаем обработчик события на клик по кнопке
button.addEventListener('click', function() {
    // 3. Меняем атрибут src у картинки
    image.src = 'image2.jpg';
    
    // (Опционально) Можно вывести в консоль, что картинка сменилась
    console.log('Картинка изменена на image2.jpg');
});