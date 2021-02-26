import React from 'react';

const Submit = (props) => {
    return (
        <>
            <div class="form-group">
                <input type="text"
                    class="form-control"
                    id="firstInput"
                    placeholder="What's your name?"
                    onChange={props.newUser} />
            </div>
            <div class="form-group">
                <textarea class="form-control"
                    id="secondInput"
                    placeholder="bless the world with your inane ramblings!"
                    onChange={props.newChirp}>

                </textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-secondary" onClick={() =>props.handleSubmit ()}>Submit</button>
        </>
    );

};

export default Submit;