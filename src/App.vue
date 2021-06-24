<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input
            type="text"
            class="input is-large"
            placeholder="buscar canciones"
            v-model="searchQuery"
          />
          <a
            href=""
            class="mt-1 mr-3 button is-info is-medium"
            @click.prevent="search"
            >Buscar</a
          >
          <a href="" class="mt-1 button is-danger is-medium">&times;</a>
        </div>
      </nav>

      <div class="container results">
        <div class="colums">
          <div class="column" v-for="(track, index) in tracks" :key="index">
            {{ track.name }}
            {{ track.artist }}
          </div>
          <p>
            <small>Resultados encontrados: {{ searchMesssage }}</small>
          </p>
        </div>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
const TRACKS = [
  { name: "1", artist: "Juan" },
  { name: "2", artist: "Jose" },
  { name: "3", artist: "Ortiz " },
  { name: "5", artist: "Santa" },
];
export default {
  data: () => {
    return {
      searchQuery: "",
      tracks: {
        name: "",
        artist: "",
      },
    };
  },
  computed: {
    searchMesssage() {
      if (this.tracks.length > 0) {
        return `Encontrados ${this.tracks.length}`;
      } else {
        return `0 No se ha realizado una busqueda`;
      }
    },
  },
  methods: {
    search() {
      this.tracks = TRACKS;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
  margin-top: 5px;
}
</style>
