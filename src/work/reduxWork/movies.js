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
            state.favorites = state.favorites.filter((item) => item.id !== (action.payload).id)
           
        }
    }
})

export const MovieActions = moviesSlice.actions

export default moviesSlice