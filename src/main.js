import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueAnimateOnScroll from 'vue-animate-onscroll'

import "buefy/dist/buefy.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Buefy);
Vue.use(VueAnimateOnScroll)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
