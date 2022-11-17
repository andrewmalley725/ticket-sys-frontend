import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Closed(){
    const url = "http://localhost:3001/";
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`${url}closedtickets`).then(result => {
            setData(result.data['data']);
        });
    },[]);

    console.log(data);

    return(
        <div>
            {
                data && data.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            {
                                Object.keys(data[0]).map(i => {
                                    return(
                                        <th>{i}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(row => {
                                return(
                                    <tr>
                                        {
                                            Object.keys(row).map(column => {
                                                return(
                                                    <td>{row[column]}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> : <h1>No Data to Display</h1>
            }
            
        </div>
    )
}