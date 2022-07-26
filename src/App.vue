<template>
  <nav class="nav-bar">
    <h2 class="title">Resto'Resa</h2>
    <router-link to="/" class="link">Accueil</router-link>
    <router-link to="/inscription" class="link">Inscription</router-link>
    <router-link to="/restorant" class="link">Formulaire de restaurant</router-link>
    <router-link to="/listsrestaurants" class="link">La liste de vos restaurants</router-link>
  </nav>
  <router-view />
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: none;
  font-weight: bold;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  height: 200vh;
  width: 100%;
  background: linear-gradient(200deg, #361b17 10%, #777579 90%);
  font-weight: bold;
}

.nav-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  border-bottom: 6px solid #5e322b;
  background-color: rgb(231, 231, 231);
}

.title {
  color: #552d27;
}

.link {
  text-decoration: none;
  color: rgb(170, 170, 170);
}

.link:hover {
  text-decoration: none;
  color: #361b17;
}

</style>
