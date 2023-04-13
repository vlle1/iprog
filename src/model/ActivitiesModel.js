/**
 * Activity json object "shape":
 * { "activity": "some activity", "participants": numberOfPeople, "price": numberInEuros}
 * 
*/
import {recomendedActivities, recomendedActivitiesFilter} from "../lib/callAPI";
import resolvePromise from "../lib/resolvePromise";
const SAVED_CHANGED = "savedActivitiesChanged";
const REC_CHANGE = "recommendedActivitiesChanged";

const DEFAULT_RECOMMENDED_ACTIVITIES = 5;

export default class ActivityModel {
  constructor() {
    this.observers = []; //as in the lab.
    this.recommendedActivities = []; //array of activity objects
    this.currentActivity= null; //to view details of an activity.
    this.savedActivities = []; //array of activity objects
    this.promiseState=[];
    this.filterText = "";
    this.filterPriceLower = null; //could be number
    this.filterPriceUpper = null; //could be number
    this.filterPeople = null; //could be number (1, 2 or 3 etc.)
    this.filteredActivites = []; 
    this.savedfilteredActivites = [];
    this.test = "";
    //we don't save the form entries for adding an activity
  }

  addSavedActivity(activity) {
    this.savedActivities.push(activity);
  
    this.notifyObservers(SAVED_CHANGED);
  }
  deleteSavedActivity(activityToDelete) {
    console.log(activityToDelete)
  this.savedActivities=this.savedActivities.filter(removeActivityCB)
  function removeActivityCB(activity) {
    return activity.key !== activityToDelete.key;
  }
   
  }

  getSavedActivities() {
    return this.savedActivities;
   
  }



    //API call with those parameters
    //activity?participants=1&price=0.1&type=education
  filterApi(people, price, numerOfResults){
    this.recommendedActivities = [];
    for(let i = 0;i<numerOfResults;i++) {
      resolvePromise(recomendedActivitiesFilter(people,price),this.promiseState);
      this.recommendedActivities.push(this.promiseState)
      this.promiseState = [];    
   }
  }


   filterSavedActivites(people, price){
    this.savedfilteredActivites = [];
    console.log("jag ") 
    for(let i = 0;i<this.savedActivities.length;i++) {
      let object = this.savedActivities[i]
      let objectPeopel = this.savedActivities[i].participants
      let objectPrice = this.savedActivities[i].price
      if ((objectPeopel == people) & (objectPrice<= price)) {
        this.savedfilteredActivites.push(object)
           console.log("jag ") 
           console.log(object) 
      } 
         
   }
  }


  

  getRecommendedActivities() {
    return this.recommendedActivities;
  }
  regenerateRecommendedActivities() {
    this.recommendedActivities = [];
    this.fillUpRecommendedActivities(DEFAULT_RECOMMENDED_ACTIVITIES);
  }
  fillUpRecommendedActivities(targetAmount) {
    let amountToGenerate = targetAmount - this.recommendedActivities.length;
    for (let i = 0; i < amountToGenerate; i++) {
      //TODO USE API LATER
        this.recommendedActivities.push({"activity": "some activity", "participants": 1, "price": 0.5 * i});
    }
    this.notifyObservers(REC_CHANGE);
  }
  doSearch() {
    
    for(let i = 0;i<5;i++) {
       resolvePromise(recomendedActivities(),this.promiseState);
      this.recommendedActivities.push(this.promiseState)
      this.promiseState = [];
    }
    
     
  }

  //observer:
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    function isNotTheObserverToRemoveCB(someObserver) {
      return observer !== someObserver;
    }
    this.observers = this.observers.filter(isNotTheObserverToRemoveCB);
  }
  notifyObservers(message) {
    //messages: "savedActivitiesChanged", "recommendedActivitiesChanged"
    function invokeObserverCB(obs) {
      try {
        obs(message);
      } catch (e) {
        console.log("failed calling observer: " + e);
      }
    }
    this.observers.forEach(invokeObserverCB);
  }
  1;
}

export {  SAVED_CHANGED, REC_CHANGE }
