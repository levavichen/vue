<template>
	<article class="movie-preview">
		<h3>{{ movie.vendor }}</h3>
		<p>{{ movie.speed }}</p>
	</article>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.movie-preview h3 {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
