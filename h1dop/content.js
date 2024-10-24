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

    const backButton2 = document.createElement("button");
    backButton2.id="hidebt";
    backButton2.className = "actionButton";

    backButton2.onclick = () => {
        window.location.href = '#toc';
    };


    const backButton = document.createElement("button");
	backButton.id="backButton";
    backButton.className = "actionButton";
    
    backButton.onclick = () => {
        window.location.href = '#toc'; 
    };
const createArrowSVG = () => {
    // Создаем SVG элемент
   const xmlns = "http://www.w3.org/2000/svg";

// Create the main SVG element
const svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", "24");
svg.setAttribute("height", "24");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("fill", "none");
svg.setAttribute("stroke", "black");
svg.setAttribute("stroke-width", "2");
svg.setAttribute("stroke-linecap", "round");
svg.setAttribute("stroke-linejoin", "round");

// Create the path element
const path = document.createElementNS(xmlns, "path");
path.setAttribute("d", "M12 19V5M5 12l7-7 7 7");

// Append path to SVG
svg.appendChild(path);

// Append SVG to the document body (or any other element)

    return svg;
};
 
const createRefreshSVG = () => {
   const xmlns = "http://www.w3.org/2000/svg";

// Create the main SVG element
const svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", "24");
svg.setAttribute("height", "24");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("fill", "none");
svg.setAttribute("stroke", "black");
svg.setAttribute("stroke-width", "2");
svg.setAttribute("stroke-linecap", "round");
svg.setAttribute("stroke-linejoin", "round");

// Create the circle element
const circle = document.createElementNS(xmlns, "circle");
circle.setAttribute("cx", "12");
circle.setAttribute("cy", "12");
circle.setAttribute("r", "10");
circle.setAttribute("stroke", "black");
circle.setAttribute("fill", "none");

// Create the rectangle element
const rect = document.createElementNS(xmlns, "rect");
rect.setAttribute("x", "8");
rect.setAttribute("y", "8");
rect.setAttribute("width", "8");
rect.setAttribute("height", "8");
rect.setAttribute("fill", "currentColor");

// Append circle and rect to SVG
svg.appendChild(circle);
svg.appendChild(rect);

    return svg;
};
    const createhideSVG = () => {
        const xmlns = "http://www.w3.org/2000/svg";

// Create the main SVG element
        const svg = document.createElementNS(xmlns, "svg");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "24");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "black");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");

// Create the circle element
        const circle = document.createElementNS(xmlns, "circle");
        circle.setAttribute("cx", "12");
        circle.setAttribute("cy", "12");
        circle.setAttribute("r", "10");
        circle.setAttribute("stroke", "black");
        circle.setAttribute("fill", "none");

// Create the path element for the question mark
        const path = document.createElementNS(xmlns, "path");
        path.setAttribute("d", "M12 16v.01M12 12c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2H10v-.01M10 8h1c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1z");

// Append circle and path to SVG
        svg.appendChild(circle);
        svg.appendChild(path);

        return svg;
    };

// Добавляем стрелку в body
backButton.appendChild(createArrowSVG());
    const toggleColorButton = document.createElement("button");
    toggleColorButton.className = "actionButton";
    toggleColorButton.id="actionButton";
    toggleColorButton.textContent = "";
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
    const elementhd = document.getElementById("scrhide");

// Проверяем, что элемент найден, и удаляем его
    if (elementhd) {
        elementhd.remove();
    }

    const cript=document.createElement('script');
    cript.id="scrhide";
    cript.textContent=` 
   document.getElementById("hidebt").addEventListener("click", function() {
    const ltrElements = document.querySelectorAll('[dir="ltr"]');

    ltrElements.forEach((element, index) => {
        // Сохраняем текущее содержимое элемента
        let originalContent;
        if (element.hasAttribute('data-base')) {
            originalContent = element.dataset.base;
        } else {
            originalContent = element.innerHTML;
        }

        // Создаем кнопку для показа скрытого содержимого
        const showButton = document.createElement('button');
        showButton.textContent = 'Показать содержимое';
        showButton.style.cursor = 'pointer';
        showButton.classList.add("btnhid");
        showButton.style.margin = '10px';
        showButton.style.padding = '10px';
        showButton.style.backgroundColor = '#3498db';
        showButton.style.color = 'white';
        showButton.style.border = 'none';
        showButton.style.borderRadius = '5px';

        // Скрываем текущее содержимое и заменяем его кнопкой
        element.dataset.base = originalContent;
        element.innerHTML = ''; // Очищаем элемент
        element.appendChild(showButton); // Добавляем кнопку вместо содержимого
    });

    // Добавляем обработчики для всех кнопок
    const ltrElements2 = document.querySelectorAll('.btnhid');
    ltrElements2.forEach((element) => {
        element.addEventListener('click', function() {
            element.parentNode.innerHTML = element.parentNode.dataset.base; // Восстанавливаем содержимое
        });
    });
});

`;

 toggleColorButton.appendChild(createRefreshSVG());
/*
// Добавляем символ в body
document.body.appendChild(createRefreshSVG());*/
    backButton2.appendChild(createhideSVG());
    buttonContainer.appendChild(backButton2);
    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(toggleColorButton);
    document.body.appendChild(buttonContainer);
    document.body.appendChild(cript);


    // Добавляем оглавление в начало страницы
    document.body.insertBefore(toc, document.body.firstChild);
    const script = document.createElement('script');
    //script.setAttribute("nonce","abc124");
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
  //  document.head.appendChild(metaTag);

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
    let allElements = document.querySelectorAll('*');
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
    toc.innerHTML = '<h2>Содержание</h2>';
    const style2 = document.createElement("style");
    style2.textContent =        
	`a {
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
    counter-reset: toc-counter; /* Инициализируем счётчик */
}

.toc li {
    margin: 10px 0; /* Добавляем отступ между элементами */
    font-size: 18px; /* Увеличиваем размер шрифта для оглавления */
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Добавляем квадрат перед каждым элементом */
.toc li::before {
    content: counter(toc-counter); /* Показываем значение счётчика */
    counter-increment: toc-counter; /* Увеличиваем счётчик */
    display: inline-block;
    width: 30px;
    height: 30px;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px; /* Немного скругляем углы */
}

/* Определяем цветовую палитру для квадратиков */
.toc li:nth-child(6n+1)::before {
    background-color: #3498db; /* Синий */
}

.toc li:nth-child(6n+2)::before {
    background-color: #1abc9c; /* Бирюзовый */
}

.toc li:nth-child(6n+3)::before {
    background-color: #e74c3c; /* Красный */
}

.toc li:nth-child(6n+4)::before {
    background-color: #f39c12; /* Оранжевый */
}

.toc li:nth-child(6n+5)::before {
    background-color: #9b59b6; /* Фиолетовый */
}

.toc li:nth-child(6n+6)::before {
    background-color: #2ecc71; /* Зелёный */
}

/* Стиль для заголовка оглавления */
h2 {
    font-size: 24px;
    color: #2c3e50;
    font-family: Arial, sans-serif;
    margin-bottom: 10px;
}



.numbered {
    position: relative;
    padding-left: 30px; /* Отступ для квадратика */
}

.numbered::before {
    content: attr(data-id); /* Содержимое квадратика */
    display: inline-flex; /* Используем flex для централизации */
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */
    font-size: 16px;
    margin-right: 10px;
    color: white;
    width: 40px;
    height: 40px;
    background-color: var(--bg-color); /* Цвет квадратика */
    border-radius: 10%; /* Круглая форма */
}
 .columns {
            column-count: 2; /* Количество колонок */
            column-gap: 20px; /* Промежуток между колонками */
            padding: 10px;
            border: 1px solid #ccc; /* Обводка контейнера */
            margin: 20px 0; /* Отступ сверху и снизу */
        }
    `;
    toc.appendChild(style2);
    const ul = document.createElement('ul');
    const ar=['red','blue','green','orange','purple','pink']
    ul.classList.add('toc');
    h1Tags.forEach((h1, index) => {
        // Добавляем анкор к каждому h1
        const anchor = `heading-${index + 1}`;
        h1.id = anchor;


        h1.classList.add('numbered');
        h1.setAttribute('data-id', index + 1);

        h1.style.setProperty('--bg-color', ar[(index - 1) % 6]);
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
    document.body.insertBefore(toc, document.body.firstChild);


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

    const tocElement = document.getElementById('sid');
    if (tocElement) {
        tocElement.remove();
    }
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
   #backbutton{    height: 40px;} `
    
    

    style3.id="sid";
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
  //  document.head.appendChild(metaTag);
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



            const charSet = document.createElement('meta');
            charSet.name = "charSet";
            charSet.content = "UTF-8"; // Замените на ваш текст копирайта
            document.head.appendChild(charSet);
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
        let elements = document.querySelectorAll('*'); // выбираем все элементы на странице
        elements.forEach(element => {
            const attributes = Array.from(element.attributes);
            attributes.forEach(attr => {
                if (attr.name.startsWith('data-') && attr.name !== 'data-id' && attr.name !== 'data-base') {
                    element.removeAttribute(attr.name);
                }
            });
        });
         elements = document.querySelectorAll('*'); // Получаем все элементы в документе
        elements.forEach(element => {
            // Проверяем, является ли элемент пустым (не содержит текста или дочерних элементов)
            if (element.children.length === 0 && element.textContent.trim() === '') {
                element.remove(); // Удаляем элемент
            }
        });
        allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            // Удаляем пустой атрибут style, если он есть
            if (element.hasAttribute('style') && element.getAttribute('style').trim() === '') {
                element.removeAttribute('style');
            }

            // Удаляем пустой атрибут class, если он есть
            if (element.hasAttribute('class') && element.getAttribute('class').trim() === '') {
                element.removeAttribute('class');
            }
        });
        alert('Все почищено')
        alert(`Все data-* атрибуты, кроме data-id и data-base, были удалены.`);
    }

    // ... ваш существующий код ...
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Добавление сплэш-скрина
    if (request.action === "addSplashScreen") {
        const element = document.getElementById("splashScreen");

// Проверяем, что элемент найден, и удаляем его
        if (element) {
            element.remove();
        }

        const splashScreen = document.createElement('div');
        splashScreen.id = 'splashScreen';

        // Стили для сплэш-скрина
        splashScreen.style.height = '100vh';
        splashScreen.style.display = 'flex';
        splashScreen.style.flexDirection = 'column';
        splashScreen.style.justifyContent = 'center';
        splashScreen.style.alignItems = 'center';
        splashScreen.style.background = 'linear-gradient(to bottom, #cbe5ff, white)';
        splashScreen.style.textAlign = 'center';

        // Заголовок (h1)
        const title = document.createElement('h1');
        title.textContent = 'ЕXCEL для статистиков';
        title.style.fontSize = '48px';
        title.style.color = '#0b3d91';
        title.style.margin = '0';

        // Подзаголовок (p)
        const subtitle = document.createElement('p');
        subtitle.textContent = 'Cборник задач';
        subtitle.style.fontSize = '18px';
        subtitle.style.color = '#555';
        subtitle.style.margin = '10px 0 30px 0';

        // Автор
        const author = document.createElement('p');
        author.textContent = 'Автор: Балабанова Е.А.';
        author.style.fontSize = '14px';
        author.style.color = '#333';
        author.style.marginTop = '50px';

        // Кнопка старта
        const startButton = document.createElement('button');
		startButton.id="startButton";
        startButton.textContent = 'Начать учиться';
        startButton.style.fontSize = '18px';
        startButton.style.padding = '15px 30px';
        startButton.style.backgroundColor = '#0b3d91';
        startButton.style.color = 'white';
        startButton.style.border = 'none';
        startButton.style.borderRadius = '8px';
        startButton.style.cursor = 'pointer';
        startButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        startButton.style.transition = 'background-color 0.3s ease';

        
  const scriptElement = document.createElement('script');
// Hover-эффект для кнопки
       scriptElement.textContent =`
    window.onload = function() {
    // Получаем все элементы div
    const divs = document.querySelectorAll('div');

    // Проходим по каждому div
    divs.forEach(function(div) {
        // Если id элемента не равен "splashScreen", скрываем его
        if (div.id !== "splashScreen") {
            div.style.display = 'none';
        }
    });
};

	    const startButton = document.getElementById("startButton");
	   
	   startButton.addEventListener('mouseenter', () => {
            startButton.style.backgroundColor = '#094080';
        });

        startButton.addEventListener('mouseleave', () => {
            startButton.style.backgroundColor = '#0b3d91';
        });

        // Обработчик клика по кнопке
        startButton.addEventListener('click', () => {
            document.body.removeChild(splashScreen);  // Удаление сплэш-скрина
             const divs2 = document.querySelectorAll('div');

    // Проходим по каждому div
    divs2.forEach(function(div) {
        // Устанавливаем отображение элемента
        div.style.display = 'block';  // или 'flex', 'inline', в зависимости от изначального стиля
    });
        });
        // Добавляем элементы на сплэш-скрин
       `;
		
        // Добавляем сплэш-скрин в тело страницы
		 splashScreen.appendChild(title);
        splashScreen.appendChild(subtitle);
        splashScreen.appendChild(startButton);
        splashScreen.appendChild(author);
		splashScreen.appendChild(scriptElement);
        document.body.insertBefore(splashScreen, document.body.firstChild);

        // Глобальные стили для body
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';
    }

    // Другие обработчики...
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addPaddingToBody") {
        wrapSelectedText();
    }

    // Другие обработчики...
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "increasePadding") {
        const body = document.body;

        // Получаем текущие значения padding
        let currentPaddingLeft = window.getComputedStyle(body).paddingLeft;
        let currentPaddingRight = window.getComputedStyle(body).paddingRight;

        // Убираем 'px' и превращаем в число
        currentPaddingLeft = parseInt(currentPaddingLeft.replace('px', '')) || 0;
        currentPaddingRight = parseInt(currentPaddingRight.replace('px', '')) || 0;

        // Прибавляем 20px
        body.style.paddingLeft = (currentPaddingLeft + 20) + 'px';
        body.style.paddingRight = (currentPaddingRight + 20) + 'px';
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addcolumn") {

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const selectedElement = range.commonAncestorContainer;
        console.log(selectedElement);
        // Проверяем, является ли выделенный элемент текстом и получаем родительский элемент
        if (selectedElement.nodeType === 3) {
            // Если это текстовый узел, получаем родительский элемент
            const parentElement = selectedElement.parentNode;
            parentElement.classList.add('columns'); // Добавляем класс 'columns'
        } else {
            // Если это уже элемент, добавляем класс к нему
            selectedElement.classList.add('columns');
        }
    }

    // Другие обработчики...
});