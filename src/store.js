import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiToken: window.localStorage.getItem("apollo-token") || false
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.apiToken = payload;
        }
    },
    getters: {
        getToken(state) {
            return state.apiToken;
        }
    },
    actions: {
        setToken(context, token) {
            window.localStorage.setItem("apollo-token", token);
            context.commit("SET_TOKEN", token);
        }
    }
});
