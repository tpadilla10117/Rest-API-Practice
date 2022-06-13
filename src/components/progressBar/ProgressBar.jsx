import React, { useState } from 'react';

function ProgressBar( { complete }) {

    const [ style, setStyle ] = useState({});

    setTimeout( () => {
        const newProgressStyles = {
            opacity: 1,
            width: `${complete}%`
        }

        setStyle(newProgressStyles);
    }, 1000);

    return (

        <section className='progress-parent-container'>
            <div className='progress-complete' style={style} >
                {complete}%
            </div>

        </section>

    )
}

export default ProgressBar;