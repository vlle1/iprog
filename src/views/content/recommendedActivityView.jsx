import { ref } from "vue";
import userPng from '/static/user.png' // user icon

export default {
  name: "RecommendedActivity",
  props: ["saveActivity", "removeActivity", "getActivity", "activityResults", "loggedIn","savedActivities","unsaveActivity"],
  setup(props) {
    const count = ref(0);

    return function render(props) {
      //no data error
      if (props.activityResults.length === 1 && props.activityResults[0].hasOwnProperty("data") && props.activityResults[0].data.hasOwnProperty("error")) {
        return ( <div><h1> No Data </h1><pre>try to adjust the filter criteria.</pre></div>) 
      }

      return (
        <div>
          <div class="cart" id="cart"></div>

          <div>
            <h1>Welcome! </h1>
            <h2> Here are some Recommended Activities</h2>

            {props.activityResults.map(displayActivitiesCB)}
          </div>
          {
            // check if actually 5 things rendered or less
            props.activityResults.length < 5 ? <div>Note: According to your filter criteria it was not possible to find as many unique activities in the database as requested.  </div> :""
          }
        </div>
      );

      

      function displayActivitiesCB(activityResult) {
        if (activityResult && activityResult.data) {
          const addButtonRef = ref(null);
          

          function SaveActivityACB() {
            props.saveActivity(activityResult.data);
            addToSavedCB();
          }

          function addToSavedCB() {
            count.value++;
            const cartButton = document.getElementById("cart");
            cartButton.innerText = count.value.toString() + " new";
            
          }

          function removeFromSavedCB() {
            if (count.value > 0){
              count.value--;
              const cartButton = document.getElementById("cart");
              cartButton.innerText = count.value.toString() + " new";
            }
          }

          function RemoveActivityACB() {
            props.removeActivity(activityResult.data);
          }

          function UnsaveActivityACB(){
            props.unsaveActivity(activityResult.data);
            removeFromSavedCB();
          }

          return (
            <div>
              <div>
                <div class="activityCard2">
                  <button
                    class="removeBtn"
                    disabled={!props.loggedIn}
                    onClick={RemoveActivityACB}
                  >
                    x
                  </button>
                  <h3>
                    {activityResult.data.activity} ({activityResult.data.type})
                  </h3>
                  <div>
                    Participants:{" "}
                    {renderParticipantsACB(activityResult.data.participants)}
                  </div>
                  <div>
                    {" "}
                    {activityResult.data.price == 0
                      ? "Free"
                      : activityResult.data.price <= 0.5
                      ? "Cheap"
                      : "Expensive"}
                  </div>
                  <button
                    id="activity"
                    disabled={!props.loggedIn}
                    class="saveButton"
                    onClick={addButtonChangeACB(activityResult) ? UnsaveActivityACB : SaveActivityACB}
                    ref={addButtonRef}
                  >
                    {/* {(!props.loggedIn ? "Log In to Add" : (!isActivitySavedACB(activityResult.data) ? "Add" : "Added" ))} */}
                    {(!props.loggedIn ? "Log In to Add" : addButtonChangeACB(activityResult) ? "Remove": "Add")}
                    
                  </button>
                  <button id="UnsaveBtn" onClick={UnsaveActivityACB}>Remove</button>
                  <div></div>
                </div>
              </div>
            </div>
          );
        }
      }


      function addButtonChangeACB(activityResult){
        
        if (props.savedActivities == null || props.savedActivities == undefined ){
          return;
        }

        if (props.savedActivities.some(act => act.key === activityResult.data.key)){
          return true;
        }

        return false;
      }

      function renderParticipantsACB(participants) {
        let participantsArr = [];

        for (let i = 0; i < participants; i++) {
          participantsArr.push(<img key={i} src={userPng} class="participantsPic" />);

        }
        return participantsArr;
      }
    };
  },
};
