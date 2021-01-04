<template>
  <aside>
    <main-header />
    <basic-info :category-name="'Kontakt'">
      <template v-slot:body>
        <ul>
          <li>
            <fa icon="phone" size="1" color="lightgray" class="icons" />
            <a href="tel:+420725874185"> +420 725 874 185 </a>
          </li>
          <li>
            <fa icon="at" size="1" color="lightgray" class="icons" />
            <a href="mailto:vmedvid@gmail.com"> vmedvid@gmail.com </a>
          </li>
          <li>
            <fa icon="address-book" size="1" color="lightgray" class="icons" />
            28.října 2588, Nymburk 28802
          </li>
          <li>
            <fa icon="github" size="1" color="lightgray" class="icons" />
            <a href="https://github.com/valerijmedvid"> github.com/valerijmedvid</a>
          </li>
          <li>
            <fa icon="twitter" size="1" color="lightgray" class="icons" />
            <a href="https://twitter.com/ValerijMedvid"> twitter.com/ValerijMedvid</a>
          </li>
          <li>
            <fa icon="linkedin" size="1" color="lightgray" class="icons" />
            <a href="https://www.linkedin.com/in/valerijmedvid"> linkedin.com/in/valerijmedvid</a>
          </li>
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
@import "./assets/scss/_variables.scss";
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

    a {
      color: $primary;
      text-decoration: none;
      opacity: 1;
      &:hover {
        opacity: 0.7;
        transition-duration: 0.3s;
      }
    }

    .icons {
      margin-right: 0.6em;
    }
  }
  li:first-child {
    padding-top: 0;
  }
}
</style>
