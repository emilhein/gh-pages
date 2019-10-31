<template>
  <!-- <nav class="navbar is-info">
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
    
        </div>

      </div>
    </div>
  </nav> -->
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="https://github.com/emilhein"
      >
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        >
      </a>
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="navbarExampleTransparentExample"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <a
          class="navbar-item"
          href="/"
        >
          Home
        </a>
        <!-- <a
          class="navbar-item"
          @click="changeLink('projects')"
        >
          Projects
        </a> -->
        <a
          class="navbar-item"
          @click="changeLink('websocket')"
        >
          Websocket
        </a>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a
            class="navbar-link"
            href="https://bulma.io/documentation/overview/start/"
          >
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/overview/start/"
            >
              Overview
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/modifiers/syntax/"
            >
              Modifiers
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/columns/basics/"
            >
              Columns
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/layout/container/"
            >
              Layout
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/form/general/"
            >
              Form
            </a>
            <hr class="navbar-divider">
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/elements/box/"
            >
              Elements
            </a>
            <a
              class="navbar-item is-active"
              href="https://bulma.io/documentation/components/breadcrumb/"
            >
              Components
            </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button"
                target="_blank"
                href="https://github.com/emilhein"
              >
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>
                  Github
                </span>
              </a>
            </p>

          </div>
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
  methods: {
    changeLink(link) {
      this.$router.push({ path: link });
    }
  },
  data() {}
};
</script>
<style scoped>
.navbar {
  margin-bottom: 15px;
}
</style>
