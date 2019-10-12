<template>
  <div>

    <div class="buttons">

      <b-button
        type="is-dark"
        @click="deleteMovie"
        :disabled="checkedRows.length !== 1"
      >Delete movie</b-button>

    </div>
    <h3 v-if="loading">Loading...</h3>

    <div
      v-if="!loading"
      class="content"
    >
      <b-table
        :data="computedMovies"
        checkable
        :focusable="true"
        :checked-rows.sync="checkedRows"
        :columns="columns"
      >
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon
                  icon="emoticon-sad"
                  size="is-large"
                >
                </b-icon>
              </p>
              <p>Login to see the movies!</p>
            </div>
          </section>
        </template></b-table>
    </div>
  </div>
</template>

<script>
import { GET_ALL_MOVIES } from "../../graphql/queries/movieQueries";
import { DELETE_MOVIE } from "../../graphql/queries/movieMutation";
export default {
  name: "movieTable",
  methods: {
    error(err) {
      this.$buefy.toast.open({
        message: err.message,
        type: "is-danger"
      });
    },
    success(string) {
      this.$buefy.toast.open(string);
    },
    async deleteMovie() {
      try {
        // await this.login();
        const { title } = this.checkedRows[0];
        await this.$apollo.mutate({
          mutation: DELETE_MOVIE,
          variables: {
            title
          },
          refetchQueries: [{ query: GET_ALL_MOVIES }]
        });

        this.success("The movie was deleted");
      } catch (error) {
        this.error(error);
      }
    }
  },
  async mounted() {
    this.loading = true;
    this.movies = (await this.$apollo.query({
      query: GET_ALL_MOVIES
    })).data.movies;
    this.loading = false;
  },
  data() {
    return {
      loading: false,
      movies: [],
      checkedRows: [],
      columns: [
        {
          field: "title",
          label: "Movie title",
          sortable: true
        },
        {
          field: "rating",
          label: "Rating",
          sortable: true
        },
        {
          field: "year",
          label: "Year",
          sortable: true
        }
      ]
    };
  },
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    authenticated() {
      return this.$store.getters.isAuthenticated;
    },
    computedMovies() {
      return !this.authenticated ? [] : this.movies;
    }
  },
  watch: {
    checkedRows() {
      this.$emit("checkChanged", this.checkedRows);
    }
  }
};
</script>

<style scoped>
</style>
