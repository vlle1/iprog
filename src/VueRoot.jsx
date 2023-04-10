// Add relevant imports
import { reactive, onMounted } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import Model from "./model/ActivitiesModel";
import Details from "./presenters/detailPresenter";
import Recommended from "./presenters/recommendedActivityPresenter";
import SavedActivities from "./presenters/savedActivitiesPresenter";
import Sidebar from "./presenters/sidebarPresenter";
import emptySidebarView from "./views/emptySidebarView";
import Topbar from "./views/topbarView";
import { firebaseModelPromise } from "./model/firebaseModel";

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
    const load = reactive({ loaded: false });
    onMounted(() => {
      //it promises to load!
      firebaseModelPromise(myModel).then(() => (load.loaded = true));
    });
    return function renderACB() {
      return (
        <div class="flexParent">
            {
              load.loaded ? (
                <Sidebar
                  model={myModel}
                /> /* the sidebar does routing on its own. */
              ) : (
                <emptySidebarView/>
              ) /* would be an alternative */
            }

          <Topbar routes={routes}></Topbar>
          <div class="mainContent">
            {load.loaded ? (
              <RouterView></RouterView>
            ) : (
              <div>
                <h2 loading>Loading...</h2>
                <img src="https://cdn-images-1.medium.com/max/800/0*4Gzjgh9Y7Gu8KEtZ.gif"></img>
              </div>
            )}
          </div>
        </div>
      );
    };
  },
};
export { VueRoot, router };
