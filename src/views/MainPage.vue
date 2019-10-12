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

          <movieTable @checkChanged="changeChecked"></movieTable>
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
import { ADD_MOVIE, LOGIN } from "../../graphql/queries/movieMutation";
import apexChart from "@/components/Chart.vue";
import insertMovie from "@/components/InsertMovie.vue";
import movieTable from "@/components/MovieTable.vue";
import auth from "@/components/Login.vue";

export default {
  components: {
    insertMovie,
    auth,
    apexChart,
    movieTable
  },
  data() {
    return {
      loading: true,
      defaultSerie: { name: "Test", data: [1, 2, 3] },
      defaultLabels: ["First", "Second", "Third"],
      checkedRows: []
    };
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

        this.success("The movie is added");
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
    success(string) {
      this.$buefy.toast.open(string);
    },
    changeChecked(newChecked) {
      this.checkedRows = newChecked;
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
    }
  }
};
</script>

<style scoped>
.center {
  margin-right: 10px;
  margin-left: 10px;
}
.tile.is-ancestor {
  padding: 0.75rem;
}
</style>
