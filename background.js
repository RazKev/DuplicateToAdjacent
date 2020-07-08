function duplicateToAdjacent() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        const activeTab = tabs[0];
        if (activeTab === undefined) return;

        chrome.tabs.duplicate(activeTab.id, function (duplicateTab) {
            if ((activeTab.index + 1) !== duplicateTab.index) {
                chrome.tabs.move(duplicateTab.id, { index: activeTab.index + 1 }, undefined);
            }
        });
    });
}

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "duplicateTab",
        title: "Duplicate to adjacent"
    });
    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        duplicateToAdjacent();
    });
    chrome.commands.onCommand.addListener(function (command) {
        duplicateToAdjacent();
    });
});