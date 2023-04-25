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
    this.filterPeople = ""
    this.filterPeopleSaved = ""
    this.filterType = ""
    this.filterTypeSaved = ""
    this.prices=["All","Free","Cheap","Expensive"];
    this.priceMax = 1
    this.priceMin = 0
    this.priceMaxSaved = 1
    this.priceMinSaved = 0
    this.numerOfResults = 10;
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

  setFilterPeople(people) {

    this.filterPeople = people
    this.notifyObservers("filterPeopleChanged")

    this.filterApi()
  }

  setFilterPeopleFilter(people) {

    this.filterPeopleSaved = people
    this.notifyObservers("filterPeopleChanged")

    this.filterSavedActivites()
  }

  setfilterType(type) {
    this.filterType = type
    
    this.notifyObservers("filterTypeChanged")
    this.filterApi()

  }

  setfilterTypeSaved(type) {
    this.filterTypeSaved = type
    
    this.notifyObservers("filterTypeChanged")
    this.filterSavedActivites()

  }

  reset() {
    console.log("reset")
    this.savedfilteredActivites=[];
    this.filterPeopleSaved = ""
    this.filterTypeSaved = ""
    this.priceMaxSaved = 1
    this.priceMinSaved = 0
  }

  setfilterPrice(price) {
    
    if (price == "All") {
      this.priceMax = 1 
      this.priceMin = 0
    }
    if (price == "Free") {
      this.priceMax = 0 
      this.priceMin = 0
    }
    if (price == "Cheap") {
      this.priceMax = 0.4 
      this.priceMin = 0.1
    }
    if (price == "Expensive") {
      this.priceMax = 1 
      this.priceMin = 0.6
    }
    
    this.notifyObservers("filterPriceChanged")
    this.filterApi()

  }

  setfilterPriceSaved(price) {
    
    if (price == "All") {
      this.priceMaxSaved = 1 
      this.priceMinSaved = 0
    }
    if (price == "Free") {
      this.priceMaxSaved = 0 
      this.priceMinSaved = 0
    }
    if (price == "Cheap") {
      this.priceMaxSaved = 0.4 
      this.priceMinSaved = 0.1
    }
    if (price == "Expensive") {
      this.priceMaxSaved = 1 
      this.priceMinSaved = 0.6
    }
    
    this.notifyObservers("filterPriceChanged")
    this.filterSavedActivites()

  }



  RemoveActivityFromRecommended(activityToDelete) {
    console.log(activityToDelete.key);
  
  this.recommendedActivities=this.recommendedActivities.filter(removeRecommendedActivityCB);
  return this.recommendedActivities;
  function removeRecommendedActivityCB(activity) {
    return activity.data.key !== activityToDelete.key;
  }
  }

  getRecommendedActivities() {
    return this.recommendedActivities;
  }

  getFilteredSavedActivities() {
    if ( (this.savedfilteredActivites.length ==0) & (this.filterPeopleSaved == "") &(this.filterTypeSaved == "")) {
      return this.savedActivities;
    }
    return this.savedfilteredActivites;
    
  }

 

    //API call with those parameters
    //activity?participants=1&price=0.1&type=education
  filterApi(){
    this.recommendedActivities = [];
    for(let i = 0;i<this.numerOfResults;i++) {
      recomendedActivitiesFilter(this.filterPeople,this.priceMin,this.priceMax,this.filterType).then((data) => {
        if (data == null || data == undefined) {
          return ""//console.log("api result is null or undefined")
        } 
        if (this.recommendedActivities.filter(activity => activity.key == data.key).length > 0) {
          return ""//console.log("not adding duplicate activity", data, "to recommendedActivities", this.recommendedActivities)
        }
        this.recommendedActivities.push({data})
        this.notifyObservers("recommendedActivitiesChanged")
      }).catch((error) => {
        console.log(error)
      });

       
      this.promiseState = [];
   }
  }


   filterSavedActivites(){
    this.savedfilteredActivites = [];
    
    for(let i = 0;i<this.savedActivities.length;i++) {
      let object = this.savedActivities[i]
      let objectPeopel = object.participants
      let objectPrice = object.price
      let objectType = object.type
      if (this.filterPeopleSaved == "") {
        console.log("alternativ 1")
        if ((this.filterTypeSaved != "") & (objectType == this.filterTypeSaved) & (objectPrice<= this.priceMaxSaved) & (objectPrice>= this.priceMinSaved)) {
          this.savedfilteredActivites.push(object)
        } 
        
      }
      if (this.filterTypeSaved == "") {
        console.log("alternativ 2")
        if ((this.filterPeopleSaved != "") & (objectPeopel == this.filterPeopleSaved) & (objectPrice<= this.priceMaxSaved) & (objectPrice>= this.priceMinSaved)) {
          console.log("alternativ 22")
          this.savedfilteredActivites.push(object)
        } 
      }
      if ((this.filterTypeSaved != "") & (this.filterPeopleSaved != "" )) {
        console.log("alternativ 3")
        if ((objectType == this.filterTypeSaved) & (objectPeopel == this.filterPeopleSaved) & (objectPrice<= this.priceMaxSaved) & (objectPrice>= this.priceMinSaved)) {
          this.savedfilteredActivites.push(object)
        } 
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
