<template>
  <div>
    <h1>Modification de mon profile</h1>
    <img src="" alt="image de profile">
    <label>identifiant : </label><span>{{userId}}</span>
    <label>nom :</label><span>{{userName}}</span>
    <label>age :</label><span>{{age}}</span>
    <label>département :</label><span>{{}}</span>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">accès à mes notes</a>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  data() {
    return {
      userId: "xxx",
      avatar: "./loading",
      userName: "Prénom NOM",
      age: 0
    }
  }
}
</script>

<style scoped>

</style>