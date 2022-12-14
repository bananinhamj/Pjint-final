import axios from "axios";
export default class FiltrosApi {
  async buscarTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e8ae46f3897c7f7bc05709a7bbfe5413&language=pt-BR"
    );
    return data.genres;
  }
}
