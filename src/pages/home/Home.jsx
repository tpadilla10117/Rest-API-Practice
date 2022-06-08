import React from 'react';
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
   

    return (
        <main id="homepage-parent-container">
            <section className='searchbar-parent-container'>
                <input
                    id='searchbar'
                    className='searchbar'
                    placeholder='Enter some text'
                />
                <label htmlFor='searchbar'/>                
            </section>

            {/* TODO: PokecardList component to display Pokecards */}
            <PokeCardList 
            
            />
            

        </main>
    );
};

export default HomePage;