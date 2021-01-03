<template>
  <aside>
    <main-header />
    <basic-info :category-name="'Kontakt'">
      <template v-slot:body>
        <ul>
          <li><fa icon="phone" size="1" color="lightgray" class="icons" /> +420 725 874 185</li>
          <li><fa icon="at" size="1" color="lightgray" class="icons" /> vmedvid@gmail.com</li>
          <li><fa icon="linkedin" size="1" color="lightgray" class="icons" /> linkedin.com/in/valerijmedvid</li>
        </ul>
      </template>
    </basic-info>
    <basic-info :category-name="'Dovednosti'">
      <template v-slot:body> Tady zas nec jienho </template>
    </basic-info>
  </aside>
  <main></main>
  <footer></footer>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import BasicInfo from "./components/BasicInfo.vue"

export default {
  name: "App",
  components: {
    MainHeader,
    BasicInfo,
  },
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/_mixins.scss";

aside {
  width: 100%;
  background-color: $secondary;

  @include breakpoint("tablet") {
    min-height: 100vh;
    width: 25em;
    position: relative;
  }
}

ul {
  list-style: none;
  padding-left: 1.5em;
  text-shadow: 0 0 0.05em $secondary;
  letter-spacing: 0.02em;

  li {
    padding-top: 0.6em;

    .icons {
      margin-right: 0.6em;
    }
  }
  li:first-child {
    padding-top: 0;
  }
}
</style>
