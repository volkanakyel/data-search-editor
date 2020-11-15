import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);
import VueBlobJsonCsv from "vue-blob-json-csv";
Vue.use(VueBlobJsonCsv);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
