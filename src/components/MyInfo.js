import React from 'react'

function MyInfo() {
    return (
        <div>
            <h1>Suresh Patil</h1>
            <p>The places I would like to visit.</p>
            <ol>
                <li style = {{color: 'red'}}>Grand Canyon</li>
                <li style = {{fontSize: 23}}>Seattle, WA</li>
                <li>Los Angeles, California</li>
            </ol>
        </div>
    );
}

export default MyInfo