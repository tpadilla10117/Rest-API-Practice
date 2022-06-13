import React, { useState, useEffect } from 'react';

function ProgressBar( { incrementBar, complete, setComplete }) {

    const [ style, setStyle ] = useState({});
    /* const [ complete, setComplete ] = useState(0) */


    useEffect( () => {
        setTimeout( () => {
            const newProgressStyles = {
                opacity: 1,
                width: `${complete}%`,
                maxWidth: '100%',
                minWidth: '0%'
            }

            setStyle(newProgressStyles);
        }, 100);
        
    },[complete, incrementBar] )

   /*  const incrementBar = () => {

        if(complete !== 100) {
            setComplete(complete + 25)
        };
        
    }; */
    

    return (

        <section className='progress-parent-container'>
            <div className='progress-complete' style={style} >
                {complete}%
            </div>

            {/* <button onClick={incrementBar}>

                click
            </button> */}

        </section>

    )
}

export default ProgressBar;