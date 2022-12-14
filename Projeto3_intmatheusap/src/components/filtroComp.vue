<script>
import axios from "axios";
export default {
  data() {
    return {
      params: {
        filme: "",
        genero: "",
      },
      generos: [],
    };
  },
  methods: {
    buscar() {
      this.$emit("buscar", this.params);
    },
  },
  async created() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e8ae46f3897c7f7bc05709a7bbfe5413&language=pt-BR"
    );
    this.generos = data.genres;
  },
};
</script>
<template>
  <div class="DivFiltro">
    <div class="filtro">
      <div class="FiltroDiv">
        <form @submit.prevent="buscar">
          <div class="PesquisaFiltros">
            <label for="">Search:</label>
            <input v-model="params.filme" type="text" />
          </div>
          <div class="PesquisaFiltros">
            <label for="genre">Genre:</label>
            <select v-model="params.genero">
              <option
                v-for="genero of generos"
                :key="genero.id"
                :value="genero.id"
              >
                {{ genero.name }}
              </option>
            </select>
          </div>
          <button class="BotaoFiltro" type="submit" @click="buscar">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
