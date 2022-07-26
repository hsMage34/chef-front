<template>
  <div class="contenaire">
    <div class="content">
      <div class="home">
        <h1 class="description">Bienvenue chez Resto'Resa,</h1>
        <p class="info">
          Votre première application dédiée à la gestion de commandes de tous
          vos restaurants.
        </p>

        <div class="design-button">
          <button class="register">S'inscrire</button>
          <button class="login">Se connecter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

.contenaire {
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/Image_restaurant_home_accueil.png");
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 500px;
}

.design-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
}

.register {
  padding: 10px;
  border: none;
  border-radius: 10px;
  letter-spacing: 2px;
  background-color: #361b17;
  margin-right: 15px;
}

.login {
  padding: 10px;
  border: none;
  border-radius: 10px;
  letter-spacing: 2px;
  background-color: #361b17;
  margin-right: 15px;
}

</style>
