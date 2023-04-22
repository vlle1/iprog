import firebaseConfig from "../lib/firebaseConfig";
import { getDatabase, ref, get, set, onValue } from "firebase/database"
const PATH ="saved";

import { initializeApp, FirebaseError } from"firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


//store: {savedAct: []}
function modelToPersistence(mymodel) {
    //var recommendedAct= mymodel.recommendedActivities;
    var savedAct=mymodel.savedActivities;
    return {savedAct}
  }

function persistenceToModel(persistedData = {}, model) {
  if (persistedData == null) {
    persistedData = {};
  }
 
  /*if (persistedData.recommendedAct !== undefined) {
    console.log("recommended2 " + persistedData.recommendedAct)
    model.recommendedActivities = persistedData.recommendedAct
  } else {
    console.log("recommended1 " + persistedData.recommendedAct)
    model.recommendedActivities=[]
  }*/
  console.log(persistedData)
  if (persistedData.savedAct !== undefined) {
    model.savedActivities = persistedData.savedAct
  } else {model.savedActivities=[]}
  model.test = persistedData.test;
  //TODO: initialize values if undefined!!!
  //TODO: set values in model!

  return model;
}
/**
 * 
 * @param updates the model from firebase
 * @return a promise chain. The model is updated when the promise is resolved.
 * SIDE EFFECT: add observer to the model taht will push changes to firebase
 */
async function firebaseModelPromise(model) {
  //add observer to model that will push changes to firebase
  function obsACB() {
    
    const setValue = modelToPersistence(model);
    //push set value to firebase
    const user = getAuth().currentUser;
    if (user == null || user == undefined) {
      console.log("saving to persistance failed: user is null or undefined")
    }
    set(ref(db, PATH + "/" + user.uid), setValue);
  }
  //todo maybe only keep this observer while the user is logged in?
  model.addObserver(obsACB);

  //add observer to firebase (auth state) that will update the model (on login / logout etc.)
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      // get saved activities.
     
      return get(ref(db, PATH+ "/" + user.uid))
      .then(dataFromFirebase => {
       
        persistenceToModel(dataFromFirebase.val(), model);
        
      })
      .catch(function (error) {
          console.log("error", error);
          if (error instanceof FirebaseError) {
              console.log("Firebase error code:", error.code);
              console.log("Firebase error message:", error.message);
          }
      });
      //returned promise resolves when the model has been updated according to firebase.
    }
    else {
      //user signed out => reset model

      persistenceToModel({}, model);
      return;
    }
  });
  
    
      
}

// Remember to uncomment the following line:
export {
  modelToPersistence,
  persistenceToModel,
  firebaseModelPromise,
};
