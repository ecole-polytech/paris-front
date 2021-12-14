<template>
  <v-card class="card">
    <v-card-title>Profile de {{ userInfo.username }}</v-card-title>
    <li>
      <ul>id : {{userInfo.id}}</ul>
      <ul>age : {{userInfo.age}}</ul>
    </li>
  </v-card>
</template>

<script>
export default {
  name: "PublicProfile",
  props:{
    idUser: Number
  },
  data: function () {
    return {
      userInfo: {id : -1, username : 'Guillaume dit Le tombeur', age: 10}
    }
  },
  beforeMount() {
    this.userInfo.id = this.idUser;
  }
}
</script>

<style scoped>
.card{
  max-width: 50em;
}
</style>