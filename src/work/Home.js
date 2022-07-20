import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, CardTitle, Col, Label, Navbar, Row} from 'reactstrap'
import { MovieActions } from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';
import toast  from 'react-hot-toast';

const Home = () => {

    const dispatch = useDispatch()
    const movies =  useSelector((state) => (state.movies.top10movies))
    const favoritesMovies = useSelector(state => state.movies.top10favorites)

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

        const data = [
            {
            id:"tt0111161",
            rank:1,
            title:"The Shawshank Redemption",
            fullTitle:"The Shawshank Redemption (1994)",
            year:1994,
            image:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
            imDbRating:9.2,
            imDbRatingCount:2612004
            },
            {
                id:"tt0068646",
                rank:2,
                title:"The Godfather",
                fullTitle:"The Godfather (1972)",
                year:1972,
                image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
                crew:"Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
                imDbRating:9.2,
                imDbRatingCount:1807603
            },
            {
                id:"tt0468569",
                rank:3,
                title:"The Dark Knight",
                fullTitle:"The Dark Knight (2008)",
                year:2008,
                image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                crew:"Christopher Nolan (dir.), Christian Bale, Heath Ledger",
                imDbRating:9.0,
                imDbRatingCount:2584093
            },
            {
                id:"tt0071562",
                rank:4,
                title:"The Godfather Part II",
                fullTitle:"The Godfather Part II (1974)",
                year:1974,
                image:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
                crew:"Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
                imDbRating:9.0,
                imDbRatingCount:1243189
            },
            {id:"tt0050083",
            rank:5,
            title:"12 Angry Men",
            fullTitle:"12 Angry Men (1957)",
            year:1957,
            image:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
            imDbRating:8.9,
            imDbRatingCount:771855
        },
        {
            id:"tt0108052",
            rank:6,
            title:"Schindler's List",
            fullTitle:"Schindler's List (1993)",
            year:1993,
            image:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
            imDbRating:8.9,
            imDbRatingCount:1327596
        },{
            id:"tt0167260",
            rank:7,
            title:"The Lord of the Rings: The Return of the King",
            fullTitle:"The Lord of the Rings: The Return of the King (2003)",
            year:200,
            image:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
            imDbRating:8.9,
            imDbRatingCount:1792899
        },
        {
            id:"tt0110912",
            rank:8,
            title:"Pulp Fiction",
            fullTitle:"Pulp Fiction (1994)",
            year:1994,
            image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Quentin Tarantino (dir.), John Travolta, Uma Thurman",
            imDbRating:8.9,
            imDbRatingCount:2001283
        },
        {
            id:"tt0120737",
            rank:9,
            title:"The Lord of the Rings: The Fellowship of the Ring",
            fullTitle:"The Lord of the Rings: The Fellowship of the Ring (2001)",
            year:2001,
            image:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Peter Jackson (dir.), Elijah Wood, Ian McKellen",
            imDbRating:8.8,
            imDbRatingCount:1813988
        },
        {
            id:"tt0060196",
            rank:10,
            title:"The Good, the Bad and the Ugly",
            fullTitle:"The Good, the Bad and the Ugly (1966)",
            year:196,
            image:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
            imDbRating:8.8,
            imDbRatingCount:748307
        },
        {
            id:"mm0111161",
            rank:11,
            title:"The Shawshank Redemption",
            fullTitle:"The Shawshank Redemption (1994)",
            year:1994,
            image:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
            imDbRating:9.2,
            imDbRatingCount:2612004
            },
            {
                id:"mm0068646",
                rank:12,
                title:"The Godfather",
                fullTitle:"The Godfather (1972)",
                year:1972,
                image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
                crew:"Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
                imDbRating:9.2,
                imDbRatingCount:1807603
            },
            {
                id:"mm0468569",
                rank:13,
                title:"The Dark Knight",
                fullTitle:"The Dark Knight (2008)",
                year:2008,
                image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                crew:"Christopher Nolan (dir.), Christian Bale, Heath Ledger",
                imDbRating:9.0,
                imDbRatingCount:2584093
            },
            {
                id:"mm0071562",
                rank:14,
                title:"The Godfather Part II",
                fullTitle:"The Godfather Part II (1974)",
                year:1974,
                image:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
                crew:"Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
                imDbRating:9.0,
                imDbRatingCount:1243189
            },
            {id:"mm0050083",
            rank:15,
            title:"12 Angry Men",
            fullTitle:"12 Angry Men (1957)",
            year:1957,
            image:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
            imDbRating:8.9,
            imDbRatingCount:771855
        },
        {
            id:"mm0108052",
            rank:16,
            title:"Schindler's List",
            fullTitle:"Schindler's List (1993)",
            year:1993,
            image:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
            imDbRating:8.9,
            imDbRatingCount:1327596
        },{
            id:"mm0167260",
            rank:17,
            title:"The Lord of the Rings: The Return of the King",
            fullTitle:"The Lord of the Rings: The Return of the King (2003)",
            year:200,
            image:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
            imDbRating:8.9,
            imDbRatingCount:1792899
        },
        {
            id:"mm0110912",
            rank:18,
            title:"Pulp Fiction",
            fullTitle:"Pulp Fiction (1994)",
            year:1994,
            image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Quentin Tarantino (dir.), John Travolta, Uma Thurman",
            imDbRating:8.9,
            imDbRatingCount:2001283
        },
        {
            id:"mm0120737",
            rank:19,
            title:"The Lord of the Rings: The Fellowship of the Ring",
            fullTitle:"The Lord of the Rings: The Fellowship of the Ring (2001)",
            year:2001,
            image:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Peter Jackson (dir.), Elijah Wood, Ian McKellen",
            imDbRating:8.8,
            imDbRatingCount:1813988
        },
        {
            id:"mm0060196",
            rank:20,
            title:"The Good, the Bad and the Ugly",
            fullTitle:"The Good, the Bad and the Ugly (1966)",
            year:196,
            image:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            crew:"Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
            imDbRating:8.8,
            imDbRatingCount:748307
        }
    ]
        dispatch(MovieActions.setMovies(data))
        
    }, [])
    
    return (
    <div style={{height:'97vh', width:'97vw'}}>
                    <Navbar className='nav d-flex justify-content-between' style={{background:'darkcyan', marginTop:'2vh', borderRadius:'5rem', width:'50vw', marginLeft:'25vw'}}>
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
            <CardBody >
            <CardTitle tag="h4" >Top 10 Movies</CardTitle>
                {movies.length ? <div className='container-fluid' style={{marginTop:'5vh'}}>
                <Row sm={3} md={4} lg={5}>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                        <Col sm={5}>
                        <img src={movie.image} alt={movie.id} />
                        <span>{movie.title}</span>
                        </Col>
                        </div>
                    )
                })}
                </Row>
                </div> : <div>No Movies Found</div>}
                <CardTitle tag="h4">Top 10 Favorites</CardTitle>

                {favoritesMovies.length ? <div className='container-fluid' style={{marginTop:'5vh'}}>
                <Row sm={3} md={4} lg={5}>
                {favoritesMovies.map((favoritesMovie) => {
                     return (
                        <div key={favoritesMovie.id}>
                        <Col sm={5}>
                        <img src={favoritesMovie.image} alt={favoritesMovie.id} />
                        <span>{favoritesMovie.title}</span>
                        </Col>
                        </div>
                    )
                })}
                </Row>
                </div> : <div>No Favorites Movies Found</div>}
            </CardBody>
        </Card> 
        
    </div>
    )
}

export default Home