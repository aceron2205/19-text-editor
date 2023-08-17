# Text Editor Web Application

## Description

The Text Editor Web Application is designed to provide a seamless and functional text editing experience both online and offline. It uses IndexedDB for local storage, Webpack for bundling, Babel for async/await support, and Workbox for caching and progressive web app features.

## Technical Acceptance Criteria

### IndexedDB Storage

- The application utilizes IndexedDB to create an object store with GET and PUT methods.
- Content entered in the text editor is saved to IndexedDB when the DOM window loses focus.

### Offline Functionality

- The application is designed to work without an internet connection.
- Content inside the text editor is automatically saved to IndexedDB when the DOM window is unfocused, ensuring data persistence even when offline.

### Webpack and Babel

- Webpack is used to bundle JavaScript files for efficient deployment.
- Babel is integrated to enable the use of async/await syntax without causing errors.

### Progressive Web App (PWA) Features

- The application generates a manifest.json file using the WebpackPwaManifest plugin.
- Users can install the application as a Progressive Web App (PWA), allowing it to be launched from the desktop.
- The application is bundled with a service worker using Workbox, which caches static assets for offline use.
- Static assets are pre-cached upon loading, providing a smooth user experience.

## Installation and Usage

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run the following command to install dependencies:

   ```
   npm install
   ```

Run the application using the following command:

```
npm run start
```

Access the application by opening your browser and navigating to the provided URL.

## Credits

This application was created by Andrea Ceron with code from Edx/Tecnologico de Monterrey.
