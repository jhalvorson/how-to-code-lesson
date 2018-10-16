// You don't need to worry about this file, we're just loading our pages
// and adding a simple router so we can navigate pages
import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/our-team", component: Team },
    { path: "/instructions", component: Instructions }
  ]
});

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
