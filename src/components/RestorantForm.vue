<template>
  <h1>Formulaire Restorant</h1>

  <form @submit.prevent="createRestorant">
    <label for="nameRestorant">Nom</label>
    <input
      type="text"
      name="nameRestorant"
      placeholder="Indiquez le nom de votre restaurant"
      v-model="nameRestorant"
    />
    <label for="adress">Adresse</label>
    <input
      type="text"
      name="adress"
      placeholder="Indiquez l'adresse complète"
      v-model="adress"
    />
    <label for="hours">Horaires</label>
    <input
      type="text"
      name="hours"
      placeholder="Indiquez les horaires d'ouvertures et de fermetures"
      v-model="hours"
    />
    <label for="picture">Photo</label>
    <input type="text" name="picture" v-model="picture" />

    <input type="submit" value="Je valide" @click="getRestorants" />
  </form>
</template>

<script>
export default {
  name: "RestorantForm",
  data() {
    return {
      restorants: [],
      nameRestorant: "",
      adress: "",
      hours: "",
      picture: "",
    };
  },
  methods: {
    async getRestorants() {
      const response = await fetch("http://127.0.0.1:8000/api/restorant", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    },

    async createRestorant() {
      const body = {
        nameRestorant: this.nameRestorant,
        adress: this.adress,
        hours: this.hours,
        picture: this.picture,
      };

      const response = await fetch("http://127.0.0.1:8000/api/restorant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      console.log(data);
    },
  },
  mounted() {
    this.getRestorants();
  },
};
</script>

<style></style>
