chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle") {
    chrome.storage.sync.get('toggleTarget', function(data) {
      const target = data.toggleTarget || 'nav'; // Default to 'nav' if not set
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggle", target: target});
      });
    });
  }
});