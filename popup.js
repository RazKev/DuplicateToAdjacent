const button = document.getElementById("settings")

button.onclick = function(element) {
    chrome.tabs.create({ url: "chrome://extensions/shortcuts" }, undefined);
}