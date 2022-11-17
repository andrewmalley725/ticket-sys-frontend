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
      const [ID, setID] = useState();
      const [emp, setEmp] = useState();

      useEffect(() => {
        axios.get(`${url}employee`).then(result => {
           setData(result.data['data']);
        })
      },[])

      function handleChange(e, index){
        setID(props.data[parseInt(index)]['ticketid']);
        setEmp(e.target.value);
      }

      function handleClick(){
        const obj = {
            id: ID,
            emp: emp
        }
        axios.post(`${url}completed`, obj).then(() => console.log('Marked as complete'));

        window.location.reload();
      }

      console.log(emp);
      console.log(ID);

      return(
          <div>
              <table>
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
                                <select onChange={(e) => handleChange(e,key)}>
                                    <option selected disabled>Completed by</option>
                                    {
                                        names && names.length > 0 ? names.map(i => {
                                            return(
                                                <option value={i}>{i}</option>
                                            )
                                        }) : <option></option>   
                                    }
                                </select>
                            </td>
                            <td>
                                {
                                    emp ? <button type='button' onClick={() => handleClick()}>Apply</button> : <></>
                                }
                            </td>
                          </tr>
                      );
                      })
                  }
              </table>
          </div>
      )
  }