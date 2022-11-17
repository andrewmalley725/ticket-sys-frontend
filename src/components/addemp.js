import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddEmp(){
    const url = "http://localhost:3001/";
    const [userName, setUser] = useState();
    const [empFirst, setFirst] = useState();
    const [empLast, setLast] = useState();

    function handleSubmit(){

        let obj = {
            userName: userName,
            first: empFirst,
            last: empLast
        }

        axios.post(`${url}addemp`, obj).then(() => console.log('Employee added'));
        window.location.reload()
    
    }
    console.log(userName);
    console.log(empFirst);
    console.log(empLast);

    return (
        <div>
                Enter employee username: <input type='text' name='username' onKeyUp={e => setUser(e.target.value)}/><br/>
                Enter employee first name: <input type='text' name='first' onKeyUp={e => setFirst(e.target.value)}/><br/>
                Enter employee last name: <input type='text' name='last' onKeyUp={e => setLast(e.target.value)}/><br/>
                <button type='button' onClick={() => handleSubmit()}>Create Account</button>
        </div>
    )

}