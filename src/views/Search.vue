<template>
  <main>
    <transition name="move">
      <am-notification v-show="showNotification" :color="typeAlert">
        <p slot="body">{{ messageAlert }}</p>
      </am-notification>
    </transition>

    <transition name="move">
      <div class="container" v-show="isLoading">
        <am-loader></am-loader>
      </div>
    </transition>
    <section class="section">
      <nav class="nav">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              class="input is-large"
              placeholder="Buscar canciones"
              v-model="searchQuery"
              @keyup.enter="search"
              type="text"
            />
          </div>
          <div class="control" v-if="tracks.length > 0">
            <a class="button is-large">
              <span
                class="icon is-large is-right"
                @click.prevent="deleteQuery()"
              >
                <i class="fas fa-trash-alt" @click.prevent="deleteQuery()"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="container">
          <button
            class="mt-1 mr-3 button is-info is-outlined is-medium"
            @click.prevent="search"
          >
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>Buscar canción</span>
          </button>
        </div>
      </nav>

      <div class="container">
        <p>
          <small>Resultados encontrados: {{ searchMesssage }}</small>
        </p>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" :key="t.id">
            <am-track
              v-blur="t.preview_url"
              :class="{ 'is-actived': t.id === track.id }"
              :track="t"
              @select="setSelectedTrack"
            ></am-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import AmLoader from "@/components/shared/Loader";
import AmNotification from "@/components/shared/Notification";

import AmTrack from "@/components/Track";
import trackService from "@/services/app-music";

export default {
  components: {
    AmTrack,
    AmLoader,
    AmNotification,
  },
  data: () => {
    return {
      searchQuery: "",
      tracks: {},
      isLoading: false,
      showNotification: false,
      selectedTrack: "",
      typeAlert: "",
      messageAlert: "",
    };
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
  computed: {
    ...mapState(["track"]),
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
      if (!this.searchQuery) return;
      this.isLoading = true;
      trackService
        .getTrackForName(this.searchQuery)
        .then((res) => {
          this.showNotification = true;
          console.log(res.data.tracks.total);
          if (res.data.tracks.total === 0) {
            this.typeAlert = "is-danger";
            this.messageAlert = "No se han encontrados canciones";
          } else {
            this.typeAlert = "is-success";
            this.messageAlert = "Consulta exitosa";
          }
          this.tracks = res.data.tracks.items;
        })
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    deleteQuery() {
      this.searchQuery = "";
      this.tracks = {};
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>

<style lang="scss">
.results {
  margin-top: 5px;
}
.is-actived {
  border: 5px #23d1607e solid;
}
</style>
