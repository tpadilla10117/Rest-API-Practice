import { EnergySavingsLeafTwoTone, EventNoteTwoTone } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import {
    PokeCardList
} from '../../components/utils';

const HomePage = () => {

    /* 
        1) Call the api with a fetch / GET request
        2) Save rreturned info in application state and local Storage
            - if the state exists in localStorage, use that for app state
            - else run an api call
        3) Create a search bar
            - Pending on result of search (which yields an API call), save results of user query to state and local storage
    */

    const [ pokeData, setPokeData ] = useState([]);
    const [ pokeQuery, setPokeQuery ] = useState('');

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const pokeQueryHandler = (event) => {
        setPokeQuery(event.target.value);
    };

    const fetchPokeData = async (input) => {
        fetch(`${BASE_URL}${pokeQuery}`)
        .then(result => result.json()
        .then(result => {
            let savedPokeData = JSON.stringify(result);
            localStorage.setItem('pokeData', savedPokeData);
            setPokeData([result]);
        }))
    };

    const pokeQuerySubmitHandler = (event) => {
        event.preventDefault();
        fetchPokeData(pokeQuery);
    }

   
    /* fetchPokeData(); */
    console.log('HEre is my pokeData: ', pokeData)


    return (
        <main id="homepage-parent-container">
            <form className='searchbar-parent-container'>
                <input
                    type='text'
                    id='searchbar'
                    className='searchbar'
                    placeholder='Enter some text'
                    value={pokeQuery}
                    onChange={pokeQueryHandler}
                />
                <label htmlFor='searchbar'/>
                <button
                    className='searchbar-btn'
                    type='submit'
                    onClick={pokeQuerySubmitHandler}
                >
                    Search
                </button>                
            </form>

        {/* PokeCardList displays a list of  PokeCards: */}
            <PokeCardList 
                pokeData={pokeData}
                setPokeData={setPokeData}
            />
            

        </main>
    );
};

export default HomePage;