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
    this.savedActivities = []; //array of activity objects
    this.promiseState=[];
    this.savedfilteredActivites=[];
    this.activitesTypes=["All","recreational","education","social", "relaxation", "cooking"];

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

  RemoveActivityFromRecommended(activityToDelete) {
    console.log(activityToDelete.key);
  
  this.recommendedActivities=this.recommendedActivities.filter(removeRecommendedActivityCB);
  console.log(this.recommendedActivities);
  return this.recommendedActivities;
  function removeRecommendedActivityCB(activity) {
    return activity.data.key !== activityToDelete.key;
  }
  }

  getRecommendedActivities() {
    return this.recommendedActivities;
  }

 

    //API call with those parameters
    //activity?participants=1&price=0.1&type=education
  filterApi(people, price, numerOfResults,type){
    this.recommendedActivities = [];
    for(let i = 0;i<numerOfResults;i++) {
      resolvePromise(recomendedActivitiesFilter(people,price,type),this.promiseState);
      console.log("check item in list")
      console.log(this.recommendedActivities[0])
      console.log(this.promiseState)
      
      if (!this.recommendedActivities.includes(this.promiseState)) {
        this.recommendedActivities.push(this.promiseState)
      }    
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
        console.log(e);
      }
    }
    this.observers.forEach(invokeObserverCB);
  }
  1;
}

export {  SAVED_CHANGED, REC_CHANGE }
