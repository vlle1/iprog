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
            <span class="activityCard2" >
              {activityResult.data.activity}
            </span>
          </div>
        </div>
      );
    }

  }

  
}
