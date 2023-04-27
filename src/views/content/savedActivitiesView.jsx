export default function savedActivitiesView(props) {

    return (
        <div>
            <h1>Saved Activities</h1>
            <div>
                {props.filteredSavedActivities.map(displaySavedActivitiesCB)}
            </div>
        </div>
    )
    function displaySavedActivitiesCB(savedActivity) {
        return (
        <div>
            <div class="activityCard">
                    <button class="removeBtn" onClick={UnsaveActivityACB}>Unsave</button>
                    <h3 onClick={MoreInformationACB}>{savedActivity.activity}</h3>
                    
            </div>
        </div>
        )
         function UnsaveActivityACB() {
            props.unsaveActivity(savedActivity)
        }
        function MoreInformationACB() {
    
            props.getInformation(savedActivity)
            window.location.hash = "#/details"
        }
    }
}
