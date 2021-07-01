import Vue from "vue";
import Vuex from "vuex";
import servicesAppMusic from "@/services/app-music";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    track: {},
  },
  mutations: {
    setTrack(state, payload) {
      state.track = payload;
    },
  },
  actions: {
    getTrackById(context, payload) {
      return servicesAppMusic.getById(payload.id).then((res) => {
        context.commit("setTrack", res.data);
        return res;
      });
    },
  },
  getters: {
    trackTitle(state) {
      console.log(state.track);
      if (!state.track.name) {
        return " ";
      }
      return `${state.track.name} - ${state.track.artists[0].name}`;
    },
  },
  modules: {},
});
