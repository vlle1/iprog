# iprog
Interaction Programming Project

## Setup
npm install

## Develop
npm run dev

## Short description of our project
Our project is connected to an API (Bored API) which gives randomized suggestions for activities you can do when you are bored. We added functionality so that recommended activities can be suggested and the user can also save activities they want to do in the future.   

## What you have done
•	Model and API connection 

•	View for recommended activities and saved activities

•	Sidebar for filtering recommended activities and saved activities

•	Detalis for every activity

•	Some styling

## What we still plan to do
•	Improve styling

•	Login page

## File structure
Only explain the files that are relevant to the project. 

**src /**
-	style: all the CSS styling
-	VueRoot: routing for our project
-	index: index for our routing  

**src / lib:**
-	apiConfig: base URL for API
-	callAPI: fetch information from API
-	promiseNoData: when no data is being promised 
-	resolvePromise: resolve the promise 

**src / model:**
-	ActivitiesModel: the model which makes all the computation 

**src / presenters:**
-	detailPresenter: presenter for details about activity
-	savedActivitesPresenter: presenter for the activities that the user has saved 
-	searchActivityPresenter: presenter for recommended activities
-	sidebarPresenter: presenter for the sidebar, returns two different views depending if the user are looking on the saved or recommended activities

**src / presenters:**
-	detailView: view for details about activity
-	savedActivitesView: view for the activities that the user has saved 
-	searchActivityView: view for recommended activities
-	sidebarView: view for the sidebar when looking at the recommended activities
-	savedSidebarView: view for the sidebar when looking at the saved activities
