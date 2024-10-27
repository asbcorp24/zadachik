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

    // Обработчик для оборачивания выделенного текста в <h1>
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