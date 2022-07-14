import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, CardTitle, Col, Label, Navbar, Row} from 'reactstrap'
import { MovieActions } from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch()
    const movies =  useSelector((state) => (state.movies.movieList))
    const favoritesMovies = useSelector(state => state.movies.favorites)

    const data = [
        {
            id:1,
            title:"Tsitsi",
            duration:"2hrs",
            rate:10,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:2,
            title:"Ele",
            duration:"2hrs",
            rate:10,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:3,
            title:"Dim",
            duration:"2hrs",
            rate:7,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:4,
            title:"Kostas",
            duration:"2hrs",
            rate:6,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:5,
            title:"Diana",
            duration:"2hrs",
            rate:10,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:6,
            title:"dadada",
            duration:"2hrs",
            rate:6,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:7,
            title:"Tsigqrwgqwgqrwgtsi",
            duration:"3hrs",
            rate:9.5,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:8,
            title:"Tsdadfadfitsi",
            duration:"2hrs",
            rate:6,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:9,
            title:"grwgherTsitsi",
            duration:"4hrs",
            rate:3,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:10,
            title:"nvjvjv",
            duration:"3hrs",
            rate:5,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },

    ]

    useEffect(() => {
        dispatch(MovieActions.setMovies(data))
        dispatch(MovieActions.addToFavorites(data))
    }, [])
    
    return (
    <div className="d-flex justify-content-between" style={{height:'100vh', width:'100vw'}}>
        <Navbar className='nav d-flex justify-content-between' >
            <Row style={{background:'orange', marginTop:'2vh'}}>
                
                    <Col>
                    <Link to={"/"}> Home </Link>
                    </Col>

                    <Col>
                    <Link to={"/movies"}> Movies </Link>
                    </Col>

                    <Col>
                    <Link to={"/favorites"}> Favorites </Link>
                    </Col>

            </Row>
        </Navbar>
        <Card style={{marginTop:'10vh', height:'50vh', width:'100vw'}}>
            <CardBody style={{overflowY:'scroll'}}>
            <CardTitle tag="h4" style={{alignSelf:'start'}}>Movies</CardTitle>
                <ul>
                {movies.map((movie) => {
                    return (
                        <li>
                        <Row key={movie.id}>
                            <Label>{movie.title}</Label>
                            <br/>
                            <Label>{movie.rate}</Label>
                            <br/>
                            <p>{movie.summary}</p>
                            <hr/>
                        </Row>
                        </li>
                    )
                })}
                </ul>
                <CardTitle tag="h4" style={{alignSelf:'start'}}>Favorites</CardTitle>
                <ul>
                {favoritesMovies.map((favoritesMovie) => {
                    return (
                        <li>
                        <Row key={favoritesMovie.id}>
                            <Label>{favoritesMovie.title}</Label>
                            <br/>
                            <Label>{favoritesMovie.rate}</Label>
                            <br/>
                            <p>{favoritesMovie.summary}</p>
                            <hr/>
                        </Row>
                        </li>
                    )
                })}
                </ul>
            </CardBody>
        </Card> 
        
    </div>
    )
}

export default Home