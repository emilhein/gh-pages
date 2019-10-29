import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/MainPage.vue")
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("./views/ProjectPage.vue")
        },
        {
            path: "/websocket",
            name: "websocket",
            component: () => import("./views/WebSocketPage.vue")
        }
    ]
});
