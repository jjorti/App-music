<template>
  <div class="container">
    <loader v-if="isLoader"></loader>
    <div
      class="columns is-desktop is-flex is-justify-content-center"
      v-if="track && track.album"
    >
      <div class="column is-four-quarters-mobile has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="" />
          </p>
          <p>
            <a href="" class="button is-primary is-large">
              <span class="icon" @click.prevent="selectTrack">Seleccionar</span>
            </a>
          </p>
        </figure>
      </div>
      <div class="column is-four-quarters-mobile">
        <div class="panel panel-heading">
          <h1 class="title">
            {{ trackTitle }}
          </h1>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content flex-wrap">
                  <!-- <ul v-for="(value, key) in track" :key="key">
                    <li>
                      <strong>{{ key }}: &nbsp; </strong>
                      <span> {{ value }}</span>
                    </li>
                  </ul> -->
                </div>
              </div>
              <nav class="level">
                <div class="level-left">
                  <a href="" class="level-item"></a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import trackMixin from "@/mixins/track";
import Loader from "@/components/shared/Loader";

export default {
  mixins: [trackMixin],
  name: "TrackDetail",
  components: {
    Loader,
  },
  computed: {
    ...mapGetters(["trackTitle"]),
    ...mapState(["track"]),
  },
  created() {
    this.isLoader = true;
    setTimeout(() => {
      const trackId = this.$route.params.idTrack;
      if (!this.track || !this.track.id || this.track.id != trackId) {
        this.getTrackById({ id: trackId });
      }
      this.isLoader = false;
    }, 1000);
  },
  methods: {
    ...mapActions(["getTrackById"]),
  },
  data: () => {
    return {
      // track: {},
      isLoader: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.columns {
  margin-top: 10px;
}
</style>
