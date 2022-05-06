<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'questionnaire' }">Fragebogen</router-link> |
      <router-link :to="{ name: 'documentation' }">Dokumentation</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
