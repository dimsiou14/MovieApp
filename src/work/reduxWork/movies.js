import { createSlice } from '@reduxjs/toolkit'

const initialStateMovies = {
    movieList:[]
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
        }
    }
})

export const MovieActions = moviesSlice.MovieActions

export default moviesSlice