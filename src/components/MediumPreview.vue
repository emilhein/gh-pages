<template>
  <!-- <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <h4>
        <slot name="length"></slot>
      </h4>
      <slot></slot>
    </div>
  </div> -->
  <div class="card">
    <div class="card__header">
      <slot name="icon"></slot>

      <!-- <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"> -->
    </div>
    <div class="card__body">
      <!-- <span class="tag tag-blue">Technology</span> -->
      <h4>
        <slot name="heading"></slot>
      </h4>
      <p>
        <slot></slot>
      </p>
    </div>
    <div class="card__footer">
      <div class="user">
        <!-- <img
          src="https://i.pravatar.cc/40?img=1"
          alt="user__image"
          class="user__image"
        > -->
        <div class="user__info">
          <!-- <h5>Reading time</h5> -->
          <small>
            <slot name="length"></slot>
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

.user__info > small {
  color: #666;
}
</style> 
