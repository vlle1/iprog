import firebaseConfig from "../lib/firebaseConfig";
import { getDatabase, ref, get, set, onValue } from "firebase/database"
const PATH = "TEMP/TEST";

import { initializeApp, FirebaseError } from"firebase/app";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


function modelToPersistence(mymodel) {

  return { test: "this is a test" };
}

function persistenceToModel(persistedData = {}, model) {
  if (persistedData == null) {
    persistedData = {};
  }
  if (persistedData.test === undefined) {
    persistedData.test = "defined"
  }
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
  function obsACB() {
    const setValue = modelToPersistence(model);
    //push set value to firebase
    console.log("[firebase] push data:", setValue);
    set(ref(db, PATH), setValue);
  }
  return get(ref(db, PATH))
    .then(dataFromFirebase => {
      console.log("[firebase] get:", dataFromFirebase.val());
      persistenceToModel(dataFromFirebase.val(), model);
      console.log("[model] updated:", model);
    })
    .then(() => {
      model.addObserver(obsACB);
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

// Remember to uncomment the following line:
export {
  modelToPersistence,
  persistenceToModel,
  firebaseModelPromise,
};
