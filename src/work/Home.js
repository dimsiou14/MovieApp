import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, CardTitle, Col, Label, Navbar, Row} from 'reactstrap'
import { MovieActions } from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';
import toast  from 'react-hot-toast';

const Home = () => {

    const dispatch = useDispatch()
    const movies =  useSelector((state) => (state.movies.movieList))
    const favoritesMovies = useSelector(state => state.movies.favorites)

    useEffect(() => {
        const toastFetchingMovies =  toast.loading("Fetching Movies...")
        Promise.all([fetch(`https://imdb-api.com/en/API/Top250Movies/k_6y8bwi5t`)]).then((res) => {
            if (res[0].ok) {
                return Promise.all([res[0].json()])
            }
            throw new Error("Something unexpected happened..!")
        }).then((res) => {
            const responseMoviesFromApi = res[0].items
            console.log(responseMoviesFromApi)
            const TwentyMovies = []
            for (let i = 0; i < 20; i++) {
                
                TwentyMovies.push(responseMoviesFromApi[i])
            }
            dispatch(MovieActions.setMovies(TwentyMovies))
            toast.dismiss(toastFetchingMovies)
            toast.success("Movies have been loaded succefully !")
        }).catch(() => {
            toast.dismiss(toastFetchingMovies)
            toast.error("Failed to load the movies from api !")
        })
        
    }, [])
    
    return (
    <div className="d-flex justify-content-between" style={{height:'100vh', width:'100vw'}}>
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
            <CardBody >
            <CardTitle tag="h4" style={{alignSelf:'start'}}>Movies</CardTitle>
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
                        </Row>
                        <hr/>
                        </li>
                    )
                })}
                </ol> : <div>No Movies Found</div>}
                <CardTitle tag="h4" style={{alignSelf:'start'}}>Favorites</CardTitle>

                {favoritesMovies.length ? <ol>
                {favoritesMovies.map((favoritesMovie) => {
                    return (
                        <li  key={favoritesMovie.id}>
                        <Row>
                            <Col style={{textAlign:'start'}}>
                                <img src={favoritesMovie.image} alt={`imageOfMovie${favoritesMovie.id}`} width="25px" height="25px"/>
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
                        </Row>
                        <hr/>
                        </li>
                    )
                })}
                </ol> : <div>No Favorites Movies Found</div>}
            </CardBody>
        </Card> 
        
    </div>
    )
}

export default Home