let collectedText = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "addText") {
        collectedText += message.text + "\n";
        chrome.runtime.sendMessage({ action: "updateText", text: collectedText });
    } else if (message.action === "pasteText") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript(
                {
                    target: { tabId: tabs[0].id },
                    func: (text) => {
                        const newDiv = document.createElement("div");
                        newDiv.textContent = text;
                        newDiv.style.cssText = "padding:10px; margin-top:10px; border:1px solid #000;";
                        document.body.innerHTML = "";  // Очистить body перед вставкой
                        document.body.appendChild(newDiv);
                    },
                    args: [collectedText]
                }
            );
        });
        collectedText = ""; // Очищаем накопленный текст после вставки
        chrome.runtime.sendMessage({ action: "updateText", text: collectedText });
    }
});
