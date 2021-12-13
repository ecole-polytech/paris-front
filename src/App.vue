<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Présentation</router-link> |
      <router-link to="/ViewProfile">Je veux swiiiper</router-link> |
      <router-link to="/Relations">Aller plus loin</router-link> |
      <router-link to="/MyProfile">Configurer mon profile</router-link> |
      <router-link to="/about">A propos des développeurs</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
