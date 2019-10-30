<template>
  <div>
    On the server there is a 200ms delay on reading from the broadcast channel
    <br>
    <b-button @click="start">Start</b-button>
    <b-button @click="clear">Clear</b-button>
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

