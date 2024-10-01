document.addEventListener('DOMContentLoaded', function() {
    // Load saved option
    chrome.storage.sync.get('toggleTarget', function(data) {
      if (data.toggleTarget) {
        document.querySelector(`input[value="${data.toggleTarget}"]`).checked = true;
      }
    });

    // Add change event listener to radio buttons
    const radioButtons = document.querySelectorAll('input[name="toggleTarget"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        const selectedTarget = this.value;
        chrome.storage.sync.set({toggleTarget: selectedTarget}, function() {
          console.log('Toggle target saved:', selectedTarget);
        });
      });
    });
});