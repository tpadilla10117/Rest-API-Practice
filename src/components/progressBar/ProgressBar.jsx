import React, { useState, useEffect } from 'react';

function ProgressBar( /* { complete } */) {

    const [ style, setStyle ] = useState({});
    const [ complete, setComplete ] = useState(10)


    useEffect( () => {
        setTimeout( () => {
            const newProgressStyles = {
                opacity: 1,
                width: `${complete}%`,
                maxWidth: '100%',
            }

            setStyle(newProgressStyles);
        }, 100);
    },[complete] )

    const incrementBar = () => {

        if(complete !== 100) {
            setComplete(complete + 10)
        };
        
    };
    

    return (

        <section className='progress-parent-container'>
            <div className='progress-complete' style={style} >
                {complete}%
            </div>

            <button onClick={incrementBar}>

                click
            </button>

        </section>

    )
}

export default ProgressBar;