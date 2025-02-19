import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { RecipeProvider } from './context/RecipeContext';

ReactDOM.render(
    <BrowserRouter>
        <RecipeProvider>
            <App />
        </RecipeProvider>
    </BrowserRouter>


    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

