import React, { useEffect, useState } from 'react';
import '../styles/styles.css'

export default function NavBar(){
    return(
        <ul>
            <li><a href="/">Open Tickets</a></li>
            <li><a href="/addemp">Add Employee</a></li>
            <li><a href="#">Add Customer</a></li>
            <li><a href="#">Add Ticket</a></li>
        </ul>
    )
}