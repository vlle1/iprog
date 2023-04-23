import { ref, watch } from "vue";
export default function RecommendedActivityView(props) {

  const count = ref(0);

  return (
    <div>
      <div class="cart" id="cart"></div>

      <div>
        <h1>Welcome!</h1>
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
      addButtonRef.value.disabled = true;
      addButtonRef.value.innerText = "Added";
      count.value++;
      const cartButton = document.getElementById("cart");
      cartButton.innerText = count.value.toString() + " new";
    }

    function RemoveActivityACB() {
      props.removeActivity(activityResult.data); 
    }
      return (
        <div class="RecommendedActivity">
          <div >
            <div class="activityCard2" >
              <button class="removeBtn" onClick={RemoveActivityACB} >x</button>
              <h3>{activityResult.data.activity} ({activityResult.data.type})</h3>
              <div>Participants: {activityResult.data.participants}</div>
              <div> {activityResult.data.price == 0 ? "Free" : activityResult.data.price <= 0.5 ? "Cheap" : "Expensive"}</div>
              <button
                id="activity"
                disabled={(!props.loggedIn) || props.savedActivity }
                class="saveButton"
                onClick={SaveActivityACB}
                ref = {addButtonRef}
              >
                {props.loggedIn ? "Add" : "Log In to Add" }
              </button>
              <div></div>
            </div>
          </div>
        </div>
      );
      
    }

  }

  
}
