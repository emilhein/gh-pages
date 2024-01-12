<script setup>
import { usePostsStore } from './../stores/posts'

import MediumPreview from './MediumPreview.vue'
const openPostWindow = (url) => {
  window.open(url, '_blank')
}
const postStore = usePostsStore()
</script>

<template>
  <div class="container">

    <MediumPreview
      @click="openPostWindow(post.mediumUrl)"
      v-for="post in postStore.posts"
      :key="post.title"
    >
      <template #icon>
        <img
          :src="`https://miro.medium.com/v2/resize:fill:500:200/${post.previewImage.id}`"
          alt="Post Image"
          class="post-image"
        />

      </template>
      <template #heading>{{ post.title }} </template>
      <template #length> {{ parseInt(post.readingTime) }} minutes</template>
      {{ post.extendedPreviewContent.subtitle }}
    </MediumPreview>
  </div>

</template>

<style scoped>


body {
  width: 100%;
  height: 100vh;
  font-family: 'Roboto';
  background: #fff;
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
