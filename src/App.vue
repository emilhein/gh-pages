<template>
  <div id="app">

    <!-- <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button
          class="md-icon-button"
          @click="showNavigation = true"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true">Favorites</md-button>
        </div>
      </md-toolbar>

      <md-drawer
        :md-active.sync="showNavigation"
        md-swipeable
      >
        <md-toolbar
          class="md-transparent"
          md-elevation="0"
        >
          <span class="md-title">My App name</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-drawer> -->

    <!-- <md-content> -->
    <!-- <div id="nav"> -->

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- </div> -->

    <router-view />
    <!-- </md-content> -->
    <!-- </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavigation: false,
      showSidepanel: false
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
