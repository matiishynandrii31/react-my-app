import React from 'react';
import Randoshow from '../randoshow/randoshow';

function Randonum() {
    let rand = Math.floor(Math.random() * Math.floor(100))
    return(
        <div>
            <Randoshow number={rand}/>
        </div>)
}

export default Randonum ;