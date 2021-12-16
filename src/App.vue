<template>
  <div id="app">

    <v-app-bar>
      <v-icon aria-label="My Account" role="img" aria-hidden="false" class="color-red">
        {{heartLogoPath}}
      </v-icon>
      <div id="nav">
        <router-link to="/">Présentation</router-link> |
        <router-link to="/ViewProfiles">Je veux swiiiper</router-link> |
        <router-link to="/Relations">Aller plus loin</router-link> |
        <router-link to="/MyProfile">Configurer mon profil</router-link> |
        <router-link to="/about">A propos des développeurs</router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="bar-profile" :style="{left: connectionPosition}">
        <v-btn icon @click="disconnect()">
          <v-avatar>
            <img src="@/assets/default_avatar.jpg">
          </v-avatar>
        </v-btn>
        <v-text-field></v-text-field>
        <v-btn icon class="color-green" @click="connect()">
          <v-icon>{{connectLogoPath}}</v-icon>
        </v-btn>
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
import { mdiHeart, mdiArrowRightBold } from '@mdi/js';

export default {
  data: () => ({
    heartLogoPath: mdiHeart,
    connectLogoPath: mdiArrowRightBold,
    isConnected: false,


    userId: -1
  }),
  computed: {
    connectionPosition: function(){
      if(!this.isConnected){
        return '0';
      }
      return '270px'
    }
  },
  methods: {
    connect: function() {
      this.isConnected = true;
    },
    disconnect: function() {
      this.isConnected = false;
    }
  }
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

.color-red{
  color: red !important;
}
.color-green{
  color: #57f357 !important;
}

.bar-profile{
  overflow-clip: none;
  display: flex;
  position: relative;

  transition: left ease-in-out 1s;
}

.bar-profile > * {
  margin-right: 1em;
}
</style>
