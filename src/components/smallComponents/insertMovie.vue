<template>
  <section>
    <b-field label="Title">
      <b-input v-model="model.title"></b-input>
    </b-field>

    <b-field label="Year">
      <b-input
        type="number"
        v-model="model.year"
        maxlength="4"
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
</template>

<script>
export default {
  name: "insertMovie",
  methods: {
    emitEvent() {
      this.$emit("addMovie", this.model);
    }
  },
  data() {
    return {
      model: {
        title: "",
        year: new Date().getFullYear(),
        rating: "0.0"
      }
    };
  }
};
</script>

<style scoped>
</style>
