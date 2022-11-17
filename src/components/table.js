import axios from 'axios';
import React, { useEffect, useState } from 'react';

function getHeaders(data){
    let keys = [];
    for (let i of Object.keys(data)){
      for (let j of Object.keys(data[i])){
        if (!keys.includes(j)){
          keys.push(j);
        }
      }
    }
    return keys;
  }
  
  export default function Table(props){

      const url = "http://localhost:3001/";

      let head = getHeaders(props.data);

      const [names, setData] = useState();

      useEffect(() => {
        axios.get(`${url}employee`).then(result => {
           setData(result.data['data']);
        })
      },[])

      console.log(names);

      return(
          <div>
              <table className='styled-table'>
                  <tr>
                      {
                          head.map(header => {
                          return (
                              <th>{header}</th>
                          );
                          })
                      }
                  </tr>
                  {
                      Object.keys(props.data).map(key => {
                      return (
                          <tr>
                              {
                                  head.map(header => {
                                  return(
                                      <td>{props.data[key][header]}</td>
                                  )
                                  })
                              }
                            <td>
                                <select>
                                    <option selected disabled>Compleated by</option>
                                    {
                                        names && names.length > 0 ? names.map(i => {
                                            return(
                                                <option value={i}>{i}</option>
                                            )
                                        }) : <option></option>
                                    }
                                </select>
                            </td>
                          </tr>
                      );
                      })
                  }
              </table>
          </div>
      )
  }