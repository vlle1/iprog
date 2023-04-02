import { ref } from "vue";
export default function SearchActivityView(props) {
    const isSaved = ref(false);

    return (
        <div>
            <h1>Recommended Activities</h1>
            <button onClick={GoToSavedActivitiesACG}>Saved Activities</button>
            {props.activityResults.map(displayActivitiesCB)}
        </div>
        

    )
    function GoToSavedActivitiesACG() {
        window.location.hash = "#/saved"
    }

    function displayActivitiesCB(activityResult) {
        if (activityResult && activityResult.data) {
            return <span>

                <div onClick={MoreInformationACB}>{activityResult.data.activity}</div>
                <button onClick={SaveActivityACB}>{isSaved.value ? "Saved" : "Save"}</button>
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