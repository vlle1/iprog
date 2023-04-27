import { ref } from "vue";

export default {
  name: "RecommendedActivity",
  props: ["saveActivity", "removeActivity", "getActivity", "activityResults", "loggedIn"],
  setup(props) {
    const count = ref(0);

    return function render(props) {
      return (
        <div>
          <div class="cart" id="cart"></div>

          <div>
            <h1>Welcome! </h1>
            <h2> Here are some Recommended Activities</h2>

            {props.activityResults.map(displayActivitiesCB)}
          </div>
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
            // addButtonRef.value.disabled = true;
            // addButtonRef.value.innerText = "Added";
            count.value++;
            const cartButton = document.getElementById("cart");
            cartButton.innerText = count.value.toString() + " new";
          }

          function RemoveActivityACB() {
            props.removeActivity(activityResult.data);
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
                    disabled={!props.loggedIn || !props.saveActivity}
                    class="saveButton"
                    onClick={SaveActivityACB}
                    ref={addButtonRef}
                  >
                    {(!props.loggedIn ? "Log In to Add" : props.saveActivity ? "Add" : "Added" )}
                  </button>
                  <div></div>
                </div>
              </div>
            </div>
          );
        }
      }


      function renderParticipantsACB(participants) {
        let participantsArr = [];

        for (let i = 0; i < participants; i++) {
          participantsArr.push(
            <img key={i} src="/static/user.png" class="participantsPic" />
          );
        }
        return participantsArr;
      }
    };
  },
};
