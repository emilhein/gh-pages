import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { apolloProvider } from "../graphql/apollo";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
// import firebase from "firebase";
// import firebase from "firebase";

// const firebaseui = require("firebaseui");
// import { config } from "./config/firebaseConfig";

import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";
Vue.use(Buefy);
Vue.config.productionTip = false;
Sentry.init({
    dsn: "https://df96bc14e84a4b42ae9fee0ab37d1f2c@sentry.io/1773699",
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
});
new Vue({
    router,
    apolloProvider,
    store,

    render: h => h(App)
}).$mount("#app");
