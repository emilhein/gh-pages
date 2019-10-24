import Vue from "vue";
import Router from "vue-router";
import MainPage from "./views/MainPage.vue";
import ProjectPage from "./views/ProjectPage.vue";

Vue.use(Router);

export default new Router({
    mode: "history",

    routes: [
        {
            path: "/",
            name: "home",
            component: MainPage
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectPage
        }
    ]
});
