import React, { useState } from 'react';
import {
    PokeCardList,
    ProgressBar,
    Form
} from '../../components/utils';

const HomePage = () => {

    const pokeDataLocalStorage =  [JSON.parse(localStorage.getItem('pokeData')) ];
    const [ pokeData, setPokeData ] = useState();
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
        setPokeQuery('');
    }

    return (
        <main id="homepage-parent-container">
            {/* <form className='searchbar-parent-container'>
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
            </form> */}

           {/*  <ProgressBar 
                complete="50"
            /> */}

            <Form />

        {/* PokeCardList displays a list of  PokeCards: */}
           {/*  <PokeCardList 
                pokeData={pokeData}
                setPokeData={setPokeData}
                pokeDataLocalStorage={pokeDataLocalStorage}
            /> */}
            

        </main>
    );
};

export default HomePage;