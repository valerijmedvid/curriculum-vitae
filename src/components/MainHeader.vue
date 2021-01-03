<template>
  <header>
    <img src="../assets/images/ValerijMedvid.jpg" alt="Valerij Medviď" />
    <h1>Valerij Medviď</h1>
    <h2>Software Developer</h2>
    <svg height="70" width="100%"><polygon points="0,0 336,0 336,70" class="triangle" /></svg>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_mixins.scss";

header {
  background-color: $accent;
  position: relative;
  color: $primary;
  font-family: "Work Sans", sans-serif;
  text-align: center;
  text-shadow: 0 0 0.05em $secondary;
  width: 100%;

  @include breakpoint("tablet") {
    top: 1em;
    right: -4.7em;
    width: 21em;
    margin-bottom: 7em;
  }
}

h1 {
  margin: 0.1em 0 0.8em;
  font-size: 3em;

  @include breakpoint("tablet") {
    font-size: 3.5em;
  }
}

h2 {
  font-weight: 500;
  font-size: 1.5em;
  padding-bottom: 0.8em;
  margin-bottom: 0;
}

$profile-img-size: 200px;
img {
  margin: 2em;
  border-radius: 50%;
  border: 0.2em solid $lighten-secondary;
  width: $profile-img-size;
  height: $profile-img-size;

  @include breakpoint("tablet") {
    margin: 0.5em;
    font-size: 4.5em;
    border: 0.07em solid $lighten-secondary;
    width: $profile-img-size + 50;
    height: $profile-img-size + 50;
  }
}

svg {
  display: none;
  @include breakpoint("tablet") {
    display: block;
    position: absolute;
    bottom: -70px;
    fill: $accent;
  }
}
</style>
