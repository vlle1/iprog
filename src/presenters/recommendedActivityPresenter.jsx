import RecommendedActivityView from "../views/content/recommendedActivityView";
import { reactive, onMounted, watchEffect } from "vue";
import { getAuth } from "firebase/auth";

export default {
  name: "Recommended",
  props: ["model"],
  setup(props) {
    const state = reactive({
      recommendedActivities: props.model.recommendedActivities,
    });

    //register the callback that happens once the component comes to life
    onMounted(() => {
      if (state.recommendedActivities.length === 0) {
        props.model.doSearch();
      }
      props.model.addObserver(() => {
        state.recommendedActivities = props.model.recommendedActivities;
      });
    });
    // callback to save a new activity
    function saveANewActivityACB(activity) {
      props.model.addSavedActivity(activity);
    }
    // callback to receive more information about an activity
    function receiveMoreInformationACB(activity) {
      props.model.currentActivity = activity;
    }

    function RemoveActivityFromRecommendedACB(activityToDelete) {
      props.model.RemoveActivityFromRecommended(activityToDelete);
    }

    function deleteActivitySavedACB(activityToDelete){
      props.model.deleteSavedActivity(activityToDelete)
    }

    return function renderACB(props) {
      //shallow copy of array.
      var recommendedActivities = state.recommendedActivities.slice();
      if (props.model.status !== 0) {
        return (
          <img src="https://cdn-images-1.medium.com/max/800/0*4Gzjgh9Y7Gu8KEtZ.gif"></img>
        );
      }

      return (
        <RecommendedActivityView
          saveActivity={saveANewActivityACB}
          removeActivity={RemoveActivityFromRecommendedACB}
          getActivity={receiveMoreInformationACB}
          activityResults={state.recommendedActivities}
          loggedIn={getAuth().currentUser !== null}
          savedActivities={
            getAuth().currentUser !== null ? props.model.savedActivities : null
          }
          unsaveActivity={deleteActivitySavedACB}
        />

      );
    };
  },
};
