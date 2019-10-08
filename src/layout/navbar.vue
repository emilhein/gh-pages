<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="#"
          style="font-weight:bold;"
        >
          Emil Hein
        </a>
        <span
          class="navbar-burger burger"
          data-target="navMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div
        id="navMenu"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <a
            href="#"
            class="navbar-item is-active"
          >Home</a>
          <!-- <a
            href="#"
            class="navbar-item"
          >Blog</a>
          <a
            href="#"
            class="navbar-item"
          >Forum</a>
          <a
            href="#"
            class="navbar-item"
          >Shop</a>
          <a
            href="#"
            class="navbar-item"
          >Examples</a> -->
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
export default {
  name: "navbar",

  data() {}
};
</script>
<style scoped>
.navbar {
  margin-bottom: 15px;
}
</style>
