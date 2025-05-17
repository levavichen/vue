<template>
  <div v-if="movie" class="movie-details">
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.releaseYear }}</p>
    <p>{{ movie.runningTime }}min</p>
    <img :src="movie.posterUrl" />
    <p>{{ movie.genre }}</p>
    <p>Directed by: {{ movie.director }}</p>
    <p>Stars: {{ movie.actors.join(", ") }}</p>
    <RouterLink to="/movie"><button>Back</button></RouterLink>
  </div>
</template>

<script>
import { movieService } from "@/services/movie.service.js";

export default {
  data() {
    return {
      movie: null,
    };
  },
  async created() {
    const { id: movieId } = this.$route.params;
    this.movie = await movieService.get(movieId);
  },
};
</script>

<style lang="scss">
.movie-details {
  display: grid;

  padding: 10px;
  background-color: rgb(254, 211, 130);

  a {
    justify-self: end;
  }

  img {
    width: 380px;
    height: auto;
    display: block;
  }
}
</style>