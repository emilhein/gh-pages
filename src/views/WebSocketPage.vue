<template>
  <div>
    On the server there is a 200ms delay on reading from the broadcast channel
    <br>
    <b-button @click="start">Start</b-button>
    <div class="columns is-success">
      <div class="column">
        Finder
        <section>
          <b-table
            :data="finderItems"
            :columns="columns"
          ></b-table>

        </section>
      </div>
      <div class="column">
        Breaker
        <section>
          <b-table
            :data="breakerItems"
            :columns="columns"
          ></b-table>

        </section>
      </div>
      <div class="column">
        Smelter
        <section>
          <b-table
            :data="smelterItems"
            :columns="columns"
          ></b-table>

        </section>
      </div>
      <div class="column">
        Packer
        <section>
          <b-table
            :data="packerItems"
            :columns="columns"
          ></b-table>

        </section>
      </div>

    </div>

  </div>
</template>

<script>
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
      ]
    };
  },

  methods: {
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
    var self = this;
    this.ws = new WebSocket("wss://" + process.env.VUE_APP_WS_ENDPOINT + "/ws");
    this.ws.addEventListener("message", function(e) {
      var msg = JSON.parse(e.data);
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

<style scoped>
</style>
