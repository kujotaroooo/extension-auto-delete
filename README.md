# Facebook Post Cleaner

Facebook Post Cleaner is a Chrome extension that allows users to quickly delete all posts or shared posts from their Facebook timeline.

## Features
- **Delete All Posts**: Removes all posts from your Facebook timeline.
- **Delete Shared Posts Only**: Removes only shared posts from your timeline.
- Simple and easy-to-use interface.

## Installation
1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing this project.

## Usage
1. Open Facebook in your browser.
2. Click the Facebook Post Cleaner extension icon in the toolbar.
3. Use the buttons in the popup:
   - **Delete All Posts**: Deletes all posts from your timeline.
   - **Delete Shared Posts Only**: Deletes only shared posts.

## Files
- **popup.html**: The user interface for the extension.
- **popup.js**: Handles button clicks and communicates with the content script.
- **content.js**: Contains the logic to interact with the Facebook DOM and delete posts.
- **manifest.json**: Defines the extension's metadata and permissions.

## Permissions
This extension requires the following permissions:
- `activeTab`: To interact with the currently active tab.
- `scripting`: To inject scripts into the Facebook page.
- `https://*.facebook.com/*`: To access Facebook pages.

## Notes
- The extension relies on Facebook's DOM structure, which may change over time. If the extension stops working, inspect the Facebook page to update the selectors in `content.js`.
- Always use this extension responsibly and in compliance with Facebook's terms of service.

## Contributing
Feel free to submit issues or pull requests to improve the extension.

## License
This project is licensed under the MIT License.
