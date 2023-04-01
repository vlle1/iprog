import SearchActivityView from "../views/searchActivityView";
import { onMounted, onUnmounted } from "vue";
export default {
    name: "Search",
    props:["model"],
    setup(props) {
        function lifeACB() {
            props.model.doSearch();
           
        }
        function ripACB() {
            console.log("component clean-up");
          }
      
          //register the callback that happens once the component comes to life
          onMounted(lifeACB);
          onUnmounted(ripACB);


      
        
        function saveANewActivityACB(activity) {
            {console.log(activity)}
            props.model.addSavedActivity(activity.activity);
        }
        function receiveMoreInformationACB(activity) {
            props.model.currentActivity=activity;
        }
        return function renderACB(props) {
            return(

                
               
                <SearchActivityView 
                    
                    activityResults={props.model.recommendedActivities}
                    saveActivity={saveANewActivityACB}
                    getActivity={receiveMoreInformationACB}

                />
            ) 

        }
    }
}