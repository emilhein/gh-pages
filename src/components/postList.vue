<script setup>
import { usePostsStore } from './../stores/posts'
import { useTabStore } from './../stores/tab'
import MediumPreview from './blogDesigns/MediumPreview.vue'
import MediumPreview2 from './blogDesigns/MediumPreview2.vue'

const componentMap = { MediumPreview, MediumPreview2 }
const tabStore = useTabStore()
const postStore = usePostsStore()
</script>

<template>
  <div class="container">
    <KeepAlive>

    <component :is="componentMap[tabStore.tab]" :post="post" v-for="(post) in postStore.posts" :key="post.title">
    </component>
  </KeepAlive>

  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}
</style>
