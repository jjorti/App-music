<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong> {{ track.name }} </strong>
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
      <div class="content">
        Duracion del track
        <small> {{ track.duration_ms | mstomin }}</small>
        <nav class="level">
          <div class="level-left">
            <button href="" class="level-item button is-primary pl-5 pr-5">
              <span class="icon is-small" @click.prevent="selectTrack">
                <i class="fas fa-play-circle"></i>
              </span>
            </button>
            <button href="" class="level-item button is-primary pl-5 pr-5">
              <span class="icon is-small" @click.prevent="goToTrack(track)">
                <i class="fas fa-paper-plane"></i>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from "@/mixins/track";
export default {
  mixins: [trackMixin],
  name: "Track",
  props: {
    track: {
      type: Object,
      require: true,
    },
  },
  methods: {
    goToTrack({ id }) {
      if (!this.track.preview_url) {
        return;
      }
      const idTrack = id;
      if (!this.$route.params.idTrack) {
        this.$router.push({ name: "track-detail", params: { idTrack } });
      }
    },
  },
};
</script>
