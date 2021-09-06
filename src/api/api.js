
import axios from 'axios';



// export async function getPls () {
//     axios.get(BASE_URL).then((response) => response.json())
//     .then((function(data){
//         console.log(data))}
//     )
//           }
// fetchData()

function fetchData(path){
    
    fetch('https://randomuser.me/api/' + path ).then((response) => (response.json()))
    .then(function(data){
        console.log(data)
    })
}

// export async function getUsers() {
 
  export default fetchData;

// import TokenUtilities from './token';