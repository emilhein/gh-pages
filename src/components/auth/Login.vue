<template>
  <div>
    <div id="loader">Loading...</div>
    <div
      v-if="!authenticated"
      id="firebaseui-auth-container"
    ></div>

    <div v-else>
      <p class="subtitle">Hi {{user.displayName}}</p>

      <b-button
        type="is-dark"
        @click="signout"
      >Sign out</b-button>
    </div>
  </div>

</template>

<script>
import firebase from "firebase";

const firebaseui = require("firebaseui");
import { config } from "../../config/firebaseConfig";
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult) {
      if (authResult.user) {
        this.$store.dispatch("setUser", authResult.user);
      }
      // if (authResult.additionalUserInfo) {
      //   document.getElementById("is-new-user").textContent = authResult
      //     .additionalUserInfo.isNewUser
      //     ? "New User"
      //     : "Existing User";
      // }
      // Do not redirect.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  signInFlow: "popup",

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
// Initialize Firebase
firebase.initializeApp(config);
export default {
  name: "auth",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      let userVarified = user ? JSON.stringify(user) : null;
      this.$store.dispatch("setUser", userVarified);
    });
  },
  mounted() {
    this.showSignin();
  },
  methods: {
    showSignin() {
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      //   if (!this.authenticated) {
      ui.start("#firebaseui-auth-container", uiConfig);
      firebase.auth().onAuthStateChanged(function(user) {
        if (user && !user.emailVerified) {
          this.$store.dispatch("setUser", user);
        }
      });

      //   }
    },
    async signout() {
      //   await firebase.auth().signOut();
      //   this.$store.dispatch("signOut");
      //   let ui = new firebaseui.auth.AuthUI(firebase.auth());
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      console.log(`logout clicked`);
      const res = await firebase.auth().signOut();
      console.log(res);
      console.log(ui);
      // .then(res => {
      //   console.log("signOut ok", res);
      ui.start("#firebaseui-auth-container", uiConfig);
      //   return res || "okay";
      // })
      // .catch(err => {
      //   console.warn("signOut error", err);
      //   return err || "error";
      // })
      // .finally(res => {
      //   console.log("signOut resolved", res);
      //   // stateChange handles all of my instances onAuthStateChanged and application state
      //   // returns nothing (no response)
      // });
    }
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
<style>
</style>
