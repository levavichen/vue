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
  grid-column: 1 / 3;

  img {
    display: block;
    width: 100%;
    height: 200px;
    margin-block-end: 1rem;

    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
