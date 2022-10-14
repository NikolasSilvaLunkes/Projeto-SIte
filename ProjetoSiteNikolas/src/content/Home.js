import React, { useEffect } from 'react'
import NavbarHeader from './NavbarHeader'
import {BrowserRouter} from 'react-router-dom'
import './css/Home.css'
import SocialMedia from './SocialMedia'



function home() {

    
    
  return (
    <React.Fragment>
        <BrowserRouter>
        <div className='Body HomeBody'>
          
        <NavbarHeader/>
            <div className='Contact home-paragraph WhiteText text-center'>
            <h1>Other Websites</h1>
              <p className='WhiteText'>
                This is currently my first open project
              </p>
            </div>
            
            <div className='SocialMedia home-paragraph WhiteText text-center'>
                <h1>Social Media</h1>
                 <div className='Linkedin text-center'>
                  <SocialMedia/>
                 </div>
            </div>  
        </div>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default home