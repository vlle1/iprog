import { ref, watch } from "vue";
export default function SearchActivityView(props) {
    var isSaved = ref(false);
    console.log(isSaved);

    watch(isSaved, (newValue) => {
        const button = document.querySelector(".saveButton");
        if (button) {
          button.textContent = newValue ? "Saved" : "Save";
        }
    });


    return (
        <div>
            <div>
                <button class="savedActivitiesButton" onClick={GoToSavedActivitiesACG}>Saved Activities</button>
            </div>

            <div>
                <h1>Welcome!</h1>
                <h2> Here are some Recommended Activities</h2>
                
                {props.activityResults.map(displayActivitiesCB)}
            </div>
        </div>
        

    )
    function GoToSavedActivitiesACG() {
        window.location.hash = "#/saved"
    }

    function displayActivitiesCB(activityResult) {
        if (activityResult && activityResult.data) {
            return <span>
                <div class="activityCard" onClick={MoreInformationACB}>{activityResult.data.activity}
                    <button id="activity" class="saveButton"onClick={SaveActivityACB}>Save</button>
                </div>
            </span>
        }
        
        function SaveActivityACB() {
            isSaved.value = true;
            props.saveActivity(activityResult.data)

        }
        function MoreInformationACB() {

            props.getActivity(activityResult.data)
            window.location.hash = "#/details"
        }

    }
   

}