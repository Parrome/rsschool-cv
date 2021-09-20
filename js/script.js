// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



// scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset  - document.querySelector('.header-container').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }



            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}

console.log (' Самопроверка:\n 1) Вёрстка валидная +10 (+10), Для проверки использовал сервис https://validator.w3.org/. Была надпись "Document checking completed. No errors or warnings to show."\n 2) Вёрстка семантическая +20 (+20) В коде страницы присутствуют семантические теги HTML5, Использовал: article, aside, footer, header, main, nav, используются заголовки h1-h2-h3-h4. итого 10шт => (+20)\n 3) Для оформления СV используются css-стили +10 (+10) (более 10 ти стилизованных элементов) 1 балл за каждый стилизованный элемент\n 4) Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 (+10)\n 5) Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10 (+10)\n 6) Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным.+10 (+10)\n 7) На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10 (+10)\n 8) Контакты для связи и перечень навыков оформлены в виде списка ul > li +10 (+10)\n 9) CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 (+10)\n 10) CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. +10 (+10)\n 11) CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10 (+10)\n 12) CV выполнено на английском языке +10 (+10)\n 13) Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 (+10)\n 14) Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10 (+10)\n Итого: 150 балов ');