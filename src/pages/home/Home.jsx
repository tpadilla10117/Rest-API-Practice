import React, { useState, useEffect } from 'react';
import {
    PokeCardList,
    ProgressBar,
    Form
} from '../../components/utils';

const HomePage = () => {

    const pokeDataLocalStorage =  [JSON.parse(localStorage.getItem('pokeData')) ];
    const [ pokeData, setPokeData ] = useState();
    const [ pokeQuery, setPokeQuery ] = useState('');

/* Pokemon (endpoint): */
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
    };

/* useEffect handles initial fetch, and loading of data: */
    /* useEffect(() => {
        const savedPokeData = localStorage.getItem('pokeData');
        if (savedPokeData) {
            setPokeData([JSON.parse(savedPokeData)]);
        } else {
            fetch(`${BASE_URL}bulbasaur`)
            .then(response => response.json()
            .then(response => {
                let initialData = JSON.stringify(response);
                localStorage.setItem('pokeData', initialData);
                setPokeData([response]);
            }));
        }
        
    }, []); */

    /* useEffect(() => {
        const savedPokeData = localStorage.getItem('pokeData');
        if (savedPokeData) {
            setPokeData([JSON.parse(savedPokeData)]);
        } else {
            fetch(`${BASE_URL}bulbasaur`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(response => response.json()
            .then(response => {
                let initialData = JSON.stringify(response);
                localStorage.setItem('pokeData', initialData);
                setPokeData([response]);
            }));
        }
        
    }, []); */

    useEffect(() => {
        const fetchPokeData = async () => {
          const savedPokeData = localStorage.getItem('pokeData');
          if (savedPokeData) {
            setPokeData([JSON.parse(savedPokeData)]);
          } else {
            try {
              const response = await fetch(`${BASE_URL}bulbasaur`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                }
              });
              const data = await response.json();
              let initialData = JSON.stringify(data);
              localStorage.setItem('pokeData', initialData);
              setPokeData([data]);
            } catch (error) {
              console.log(error);
            }
          }
        };
      
        fetchPokeData();
      }, []);

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

           {/*  <ProgressBar 
                complete="50"
            /> */}

            {/* <Form /> */}

        {/* PokeCardList displays a list of  PokeCards: */}

        {pokeData ? 
        
    
            <PokeCardList 
                pokeData={pokeData}
                setPokeData={setPokeData}
                pokeDataLocalStorage={pokeDataLocalStorage}
            />

            :

            <p>No Pokemon Data!!!</p>
        }
        

        </main>
    );
};

export default HomePage;