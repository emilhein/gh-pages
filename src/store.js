import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiToken: window.localStorage.getItem("apollo-token") || false,
        firebaseToken: window.localStorage.getItem("firebase-token") || null,
        user: window.localStorage.getItem("firebaseui::rememberedAccounts") || window.localStorage.getItem("user") || null
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.apiToken = payload;
        },
        SET_FIREBASE_TOKEN(state, payload) {
            state.firebaseToken = payload;
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
        getFirebaseToken(state) {
            return state.firebaseToken;
        },
        getUser(state) {
            return state.user;
        },
        isAuthenticated(state) {
            if (state.user === null) return false;
            return state.user.email ? true : false;
        }
    },
    actions: {
        setToken(context, token) {
            window.localStorage.setItem("apollo-token", token);
            context.commit("SET_TOKEN", token);
        },
        setFirebaseToken(context, token) {
            window.localStorage.setItem("firebase-token", token);
            context.commit("SET_FIREBASE_TOKEN", token);
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
