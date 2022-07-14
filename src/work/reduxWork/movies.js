import { createSlice } from '@reduxjs/toolkit';

const initialStateMovies = {
    movieList:[],
    favorites:[]
}

const moviesSlice = createSlice({
    name:'movies',
    initialState:initialStateMovies,
    reducers: {
        setMovies(state, action) {
            state.movieList = action.payload
        },
        resetMovies(state) {
            state.movieList = initialStateMovies.movieList
        },
        addToFavorites(state, action) {
            state.favorites.push(action.payload)
        },
        removeFromFavorites(state, action) {
            state.favorites.filter(item => item === action.payload)
        }
    }
})

export const MovieActions = moviesSlice.actions

export default moviesSlice