import React, {useState, useEffect} from 'react';
import fetchData from '../api/api'


const StaffComponent = () => {

    const [StaffList, setStaffList] = useState([]);
    useEffect( async function (){
        try{
          const response = await fetchData('?results=5')
          const data = await response.json();
          console.log(data);
        }catch (error) {
          console.error(error);
        }


        const Staffelements = StaffList.map((Staff,i) =>     
            <div key={`Staff-id-${i}`}>  
            <p>Name: {staff.name.first} </p>
            console.log(Staffelements)
            </div>);


    return(
        <div>
            <h1 id = 'Staff'> Staff </h1> 
            <div  className = 'Staff-container'>
            < StaffComponent />
            </div>
        </div>
        
    )   
    
})}

    export default (StaffComponent)
/* <header>
  <h1>ArkhamMD</h1>
</header>

<nav>
  <ul>
	  <li><a href="#">Login</a></li>
	  <li><a href="#">HOME</a></li>
	  <li><a href="#">Staff</a></li>
    <li><a href="#">Patient info</a></li>
  </ul>
</nav>

<section>
  <h2>Section Title</h2>
  <article class = 'staff box'>
    <h3>Staff and Personnel </h3>
    <p>lorem ipsum si imet delor</p>
  </article>
</section>

<footer>
  <p>&copy; 2014 Wayne Enterprises. All rights reserved.</p> -->
</footer> */

// <div id="app"></div>

