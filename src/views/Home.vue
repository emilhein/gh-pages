<template>

  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">Your Apollo token!</p>
            <p class="subtitle">
              <b-button @click="login">{{ (token ? 'Refresh token' : 'Get token')}}</b-button>
            </p>
            <b-input
              v-if="token"
              v-model="token"
            ></b-input>
          </article>
          <article class="tile is-child notification is-warning">
            <p class="title">...Auth</p>
            <p class="subtitle">Your firebase token</p>
            <auth />
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Chart</p>
            <p class="subtitle">{{ this.authenticated ? 'Select some movie titles' : 'Try to login and select some movie titles'}}</p>
            <figure>
              <apex-chart
                :dataSerie="dataSerie"
                :labels="labels"
              ></apex-chart>
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
import apexChart from "@/components/smallComponents/chart.vue";
import auth from "@/components/auth/Login.vue";

export default {
  components: {
    insertMovie,
    auth,
    apexChart
  },
  data() {
    return {
      loading: true,
      movies: [],
      defaultSerie: { name: "Test", data: [1, 2, 3] },
      defaultLabels: ["First", "Second", "Third"],
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
        await this.login();
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
        this.error(error);
      }
    },
    error(err) {
      this.$buefy.toast.open({
        message: err.message,
        type: "is-danger"
      });
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

  name: "home",

  computed: {
    token: {
      get() {
        return this.$store.getters.getToken;
      },
      set(token) {
        this.setToken(token);
      }
    },
    dataSerie() {
      return this.checkedRows.length === 0
        ? this.defaultSerie
        : { name: "Reactive", data: this.checkedRows.map(e => e.rating) };
    },
    labels() {
      return this.checkedRows.length === 0
        ? this.defaultLabels
        : this.checkedRows.map(e => e.year);
    },
    authenticated() {
      return this.$store.getters.isAuthenticated;
    },
    computedMovies() {
      return !this.authenticated ? [] : this.movies;
    }
  }
};
</script>

<style scoped>
.center {
  margin-right: 10px;
  margin-left: 10px;
  /* width: 50%;
  margin-left: 25%; */
}
.tile.is-ancestor {
  padding: 0.75rem;
}
</style>
