import './App.css';
import React  from 'react';
import MovieRouter from './work/MovieRouter';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
