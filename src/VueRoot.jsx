// Add relevant imports
import {  reactive } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import Model from "./model/ActivitiesModel"
import Details from "./presenters/detailPresenter";
import Search from "./presenters/recommendedActivityPresenter"
import SavedActivities from "./presenters/savedActivitiesPresenter"
import Sidebar from "./presenters/sidebarPresenter"
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
    return function renderACB() {
      return (
        <div class ="flexParent"> 
            <div class="sidebar"> <Sidebar model={myModel}/></div> 
            <div class="mainContent"> <RouterView></RouterView> </div> 
        </div>
      );
    };
  },
};
export { VueRoot,router };
