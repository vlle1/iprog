import { routeLocationKey } from "vue-router";
import { reactive } from "vue";
import { routes } from "../VueRoot";
export default {
  name: "Topbar",
  props: ["model"],
  watch: {
    $route(to, from) {
      this.$forceUpdate();
    },
  },
  setup(props) {
    return function renderACB(props) {
      const path = this.$router.currentRoute._value.path;
      const topbarPages = routes.filter((route) => route.showInTopBar);
      return (
        <div class="topbar">
          {topbarPages.map((page) => (
            <button disabled={path === page.path} class="nav" onClick={() => (window.location.hash = page.path)}>
              {page.displayName}
            </button>
          ))}
        </div>
      );
    };
  },
};
