document.addEventListener('DOMContentLoaded', function() {
  const deleteAllBtn = document.getElementById('deleteAll');
  const deleteSharedBtn = document.getElementById('deleteShared');
  const statusDiv = document.getElementById('status');

  function showStatus(message, isError = false) {
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
    statusDiv.className = 'status ' + (isError ? 'error' : 'success');
  }

  async function sendMessage(action) {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab.url.includes('facebook.com')) {
        showStatus('Please open Facebook to use this extension', true);
        return;
      }
      
      const response = await chrome.tabs.sendMessage(tab.id, { action });
      showStatus(response.message);
    } catch (error) {
      showStatus('Error: Please refresh the Facebook page and try again', true);
    }
  }

  deleteAllBtn.addEventListener('click', () => {
    sendMessage('deleteAll');
  });

  deleteSharedBtn.addEventListener('click', () => {
    sendMessage('deleteShared');
  });
});