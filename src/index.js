import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import fetchData from './api/api'
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch
// } from 'react-router-dom';


// const [userTodos, setUserTodos] = useState([]);

const App = () => {
    const [users, setUsers] = useState([]);
    fetchData('?results=5')
    // .then(users => {
    //   setUserList(users)})
    // useEffect(() => {
       
    //       })
    //       .catch(error => {
    //         // something something errors
    //       });
    //   }, []);
    

    return (
        <div>
            <div>ArkhamMD</div>
            
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'))