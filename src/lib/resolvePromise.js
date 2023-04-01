export default function resolvePromise(promiseToResolve, promiseState) {
    promiseState.promise = promiseToResolve;
    promiseState.data = null;
    promiseState.error = null;
    if (promiseToResolve == null) {
      return "TypeError: promiseToResolve is null";
    }
  
    function saveDataACB(result) {
      if (promiseState.promise !== promiseToResolve) return;
      //save promise state
      promiseState.data = result;
    
    }
  
    function saveErrorACB(err) {
      if (promiseState.promise !== promiseToResolve) return;
      //save promise state
      promiseState.error = err;
    }
    promiseToResolve.then(saveDataACB).catch(saveErrorACB);
  }
  