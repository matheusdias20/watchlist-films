import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Estado Inicial
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};


// Criando Contexto
export const GlobalContext = createContext(initialState);


// Componentes do Provedor
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Salvar no LocalStorage do navegador
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state])

    // Ações
    const addMovieToWatchlist =movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    //Remover filme(s) do Watchlist
    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };

    //Adicionar filme(s) para Watched
    const addMovieToWatched = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    }

    //Mover para o Watchlist
    const moveToWatchlist = movie => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
    };

    //Remover filme(s) do Watched
    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
      };

    return (
        <GlobalContext.Provider value={{ 
            watchlist: state.watchlist, 
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,
        }}>
            { props.children }
        </GlobalContext.Provider>
    )
};