<template>
  <section v-if="token">
    <b-field label="Title">
      <b-input v-model="model.title"></b-input>
    </b-field>

    <b-field label="Year">
      <b-input
        type="Number"
        v-model="model.year"
        min="0"
        :max=" parseInt(new Date().getFullYear())"
      >
      </b-input>
    </b-field>

    <b-field
      label="Rating"
      type="is-success"
    >
      <b-input
        v-model="model.rating"
        maxlength="30"
      ></b-input>
    </b-field>
    <b-button @click="emitEvent">Add movie</b-button>
  </section>
  <section v-else>
    <p> You need an Apollo token</p>
  </section>
</template>

<script>
export default {
  name: "insertMovie",
  methods: {
    emitEvent() {
      this.model.year = parseInt(this.model.year);
      this.$emit("addMovie", this.model);
    }
  },
  data() {
    return {
      model: {
        title: "",
        year: parseInt(new Date().getFullYear()),
        rating: "0.0"
      }
    };
  },
  computed: {
    token() {
      return this.$store.getters.getToken;
    }
  }
};
</script>

<style scoped>
</style>
