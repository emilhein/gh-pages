<script setup>



</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-menu :router="true" mode="horizontal" :popper-offset="16"  style="width: 600px">
        <el-menu-item route="/">
          <span> <router-link to="/">Articles</router-link></span>
        </el-menu-item>
        <el-menu-item route="/magic-chart">
          <span> <router-link to="/magic-chart">Magic chart 🪄</router-link></span>
        </el-menu-item>
      </el-menu>
    </el-container>
    <RouterView />
  </div>
</template>

<style scoped>
.common-layout {
    height: 100vh;
    width: 80vw;
}
</style>
