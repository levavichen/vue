<template>
  <article class="movie-preview">
    <img :src="movie.posterUrl" />
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.releaseYear }}</p>
  </article>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.movie-preview {
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
