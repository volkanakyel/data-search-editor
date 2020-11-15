import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import JwPagination from "jw-vue-pagination";
import VueBlobJsonCsv from "vue-blob-json-csv";

Vue.component("jw-pagination", JwPagination);
Vue.use(VueBlobJsonCsv);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
