import RecommendedActivityView from "../views/content/recommendedActivityView";
import { onMounted, onUnmounted } from "vue";
import { getAuth } from "firebase/auth";

export default {
    name: "Recommended",
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
            //console.log("recommendedActivity Presenter component clean-up");
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

        function RemoveActivityFromRecommendedACB(activity){
            props.model.RemoveActivityFromRecommended(activity)
        }


        return function renderACB(props) {
            return (



                <RecommendedActivityView
                    saveActivity={saveANewActivityACB}
                    removeActivity={RemoveActivityFromRecommendedACB}
                    getActivity={receiveMoreInformationACB}
                    activityResults={props.model.recommendedActivities}
                    loggedIn={getAuth().currentUser !== null}

                />
            )

        }
    }
}