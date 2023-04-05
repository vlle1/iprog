import { ref, watch } from "vue";
export default function SearchActivityView(props) {
    var isSaved = false;



    return (
        <div>
            <div>
                <button onClick={GoToSavedActivitiesACG}>Saved Activities</button>
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
                <div  class = "activityCard">
                    <div onClick={MoreInformationACB}>{activityResult.data.activity}</div>
                    <button class="saveButton"onClick={SaveActivityACB}>{isSaved.value ? "Saved" : "Save"}</button>
                </div>
            </span>
        }
        
        function SaveActivityACB() {
            isSaved = true;
            props.saveActivity(activityResult.data)

        }
        function MoreInformationACB() {

            props.getActivity(activityResult.data)
            window.location.hash = "#/details"
        }

    }
   

}