// Add relevant imports
import { reactive } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import Model from "./model/ActivitiesModel";
import Details from "./presenters/detailPresenter";
import Recommended from "./presenters/recommendedActivityPresenter";
import SavedActivities from "./presenters/savedActivitiesPresenter";
import Sidebar from "./presenters/sidebarPresenter";
import Topbar from "./views/topbarView";
const myModel = reactive(new Model());
//the routes are also used in the topbarView!
const routes = [
  {
    path: "/",
    component: <Recommended model={myModel} />,
    showInTopBar: true,
    displayName: "Recommended Activities",
  },
  {
    path: "/saved",
    component: <SavedActivities model={myModel} />,
    showInTopBar: true,
    displayName: "Saved Activities",
  },
  {
    path: "/details",
    component: <Details model={myModel} />,
    showInTopBar: false,
    displayName: "Details",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const VueRoot = {
  setup() {
    //const load = reactive({});
    return function renderACB() {
      return (
        <div class="flexParent">
          <div class="sidebar">
            <Sidebar model={myModel} />
          </div>

          <Topbar></Topbar>
          <div class="mainContent">
            <RouterView></RouterView>
          </div>
        </div>
      );
    };
  },
};
export { VueRoot, router, routes };
