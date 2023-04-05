export default function savedActivitiesView(props) {

    return (
        <div>
            <h1>Saved Activities</h1>
            <button onClick={GoToRecommendedActivitiesACB}>Recommended Activities</button>
            <div>
            {console.log("SAVED ACTIVITIES:" + props.savedActivities)}
                {props.savedActivities.map(displaySavedActivitiesCB)}
            </div>
        </div>
    )
    function displaySavedActivitiesCB(savedActivity) {
        return <span>
                {console.log("Saved activity:"+ savedActivity)}
                <div onClick={MoreInformationACB}>{savedActivity.activity}</div>
                <button onClick={UnsaveActivityACB}>Unsave</button>
        </span>
         function UnsaveActivityACB() {
            props.unsaveActivity(savedActivity)
        }
        function MoreInformationACB() {
    
            props.getInformation(savedActivity)
            window.location.hash = "#/details"
        }
    }
   
    function GoToRecommendedActivitiesACB(){
        window.location.hash = "#/"
    }
}