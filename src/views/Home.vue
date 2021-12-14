<template>
  <div class="home">
    <h1>Bienvenue sur le site Polylove</h1>
    <p>Ce site vous permettra de trouver l'amour dans votre réseau d'école ! Ou d'élargir vos horizons à de nouvelles filières</p>
    <v-container class="card-container">
      <PublicProfile id-user:1/>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PublicProfile from "@/components/PublicProfile";

export default {
  name: 'Home',
  components: {
    PublicProfile
  }
}
</script>

<style scoped>
.card-container{
  justify-content: center;
  display: flex;
}
</style>
