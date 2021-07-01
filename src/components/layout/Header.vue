<template>
  <header>
    <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item">
          <strong>App Music</strong>
        </div>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
          @click="makeBurger"
          :class="{ 'is-active': activator }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': activator }"
      >
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Buscar</router-link>
          <router-link class="navbar-item" to="/about">Nosotros</router-link>
        </div>
      </div>
    </nav>
    <section class="hero is-success">
      <div class="hero-head"></div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Music App</h1>
          <h2 class="subtitle">Canciones Top</h2>
          <pm-player></pm-player>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import PmPlayer from "@/components/Player";
export default {
  components: {
    PmPlayer,
  },
  data: () => {
    return {
      activator: false,
    };
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      return this.activator;
    },
  },
};
</script>
