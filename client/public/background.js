// background.js
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("HELLO")
    if (request.message === "extensionActivated") {
      // Extension is activated on the current page
      console.log("Extension is active on this page.");
    }
  }
);
