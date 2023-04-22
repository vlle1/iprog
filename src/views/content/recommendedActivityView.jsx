import { ref, watch } from "vue";
export default function RecommendedActivityView(props) {

  return (
    <div>
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
      }


      return (
        <div class="RecommendedActivity">
          <div >
            <button
              id="activity"
              disabled={props.savedActivity}
              class="saveButton"
              onClick={SaveActivityACB}
              ref = {addButtonRef}
            >
              Add
            </button>
            <div class="activityCard2" >
            <div><b>{activityResult.data.activity}</b></div> 
            <div>Type: {activityResult.data.type}</div>
            <div>{activityResult.data.accessibility === "" ? "" : activityResult.data.accessibility <= 0.33 ? "Easy" : activityResult.data.accessibility <= 0.66 ? "Medium hard" : "Tricky"} to Perform</div>
            <div>Participants: {activityResult.data.participants}</div>
            <div>Price: {activityResult.data.price == 0 ? "Free" : activityResult.data.price <= 0.5 ? "Cheap" : "Expensive"}</div>
            <div>{activityResult.data.link ? "Link: " + activityResult.data.link : ""}</div>
            </div>
          </div>
        </div>
      );
    }

  }

  
}
