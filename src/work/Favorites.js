import React  from 'react';
import { Card, Button, Label } from 'reactstrap';
import {MovieActions} from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';

const Favorites = () => {

    const favoritesMovies = useSelector(state => state.movies.favorites)
    const dispatch = useDispatch()

    return (
        <div style={{width:'100vw', height:'100vh'}}>
           <Card style={{marginTop:'10vh', height:'50vh', width:'100vw'}}>
            <ul>
            {favoritesMovies.map((favoriteMovie) => {
                return (
                    <li key={favoriteMovie.id}>
                        <Label>{favoriteMovie.title}</Label>
                        <Label>{favoriteMovie.rate}</Label>
                        <Label>{favoriteMovie.summary}</Label>
                        <Button onClick={() => {
                            dispatch(MovieActions.removeFromFavorites(favoriteMovie))
                        }}>Remove from Favorites</Button>
                    </li>
                )
            })}
            </ul>
            </Card>
        </div>
    )
}

export default Favorites