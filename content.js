chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    toggleElement(request.target);
  }
});

function toggleElement(targetType) {
  let target;
  
  if (targetType === "nav") {
    target = document.querySelector("nav");
  } else if (targetType === "chatList") {
    target = document.querySelector(".flex.flex-col.gap-2.pb-2.text-token-text-primary.text-sm.mt-5");
  }

  if (target) {
    if (target.style.display === 'none') {
      target.style.display = '';
    } else {
      target.style.display = 'none';
    }
  }
}