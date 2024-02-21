<template>
  <div class="about">
    <h1>Немного обо мне</h1>
    <p>Имя: Ярина </p>
    <p> Возраст: 23 </p>
    <img class="photo" src="../assets/Аватаркаviju.jpg">
  </div>
</template>

<script lang="ts">

export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  background-color: #39b4aa
}

.photo {
  min-width: 200px;
  max-width: 500px;
  border-radius: 20px;
}
</style>