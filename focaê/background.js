let isPaused = false;
let blockedSites = ["twitter.com","facebook.com", "youtube.com", "instagram.com"];

function blockSite(tab) {
  chrome.tabs.update(tab.id, { url: "https://walter.com" });
}

function setAlarm() {
  if (!isPaused) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      let url = new URL(tabs[0].url);
      console.log("url", url)
      console.log("blockedSites.includes(url.hostname)", blockedSites.includes(url.hostname))
      if (blockedSites.includes(url.hostname)) {
        chrome.alarms.create({ delayInMinutes: 1/4 });
      }
    });
  }
}

chrome.tabs.onUpdated.addListener(setAlarm);
chrome.alarms.onAlarm.addListener(blockSite);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "togglePause") {
    isPaused = !isPaused;
    sendResponse({ isPaused: isPaused });
  }
});
