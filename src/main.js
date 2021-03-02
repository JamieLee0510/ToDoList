import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fullCalendar from "vue-fullcalendar";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.component("full-calendar", fullCalendar);

Vue.use(ElementUI);

// Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
