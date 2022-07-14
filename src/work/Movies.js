import React  from 'react';
import { Card, Button, Label } from 'reactstrap';
import {MovieActions} from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';

const Movies = () => {

    const movies =  useSelector((state) => (state.movies.movieList))
    const dispatch = useDispatch()

    return (
        <div style={{width:'100vw', height:'100vh'}}>
           <Card style={{marginTop:'10vh', height:'50vh', width:'100vw'}}>
            <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Label>{movie.title}</Label>
                        <Label>{movie.rate}</Label>
                        <Label>{movie.summary}</Label>
                        <Button onClick={() => {
                            dispatch(MovieActions.addToFavorites(movie))
                        }}>Add to Favorites</Button>
                    </li>
                )
            })}
            </ul>
            </Card>
        </div>
    )
}

export default Movies