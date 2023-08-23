import { useState } from "react";

const Hello = function() {
    const[name, setName]  = useState('hong');
    function changeName() {
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
    }
    return(
        <div>
            <h1>State</h1>
            <h1>{name}</h1>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}

export default Hello;