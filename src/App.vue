<template>
  <div id="app">
    <am-header></am-header>
    <router-view />
    <am-footer></am-footer>
  </div>
</template>

<script>
import AmFooter from "@/components/layout/Footer";
import AmHeader from "@/components/layout/Header";
export default {
  components: {
    AmFooter,
    AmHeader,
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
  margin-top: 5px;
}
.is-actived {
  border: 5px #23d1607e solid;
}
</style>
