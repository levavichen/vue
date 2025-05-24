<template>
  <div v-if="movie" class="movie-details">
    <section class="movie-data">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.releaseYear }}</p>
      <p>{{ movie.runningTime }}min</p>
      <p>{{ movie.genre }}</p>
      <p>Directed by: {{ movie.director }}</p>
      <p>Stars: {{ movie.actors.join(", ") }}</p>
      <RouterLink to="/movie"><button>Back</button></RouterLink>
    </section>
    <img :src="movie.posterUrl" />
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

<style scoped lang="scss">
.movie-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 10px;

  .movie-data {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  a {
    justify-self: start;
    align-self: start;
  }

  img {
    width: 380px;
    height: auto;
    display: block;
    justify-self: end;
  }
}
</style>