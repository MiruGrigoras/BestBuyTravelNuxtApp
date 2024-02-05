<template>
  <div class="nav-bar">
    <img
      src="/img/sigla1-transparent.png"
      alt="logo"
      style="height: 100%"
      @click="redirectHome()"
    />
  </div>
</template>
<script>
export default {
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style>
.nav-bar {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #98e0bf;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
img:hover {
  cursor: pointer !important;
}
</style>
