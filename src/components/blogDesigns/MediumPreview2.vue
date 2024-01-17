<script setup>
const props = defineProps(['post'])
const openPostWindow = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
    <div class="card" @click="openPostWindow(post.mediumUrl)">
    <div class="card-header">
      <img :src="`https://miro.medium.com/v2/resize:fill:500:200/${post.previewImage.id}`" alt="Post Image" class="post-image" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal"> {{ Math.ceil(post.readingTime) }} minutes</span>
      <h4>
        {{ post.title }}

      </h4>
      <p>
        {{ post.extendedPreviewContent.subtitle }}
      </p>

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
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
}
.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px var(--box-shadow-color);
  cursor: pointer;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}

</style> 
