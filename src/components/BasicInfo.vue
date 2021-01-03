<template>
  <article>
    <header>
      <svg height="30" width="6">
        <rect height="30" width="6" />
      </svg>
      <h3>{{ title }}</h3>
    </header>
    <main>
      <slot name="body"> </slot>
    </main>
  </article>
</template>

<script>
export default {
  name: "BasicInfo",
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
  computed: {
    title() {
      return this.categoryName.toUpperCase()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_mixins.scss";

article {
  margin: 2em 1em 3em 3em;
  @include breakpoint("tablet") {
    margin: 0 1em 4em 4.8em;
  }
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

svg {
  fill: $lighten-secondary;
}

h3 {
  display: block;
  color: $accent;
  margin: 0 0 0 0.8em;
}

main {
  margin: 1.5em 0 0 0;
  color: $primary;
}
</style>
