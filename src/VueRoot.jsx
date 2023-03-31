// Add relevant imports
import { KeepAlive, onMounted, reactive } from "vue";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";
import { defineComponent } from 'vue'


const VueRoot = {
  setup() {
    //const load = reactive({});
    console.log("setup")
    return function renderACB() {
      return (
        <h1>hello world</h1>
      );
    };
  },
};
export { VueRoot };
