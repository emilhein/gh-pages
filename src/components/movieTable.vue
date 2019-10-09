<template>

  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">Your token!</p>
            <p class="subtitle">
              <b-button @click="login">Get it</b-button>
            </p>
            <b-input
              v-if="token"
              v-model="token"
            ></b-input>
          </article>
          <article class="tile is-child notification is-warning">
            <p class="title">...Auth</p>
            <p class="subtitle">login tile</p>
            <auth />
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <div class="buttons">

            <b-button
              type="is-dark"
              :disabled="checkedRows.length === 0"
            >Delete rows</b-button>

          </div>
          <h3 v-if="loading">Loading...</h3>

          <div
            v-if="!loading"
            class="content"
          >
            <b-table
              :data="movies"
              checkable
              :focusable="true"
              :checked-rows.sync="checkedRows"
              :columns="columns"
            ></b-table>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-success">
        <div class="content">
          <p class="title">Add movie</p>
          <p class="subtitle">Just fill in the values</p>
          <div class="content">
            <insertMovie @addMovie="createMovieinput"></insertMovie>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { GET_ALL_USERS_QUERY } from "../../graphql/queries/userQueries";
import { ADD_MOVIE, LOGIN } from "../../graphql/queries/movieMutation";
import insertMovie from "@/components/smallComponents/insertMovie.vue";
import auth from "@/components/auth/Login.vue";

export default {
  components: {
    insertMovie,
    auth
  },
  data() {
    return {
      loading: true,

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
  async mounted() {
    this.loading = true;
    this.movies = (await this.$apollo.query({
      query: GET_ALL_USERS_QUERY
    })).data.movies;
    this.loading = false;
  },
  methods: {
    setToken(token) {
      this.$store.dispatch("setToken", token);
    },
    async createMovieinput(input) {
      try {
        const { title, year, rating } = input;
        await this.$apollo.mutate({
          mutation: ADD_MOVIE,
          variables: {
            title,
            rating,
            year
          }
        });
        this.success();
      } catch (error) {
        // eslint-disable-next-line
        console.log(`Error: ${error}`);
      }
    },
    success() {
      this.$buefy.toast.open("The movie is added");
    },
    async login() {
      const {
        data: { login }
      } = await this.$apollo.mutate({
        mutation: LOGIN,
        variables: {
          username: "user",
          password: "pass"
        }
      });
      this.setToken(login.token);
    }
  },

  name: "MovieTable",

  computed: {
    token: {
      get() {
        return this.$store.getters.getToken;
      },
      set(token) {
        this.setToken(token);
      }
    }
  }
  //   mounted() {
  //     if ('serviceWorker' in navigator) {
  //     window.addEventListener('load',  () => {
  //         navigator.serviceWorker.register('../service-workers/sw').then(registration => {
  //             console.log('Service worker successfully registered on scope', registration.scope);
  //         }).catch(error => {
  //             console.log('Service worker failed to register');
  //         });
  //     });
  // }
  //   }
};
</script>

<style scoped>
.center {
  margin-right: 10px;
  margin-left: 10px;
  /* width: 50%;
  margin-left: 25%; */
}
</style>
