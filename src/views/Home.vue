<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <movieTable />
  </div>
</template>

<script>
// @ is an alias to /src
import movieTable from "@/components/movieTable.vue";

export default {
  name: "home",
  components: {
    movieTable
  }
};
</script>
