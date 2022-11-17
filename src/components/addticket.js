import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function AddTicket(){
    const url = "http://localhost:3001/";

    const [dec, setDec] = useState('');
    const [users, setUsers] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`${url}customer`).then((result) => {
            setUsers(result.data['data']);
        });
    },[]);
        

    function handleChange(e){
        setDec(e.target.value);
    }

    function handleSubmit(){
        const obj = {
            msg: dec,
            user: user
        }

        axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));

        window.location.reload();
    }

    console.log(user);

    return(
        <div>
            Add ticket description (limit 300 characters)<br/>
            <textarea maxlength={300} onKeyUp={e => handleChange(e)}>
            </textarea>&nbsp;&nbsp;
            <select onChange={(e) => setUser(e.target.value)}>
                <option selected disabled>Select a patient</option>
                {
                    users ? users.map(i => {
                        return(
                            <option value={i}>{i}</option>
                        )
                    }) : <option></option>
                }
            </select>
            <br/>
            <>{dec.length} characters</><br/>
            <button type='button' onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}