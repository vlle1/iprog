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
            return(
                <savedActivitiesView
                savedActivities={props.model.getSavedActivities()}
                unsaveActivity={deleteActivitySavedACB}
                getInformation={receiveMoreInformationACB}
                />


            )
           
        }
    }
}