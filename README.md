# The Bored Board
Interaction Programming Project

[Deployed Version](https://iprog-bored-board.web.app/#/)

## Setup
npm install

in the lib folder, create a file called `firebaseConfig.js` and add the following code (fill in the api-key):

```javascript
export default firebaseConfig = {
    apiKey: "",
    authDomain: "iprog-bored-board.firebaseapp.com",
    databaseURL: "https://iprog-bored-board-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iprog-bored-board",
    storageBucket: "iprog-bored-board.appspot.com",
    messagingSenderId: "945228716907",
    appId: "1:945228716907:web:b8a48e8be3d779bf118a2e"
  
  };
```
## Develop
npm run dev

## Short description of our project
Our project is connected to the [Bored API](https://www.boredapi.com/)  which gives randomized suggestions for activities you can do when you are bored. We added functionality so that recommended activities can be suggested and the user can also save activities they want to do in the future [not persistent yet].
