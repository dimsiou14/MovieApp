import React  from 'react';
import Home from "./Home"
import Movies from "./Movies"
import Favorites from "./Favorites"
import { useRoutes } from 'react-router-dom';

const MovieRouter = () => {
    
    const routes = useRoutes([

        { 
            path: "/",  
            element: <Home />, 
            index:true
        },
        {
            path: "/movies",  
            element: <Movies />
            },
        { 
            path: "/favorites",  
            element: <Favorites />
        }

    ])

    return routes
}

export default MovieRouter