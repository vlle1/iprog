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

## What we have done
•	Model and API connection 

•	View for recommended activities and saved activities

•	Sidebar for filtering recommended activities and saved activities

•	Details for every activity

•	Some styling

•	Support Dark Mode


## What we still plan to do
We have a [mock-up](/project_documents/Project%20proposal.pdf) that shows how the project could look like when it is done.

Important parts:

•	Persistance

•	Login page

•	complete Sidebar

## File structure

**src /**
-	style: all the CSS styling
-	VueRoot: base entry point with routing

**src / lib:**
-	callAPI: interface to fetch information from API
-	resolvePromise: resolve the promise (same as in the lab)

**src / model:**
-	ActivitiesModel: the model for the activities, using observer pattern

**src / presenters:**
-	detailPresenter: presenter for details about an activity
-	savedActivitesPresenter: presenter for the activities that the user has saved 
-	recommendedActivityPresenter: presenter for recommended activities
-	sidebarPresenter: presenter for the sidebar, returns two different views depending if the user are looking on the saved or recommended activities

**src / views:**
-	detailView: view for details about activity
-	savedActivitesView: view for the activities that the user has saved 
-	recommendedActivityView: view for recommended activities
-	recommendedSidebarView: view for the sidebar when looking at the recommended activities
-	savedSidebarView: view for the sidebar when looking at the saved activities
