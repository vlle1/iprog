import { routeLocationKey } from "vue-router";
import sidebarView from "../views/sidebarView";
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
            <sidebarView
              recommendedActivities={props.model.recommendedActivities}
              filteredActivitesFunc={handleActivitesACB}
              filteredActivitesList={props.model.filteredActivites}
            />
          </div>
        );
      }
      return "";
    };
  },
};
