import { createRouter, createWebHistory } from "vue-router";
import FilmesView from "@/views/FilmesView.vue";
import PaginaFilme from "@/views/PaginaFilme.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/filmes/:id",
      nome: "filmes",
      component: PaginaFilme,
      props: true,
    },
    {
      path: "/",
      name: "filmes",
      component: FilmesView,
    },
  ],
});

export default router;
