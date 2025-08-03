let savedRange = null;
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
    const createParagraphSVG = () => {
        const xmlns = "http://www.w3.org/2000/svg";

        // Создаём основной SVG элемент
        const svg = document.createElementNS(xmlns, "svg");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "24");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "black");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");

        // Линия открывающегося флапа (верхняя линия письма)
        const flap = document.createElementNS(xmlns, "path");
        flap.setAttribute("d", "M2 8l10 7 10-7");

        // Тело письма
        const body = document.createElementNS(xmlns, "path");
        body.setAttribute("d", "M2 8v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8");

        // Добавляем элементы в SVG
        svg.appendChild(flap);
        svg.appendChild(body);

        return svg;
    };
    const Buttonpar = document.createElement("button");
    Buttonpar.id="Buttonpar";
    Buttonpar.className = "actionButton";
    Buttonpar.ondblclick = () => {
        //window.location.href = '#toc';
    };
    Buttonpar.onclick = () => {
        //window.location.href = '#toc';
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
     const storageKey = 'scrollPosHistory_' + window.location.pathname;
   document.addEventListener("DOMContentLoaded", function() {
  // Создаем или получаем контейнер для кружков
  let circleContainer = document.getElementById("scrollHistoryCircles");
  if (!circleContainer) {
    circleContainer = document.createElement("div");
    circleContainer.id = "scrollHistoryCircles";
    circleContainer.style.position = "fixed";
    circleContainer.style.top = "50%";
    circleContainer.style.right = "10px";
    circleContainer.style.transform = "translateY(-50%)";
    circleContainer.style.display = "flex";
    circleContainer.style.flexDirection = "column";
    circleContainer.style.gap = "10px";
    document.body.appendChild(circleContainer);
  }

  // Создаем красный кружок для очистки закладок, если его еще нет
  let redCircle = document.getElementById("clearBookmarks");
  if (!redCircle) {
    redCircle = document.createElement("div");
    redCircle.id = "clearBookmarks";
    redCircle.classList.add("scroll-history-circle", "clear-bookmarks");
    redCircle.style.width = "20px";
    redCircle.style.height = "20px";
    redCircle.style.borderRadius = "50%";
    redCircle.style.backgroundColor = "red";
    redCircle.style.width = "20px";
      redCircle.style.margin = "10px";
        redCircle.style.padding = "5px";
         redCircle.style.display = "grid";
    redCircle.style.cursor = "pointer";
    redCircle.style.display = "flex";
    redCircle.style.alignItems = "center";
    redCircle.style.justifyContent = "center";
    redCircle.style.color = "white";
    redCircle.style.fontSize = "12px";
    redCircle.textContent = "X"; // символ для очистки

    // При клике очищаем историю закладок
    redCircle.addEventListener("click", function() {
      localStorage.removeItem(storageKey);
      // Удаляем все синие кружки с закладками
      let bookmarkCircles = document.querySelectorAll(".scroll-history-circle.bookmark");
      bookmarkCircles.forEach(circle => circle.remove());
    });

    circleContainer.appendChild(redCircle);
  }

  // Загружаем сохраненные позиции из localStorage
  let history = localStorage.getItem(storageKey);
  if (history) {
    history = JSON.parse(history);
    history.forEach((pos, index) => {
      const bookmarkCircle = document.createElement("div");
      bookmarkCircle.classList.add("scroll-history-circle", "bookmark");
      bookmarkCircle.dataset.scrollPos = pos;
      bookmarkCircle.style.width = "20px";
      bookmarkCircle.style.margin = "10px";
        bookmarkCircle.style.padding = "5px";
         bookmarkCircle.style.display = "grid";
      bookmarkCircle.style.height = "20px";
      bookmarkCircle.style.borderRadius = "50%";
      bookmarkCircle.style.backgroundColor = "#3498db";
      bookmarkCircle.style.cursor = "pointer";
      bookmarkCircle.style.display = "flex";
      bookmarkCircle.style.alignItems = "center";
      bookmarkCircle.style.justifyContent = "center";
      bookmarkCircle.style.color = "white";
      bookmarkCircle.style.fontSize = "12px";
      // Нумерация закладок
      bookmarkCircle.textContent = index + 1;
      bookmarkCircle.addEventListener("click", function() {
        const pos = parseInt(this.dataset.scrollPos, 10);
        window.scrollTo({ top: pos, behavior: 'smooth' });
      });

      // Вставляем закладку перед красным кружком, чтобы он всегда оставался внизу
      circleContainer.insertBefore(bookmarkCircle, redCircle);
    });
  }
});

// Обработчик для сохранения новой позиции при двойном клике
document.getElementById("Buttonpar").addEventListener("click", function() {
  // Получаем историю из localStorage или создаем новый массив
  let history = localStorage.getItem(storageKey);
  history = history ? JSON.parse(history) : [];

  const currentPos = window.pageYOffset;
  history.push(currentPos);
  localStorage.setItem(storageKey, JSON.stringify(history));

  // Создаем новый синий кружок для закладки
  const bookmarkCircle = document.createElement("div");
  bookmarkCircle.classList.add("scroll-history-circle", "bookmark");
  bookmarkCircle.dataset.scrollPos = currentPos;
  bookmarkCircle.style.width = "20px";
      bookmarkCircle.style.margin = "10px";
        bookmarkCircle.style.padding = "5px";
         bookmarkCircle.style.display = "grid";
  bookmarkCircle.style.width = "20px";
  bookmarkCircle.style.height = "20px";
  bookmarkCircle.style.borderRadius = "50%";
  bookmarkCircle.style.backgroundColor = "#3498db";
  bookmarkCircle.style.cursor = "pointer";
  bookmarkCircle.style.display = "flex";
  bookmarkCircle.style.alignItems = "center";
  bookmarkCircle.style.justifyContent = "center";
  bookmarkCircle.style.color = "white";
  bookmarkCircle.style.fontSize = "12px";
  bookmarkCircle.textContent = history.length; // порядковый номер закладки

  bookmarkCircle.addEventListener("click", function() {
    const pos = parseInt(this.dataset.scrollPos, 10);
    window.scrollTo({ top: pos, behavior: 'smooth' });
  });

  // Вставляем новый кружок перед красным, чтобы он всегда оставался внизу
  const circleContainer = document.getElementById("scrollHistoryCircles");
  const redCircle = document.getElementById("clearBookmarks");
  circleContainer.insertBefore(bookmarkCircle, redCircle);
});

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


    Buttonpar.appendChild(createParagraphSVG());

 toggleColorButton.appendChild(createRefreshSVG());
/*
// Добавляем символ в body
document.body.appendChild(createRefreshSVG());*/
    backButton2.appendChild(createhideSVG());
    buttonContainer.appendChild(backButton2);
    buttonContainer.appendChild(Buttonpar);

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
   // const metaTag = document.createElement('meta');
   // metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
  //  metaTag.setAttribute('content', "script-src 'self' 'nonce-abc124';");

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
        case "generateTOC2":
            generateTOC2();
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
function generateTOC2() {
    const tocElement = document.getElementById('toc2');
    if (tocElement) {
        tocElement.remove();
    }
    // Создаём контейнер для оглавления
    const tocContainer = document.createElement("div");
    tocContainer.id = "toc2";
    tocContainer.style.marginBottom = "20px";
    tocContainer.innerHTML = "<h2>Оглавление теоретической части</h2>";

// Создаём нумерованный список для оглавления
    const tocList = document.createElement("ol");
    tocList.classList.add('toc');
    tocList.classList.add('columns');
// Находим все элементы <details>
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details, index) => {
        const summary = details.querySelector("summary");

        if (summary) {
            // Создаём уникальный ID для якорной ссылки
            const anchorId = `summary-${index + 1}`;
            summary.id = anchorId;

            // Создаём ссылку в виде элемента списка
            const tocListItem = document.createElement("li");
            const tocLink = document.createElement("a");
            tocLink.href = `#${anchorId}`;
            tocLink.textContent = summary.textContent.trim();

            // Добавляем ссылку в элемент списка
            tocListItem.appendChild(tocLink);
            tocList.appendChild(tocListItem);
        }
    });

// Вставляем нумерованный список в контейнер
    tocContainer.appendChild(tocList);

// Добавляем оглавление в начало документа
    document.body.insertBefore(tocContainer, document.body.firstChild);


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
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease, border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
}

a:hover {
    color: #1abc9c;
    border-bottom: 2px solid #1abc9c;
}

/* Оглавление */
.toc {
    margin-top: 20px;
    list-style-type: none;
    counter-reset: toc-counter;
    padding-left: 1em;
}

.toc li {
    margin: 10px 0;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 0.5em;
}

/* Нумерация с квадратиками */
.toc li::before {
    content: counter(toc-counter);
    counter-increment: toc-counter;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    color: white;
    font-size: 0.9em;
    border-radius: 4px;
}

/* Цвета для квадратиков */
.toc li:nth-child(6n+1)::before { background-color: #3498db; }
.toc li:nth-child(6n+2)::before { background-color: #1abc9c; }
.toc li:nth-child(6n+3)::before { background-color: #e74c3c; }
.toc li:nth-child(6n+4)::before { background-color: #f39c12; }
.toc li:nth-child(6n+5)::before { background-color: #9b59b6; }
.toc li:nth-child(6n+6)::before { background-color: #2ecc71; }

/* Заголовок оглавления */
h2 {
    font-size: 1.5em;
    color: #2c3e50;
    font-family: Arial, sans-serif;
    margin-bottom: 0.5em;
}

/* Стили для класса numbered */
.numbered {
    position: relative;
    padding-left: 1.5em;
}

.numbered::before {
    content: attr(data-id);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5em;
    height: 2.5em;
    font-size: 1em;
    margin-right: 0.5em;
    color: white;
    background-color: var(--bg-color);
    border-radius: 10%;
}

/* Адаптивные стили */
@media (max-width: 768px) {
    .toc li {
        font-size: 1em;
    }
    .toc li::before, .numbered::before {
        width: 2em;
        height: 2em;
    }
}

@media (max-width: 480px) {
    .toc li {
        font-size: 0.9em;
    }
    .toc li::before, .numbered::before {
        width: 1.8em;
        height: 1.8em;
        font-size: 0.8em;
    }
}4
pre {
    white-space: pre-wrap; /* Разрешить перенос текста */
    word-wrap: break-word; /* Переносить длинные слова */
    font-size: 16px; /* Базовый размер шрифта */
    padding: 10px;
    border: 1px solid #ccc;
   
    overflow-x: auto; /* Добавить горизонтальную прокрутку при необходимости */
}

/* Меньший размер шрифта на маленьких экранах */
@media (max-width: 768px) {
    pre {
        font-size: 14px;
        padding: 8px;
    }
}

/* Ещё меньший размер на очень маленьких экранах */
@media (max-width: 480px) {
    pre {
        font-size: 12px;
        padding: 6px;
    }
}
.columns {
    column-count: 1; /* Базовое значение для мобильных */
    column-gap: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 20px 0;
}

/* Для экранов шире 600px (планшеты) */
@media (min-width: 600px) {
    .columns {
        column-count: 2; /* Две колонки на планшетах */
    }
}

/* Для экранов шире 1024px (настольные компьютеры) */
@media (min-width: 1024px) {
    .columns {
        column-count: 3; /* Три колонки на больших экранах */
    }
} 
body {
    margin: 0;
    font-family: Arial, sans-serif;
    padding-left: 5vw; /* Процент ширины окна */
    padding-right: 5vw;
}

@media (min-width: 768px) { /* Планшеты и выше */
    body {
        padding-left: 40px;
        padding-right: 40px;
    }
}

@media (min-width: 1024px) { /* Десктопы и выше */
    body {
        padding-left: 60px;
        padding-right: 60px;
    }
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
    const tocE  = document.getElementById('hidebt');
    if (tocE) {
        tocE.remove();
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
   // const metaTag = document.createElement('meta');
   // metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
   // metaTag.setAttribute('content', "script-src 'self' 'nonce-abc123';");

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

        const vie = document.createElement('meta');
        charSet.name = "viewport";
        charSet.content = "width=device-width, initial-scale=1.0, minimum-scale=1.0"; // Замените на ваш текст копирайта
        document.head.appendChild(charSet);

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

        const eleme  = document.getElementById("splashScreenscript");

// Проверяем, что элемент найден, и удаляем его
        if (eleme ) {
            eleme .remove();
        }
  const scriptElement = document.createElement('script');
// Hover-эффект для кнопки
        scriptElement.id="splashScreenscript";
       scriptElement.textContent =`
    window.onload = function() {
     const splashScreen = document.getElementById("splashScreen");
   splashScreen.style.display = 'flex';
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
              
             const divs2 = document.querySelectorAll('div');

    // Проходим по каждому div
    divs2.forEach(function(div) {
        // Устанавливаем отображение элемента
        div.style.display = 'block';  // или 'flex', 'inline', в зависимости от изначального стиля
    });
     const splashScreen = document.getElementById("splashScreen");
   splashScreen.style.display = 'none';
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
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addcopy") {


        allElements = document.querySelectorAll('.copy-button');

        allElements.forEach(element => {
            element.remove();
            });
        let elementhd = document.getElementById("scrcpu");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd) {
            elementhd.remove();
        }
         elementhd = document.getElementById("stid");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd) {
            elementhd.remove();
        }
        const cript = document.createElement('script');
        const st=document.createElement('style');
        st.id='stid';
        st.textContent=`.copy-button {
                    position: absolute; /* Позиционирование кнопки */
                    top: 5px; /* Расстояние от верхнего края */
                    right: 5px; /* Расстояние от правого края */
                    padding: 3px 5px;
                    font-size: 12px;
                    cursor: pointer;
                    border: 1px solid #3498db;
                    background-color: #3498db;
                    color: white;
                    border-radius: 4px;
                    transition: background-color 0.3s ease;
                }

                /* Эффект наведения для кнопки */
                .copy-button:hover {
                    background-color: #2980b9;
                }

                /* Убедитесь, что элементы с dir="ltr" имеют относительное позиционирование */
                [dir="ltr"] {
                    position: relative; /* Устанавливаем позиционирование для контейнера */
                    padding: 10px; /* Отступ для элемента */
                    border: 1px solid #ccc; /* Обводка контейнера */
                    margin: 10px 0; /* Отступ между элементами */
                }
             `
        document.body.appendChild(st);
        cript.id = "scrcpu";
        cript.textContent = ` document.addEventListener('DOMContentLoaded', () => {
            // Функция для копирования текста в буфер обмена
            function copyToClipboard(text) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('Содержимое скопировано в буфер обмена!');
            }

            // Создание и добавление стилей для кнопки
              allElements = document.querySelectorAll('.copy-button');

        allElements.forEach(element => {
            element.remove();
            });
            // Поиск всех элементов с атрибутом dir="ltr"
            const ltrElements = document.querySelectorAll('[dir="ltr"]');

            ltrElements.forEach(element => {
                // Создание кнопки "Копировать"
                const copyButton = document.createElement('button');
                copyButton.innerText = 'Копировать';
                copyButton.className = 'copy-button'; // Добавляем класс для стилей

                // Обработчик клика для кнопки
                copyButton.addEventListener('click', () => {
                    copyToClipboard(element.innerText);
                });

                // Добавление кнопки к элементу
                element.appendChild(copyButton);
            });
        }); `;
        document.body.appendChild(cript);

        console.log('добавлен скрипт');
    }
    // Другие обработчики...
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addpr") {

        let elementhd = document.getElementById("scrollPercentage");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd) {
            elementhd.remove();
        }
          elementhd = document.getElementById("scrpr");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd) {
            elementhd.remove();
        }

        const cript = document.createElement('script');

        cript.id = "scrpr";
        cript.textContent = ` 
          document.querySelectorAll('#scrollPercentage').forEach(el => el.remove());
          
          
          const scrollPercentage = document.createElement('div');
    scrollPercentage.id = 'scrollPercentage';
    
    // Добавляем стиль к элементу через JavaScript
    Object.assign(scrollPercentage.style, {
        position: 'fixed',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '18px',
        zIndex: '1000' // Убедитесь, что элемент всегда сверху
    });
 let elementhd22= document.getElementById("scrollPercentage");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd22) {
            elementhd22.remove();
        }
    // Добавляем элемент в body
    document.body.appendChild(scrollPercentage);

    // Обработчик события прокрутки
    document.addEventListener('scroll', () => {
        // Высота документа
        const documentHeight = document.documentElement.scrollHeight;

        // Высота видимой области
        const windowHeight = window.innerHeight;

        // Текущая позиция прокрутки
        const scrollTop = window.scrollY;

        // Рассчитываем процент просмотренной части страницы
        const totalScroll = scrollTop + windowHeight;
        const percentage = Math.round((totalScroll / documentHeight) * 100);

        // Обновляем текст на экране
        scrollPercentage.textContent = percentage + '%';
    });`;
        document.body.appendChild(cript);

        console.log('добавлен скрипт');
    }
    // Другие обработчики...
});



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addContentBtn") {
        const selectedText = window.getSelection(); // Получаем выделение
        if (selectedText.rangeCount > 0) {
          ///  const newText = prompt("Введите текст для замены выделенного:", selectedText.toString()); // Запрашиваем новый текст
        { // Проверяем, что пользователь не нажал Cancel
           const elementhd = document.getElementById("styledet");
                if (elementhd) {
                    elementhd.remove();
                }
            const sdetail=document.createElement('style');
            sdetail.id="styledet";
            sdetail.textContent="   details > summary {\n" +
                "        padding: 5px;\n" +
                "        background-color: #eee;\n" +
                "        color: #333;\n" +
                "        border: 1px #ccc solid;\n" +
                "        cursor: pointer;\n" +
                "        list-style: none;\n" +
                "    }\n" +
                " \n" +
                "    details > div {\n" +
                "        border: 1px #ccc solid;\n" +
                "        padding: 10px;\n" +
                "    }\n" +
                " \n" +
                "details[open] > summary {\n" +
                "    color:#eee; \n" +
                "   background-color:#333;\n" +
                "}\n" +
                "summary:before {\n" +
                "   content: \"+\";\n" +
                "   font-size: 20px;\n" +
                "   font-weight: bold;\n" +
                "   margin: -5px 5px 0 0;\n" +
                "}\n" +
                " \n" +
                "details[open] summary:before {\n" +
                "   content: \"-\";\n" +
                "}";
            document.head.appendChild(sdetail);
                const range = selectedText.getRangeAt(0); // Получаем диапазон выделенного текста
                range.deleteContents(); // Удаляем выделенный текст
                let det=document.createElement('details');
                const newhip = prompt("Введите заголовок:", "Теоретическая часть.")
                const vale=document.createElement("summary");
                vale.textContent=newhip;

                det.innerHTML="!!!!!!!!!!!!!!!!!!!!";
            det.appendChild(vale);
                range.insertNode(det); // Вставляем новый текст
            }
        } else {
            alert("Пожалуйста, выделите текст для замены."); // Сообщение, если текст не выделен
        }



    }});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "print") {


        elementhd = document.getElementById("printscript");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd) {
            elementhd.remove();
        }
        elementhd = document.getElementById("pstyle");

// Проверяем, что элемент найден, и удаляем его
        if (elementhd) {
            elementhd.remove();
        }
const pstyle=document.createElement('style');
        pstyle.id="pstyle";
        pstyle.textContent=`
        @media print {
    /* Стили для печати */
    #bcon,
    #scrollPercentage,
    .copy-button {
        display: none; /* Скрыть элементы, которые не нужны при печати */
    }

    .page-break {
        page-break-before: always; /* Новая страница для каждого анчора */
    }
}
[dir="ltr"] {
    page-break-inside: avoid; /* Избегать разрывов внутри элемента */
}`;
        document.head.appendChild(pstyle);
        const cript = document.createElement('script');

        cript.id = "printscript";
        cript.textContent = ` function getPageNumber(anchorId) {
    const anchorElement = document.getElementById(anchorId);
    
    if (!anchorElement) return null;

    const elementPosition = anchorElement.getBoundingClientRect().top + window.scrollY;
    const pageHeight = window.innerHeight;

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
        
        // Создаем новый элемент для номера страницы
        const pageNumberElement = document.createElement('span');
        pageNumberElement.textContent = pageNumber;
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
window.addEventListener('beforeprint', prepareDocumentForPrint);`;
        document.body.appendChild(cript);

        console.log('добавлен скрипт');
    }
    // Другие обработчики...
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "clearpage") {

console.log("clearpage");

        async function extractUsedStyles() {
            var keys = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            // Создаем новый элемент <style> для добавления минимизированных стилей
            function generateCode(len){
                code='';
                for(i=0; i<len; i++){
                    code+=keys.charAt(Math.floor(Math.random()*keys.length));
                }
                return code;
            }
            const selection = window.getSelection();
            if (!selection.rangeCount) return;

            // Создаем новый контейнер <div>
            const wrapperDiv = document.createElement("div");
            wrapperDiv.id=generateCode(12);
            // Клонируем выделенный контент и вставляем его в новый контейнер
            const range = selection.getRangeAt(0);
            const clonedContent = range.cloneContents();
            wrapperDiv.appendChild(clonedContent);
// Получение всех элементов с классом socBlock

// Получение всех элементов с классом socBlock
			  elements = wrapperDiv.querySelectorAll('.socBlock');

// Удаление класса с использованием forEach
		elements.forEach(box => {
  box.remove();
});
			  elements = wrapperDiv.querySelectorAll('.date');

// Удаление класса с использованием forEach
		elements.forEach(box => {
  box.remove();
});
				
				// Получение всех элементов с классом socBlock
			 

            const inlineStyleTag = document.createElement("style");
            wrapperDiv.prepend(inlineStyleTag);  // Добавляем стиль в начало контейнера

            // Получаем все внешние таблицы стилей
            const styleSheets = Array.from(document.styleSheets).filter(sheet => sheet.href);

            for (const sheet of styleSheets) {
                try {
                    // Загружаем содержимое внешней таблицы стилей
                    const response = await fetch(sheet.href);
                    const cssText = await response.text();

                    // Создаем временный элемент стиля и добавляем в него CSS для обработки
                    const style = document.createElement("style");
                    style.textContent = cssText;
                    document.head.appendChild(style);

                    // Перебираем все правила в CSS
                    Array.from(style.sheet.cssRules).forEach(rule => {
                        if (rule.type === CSSRule.STYLE_RULE) {
                            // Проверяем, есть ли на странице элементы, соответствующие селектору
                            if(rule.selectorText==":root")inlineStyleTag.appendChild(document.createTextNode(rule.cssText));
                            const elements = wrapperDiv.querySelectorAll(rule.selectorText);
                            if (elements.length > 0) {
                                // Если такие элементы есть, добавляем правило в новый <style>
                           //     inlineStyleTag.appendChild(document.createTextNode('#'+wrapperDiv.id+">"+rule.cssText));
                                inlineStyleTag.appendChild(document.createTextNode(rule.cssText));
                            }
                        }
                    });

                    // Удаляем временный элемент стиля
                    document.head.removeChild(style);
                } catch (error) {
                    console.error(`Не удалось загрузить стили из ${sheet.href}`, error);
                }
            }
            await Promise.all(
                Array.from(wrapperDiv.querySelectorAll("img")).map(async (img) => {
                    const src = img.getAttribute("src");
                    if (src && !src.startsWith("data:")) {
                        try {
                            const response = await fetch(src);
                            const blob = await response.blob();
                            const reader = new FileReader();

                            // Обернем FileReader в промис для корректной последовательности выполнения
                            const dataURL = await new Promise((resolve, reject) => {
                                reader.onloadend = () => resolve(reader.result);
                                reader.onerror = reject;
                                reader.readAsDataURL(blob);
                            });

                            img.src = dataURL; // Заменяем URL изображения на data:image URI

                        } catch (error) {
                            console.warn("Не удалось загрузить изображение:", error);
                        }
                    }
                })
            ).then(() => {
                document.body.innerHTML = ''; // Очистка содержимого body
                document.body.appendChild(wrapperDiv); // Добавление выделенного контента

                const htmlToCopy = wrapperDiv.outerHTML;
                console.log(wrapperDiv);

                try {
                    // Проверка на существование chrome.storage.local
                    if (chrome.storage && chrome.storage.local) {
                        chrome.storage.local.get({ savedHTML: [] }, (data) => {
                            const updatedContent = [...data.savedHTML, htmlToCopy];
                            chrome.storage.local.set({ savedHTML: updatedContent }, () => {
                                console.log("HTML добавлен и сохранен.");
                                alert("Добавлено успешно");
                            });
                        });
                    } else {
                        console.warn("chrome.storage.local недоступен в этом контексте.");
                    }

                } catch (error) {
                    alert("Не удалось скопировать HTML в буфер обмена:", error);
                }
            });
        }

// Вызываем функцию для извлечения и добавления только используемых стилей
        extractUsedStyles();


    }
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "addContentBtn2") {
        const selectedText = window.getSelection(); // Получаем выделение
        if (selectedText.rangeCount > 0) {
            ///  const newText = prompt("Введите текст для замены выделенного:", selectedText.toString()); // Запрашиваем новый текст
            { // Проверяем, что пользователь не нажал Cancel
                const elementhd = document.getElementById("styledet");
                if (elementhd) {
                    elementhd.remove();
                }
                const sdetail=document.createElement('style');
                sdetail.id="styledet";
                sdetail.textContent="   details > summary {\n" +
                    "        padding: 5px;\n" +
                    "        background-color: #eee;\n" +
                    "        color: #333;\n" +
                    "        border: 1px #ccc solid;\n" +
                    "        cursor: pointer;\n" +
                    "        list-style: none;\n" +
                    "    }\n" +
                    " \n" +
                    "    details > div {\n" +
                    "        border: 1px #ccc solid;\n" +
                    "        padding: 10px;\n" +
                    "    }\n" +
                    " \n" +
                    "details[open] > summary {\n" +
                    "    color:#eee; \n" +
                    "   background-color:#333;\n" +
                    "}\n" +
                    "summary:before {\n" +
                    "   content: \"+\";\n" +
                    "   font-size: 20px;\n" +
                    "   font-weight: bold;\n" +
                    "   margin: -5px 5px 0 0;\n" +
                    "}\n" +
                    " \n" +
                    "details[open] summary:before {\n" +
                    "   content: \"-\";\n" +
                    "}";
                document.head.appendChild(sdetail);
                const range = selectedText.getRangeAt(0); // Получаем диапазон выделенного текста
                range.deleteContents(); // Удаляем выделенный текст
                let det=document.createElement('details');
                const newhip = prompt("Введите заголовок:", "Теоретическая часть.")
                const vale=document.createElement("summary");
                vale.textContent=newhip;

                det.innerHTML="--";
                chrome.storage.local.get("savedHTML", (data) => {
                    const htmlContent = data.savedHTML;
                    if (htmlContent) {  det.innerHTML = htmlContent;
                        det.appendChild(vale);
                        console.log(htmlContent);
                        chrome.storage.local.remove("savedHTML", () => {
                            //      document.getElementById("htmlContent").value = "";
                        });

                    } else {
                        alert("Нет сохраненного HTML для вставки.");
                    }
                });

                range.insertNode(det); // Вставляем новый текст
            }
        } else {
            alert("Пожалуйста, выделите текст для замены."); // Сообщение, если текст не выделен
        }



    }});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "obr") {
        const scripts = Array.from(document.querySelectorAll("script"));

        // Применить обфускацию ко всем скриптам
        scripts.forEach(script => {
            if (script.src) {
                // Если скрипт внешний, не обфусцируем его (для веб-безопасности)
                console.log("Пропущен внешний скрипт: " + script.src);
            } else {
                try {
                    // Обфусцируем содержимое скрипта
                    const obfuscatedCode = JavaScriptObfuscator.obfuscate(script.innerHTML, {
                        compact: true,    // Уменьшение размера кода
                        controlFlowFlattening: true, // Сложность потока управления
                        deadCodeInjection: true       // Инъекция мертвого кода
                    }).getObfuscatedCode();

                    // Заменить старый код на обфусцированный
                    script.innerHTML = obfuscatedCode;
                } catch (error) {
                    console.warn("Ошибка при обфускации скрипта:", error);
                }
            }
        });



    }});
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "savef") {
        const htmlContent = document.documentElement.outerHTML;

    // Создаем Blob-объект для данных
    const blob = new Blob([htmlContent], { type: "text/html" });

    // Создаем ссылку для скачивания
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "page_backup.html";  // Имя файла

    // Добавляем ссылку на страницу и эмулируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем ссылку после скачивания
    document.body.removeChild(link);
        };



    });

function toBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}
function fromBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}
// При клике на иконку создаём модальное окно в текущей вкладке
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openTestModal") {
        createTestModal();
    }
});
function saveSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        savedRange = selection.getRangeAt(0).cloneRange();
    }
}
// Вставить тест на страницу
function insertTest(b64) {
    if (!document.getElementById('test-styles')) {
        const style = document.createElement('style');
        style.id = 'test-styles';
        style.textContent = `
      details.test-wrapper {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding: 10px 15px;
        margin: 20px auto;
        width: 90%;
        max-width: 600px;
        font-family: sans-serif;
      }
      summary {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .test {
        margin-top: 10px;
      }
      .answer-list label {
        display: flex;
        align-items: center;
        background: #eaeaea;
        border-radius: 4px;
        padding: 8px;
        margin-bottom: 6px;
        cursor: pointer;
      }
      .answer-list label:hover {
        background: #d4e0e0;
      }
      .answer-list input[type="checkbox"] {
        margin-right: 8px;
      }
      .test button {
        margin-top: 10px;
        background: #4CAF50;
        color: #fff;
        border: none;
        padding: 10px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }
      .test button:hover {
        background: #45a049;
      }
    `;
        document.head.appendChild(style);
    }

    // Создаем <details> и <summary>
    const details = document.createElement('details');
    details.className = 'test-wrapper';

    const summary = document.createElement('summary');
    summary.innerText = 'Тест: Пройдите задание';
    details.appendChild(summary);

    const container = document.createElement('div');
    container.className = 'test';
    container.dataset.test = b64;
    details.appendChild(container);

    replaceSelectedTextWith(details);
const scriptId = 'test-runner-script-z'  ;
  
  // Если уже есть старый скрипт — удаляем
  const old = document.getElementById(scriptId);
  if (old) {
    old.remove();
  }
    // Генерируем скрипт оживления
    const script = document.createElement('script');
	 script.id = scriptId;
    script.textContent = `(function(){
  // Функция для отрисовки итогов
  function displayResult(container, score, total, results, attemptsLeft) {
    container.innerHTML = '';
    const summary = document.createElement('div');
    summary.innerHTML = '<h3>Результат теста</h3><p>Вы правильно ответили на <b>'+score+'</b> из <b>'+total+'</b> вопросов.</p>   <p>Попыток осталось: <b>'+attemptsLeft+'</b></p>    ';
    const list = document.createElement('ul');
    results.forEach(res => {
      const li = document.createElement('li');
      li.innerHTML = '<b>'+res.question+'</b><br>Правильные ответы: '+res.correctAnswers.join(', ')+'';
      list.appendChild(li);
    });
    summary.appendChild(list);
    container.appendChild(summary);
  }

  // Основная логика по каждому контейнеру .test
  document.querySelectorAll('.test').forEach(container => {
    const b64 = container.dataset.test;
    const attemptsKey = 'testAttempts_' + b64;
    const resultKey   = 'testResult_'   + b64;

    let attempts = parseInt(localStorage.getItem(attemptsKey) || '0', 10);

    // Если попыток >=3 — показываем сохранённый результат
    if (attempts >= 3) {
      const stored = localStorage.getItem(resultKey);
      if (stored) {
        const { score, total, results } = JSON.parse(stored);
        displayResult(container, score, total, results, 0);
      } else {
        container.innerHTML = '<p>Вы исчерпали все попытки этого теста.</p>';
      }
      return;
    }

    // Иначе — рендерим форму
    const data = JSON.parse(decodeURIComponent(escape(window.atob(b64))));
    container.innerHTML = '';  // очистим содержимое

    const title = document.createElement('h3');
    title.innerText = 'Пройдите тест';
    container.appendChild(title);

    const form = document.createElement('form');
    data.questions.forEach((q, i) => {
      const qDiv = document.createElement('div');
      const p = document.createElement('p');
      p.innerText = q.question;
      qDiv.appendChild(p);

      q.answers.forEach((ans, j) => {
        const label = document.createElement('label');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.name = 'q' + i;
        cb.value = j;
        label.append(cb, document.createTextNode(ans));
        qDiv.appendChild(label);
		 const cbr = document.createElement('br');
		  qDiv.appendChild(cbr);
      });

      form.appendChild(qDiv);
    });
    container.appendChild(form);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.innerText = 'Проверить';
    container.appendChild(submitBtn);

    submitBtn.addEventListener('click', () => {
      // проверяем, остались ли попытки
      if (attempts >= 3) {
        alert('Попытки исчерпаны.');
        return;
      }

      // считаем результат
      let score = 0;
      const results = [];
      data.questions.forEach((q, i) => {
        const selected = Array.from(form.querySelectorAll('input[name="q'+i+'"]:checked'))
                              .map(cb => parseInt(cb.value))
                              .sort((a,b)=>a-b);
        const correct  = q.correct.slice().sort((a,b)=>a-b);
        const ok = selected.length===correct.length && selected.every((v,idx)=>v===correct[idx]);
        if (ok) score++;
        results.push({
          question:      q.question,
          correctAnswers:q.correct.map(idx=>q.answers[idx])
        });
      });

      // сохраняем попытку и результат
      attempts++;
      localStorage.setItem(attemptsKey, attempts);
      localStorage.setItem(resultKey, JSON.stringify({
        score,
        total: data.questions.length,
        results
      }));

      // показываем итог
      displayResult(container, score, data.questions.length, results, 3 - attempts);
    });
  });
})();`;
    document.body.appendChild(script);
}

function replaceSelectedTextWith(node) {
    if (!savedRange) {
        alert('Нет сохранённого выделения! Выделите текст перед созданием теста.');
        return;
    }

    savedRange.deleteContents();
    const fragment = document.createDocumentFragment();
    fragment.appendChild(node);
    savedRange.insertNode(fragment);

    // После вставки очищаем сохранённое выделение
    savedRange = null;
}
// Рендер прохождения теста
function renderTestRunner(container) {
    container.innerHTML = '';
    const data = JSON.parse(atob(container.dataset.test));

    const title = document.createElement('h3');
    title.innerText = 'Пройдите тест';
    container.appendChild(title);

    const form = document.createElement('form');
    data.questions.forEach((q, i) => {
        const qCard = document.createElement('div');
        const qText = document.createElement('p');
        qText.innerText = q.question;
        qCard.appendChild(qText);

        q.answers.forEach((ans, j) => {
            const label = document.createElement('label');
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.name = `q${i}`;
            cb.value = j;
            label.append(cb, document.createTextNode(ans));
            qCard.appendChild(label);
        });

        form.appendChild(qCard);
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.innerText = 'Проверить';
    submitBtn.addEventListener('click', () => {
        let score = 0;
        data.questions.forEach((q, i) => {
            const selected = Array.from(form.querySelectorAll(`input[name="q${i}"]:checked`)).map(el => parseInt(el.value)).sort();
            const correct = q.correct.slice().sort();
            if (selected.length === correct.length && selected.every((v, idx) => v === correct[idx])) {
                score++;
            }
        });
        alert(`Правильных ответов: ${score} из ${data.questions.length}`);
    });

    form.appendChild(submitBtn);
    container.appendChild(form);
}

// Создание модального окна создания теста

function injectModalStyles() {
    if (document.getElementById('test-modal-styles')) return; // чтобы не вставлять дважды

    const style = document.createElement('style');
    style.id = 'test-modal-styles';
    style.textContent = `
    #test-modal {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    #test-modal .modal-content {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      width: 90%;
      max-width: 600px;
      max-height: 90%;
      overflow-y: auto;
      font-family: sans-serif;
      background: #f4f7f6;
    }
    #test-modal h2 {
      font-size: 20px;
    }
    .question-block {
      margin-bottom: 16px;
    }
    .answers-block label {
      display: flex;
      align-items: center;
      margin-top: 6px;
    }
    .answers-block input[type="text"] {
      flex: 1;
      padding: 6px;
      margin-right: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    #test-modal button {
      background: #2196F3;
      color: #fff;
      border: none;
      padding: 10px 16px;
      margin: 10px 5px 0 0;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    #test-modal button:hover {
      background: #1976D2;
    }
  `;
    document.head.appendChild(style);
}

function createTestModal() {
    saveSelection();
    injectModalStyles(); // подключить стили

    if (document.getElementById('test-modal')) return; // Если уже открыто

    const modal = document.createElement('div');
    modal.id = 'test-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.6)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';

    const modalContent = document.createElement('div');
    modalContent.style.background = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.width = '90%';
    modalContent.style.maxWidth = '600px';
    modalContent.style.maxHeight = '90%';
    modalContent.style.overflowY = 'auto';

    modalContent.innerHTML = `
    <h2>Создать новый тест</h2>
    <div id="questions-container"></div>
    <button id="add-question-btn">Добавить вопрос</button>
    <button id="save-test-btn">Сохранить тест</button>
    <button id="close-test-btn">Отмена</button>
  `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    let questionCount = 0;

    document.getElementById('add-question-btn').addEventListener('click', () => {
        questionCount++;
        const qDiv = document.createElement('div');
        qDiv.className = 'question-block';
        qDiv.innerHTML = `
      <label>Вопрос ${questionCount}: <input type="text" name="question" placeholder="Текст вопроса"></label>
      <div class="answers-block">
        ${Array(4).fill(0).map((_,i) => `
          <label>
            <input type="text" name="answer" placeholder="Ответ ${i+1}">
            <input type="checkbox" name="correct-${questionCount}" value="${i}"> Правильный
          </label>
        `).join('')}
      </div>
    `;
        document.getElementById('questions-container').appendChild(qDiv);
    });

    document.getElementById('save-test-btn').addEventListener('click', () => {
        const testData = { questions: [] };
        const blocks = document.querySelectorAll('.question-block');

        blocks.forEach((qb, idx) => {
            const qText = qb.querySelector('input[name="question"]').value.trim();
            const answers = Array.from(qb.querySelectorAll('input[name="answer"]')).map(a => a.value.trim());
            const correct = Array.from(qb.querySelectorAll(`input[name="correct-${idx+1}"]:checked`)).map(c => parseInt(c.value));

            testData.questions.push({ question: qText, answers, correct });
        });

        const b64 = toBase64(JSON.stringify(testData));
        insertTest(b64);
        document.body.removeChild(modal);
    });

    document.getElementById('close-test-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

// При клике на иконку отправляем сообщение в контент-скрипт

