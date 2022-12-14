<script>
import axios from "axios";
import FilmeComp from "../components/FilmeComp.vue";
import FilmeApi from "../api/filmes.js";
import FiltrosApi from "../api/filtros.js";
const filtrosapi = new FiltrosApi();
const filmeapi = new FilmeApi();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
      artista: {},
      genre: {},
      genres: [],
    };
  },
  components: {
    FilmeComp,
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    this.genres = await filtrosapi.buscarTodosOsGeneros();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=e8ae46f3897c7f7bc05709a7bbfe5413&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <main class="PaginaFilme">
    <img class="poster" :src="getPosterUrl(filme.poster_path)" alt="" />
    <div class="DescricaoFilme">
      <FilmeComp
        v-model="filme"
        :NomeFilme="filme.title"
        :key="filme.id"
        :SinopseFilme="filme.overview"
      />
    </div>
  </main>
</template>
