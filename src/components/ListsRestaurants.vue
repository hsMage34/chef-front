<template>
  <h1>La liste de vos restaurants</h1>
    <li v-for="restorant in restorants" :key="restorant.id">
        <ul>
            <p>Nom : {{restorant.nameRestorant}}</p>
            <p>Adresse : {{restorant.adress}}</p>
            <p>Horaires : {{restorant.hours}}</p>
            <p>Images : {{restorant.images}}</p>
        </ul>
    </li>
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
      this.restorants = data.restorants;
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

<style>
</style>
