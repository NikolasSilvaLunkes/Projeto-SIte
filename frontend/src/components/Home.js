import React from 'react'
import './css/Home.css'

import NavbarHeader from './NavbarHeader'
import SocialMedia from './SocialMedia'
export const Home = () => {
  return (
    <React.Fragment>
        <div className='Body HomeBody'>
          
            <div className='Contact home-paragraph WhiteText text-center'>
            <h1>Other Websites</h1>
              <p className='WhiteText'>
                This is currently my first open projects
              </p>
            </div>
            
            <div className='SocialMedia home-paragraph WhiteText text-center'>
                <h1>Social Media</h1>
                <SocialMedia/>
                 <div className='Linkedin'>
                  
                 </div>
            </div>  
        </div>
    </React.Fragment>
  )
}
