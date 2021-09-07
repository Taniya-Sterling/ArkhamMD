import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import fetchData from './api/api'
import StaffComponent from './components/Staff';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch
// } from 'react-router-dom';


// const [userTodos, setUserTodos] = useState([]);

const App = () => {
    return (
        <div>
            return (
            <div>
            <StaffComponent/>
            </div>
            )   
            
        </div>
    )
 
}

ReactDOM.render(<App/>,document.getElementById('App'))