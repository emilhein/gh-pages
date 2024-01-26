<script setup>
import { usePostsStore } from './../stores/posts'
import { useTabStore } from './../stores/tab'
import Spinner from './spinner.vue'
import { computed } from 'vue'

import MediumPreview from './blogDesigns/MediumPreview.vue'
import MediumPreview2 from './blogDesigns/MediumPreview2.vue'

const componentMap = { MediumPreview, MediumPreview2 }
const tabStore = useTabStore()
const postStore = usePostsStore()
const loading = computed(() => {
  return postStore.posts.length === 0
})
</script>

<template>
  <div class="container">
    <Spinner v-if="loading"></Spinner>
    <KeepAlive v-else>
      <Transition  name="translate" mode="out-in" v-for="(post) in postStore.posts" :key="post.title">
        <component :is="componentMap[tabStore.tab]" :post="post" />
      </Transition>
    </KeepAlive>
  </div>
</template>

<style scoped>
.translate-enter-active {
  animation: bounce-in 0.5s;
}

.translate-leave-active {
  animation: bounce-in 0.5s reverse;
}


@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
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
