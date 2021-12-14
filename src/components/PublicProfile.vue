<template>
  <div>
    <h2>Profile de {{ userInfo.username }}</h2>
    <li>
      <ul>id : {{id}}</ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "PublicProfile",
  props:{
    idUser: Number
  },
  data: function () {
    return {
      userInfo: {id : -1, username : 'Guillaume dit Le tombeur'}
    }
  }
}
</script>

<style scoped>

</style>