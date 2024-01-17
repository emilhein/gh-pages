<script setup>
import { useTabStore } from './stores/tab'

const tabStore = useTabStore()



</script>

<template>
  <header>
    <el-tabs v-model="tabStore.tab"  tab-position="top"  class="demo-tabs" >
      <el-tab-pane label="Design 1" name="MediumPreview" />
      <el-tab-pane label="Design 2" name="MediumPreview2" />
    </el-tabs>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav> -->
      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <!-- </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
