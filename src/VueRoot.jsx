// Add relevant imports
import { KeepAlive, onMounted, reactive } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import { defineComponent } from 'vue'
import Model from "./model/ActivitiesModel"
import Details from "./presenters/detailPresenter";
import Search from "./presenters/searchActivityPresenter"
const myModel= reactive(new Model());
const VueRoot = {
  setup() {
    //const load = reactive({});
    console.log("setup")
    return function renderACB() {
      return (
        <div><Search model={myModel}/></div>
      );
    };
  },
};
export { VueRoot };
