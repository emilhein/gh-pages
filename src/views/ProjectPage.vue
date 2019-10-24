<template>
  <div>

    <div
      v-for="(item, index) in orderedByStars"
      :key="index"
      class="tile is-ancestor"
    >
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">{{item.name}}</p>
              <p class="subtitle">
                {{item.description}}
              </p>
              Stars: {{item.stars}}
            </article>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          name: "Go dolphins",
          description: "A test project made offline on a plane",
          stars: 0
        },
        {
          name: "The Wine project",
          description: "A test project made offline on a plane2",
          stars: 0
        },
        {
          name: "The coffee project",
          description: "A test project made offline on a plane2",
          stars: 1
        },
        {
          name: "The Fruit project",
          description: "A test project made offline on a plane2",
          stars: 0
        },
        {
          name: "The beer project",
          description: "A test project made offline on a plane2",
          stars: 2
        }
      ]
    };
  },

  methods: {},

  name: "projects",

  computed: {
    orderedByStars() {
      return [...this.projects].sort((a, b) => b.stars - a.stars);
    }
  }
};
</script>

<style scoped>
</style>
