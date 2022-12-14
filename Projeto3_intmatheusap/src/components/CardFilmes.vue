<script>
export default {
  props: {
    poster: String,
    titulo: String,
    LinkFilme: {
      type: Object,
    },
  },
  methods: {
    UrlDoFilme(id) {
      return `/filmes/${id}`;
    },
  },
};
</script>
<template>
  <div class="container">
    <img class="cardfilmes" :src="poster" />
    <div class="overlay">
      <div>
        <h4 class="NomeFilme">{{ titulo }}</h4>
        <router-link :to="UrlDoFilme(LinkFilme.id)">
          <button>VER MAIS</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 500px;
}

h4 {
  height: 3rem;
}
</style>
