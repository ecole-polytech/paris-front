<template>
  <div id="app">

    <v-app-bar>
      <v-icon aria-label="My Account" role="img" aria-hidden="false" class="color-red">
        {{heartLogoPath}}
      </v-icon>
      <div id="nav">
        <router-link to="/">Présentation</router-link>
        <div v-if="$store.state.auth.isConnected" style="display: inline"> | <router-link to="/ViewProfiles">Je veux swiiiper</router-link>  </div>
        <div v-if="$store.state.auth.isConnected" style="display: inline"> | <router-link to="/Relations">Aller plus loin</router-link> </div>
        <div v-if="$store.state.auth.isConnected" style="display: inline"> | <router-link to="/MyProfile">Configurer mon profil</router-link> </div>
        | <router-link to="/about">A propos des développeurs</router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="bar-profile" :style="{left: connectionPosition}">
        <v-btn icon @click="disconnect()">
          <v-avatar>
            <img src="@/assets/default_avatar.jpg">
          </v-avatar>
        </v-btn>
        <v-text-field v-model="userIdFromField"></v-text-field>
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

    userIdFromField: ""
  }),
  computed: {
    connectionPosition: function(){
      if(!this.$store.state.auth.isConnected){
        return '0';
      }
      return '270px'
    },
  },
  methods: {
    connect: function() {
      if (this.userIdFromField === "GuillaumeOnPenseAToi") { //TODO add production mode
        //Debug mode :)
        this.$store.dispatch("auth/login", {id : -1, username : 'Debug mode', description: "Toute puissance"} );

        //this.$store.userInfo.username = "OUII";
        //this.$store.userName = "Ouioui";
      } else {
        fetch("http://" + process.env.VUE_APP_API_URL + "/users/" + this.userIdFromField)
            .then(response => {

              alert("RESPONSE"); //TODO DEBUG ONLY
              if (response.ok) {
                response.json()
              } else {
                alert("Mauvais login");
              }
            })
            .then(data => {
              //TODO do we arrive here if not connected
              this.userInfo.username = data.name;
              this.userInfo.description = data.description;
              this.isConnected = true;
            });
      }
    },
    disconnect: function() {
      this.userInfo = {id : -1, username : 'non-connected', description: "non-connected"};
      this.$store.state.isConnected = false;
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
