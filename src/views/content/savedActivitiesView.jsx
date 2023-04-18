export default function savedActivitiesView(props) {

    return (
        <div>
            <h1>Saved Activities</h1>
            <div>
                {props.savedActivities.map(displaySavedActivitiesCB)}
            </div>
        </div>
    )
    function displaySavedActivitiesCB(savedActivity) {
        return <div class = "RecommendedActivity">
                <button class="saveButton" onClick={UnsaveActivityACB}>Unsave</button>
                <span class="activityCard" onClick={MoreInformationACB}>{savedActivity.activity}</span>
                
        </div>
         function UnsaveActivityACB() {
            props.unsaveActivity(savedActivity)
        }
        function MoreInformationACB() {
    
            props.getInformation(savedActivity)
            window.location.hash = "#/details"
        }
    }
}
