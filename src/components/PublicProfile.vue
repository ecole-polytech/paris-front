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
    idUser: Number
  },
  data: function () {
    return {
      userInfo: {id : -1, username : 'undefined', description: "undefined"}
    }
  },
  mounted() {
    //setTimeout(
    //    () => {
          this.userInfo.id = this.idUser;
          console.log(this._props.idUser);
          fetch("http://" + process.env.VUE_APP_API_URL + "/users/" + this.idUser) //TODO this is UNDEFINED
              .then(response => response.json())
              .then(data => {
                this.userInfo.username = data.name;
                this.userInfo.description = data.description;
              });
     //   }
     //   , 1000);
  }
}
</script>

<style scoped>
.card{
  max-width: 50em;
}
</style>