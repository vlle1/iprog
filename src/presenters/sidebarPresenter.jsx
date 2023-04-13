import { routeLocationKey } from "vue-router";
import sidebarView from "../views/sidebar/recommendedSidebarView";
import savedSidebarView from "../views/sidebar/savedSidebarView";
import emptySidebarView from "../views/sidebar/emptySidebarView.jsx";
import { reactive } from "vue";


export default {
  name: "Sidebar",
  props: ["model"],
  watch:{
    $route (to, from){
        this.$forceUpdate();
    }
  },
  setup(props) {
    function handleActivitesACB(people, price, numOfResults) {
      props.model.filterApi(people, price, numOfResults);
    }

    function handleSavedActivitesACB(people, price) {
        props.model.filterSavedActivites(people, price);
      }
    function createANewActivityACB(activity) {
      props.model.addSavedActivity(activity)

    }
    
    return function renderACB(props) {
      const path = this.$router.currentRoute._value.path;
      if (path === "/") {
        return (
          <sidebarView
            recommendedActivities={props.model.recommendedActivities}
            filteredActivitesFunc={handleActivitesACB}
            filteredActivitesList={props.model.filteredActivites}
          />
        );
      }
      if (path === "/saved") {
        return (
            <savedSidebarView
              savedActivites={props.model.savedActivities}
              filteredSavedActivitesFunc={handleSavedActivitesACB}
              saveNewActivity={createANewActivityACB}
            />
        );
      }
      return <emptySidebarView/>;
    };
  },
};
