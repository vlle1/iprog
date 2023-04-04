import sidebarView from "../views/sidebarView";

export default {
    name: "Sidebar",
    props: ["model"],
    setup(props) {
        
        
        function handleActivitesACB(people, price, numOfResults){
            props.model.filterApi(people,price, numOfResults);
          };
        


        return function renderACB(props) {
            return(
                <sidebarView  
                recommendedActivities={props.model.recommendedActivities}
                filteredActivitesFunc={handleActivitesACB}
                filteredActivitesList={props.model.filteredActivites}
                />


            )
           
        }
    }
}