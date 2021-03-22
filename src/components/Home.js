import React from 'react';
import {Link} from 'react-router-dom'


const Home = () =>{

      

    return (
        <div className='home-wrapper'>           
          <img
            className='home-image'
            src='./Assets/Pizza.jpg' 
            alt=''           
          />
          <Link to='/Form'>
            <button           
              className='md-button shop-button'
            >
             Order Pizza!
            </button>
         </Link>
         
        </div>
      )

}

export default Home;