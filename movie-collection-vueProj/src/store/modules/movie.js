import { movieService } from "@/services/movie.service"

export default {
    state() {
        return {
            movies: []
        }
    },
    mutations: {
        setMovies(state, { movies }) {
            state.movies = movies
        },
        removeMovie(state, { movieId }) {
            const idx = state.movies.findIndex(movie => movie._id === movieId)
            state.movies.splice(idx, 1)
        }
    },
    actions: {
        async loadMovies({ commit, state }) {
            const movies = await movieService.query(state.filterBy)
            commit({ type: 'setMovies', movies })
        },
        async removeMovie({ commit }, { movieId }) {
            console.log('movie id', movieId)
            await movieService.remove(movieId)
            commit({ type: 'removeMovie', movieId })
        }
    },
    getters: {
        movies(state) {
            return state.movies
        },
    }
}