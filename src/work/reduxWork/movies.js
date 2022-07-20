import { createSlice } from '@reduxjs/toolkit';

const initialStateMovies = {
    movieList:[],
    favorites:[],
    profile:{},
    top10movies:[],
    top10favorites:[]
}

const moviesSlice = createSlice({
    name:'movies',
    initialState:initialStateMovies,
    reducers: {
        setMovies(state, action) {
            state.movieList = action.payload
            state.movieList.sort((a, b) => a.rank - b.rank)
            if (state.movieList.length < 10) {
                state.top10movies = state.movieList
            } else {
                const tempArray = []
                for (let i = 0; i < 10; i++) {
                    tempArray.push(state.movieList[i])
                }
                state.top10movies = tempArray
            }
        },
        resetMovies(state) {
            state.movieList = initialStateMovies.movieList
        },
        addToFavorites(state, action) {
            state.favorites.push(action.payload)
            state.favorites.sort((a, b) => a.rank - b.rank)
            if (state.favorites.length < 10) {
                state.top10favorites = state.favorites
            } else {
                const tempArray = []
                for (let i = 0; i < 10; i++) {
                    tempArray.push(state.favorites[i])
                }
                state.top10favorites = tempArray
            }
        },
        removeFromFavorites(state, action) {
            state.favorites = state.favorites.filter((item) => item.id !== (action.payload).id)
           
        },
        setMovieProfile(state, action) {
            state.profile = action.payload
        },
        resetMovieProfile(state) {
            state.profile = initialStateMovies.profile
        }
    }
})

export const MovieActions = moviesSlice.actions

export default moviesSlice