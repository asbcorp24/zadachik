function getPageNumber(anchorId) {
    const anchorElement = document.getElementById(anchorId);
    
    if (!anchorElement) return null;

    const elementPosition = anchorElement.getBoundingClientRect().top + window.scrollY;
    const pageHeight = window.innerHeight;
console.log( Math.ceil(elementPosition / pageHeight));
    return Math.ceil(elementPosition / pageHeight);
}

function prepareDocumentForPrint() {
    const tocLinks = document.querySelectorAll('#toc a'); // Все гиперссылки в оглавлении
    const btcon = document.getElementById('bcon');
    btcon.style.display = "none";
    
    const scrollPercentage = document.getElementById('scrollPercentage');
    scrollPercentage.style.display = "none";

    const copyn = document.querySelectorAll('.copy-button'); // Изменено на querySelectorAll
    copyn.forEach((element) => {
        element.style.display = "none"; // Скрываем каждую кнопку копирования
    });

    tocLinks.forEach(link => {
        const anchorId = link.getAttribute('href').substring(1); // Получаем ID якоря без '#'
        const pageNumber = getPageNumber(anchorId);
         const anchorElement = document.getElementById(anchorId);
        
        if (anchorElement) {
            anchorElement.classList.add('page-break'); // Добавляем класс для новой страницы
            // Заменяем текст ссылки на номер страницы
           // link.textContent = link.textContent+` ${'.'.repeat(30 - ('' + pageNumber).length)} ${pageNumber}`;
        }
        // Создаем новый элемент для номера страницы
        const pageNumberElement = document.createElement('span');
        pageNumberElement.textContent = `${pageNumber}`;
        pageNumberElement.style.marginLeft = 'auto'; // Устанавливаем отступ слева для выравнивания

        // Создаем flex-контейнер
        const linkContainer = document.createElement('div');
        linkContainer.style.display = 'flex';
        linkContainer.style.justifyContent = 'space-between'; // Разделяем текст и номер страницы
        linkContainer.style.width = '100%'; // Задаем ширину для контейнера

        // Перемещаем ссылку в новый контейнер
        linkContainer.appendChild(link.cloneNode(true)); // Клонируем ссылку, чтобы избежать HierarchyRequestError
        linkContainer.appendChild(pageNumberElement);

        // Заменяем старую ссылку на новый контейнер
        link.parentNode.replaceChild(linkContainer, link);
    });

    // Удаление класса 'columns' у каждого элемента
    const tocElements = document.querySelectorAll('.toc');
    tocElements.forEach(element => {
        element.classList.remove('columns');
    });
}

// Добавляем обработчик события перед печатью
window.addEventListener('beforeprint', prepareDocumentForPrint);