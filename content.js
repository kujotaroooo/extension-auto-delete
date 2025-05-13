chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'deleteAll') {
    deleteAllPosts();
    sendResponse({ message: 'All posts deleted successfully!' });
  } else if (message.action === 'deleteShared') {
    deleteSharedPosts();
    sendResponse({ message: 'Shared posts deleted successfully!' });
  } else {
    sendResponse({ message: 'Unknown action' });
  }
});

function deleteAllPosts() {
  const posts = document.querySelectorAll('[data-pagelet^="FeedUnit_"]'); // Facebook post selector
  posts.forEach((post) => {
    const deleteButton = post.querySelector('[aria-label="Delete"]'); // Replace with actual delete button selector
    if (deleteButton) {
      deleteButton.click();
      console.log("Post deleted");
    }
  });
}

function deleteSharedPosts() {
  const posts = document.querySelectorAll('[data-pagelet^="FeedUnit_"]'); // Facebook post selector
  posts.forEach((post) => {
    const sharedLabel = post.querySelector('[aria-label="Shared"]'); // Replace with actual shared post selector
    if (sharedLabel) {
      const deleteButton = post.querySelector('[aria-label="Delete"]');
      if (deleteButton) {
        deleteButton.click();
        console.log("Shared post deleted");
      }
    }
  });
}