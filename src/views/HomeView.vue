<script setup>
import { useTabStore } from './../stores/tab'

const tabStore = useTabStore()

import PostList from '../components/postList.vue'
</script>

<template>
  <main>
    <el-header>
      <el-tabs v-model="tabStore.tab" tab-position="top" class="demo-tabs">
        <el-tab-pane label="Design 1" name="MediumPreview" />
        <el-tab-pane label="Design 2" name="MediumPreview2" />
        <!-- <el-tab-pane label="Design 3" name="MediumPreview3" /> -->
      </el-tabs>


    </el-header>
    <PostList />
  </main>
</template>
<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

</style>
