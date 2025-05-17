<template>
    <form @submit.prevent="onSave" v-if="movie" class="movie-edit">
        <input v-model="movie.vendor" type="text">
        <input v-model="movie.speed" type="number">
        <div class="actions">
            <RouterLink to="/movie"><button type="button">Cancel</button></RouterLink> 
            <button>Save</button>
        </div>
    </form>
</template>

<script>
import { movieService } from '@/services/movie.service.js'

export default {
    data() {
        return {
            movie: null,
        }
    },
    methods: {
        async onSave() {
            await movieService.save(this.movie)
            this.$router.push('/movie')
        }
    },
    async created() {
        const { id: movieId } = this.$route.params
        
        if (movieId) {
            this.movie = await movieService.get(movieId)
        } else {
            this.movie = movieService.getEmptyMovie()
        }
    }
}
</script>

<style lang="scss">
.movie-edit {
    display: grid;
    justify-items: start;
    gap: .3rem;

    padding: 10px;
    background-color: rgb(254, 211, 130);

    .actions {
        display: flex;
        gap: .3rem;
        justify-self: end;
    }
}
</style>