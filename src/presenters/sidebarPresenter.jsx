import { routeLocationKey } from "vue-router";
import sidebarView from "../views/sidebarView";
import savedSidebarView from "../views/savedSidebarView";
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
        console.log("saved");
        return (
          <div>
            <h3>TODO different SIDEBARVIEW (savedSidebarView)</h3>
            <savedSidebarView
              savedActivites={props.model.savedActivities}
              filteredSavedActivitesFunc={handleSavedActivitesACB}
            />
          </div>
        );
      }
      return "";
    };
  },
};