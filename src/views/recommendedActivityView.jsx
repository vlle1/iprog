import { ref, watch } from "vue";
export default function SearchActivityView(props) {
    // var isSaved = ref(false);


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
                <div>
                    <div class="activityCard" onClick={MoreInformationACB}>{activityResult.data.activity}</div>
                    <button id="activity" disabled={props.savedActivity} class="saveButton"onClick={SaveActivityACB}>Save</button>
                </div>
            </span>
        }
        
        function SaveActivityACB() {
            // const button = document.querySelector(".saveButton");
            // button.textContent = "Saved";
            // isSaved.value = true;
            props.saveActivity(activityResult.data)

        }
        function MoreInformationACB() {

            props.getActivity(activityResult.data)
            window.location.hash = "#/details"
        }

    }
   

}