<template>
  <form v-if="movie" @submit.prevent="onSave" class="movie-edit">
    <div class="field">
      <label>Title</label>
      <input v-model="movie.title" type="text" placeholder="title" />
    </div>
    <div class="field">
      <label>Director</label>
      <input v-model="movie.director" type="text" placeholder="director" />
    </div>
    <div class="field">
      <label>Genre</label>
      <input v-model="movie.genre" type="text" placeholder="genre" />
    </div>
    <div class="field">
      <label>Running time</label>
      <input
        v-model="movie.runningTime"
        type="number"
        placeholder="running time"
      />
    </div>
    <div class="field">
      <label>Release year</label>
      <input
        v-model="movie.releaseYear"
        type="number"
        placeholder="release year"
      />
    </div>
    <div class="field">
      <label>Poster URL</label>
      <input v-model="movie.posterUrl" type="text" placeholder="poster url" />
      <button type="button" @click="getPoster">Get Poster</button>
    </div>
    <div class="field">
      <label>Actors</label>
      <input v-bind:value="movie.actors" type="text" placeholder="actors" />
      <button type="button" @click="editActors">Edit Actors</button>
    </div>
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
  gap: 1em;

  padding: 10px;

  label{
      width: 95px;
  }
  .actions {
    display: flex;
    gap: 0.3rem;
    justify-self: end;
  }

  button{
    margin: 0;
  }

  .field{
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
}
</style>