document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы кнопок
    const wrapButton = document.getElementById('wrapButton');
    const deleteButton = document.getElementById('deleteButton');
    const addStylesButton = document.getElementById('addStylesButton');
    const removeTextButton = document.getElementById('removeTextButton');
    const copyCodeButton = document.getElementById('copyCodeButton');
    const addUniqueIdsButton = document.getElementById('addUniqueIdsButton');
    const encryptButton = document.getElementById('encryptButton'); // Новая кнопка
    const replaceButton = document.getElementById('replaceButton'); // Новая кнопка
	    const savef = document.getElementById('savef'); // Новая кнопка

    // Обработчик для оборачивания выделенного текста в <h1>
	   savef.addEventListener('click', function() {
		
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "savef" });
        });
    });
    wrapButton.addEventListener('click', function() {
		
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "wrapText" });
        });
    });
    replaceButton.addEventListener('click', function() {

        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "replacetext" });
        });
    });
    // Обработчик для удаления выделенного текста
    deleteButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "deleteText" });
        });
    });

    // Обработчик для добавления стилей и кнопок
    addStylesButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "addStylesAndButtons" });
        });
    });

    // Обработчик для удаления текста по строке
    removeTextButton.addEventListener('click', function() {
        const textToRemove = prompt('Введите текст для удаления:');
        if (textToRemove) {
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "removeText", text: textToRemove });
            });
        }
    });

    // Обработчик для копирования кода документа
    copyCodeButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "copyCode" });
        });
    });

    // Обработчик для добавления уникальных ID
    addUniqueIdsButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "addUniqueIds" });
        });
    });
});
document.getElementById('tocBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "generateTOC" });
        });
    });
});

   encryptButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "encryptDirLtr" });
        });
    });
// Удаление всех классов
document.getElementById('removeClassesBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "removeAllClasses" });
        });
    });
});
// Новая функция для удаления тегов
document.getElementById('deleteTagsBtn').addEventListener('click', () => {


    {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "deleteTags" });
            });
        });
    }
});

// Обработчик для добавления мета-тегов
document.getElementById('addMetaButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addMetaTags" });
    });
});
document.getElementById('addStyleToDivsButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addStyleToDivs" });
    });
});
document.getElementById('removeDataAttributesButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "removeDataAttributes" });
    });
});

document.getElementById('addSplashScreen').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addSplashScreen" });
    });
});
const increasePaddingButton = document.getElementById('increasePaddingButton');

// Обработчик для увеличения padding слева и справа на 20px
increasePaddingButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "increasePadding" });
    });
});

const addcolumn = document.getElementById('addcolumn'); // Новая кнопка
addcolumn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addcolumn" });
    });
});
const addcolumn3 = document.getElementById('addcopy'); // Новая кнопка
addcolumn3.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addcopy" });
    });
});
const addcolumn4 = document.getElementById('addpr'); // Новая кнопка
addcolumn4.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addpr" });
    });
});

const addcolumn5 = document.getElementById('print'); // Новая кнопка
addcolumn5.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "print" });
    });
});

const clearpage = document.getElementById('clearpage'); // Новая кнопка
clearpage.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "clearpage" });
    });
});
const obr = document.getElementById('obr'); // Новая кнопка
obr.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "obr" });
    });
});

const addContentBtn = document.getElementById('addContentBtn');
addContentBtn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addContentBtn" });
    });
});
const addContentBtn2 = document.getElementById('addContentBtn2');
addContentBtn2.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addContentBtn2" });
    });
});


const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const insertCodeBtn = document.getElementById('insertCodeBtn');
const codeTextarea = document.getElementById('codeTextarea');



///////////////////////////

document.getElementById("saveHTML").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                func: () => window.getSelection().toString(),
            },
            (selection) => {
                const htmlContent = selection[0].result;
                chrome.storage.local.set({ savedHTML: htmlContent }, () => {
                 //   document.getElementById("htmlContent").value = htmlContent;
                    alert("Добавлено успешно")
                });
            }
        );
    });
});

// Вставка и очистка сохраненного HTML на странице
document.getElementById("insertAndClearHTML").addEventListener("click", () => {
    chrome.storage.local.get("savedHTML", (data) => {
        const htmlContent = data.savedHTML;
        if (htmlContent) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        func: (htmlContent) => {
                            document.body.innerHTML = htmlContent;
                        },
                        args: [htmlContent],
                    },
                    () => {
                        chrome.storage.local.remove("savedHTML", () => {
                      //      document.getElementById("htmlContent").value = "";
                        });
                    }
                );
            });
        } else {
            alert("Нет сохраненного HTML для вставки.");
        }
    });
});
document.getElementById('tocBtn2').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "generateTOC2" });
        });
    });
});
document.getElementById('addTest').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "openTestModal" });
        });
    });
});

