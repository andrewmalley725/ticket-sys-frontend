import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddCust(){
    const url = "http://localhost:3001/";
    const [userName, setUser] = useState();
    const [custFirst, setFirst] = useState();
    const [custLast, setLast] = useState();

    function handleSubmit(){

        let obj = {
            userName: userName,
            first: custFirst,
            last: custLast
        }

        axios.post(`${url}addcust`, obj).then(() => console.log('Customer added'));
        window.location.reload()
    
    }

    return (
        <div>
                Enter patient username: <input type='text' name='username' onKeyUp={e => setUser(e.target.value)}/><br/>
                Enter patient first name: <input type='text' name='first' onKeyUp={e => setFirst(e.target.value)}/><br/>
                Enter patient last name: <input type='text' name='last' onKeyUp={e => setLast(e.target.value)}/><br/>
                <button type='button' onClick={() => handleSubmit()}>Create Account</button>
        </div>
    )

}