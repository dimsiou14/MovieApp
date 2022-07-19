import React  from 'react';
import { Card, Button, Label, Col, Row, Navbar } from 'reactstrap';
import {MovieActions} from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = () => {

    const movies =  useSelector((state) => (state.movies.movieList))
    const dispatch = useDispatch()

    return (
        <div style={{width:'100vw', height:'100vh'}}>
             <Navbar className='nav d-flex justify-content-between'>
            <Row style={{background:'orange', marginTop:'2vh', borderRadius:'5rem', width:'50vw', marginLeft:'25vw'}}>
                
                <Link 
                to={"/"} 
                style={{color:'black', textDecoration:'none'}} 
                onMouseOver={() => {
                    document.getElementById("linkHome").style.color = 'blue'
                }}
                onMouseLeave={() => {
                    document.getElementById("linkHome").style.color = 'black'
                }} 
                id="linkHome">
                Home 
                </Link>
                     
                <Link 
                to={"/movies"} 
                style={{color:'black', marginLeft:'1vw', textDecoration:'none'}} 
                id="linkMovies"
                 onMouseOver={() => {
                    document.getElementById("linkMovies").style.color = 'blue'
                }}
                onMouseLeave={() => {
                    document.getElementById("linkMovies").style.color = 'black'
                }}> 
                Movies

                </Link>
                   
                <Link 
                to={"/favorites"} 
                style={{color:'black', marginLeft:'1vw', textDecoration:'none'}} 
                id="linkFavorites"
                 onMouseOver={() => {
                    document.getElementById("linkFavorites").style.color = 'blue'
                }}
                onMouseLeave={() => {
                    document.getElementById("linkFavorites").style.color = 'black'
                }}>
                Favorites
                
                </Link>
        
            </Row>
        </Navbar>
           <Card style={{marginTop:'10vh', height:'50vh', width:'100vw'}}>
           {movies.length ? <ol>
                {movies.map((movie) => {
                    return (
                        <li  key={movie.id}>
                        <Row>
                            <Col style={{textAlign:'start'}}>
                                <img src={movie.image} alt={`imageOfMovie${movie.id}`} width="25px" height="25px"/>
                                <Label>{movie.title}</Label>
                            </Col>
                            <Col style={{textAlign:'start'}}>
                            <Label>Year : {movie.year}</Label>
                            <br/>
                            <Label>Rank : {movie.rank}</Label>
                            </Col>
                            <Col style={{textAlign:'start'}}>
                            <Label>Rating : {movie.imDbRating}</Label>
                            <br/>
                            <Label>Reviews No : {movie.imDbRatingCount}</Label>
                            </Col>
                            <Button onClick={() => {
                            dispatch(MovieActions.addToFavorites(movie))
                            }}>Add To Favorites</Button>
                        </Row>
                        <hr/>
                        </li>
                    )
                })}
               </ol> : <div>No Movies Found</div>}
            </Card>
        </div>
    )
}

export default Movies