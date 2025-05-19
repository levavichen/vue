<template>
  <form v-if="movie" @submit.prevent="onSave" class="movie-edit">
    <div class="field">
      <label>title</label>
      <input v-model="movie.title" type="text" placeholder="title" />
    </div>
    <div class="field">
      <label>director</label>
      <input v-model="movie.director" type="text" placeholder="director" />
    </div>
    <div class="field">
      <label>genre</label>
      <input v-model="movie.genre" type="text" placeholder="genre" />
    </div>
    <div class="field">
      <label>running time</label>
      <input
        v-model="movie.runningTime"
        type="number"
        placeholder="running time"
      />
    </div>
    <div class="field">
      <label>release year</label>
      <input
        v-model="movie.releaseYear"
        type="number"
        placeholder="release year"
      />
    </div>
    <div class="field">
      <label>poster url</label>
      <input v-model="movie.posterUrl" type="text" placeholder="poster url" />
    </div>
    <button type="button" @click="getPoster">Get Poster</button>
    <div class="field">
      <label>actors</label>
      <input v-bind:value="movie.actors" type="text" placeholder="actors" />
    </div>
    <button type="button" @click="editActors">Edit Actors</button>

    <div class="actions">
      <button>Save</button>
      <RouterLink to="/movie"><button type="button">Cancel</button></RouterLink>
    </div>
  </form>
</template>

<script>
import { movieService } from "@/services/movie.service.js";

export default {
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    async onSave() {
      await movieService.save(this.movie);
      this.$router.push("/movie");
    },
    async getPoster() {
      const posterUrl = await movieService.getMoviePoster(this.movie.title);
      console.log('posterUrl', posterUrl)
      this.movie.posterUrl = posterUrl;
    },
    editActors() {
      const promptTxt = this.movie.actors.join(", ");
      const actors = prompt("Actors:", promptTxt);
      if (!actors) return;
      this.movie.actors = actors.split(",").map((actor) => actor.trim());
    },
  },
  
  async created() {
    const { id: movieId } = this.$route.params;

    if (movieId) {
      this.movie = await movieService.get(movieId);
    } else {
      this.movie = movieService.getEmptyMovie();
    }
  },
};
</script>

<style lang="scss">
.movie-edit {
  display: grid;
  justify-items: start;
  gap: 0.3rem;

  padding: 10px;
  background-color: rgb(254, 211, 130);

  .actions {
    display: flex;
    gap: 0.3rem;
    justify-self: end;
  }
}
</style>