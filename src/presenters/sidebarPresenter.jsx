import { routeLocationKey } from "vue-router";
import sidebarView from "../views/sidebar/recommendedSidebarView";
import savedSidebarView from "../views/sidebar/savedSidebarView";
import emptySidebarView from "../views/sidebar/emptySidebarView.jsx";
import { reactive } from "vue";
import { onMounted} from "vue";


export default {
  name: "Sidebar",
  props: ["model"],
  watch:{
    $route (to, from){
        this.$forceUpdate();
    }
  },
  
  setup(props) {
    function handleActivitesACB(people, price, numOfResults,type) {
      props.model.filterApi(people, price, numOfResults,type);
    }

    function handleSavedActivitesACB(people, price) {
        props.model.filterSavedActivites(people, price);
      }
    function createANewActivityACB(activity) {
      props.model.addSavedActivity(activity)

    }
    function handleonPeopleChangeACB(people) {
      props.model.setFilterPeople(people)

    }

    function handleonTypeChangeACB(type) {
      props.model.setfilterType(type)

    }
    function handleGenerateACB() {
      props.model.filterApi()

    }

    function handleonPriceChangeACB(price) {
      props.model.setfilterPrice(price)

    }

    function handleonPeopleChangeFilterACB(people) {
      props.model.setFilterPeopleFilter(people)

    }
    function handleonPriceChangeFilterACB(price) {
      props.model.setfilterPriceSaved(price)

    }

    function handleonTypeChangeFilterACB(type) {
      props.model.setfilterTypeSaved(type)

    }
    function handleResetACB() {
      props.model.reset()

    }
    


    


    
    
    
    return function renderACB(props) {
      const path = this.$router.currentRoute._value.path;
      if (path === "/") {
        return (
          <sidebarView
            recommendedActivities={props.model.recommendedActivities}
            filteredActivitesFunc={handleActivitesACB}
            filteredActivitesList={props.model.savedfilteredActivites}
            activitesTypes={props.model.activitesTypes}
            priceInterval={props.model.prices}
            onPeopleChange={handleonPeopleChangeACB}
            onTypeChange={handleonTypeChangeACB}
            filterPeople={props.model.filterPeople}
            generate={handleGenerateACB}
            onPriceChange={handleonPriceChangeACB}
          />
        );
      }
      if (path === "/saved") {
        return (
            <savedSidebarView
              savedActivites={props.model.savedActivities}
              filteredSavedActivitesFunc={handleSavedActivitesACB}
              saveNewActivity={createANewActivityACB}
              onPeopleChange={handleonPeopleChangeFilterACB}
              activitesTypes={props.model.activitesTypes}
              priceInterval={props.model.prices}
              onPriceChange={handleonPriceChangeFilterACB}
              onTypeChange={handleonTypeChangeFilterACB}
              onReset={handleResetACB}
            />
        );
      }
      return <emptySidebarView/>;
    };
  },
};
