<template>
  <v-card class="card">
    <v-card-title>Profile de {{ userInfo.username }}</v-card-title>
    <li>
      <ul>id : {{userInfo.id}}</ul>
      <ul>description : {{ userInfo.description }}</ul>
    </li>
  </v-card>
</template>

<script>

export default {
  name: "PublicProfile",
  props:{
    userInfo: Object
  },
  data: function () {
    return {

    }
  },
  computed: {
  }
}
</script>

<style scoped>
.card{
  max-width: 50em;
}
</style>