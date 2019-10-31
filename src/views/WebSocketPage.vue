<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-success">
              <p class="title">Setup</p>
              <p class="subtitle">This page has a websocket connection to a
                <a href="https://github.com/emilhein/go-heroku-server">Go server</a> that push messages from a channel into the websocket. The Go code can be found

                <a href="https://github.com/emilhein/go-aws-webserver">here</a>
              </p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Actions
                <p class="subtitle">
                  On the server there is a 200ms delay on reading from the broadcast channel
                  <br>
                  <div class="buttons">

                    <b-button
                      @click="start"
                      type="is-dark"
                    >Start</b-button>
                    <b-button
                      outlined
                      @click="clear"
                      type="is-light"
                    >Clear</b-button>
                  </div>

            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">
              <p class="title">Credit</p>
              <p class="subtitle">This example is build upon
                <a href="https://medium.com/@trevor4e/learning-gos-concurrency-through-illustrations-8c4aff603b3">this</a> post
                with illustations made by
                <a href="https://medium.com/@trevor4e">Trevor Forrey</a>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-success">
      <div class="column">
        <img
          src="./../assets/finder.jpeg"
          alt="Finder gohper"
          width="50%"
        >

        <section>
          <b-table
            :data="finderItems"
            :columns="columns"
            :row-class="(row, index) => `color-${getNumber(row.content)}`"
          ></b-table>

        </section>
      </div>
      <div class="column">
        <img
          src="./../assets/miner.jpeg"
          alt="Breaker gohper"
          width="44%"
        >

        <section>
          <b-table
            :data="breakerItems"
            :columns="columns"
            :row-class="(row, index) => `color-${getNumber(row.content)}`"
          ></b-table>

        </section>
      </div>
      <div class="column">
        <img
          src="./../assets/smelter.jpeg"
          alt="Smelter gohper"
          width="44%"
        >
        <section>
          <b-table
            :data="smelterItems"
            :columns="columns"
            :row-class="(row, index) => `color-${getNumber(row.content)}`"
          ></b-table>

        </section>
      </div>
      <!-- <div class="column">
        Packer
        <section>
          <b-table
            :data="packerItems"
            :columns="columns"
            :row-class="(row, index) => `color-${getNumber(row.content)}`"
          ></b-table>

        </section>
      </div> -->

    </div>

  </div>
</template>

<script>
import ReconnectingWebSocket from "reconnecting-websocket";

export default {
  name: "websokcet",
  data() {
    return {
      ws: null, // Our websocket
      socketMemory: [], // A running list of chat messages displayed on the screen
      columns: [
        {
          field: "content",
          label: "Message",
          centered: true
        },
        {
          field: "timestamp",
          label: "Time",
          centered: true
        }
      ],
      roles: [
        { name: "Finder", dataName: "finderItems" },
        { name: "Breaker", dataName: "breakerItems" },
        { name: "Smelter", dataName: "smelterItems" },
        { name: "Packer", dataName: "packerItems" }
      ],
      wsHost: `wss://${process.env.VUE_APP_WS_ENDPOINT}/ws`
    };
  },

  methods: {
    getNumber(string) {
      return string.match(/\d+/g).map(Number)[0];
    },
    clear() {
      this.socketMemory = [];
    },
    start() {
      this.ws.send(
        JSON.stringify({
          type: "start",
          content: "Just go",
          timestamp: new Date()
        })
      );
    }
  },

  created() {
    this.ws = new ReconnectingWebSocket(this.wsHost);

    let self = this;
    this.ws.addEventListener("message", function(e) {
      let msg = JSON.parse(e.data);
      self.socketMemory.push(msg);
    });
  },
  computed: {
    finderItems() {
      return this.socketMemory.filter(e => e.type === "Finder");
    },
    breakerItems() {
      return this.socketMemory.filter(e => e.type === "Miner");
    },
    smelterItems() {
      return this.socketMemory.filter(e => e.type === "Smelter");
    },
    packerItems() {
      return this.socketMemory.filter(e => e.type === "Packer");
    }
  }
};
</script>

<style>
tr.color-2 {
  color: green;
}
tr.color-3 {
  color: blue;
}
tr.color-5 {
  color: red;
}
tr.color-6 {
  color: grey;
}
tr.color-8 {
  color: orange;
}
tr.color-9 {
  color: purple;
}
tr.color-11 {
  color: green;
}
tr.color-12 {
  color: green;
}
</style>

