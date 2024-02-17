<script setup>



</script>

<template>
  <el-container>
    <el-menu mode="horizontal" :popper-offset="16" default-active="1" style="width: 600px">

      <el-menu-item index="1">
        <span> <router-link to="/">Articles</router-link></span>
      </el-menu-item>

    </el-menu>






  </el-container>
  <RouterView />
</template>

<style scoped></style>
