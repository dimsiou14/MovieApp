import './App.css';
import React  from 'react';
import MovieRouter from './work/MovieRouter';
import { BrowserRouter } from "react-router-dom";
import store from './work/reduxWork/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <BrowserRouter>
          <MovieRouter/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
