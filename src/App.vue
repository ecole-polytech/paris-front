<template>
  <div id="app">

    <v-app-bar>
      <v-icon aria-label="My Account" role="img" aria-hidden="false">
        {{heartLogoPath}}
      </v-icon>
      <div id="nav">
        <router-link to="/">Présentation</router-link> |
        <router-link to="/ViewProfiles">Je veux swiiiper</router-link> |
        <router-link to="/Relations">Aller plus loin</router-link> |
        <router-link to="/MyProfile">Configurer mon profile</router-link> |
        <router-link to="/about">A propos des développeurs</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>Maintenu par Polytech-Paris. Polylove est une marque réservée.</v-footer>

  </div>
</template>

<script>
import { mdiAccount } from '@mdi/js';

export default {
  data: () => ({
    heartLogoPath: mdiAccount
  }),
}
</script>

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
