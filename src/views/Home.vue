<template>
  <div class="home">
    <h1>Bienvenue sur le site Polylove</h1>
    <p>Ce site vous permettra de trouver l'amour dans votre réseau d'école ! Ou d'élargir vos horizons à de nouvelles filières</p>
    <div v-if="this.isLoggedIn">
      <p>Vous devez d'abord vous connecter en entrant votre identifiant à haut à droite de votre écran</p>
    </div>
    <div v-else>
      <h2>Mon profil :</h2>
      <v-container class="card-container">
        <PublicProfile id-user:1/>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PublicProfile from "@/components/PublicProfile";
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    PublicProfile
  },
  computed: {
    ...mapState({
      isLoggedIn: 'isConnected'
    })
  }
}
</script>

<style scoped>
.card-container{
  justify-content: center;
  display: flex;
}
</style>
