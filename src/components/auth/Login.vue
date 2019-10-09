<template>
  <div>
    <div v-if="authenticated">
      <p class="subtitle">Hi {{user.displayName}}</p>
      <b-button
        type="is-dark"
        @click="signout"
      >Sign out</b-button>
    </div>
    <div v-else>
      <b-button
        type="is-dark"
        @click="googleLogin"
      >Google</b-button>
    </div>

  </div>

</template>

<script>
import firebase from "firebase";

import { config } from "../../config/firebaseConfig";
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Initialize Firebase
firebase.initializeApp(config);

export default {
  name: "auth",
  created() {
    // firebase.auth().onAuthStateChanged(user => {
    //   let userVarified = user ? JSON.stringify(user) : null;
    //   this.$store.dispatch("setUser", userVarified);
    // });
  },
  mounted() {
    this.showSignin();
  },
  methods: {
    alert(err) {
      this.$buefy.toast.open({
        duration: 5000,
        message: err,
        type: "is-danger"
      });
    },
    async googleLogin() {
      try {
        const result = await firebase.auth().signInWithPopup(googleProvider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.$store.dispatch("setUser", user);
      } catch (error) {
        this.alert(error);
        // ...
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
      }
    },
    async signout() {
      try {
        await firebase.auth().signOut();
        // Sign-out successful.
        this.$store.dispatch("signOut");
      } catch (error) {
        this.alert(error);
      }
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
