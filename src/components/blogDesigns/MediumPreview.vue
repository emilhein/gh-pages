<script setup>
const props = defineProps(['post'])
const openPostWindow = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="card" @click="openPostWindow(post.mediumUrl)">
    <div class="card__header">
      <img :src="`https://miro.medium.com/v2/resize:fill:500:200/${post.previewImage.id}`" alt="Post Image" class="post-image" />

    </div>
    <div class="card__body">
      <h4>
        {{ post.title }}
      </h4>
      <p>
        {{ post.extendedPreviewContent.subtitle }}
      </p>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="user__info">
          <small>
            {{ Math.ceil(post.readingTime) }} minutes
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px var(--box-shadow-color);
  cursor: pointer;
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: 0.5rem;
}

.user__image {
  border-radius: 50%;
}

.user__info>small {
  color: #666;
}
</style> 
