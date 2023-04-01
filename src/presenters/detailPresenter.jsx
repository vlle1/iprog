import DetailView from "../views/detailView";
import promiseNoData from "../lib/promiseNoData";
import {recomendedActivities} from "../lib/callAPI";
import resolvePromise from "../lib/resolvePromise";
import {reactive, watchEffect} from "vue"
export default {
    name: "Details",
    props: ["model"],
    setup(props) {
       
       
        function generaterecomendedActivitiesACB(){
            
           

           recomendedActivities()

           
        }

        return function renderACB(props) {
            return(

              (<DetailView activity={generaterecomendedActivitiesACB}/>)
            ) 

        }
    }

}