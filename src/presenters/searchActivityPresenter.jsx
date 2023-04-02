import SearchActivityView from "../views/searchActivityView";
import { onMounted, onUnmounted } from "vue";
export default {
    name: "Search",
    props: ["model"],
    setup(props) {
        // callback that happens once the component comes to life
        function lifeACB() {
            if(props.model.recommendedActivities.length===0) {
                props.model.doSearch();
            }
            


        }
        // callback that happens when the component is destroyed
        function ripACB() {
            console.log("component clean-up");
        }

        //register the callback that happens once the component comes to life
        onMounted(lifeACB);
        onUnmounted(ripACB);




        // callback to save a new activity
        function saveANewActivityACB(activity) {
   
            props.model.addSavedActivity(activity);
        }
        // callback to receive more information about an activity
        function receiveMoreInformationACB(activity) {
           
            props.model.currentActivity = activity;
           
        }
        return function renderACB(props) {
            return (



                <SearchActivityView
                    saveActivity={saveANewActivityACB}
                    getActivity={receiveMoreInformationACB}
                    activityResults={props.model.recommendedActivities}


                />
            )

        }
    }
}