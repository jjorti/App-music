<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification" :class="color">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.notification {
  margin: 15px;
}
</style>
