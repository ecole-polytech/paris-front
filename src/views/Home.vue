<template>
  <div class="home">
    <h1>Bienvenue sur le site Polylove</h1>
    <p></p>
    <PublicProfile/>
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
