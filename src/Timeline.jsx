import React from 'react';

const Timeline = props => {
    return props.chirps.map(chirp => {
        return (
            //if i wanted to make each chirp a random color, where would i put that?  
            //should be here, in the timeline.  
            <>
                <div className="card rounded shadow-lg my-4">
                    <div className='card-header'>
                        { <h3 className="card-title pt-2 text-secondary">{chirp.name}</h3>  /*would like to center the name */}
                    </div>
                    <div className='card-footer d-flex justify-content-left'>
                        <p>{chirp.message}</p>
                    </div>
                </div>
            </>
        )
    })
}

export default Timeline