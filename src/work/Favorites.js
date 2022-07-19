import React  from 'react';
import { Card, Button, Label, Row, Col, Navbar } from 'reactstrap';
import {MovieActions} from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Favorites = () => {

    const favoritesMovies = useSelector(state => state.movies.favorites)
    const dispatch = useDispatch()

    return (
        <div style={{width:'100vw', height:'100vh'}}>
                 <Navbar className='nav d-flex justify-content-between' style={{background:'orange', marginTop:'2vh', borderRadius:'5rem', width:'50vw', marginLeft:'25vw'}}>
            <Col>
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
                </Col>
                <Col>
                     
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
                   </Col>
                   <Col>
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
                </Col>
       
        </Navbar>
        <Card style={{marginTop:'10vh', width:'90vw', marginLeft:'5vw'}}>
           {favoritesMovies.length ? <ol>
                {favoritesMovies.map((favoritesMovie) => {
                    return (
                        <li  key={favoritesMovie.id}>
                        <Row>
                            <Col style={{textAlign:'start'}}>
                                <img src={favoritesMovie.image} alt={`Movie${favoritesMovie.id}`} width="25px" height="25px"/>
                                <Label>{favoritesMovie.title}</Label>
                            </Col>
                            <Col style={{textAlign:'start'}}>
                            <Label>Year : {favoritesMovie.year}</Label>
                            <br/>
                            <Label>Rank : {favoritesMovie.rank}</Label>
                            </Col>
                            <Col style={{textAlign:'start'}}>
                            <Label>Rating : {favoritesMovie.imDbRating}</Label>
                            <br/>
                            <Label>Reviews No : {favoritesMovie.imDbRatingCount}</Label>
                            </Col>
                            <Button onClick={() => {
                            dispatch(MovieActions.removeFromFavorites(favoritesMovie))
                            }}>Remove From Favorites</Button>
                        </Row>
                        <hr/>
                        </li>
                    )
                })}
               </ol> : <div>No Favorites Movies Found</div>}
            </Card>
        </div>
    )
}

export default Favorites