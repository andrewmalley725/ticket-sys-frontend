import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './table';

export default function AddTicket(){
    const url = "http://localhost:3001/";

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`${url}view`).then(result => {
            setData(result.data['data']);
        });
    },[]);

    console.log(data);

    return(
        data && data.length > 0 ? <Table data={data}/> : <h1>No data to diplay</h1>
    );
}