// Add relevant imports
import {  reactive } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import Model from "./model/ActivitiesModel"
import Details from "./presenters/detailPresenter";
import Search from "./presenters/searchActivityPresenter"
import SavedActivities from "./presenters/savedActivitiesPresenter"
const myModel= reactive(new Model());
const router = createRouter({

  history: createWebHashHistory(),
  routes: [ 
    
    {
      path:"/",
      component: <Search model={myModel}/>
    },
    {
      path:"/saved",
      component: <SavedActivities model={myModel}/>
    },
    {
      path: "/details",
      component: <Details model={myModel}/>
  }
    
  ]
})
const VueRoot = {
  setup() {
    //const load = reactive({});
    console.log("setup")
    return function renderACB() {
      return (
        <div>  
           <RouterView></RouterView>
        </div>
      );
    };
  },
};
export { VueRoot,router };
