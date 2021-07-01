const trackMixin = {
  methods: {
    // selectTrack() {
    //   if (!this.track.preview_url) {
    //     return;
    //   }
    //   this.$emit("select", this.track.id);
    //   this.$bus.$emit("set-track", this.track);
    // },
    selectTrack() {
      console.log(this.track);
      if (!this.track.preview_url) {
        return;
      }
      this.$store.commit("setTrack", this.track);
    },
  },
};
export default trackMixin;
