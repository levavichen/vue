<template>
    <div v-if="movie" class="movie-details">
        <h2>{{movie.vendor}}</h2>    
        <p>{{movie.speed}}</p>   
        <RouterLink to="/movie"><button>Back</button></RouterLink> 
    </div>
</template>

<script>
import { movieService } from '@/services/movie.service.js'

export default {
    data() {
        return {
            movie: null,
        }
    },
    async created() {
        const { id: movieId } = this.$route.params
        this.movie = await movieService.get(movieId)
    }
}
</script>

<style lang="scss">
.movie-details {
    display: grid;

    padding: 10px;
    background-color: rgb(254, 211, 130);

    a {
        justify-self: end;
    }
}
</style>