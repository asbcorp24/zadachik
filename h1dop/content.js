// Функция для оборачивания выделенного текста в <h1>
function wrapSelectedText() {
	
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const h1 = document.createElement("h1");
        h1.textContent = selection.toString().toUpperCase();
        range.deleteContents();
        range.insertNode(h1);
    }
}

// Функция для удаления выделенного текста
function deleteSelectedText() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        selection.deleteFromDocument();
    }
}

// Функция для добавления стилей и кнопок
function addStylesAndButtons() {

    const element = document.getElementById("bcon");

// Проверяем, что элемент найден, и удаляем его
    if (element) {
        element.remove();
    }
    const element2 = document.getElementById("sbit");

// Проверяем, что элемент найден, и удаляем его
    if (element2) {
        element2.remove();
    }
    const element3 = document.getElementById("sbt");

// Проверяем, что элемент найден, и удаляем его
    if (element3) {
        element3.remove();
    }
    const style = document.createElement("style");
    style.id="sbt";
    style.textContent = `
        .actionButton {
            margin-right:10px;
            padding: 10px 20px 10px 20px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
        }
        .actionButton:hover {
            background-color: #1abc9c;
        }
		
		
    `;
	
 document.head.appendChild(style);
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "fixed";
    buttonContainer.style.bottom = "20px";
    buttonContainer.style.right = "150px";
    buttonContainer.style.zIndex = 10000;
    buttonContainer.id="bcon";
    const backButton = document.createElement("button");
	backButton.id="backButton";
    backButton.className = "actionButton";
    
    backButton.onclick = () => {
        window.location.href = '#toc'; 
    };
const createArrowSVG = () => {
    // Создаем SVG элемент
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", "10");
    svg.setAttribute("height", "10");
    
    // Создаем путь стрелки
    const path = document.createElementNS(svgNamespace, "path");
    path.setAttribute("d", "M5 0 L10 10 H0 Z"); // Стрелка вверх
    path.setAttribute("fill", "black"); // Цвет стрелки

    // Добавляем путь в SVG
    svg.appendChild(path);

    return svg;
};
/* 
const createRefreshSVG = () => {
    // Создаем SVG элемент
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    
    // Создаем путь для символа смены (обновления)
    const path = document.createElementNS(svgNamespace, "path");
    path.setAttribute("d", "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z");
    path.setAttribute("fill", "black"); // Цвет символа

    // Добавляем путь в SVG
    svg.appendChild(path);

    return svg;
};*/
// Добавляем стрелку в body
backButton.appendChild(createArrowSVG());
    const toggleColorButton = document.createElement("button");
    toggleColorButton.className = "actionButton";
    toggleColorButton.id="actionButton";
    toggleColorButton.textContent = "Переключить цвета";
    let isDarkMode = false;
    toggleColorButton.onclick = () => {
        if (isDarkMode) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            isDarkMode = false;
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            isDarkMode = true;
        }
    };
	
//toggleColorButton.appendChild(createArrowSVG());
/*
// Добавляем символ в body
document.body.appendChild(createRefreshSVG());*/
    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(toggleColorButton);
    document.body.appendChild(buttonContainer);


    // Добавляем оглавление в начало страницы
    document.body.insertBefore(toc, document.body.firstChild);
    const script = document.createElement('script');
    script.setAttribute("nonce","abc124");
    script.id="sbit";
    script.textContent = ` document.getElementById("backButton").addEventListener("click", function() {
            // Возвращаем пользователя на главную страницу
            // Замените 'index.html' на нужный URL вашей главной страницы
            window.location.href = '#toc'; 
        });

        let isDarkMode = false;

        // Назначаем обработчик события на кнопку переключения цветов
        document.getElementById("actionButton").addEventListener("click", function() {
            // Переключаем цветовую схему
            if (isDarkMode) {
                document.body.style.backgroundColor = "white"; // Белый фон
                document.body.style.color = "black"; // Черный текст
             //   document.querySelector('.code-container').style.backgroundColor = "white"; // Белый фон для кода
             //   document.querySelector('.code-container').style.color = "black"; // Черный текст для кода
                isDarkMode = false; // Устанавливаем флаг на светлую тему
                       const divs = document.querySelectorAll('div[dir="ltr"]');

divs.forEach(function(div) {
    div.style.backgroundColor = "white"; // Устанавливаем фоновый цвет в черный
});   
            } else {
                document.body.style.backgroundColor = "black"; // Черный фон
                document.body.style.color = "white"; // Белый текст
               // document.querySelector('.code-container').style.backgroundColor = "black"; // Черный фон для кода

             //   document.querySelector('.code-container').style.color = "white"; // Белый текст для кода
              const divs = document.querySelectorAll('div[dir="ltr"]');

divs.forEach(function(div) {
    div.style.backgroundColor = "black"; // Устанавливаем фоновый цвет в черный
});
                isDarkMode = true; // Устанавливаем флаг на темную тему
            }
        });`;
    document.body.appendChild(script);
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
    metaTag.setAttribute('content', "script-src 'self' 'nonce-abc124';");

// Добавление мета-тега в head документа
    document.head.appendChild(metaTag);

}

// Функция для удаления текста по строке
function removeText(text) {
    const bodyText = document.body.innerHTML;
    document.body.innerHTML = bodyText.replace(new RegExp(text, 'g'), '');
}

// Функция для копирования всего кода документа в буфер обмена
function copyCode() {
    navigator.clipboard.writeText(document.documentElement.outerHTML).then(() => {
        alert('Код документа скопирован в буфер обмена!');
    });
}

// Функция для добавления уникальных ID
function addUniqueIds() {
    const divs = document.querySelectorAll('div[dir="ltr"]');
    divs.forEach((div, index) => {
        const uniqueId = `${index + 1}`;
        div.setAttribute('data-id', uniqueId);
        const label = document.createElement('label');
        label.textContent = `ID: ${uniqueId}`;
        div.parentNode.insertBefore(label, div);

    });
}

// Слушатель сообщений от popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case "wrapText":
            wrapSelectedText();
            break;
        case "deleteText":
            deleteSelectedText();
            break;
        case "addStylesAndButtons":
            addStylesAndButtons();
            break;
        case "removeText":
            removeText(request.text);
            break;
        case "copyCode":
            copyCode();
            break;
        case "addUniqueIds":
            addUniqueIds();
            break;
		case "encryptDirLtr":
            encryptDirLtrToBase64();
            break;
        case "replacetext":
            replaceSelectedText();
            break;
        case "removeAllClasses":
            removeAllClasses();
            break;

        case "deleteTags":
            deleteTagsByTag();
            break;
        case "generateTOC":
            generateTOC();
            break;


    }
});
// Функция для удаления всех классов у элементов
function removeAllClasses() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        el.className = ''; // Удаляем все классы
    });
}
function generateTOC() {
	  const tocElement = document.getElementById('toc');
    if (tocElement) {
        tocElement.remove();
    }
    const h1Tags = document.querySelectorAll('h1');
    const toc = document.createElement('div');
    toc.id = 'toc';
	toc.className='toc';
    toc.innerHTML = '<h2>Table of Contents</h2>';
    const style2 = document.createElement("style");
    style2.textContent =        
	`
        /* Стиль для ссылок */
        a {
            color: #3498db; /* Нежный синий цвет */
            text-decoration: none; /* Убираем подчеркивание */
            font-weight: bold; /* Жирный текст */
            transition: color 0.3s ease, border-bottom 0.3s ease; /* Плавный переход цвета */
            border-bottom: 2px solid transparent; /* Добавляем линию под ссылкой (не видимую) */
        }

        /* При наведении */
        a:hover {
            color: #1abc9c; /* Меняем цвет при наведении (бирюзовый) */
            border-bottom: 2px solid #1abc9c; /* Показываем линию под ссылкой */
        }

        /* Для оглавления: стиль списка */
        .toc {
            margin-top: 20px;
            list-style-type: none; /* Убираем маркеры списка */
        }

        .toc li {
            margin: 10px 0; /* Добавляем отступ между элементами */
            font-size: 18px; /* Увеличиваем размер шрифта для оглавления */
        }

        /* Стиль для заголовка оглавления */
        h2 {
            font-size: 24px;
            color: #2c3e50;
            font-family: Arial, sans-serif;
            margin-bottom: 10px;
        }
    `;
    toc.appendChild(style2);
    const ul = document.createElement('ul');

    h1Tags.forEach((h1, index) => {
        // Добавляем анкор к каждому h1
        const anchor = `heading-${index + 1}`;
        h1.id = anchor;

        // Создаем элемент списка для оглавления
        const li = document.createElement('li');
        let tocText = h1.textContent;

        // Если перед h1 есть p, добавляем его содержимое
        const prevSibling = h1.previousElementSibling;
        if (prevSibling && prevSibling.tagName.toLowerCase() === 'p') {
            tocText = prevSibling.textContent + ' - ' + tocText;
        }

        const a = document.createElement('a');
        a.href = `#${anchor}`;
        a.textContent = tocText;

        li.appendChild(a);
        ul.appendChild(li);
    });

    toc.appendChild(ul);
    
document.body.appendChild(toc);

}

// Слушаем команды
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "wrapInH1") {
        wrapSelectionInH1();
    } else if (request.action === "generateTOC") {
        generateTOC();
    }
});
function utf8ToBase64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// Функция для шифрования содержимого dir="ltr" в Base64 и сохранения его в data-base
function encryptDirLtrToBase64() {
	console.log('enc');
    const style3 = document.createElement("style");
    style3.textContent =`
        .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
    }
        .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 300px;
        height: 200px;
        border-radius: 10px;
        text-align: center;
    }
        .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
        .close:hover, .close:focus {
        color: black;
    }
        button {
        padding: 10px 15px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }
        button:hover {
        background-color:#3498db;
    }
   #backbutton{    height: 40px;} 
    
    
    `;
    document.head.appendChild(style3);
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'myModal';
        modal.className = 'modal';
        modal.style.display = 'none'; // Скрываем модальное окно по умолчанию

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeButton = document.createElement('span');
        closeButton.className = 'close';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = function () {
            modal.style.display = 'none';
        };

        const heading = document.createElement('h3');
        heading.textContent = 'Введите пароль для расшифровки';



        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.id = 'passwordInput';
        passwordInput.placeholder = 'Введите пароль';

        const submitButton = document.createElement('button');
        submitButton.id = 'submitPassword';
        submitButton.textContent = 'Подтвердить';

        // Добавляем все элементы в модальное окно
        modalContent.appendChild(closeButton);
        modalContent.appendChild(heading);

        modalContent.appendChild(passwordInput);
        modalContent.appendChild(submitButton);
        modal.appendChild(modalContent);

        // Добавляем модальное окно в body
        document.body.appendChild(modal);
    }
    createModal();
    const elements = document.querySelectorAll('[dir="ltr"]');
    elements.forEach((el, index) => {

        const content = el.textContent;
        const uniqueId = `${index + 1}`;
        el.setAttribute('data-id', uniqueId);
        console.log(content);
        const base64 = utf8ToBase64(content); // Шифрование в Base64
        el.setAttribute('data-base', base64); // Сохранение в атрибуте data-base
		el.innerHTML = `<button class="decryptButton" data-index="${index}">Прочитать</button>`; // Замена содержимого на кнопку

    });
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
    metaTag.setAttribute('content', "script-src 'self' 'nonce-abc123';");

// Добавление мета-тега в head документа
    document.head.appendChild(metaTag);
    const script = document.createElement('script');
    script.setAttribute("nonce","abc123");
    script.textContent = `
      let currentElement = null;
 function getCurrentDateKey() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяц с ведущим нулем
            const day = String(now.getDate()).padStart(2, '0'); // День с ведущим нулем
            return month + day; // Формат MMDD
        }
 function generateNumericPassword(dataId, key) {
            let combined = dataId + key; // Соединяем data-id и ключ (дату)
            let hash = 0;

            // Простое хеширование строки (data-id + дата)
            for (let i = 0; i < combined.length; i++) {
                hash = (hash * 31 + combined.charCodeAt(i)) % 100000; // Ограничиваем 5 цифрами
            }

            return String(hash).padStart(5, '0'); // Преобразуем в строку и добавляем ведущие нули, если меньше 5 цифр
        }
         function base64ToUtf8(base64) {
              return decodeURIComponent(escape(window.atob(base64)));
        }
        function utf8ToBase64(str) {
            return window.btoa(unescape(encodeURIComponent(str)));
        }
        function decryptBase64() {
            const buttons = document.querySelectorAll('.decryptButton');
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    currentElement=this.parentElement;
                    const index = this.getAttribute('data-index');
                    const element = document.querySelectorAll('[dir="ltr"]')[index];
                    const base64 = element.getAttribute('data-base');
                    const decodedText = base64ToUtf8(base64); 
                     const escapedContent = decodedText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    // element.innerHTML = escapedContent; // Замена кнопки на оригинальный текст
                      document.getElementById('myModal').style.display = "flex"; // Показываем модальное окно
                });
            });
        }
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('myModal').style.display = "none"; // Скрываем модальное окно
        });
          function decodeFromBase64(str) {
            return decodeURIComponent(escape(atob(str)));
        }
        document.getElementById('submitPassword').addEventListener('click', function() {
            const inputPassword = document.getElementById('passwordInput').value;
const currentDataId = currentElement.getAttribute('data-id'); // Получаем data-id элемента

            const dateKey = getCurrentDateKey(); // Получаем ключ (текущая дата)

            // Генерируем правильный пароль путем шифрования data-id с использованием ключа
            const correctPassword = generateNumericPassword(currentDataId, dateKey);
           if (inputPassword === correctPassword) {
                const base64Data = currentElement.getAttribute('data-base'); // Получаем закодированные данные
                const decodedContent = decodeFromBase64(base64Data); // Расшифровываем данные
                const escapedContent = decodedContent.replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
             currentElement.innerHTML = escapedContent; // Заменяем кнопку на расшифрованное содержимое
                document.getElementById('myModal').style.display = "none"; // Закрываем модальное окно
            } else {
                alert("Неправильный пароль!"); // Уведомление о неверном пароле
            }
            });
        decryptBase64();`;
    document.body.appendChild(script);

}

function replaceSelectedText() {
    const selectedText = window.getSelection(); // Получаем выделение
    if (selectedText.rangeCount > 0) {
        const newText = prompt("Введите текст для замены выделенного:", selectedText.toString()); // Запрашиваем новый текст
        if (newText !== null) { // Проверяем, что пользователь не нажал Cancel
            const range = selectedText.getRangeAt(0); // Получаем диапазон выделенного текста
            range.deleteContents(); // Удаляем выделенный текст
            range.insertNode(document.createTextNode(newText)); // Вставляем новый текст
        }
    } else {
        alert("Пожалуйста, выделите текст для замены."); // Сообщение, если текст не выделен
    }
}

function deleteTagsByTag(tag) {
    let tagToDelete = prompt("Enter the tag to delete (without < >):");
    const elements = document.querySelectorAll(tagToDelete);
    elements.forEach(el => el.remove());
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addMetaTags") {
        // Получаем все заголовки <h1>
        const headings = Array.from(document.querySelectorAll('h1'));

        // Создаем мета-теги
        const copyright = document.createElement('meta');
        copyright.name = "copyright";
        copyright.content = "2024 asbcorp24@gmail.com"; // Замените на ваш текст копирайта
        document.head.appendChild(copyright);

        if (headings.length > 0) {
            const description = document.createElement('meta');
            description.name = "description";
            description.content = headings.map(h => h.innerText).join(', '); // Объединяем заголовки в строку
            document.head.appendChild(description);

            const keywords = document.createElement('meta');
            keywords.name = "keywords";
            keywords.content = headings.map(h => h.innerText).join(', '); // Объединяем заголовки в строку
            document.head.appendChild(keywords);
        } else {
            alert("Нет заголовков <h1> для добавления мета-тегов.");
        }
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // ... ваш существующий код ...

    // Обработчик для добавления стилей к <div> с dir="ltr"
    if (request.action === "addStyleToDivs") {
        const divs = document.querySelectorAll('div[dir="ltr"]');
        divs.forEach(div => {
            div.style.border = "2px dashed black";
            div.style.borderRadius = "10px";
            div.style.padding = "10px";
        });

        alert(`Стиль добавлен к ${divs.length} <div> элементам с dir="ltr".`);
    }

    // ... ваш существующий код ...
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // ... ваш существующий код ...

    // Обработчик для удаления всех data-* кроме data-id и data-base
    if (request.action === "removeDataAttributes") {
        const elements = document.querySelectorAll('*'); // выбираем все элементы на странице
        elements.forEach(element => {
            const attributes = Array.from(element.attributes);
            attributes.forEach(attr => {
                if (attr.name.startsWith('data-') && attr.name !== 'data-id' && attr.name !== 'data-base') {
                    element.removeAttribute(attr.name);
                }
            });
        });

        alert(`Все data-* атрибуты, кроме data-id и data-base, были удалены.`);
    }

    // ... ваш существующий код ...
});