import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiToken: window.localStorage.getItem("apollo-token") || false,
        user: window.localStorage.getItem("firebaseui::rememberedAccounts") || window.localStorage.getItem("user") || null
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.apiToken = payload;
        },
        SET_USER(state, payload) {
            state.user = payload;
        },
        SIGN_OUT(state) {
            state.user = null;
        }
    },
    getters: {
        getToken(state) {
            return state.apiToken;
        },
        getUser(state) {
            return JSON.parse(state.user);
        },
        isAuthenticated(state) {
            if (state.user === null) return false;
            let weHaveUser = JSON.parse(state.user).uid ? true : false;
            return weHaveUser;
        }
    },
    actions: {
        setToken(context, token) {
            window.localStorage.setItem("apollo-token", token);
            context.commit("SET_TOKEN", token);
        },
        setUser(context, user) {
            window.localStorage.setItem("user", user);
            context.commit("SET_USER", user);
        },
        signOut(context) {
            // window.localStorage.removeItem("user");
            context.commit("SIGN_OUT");
        }
    }
});
