import { getAuth } from "firebase/auth";
import savedActivitiesView from "../views/content/savedActivitiesView";

export default {
    name: "SavedActivities",
    props: ["model"],
    setup(props) {
        function deleteActivitySavedACB(activityToDelete) {
            props.model.deleteSavedActivity(activityToDelete)
        }
        function receiveMoreInformationACB(activity) {
           
            props.model.currentActivity = activity;
           
        }
        return function renderACB(props) {
            if (getAuth().currentUser == null) {
                return <div><br></br><h1>Error: You must be logged in to view this page. <br></br>In case you are a TA, have a nice day and have fun testing our site :D</h1></div>
            }
            return(
                <savedActivitiesView
                filteredSavedActivities={props.model.getFilteredSavedActivities()}
                unsaveActivity={deleteActivitySavedACB}
                getInformation={receiveMoreInformationACB}
                />


            )
           
        }
    }
}