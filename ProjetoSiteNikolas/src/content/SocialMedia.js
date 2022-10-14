import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './css/SocialMedia.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'




function SocialMedia() {



  return (
    <div className="text-6xl ">
      <a href='https://www.linkedin.com/in/nikolas-silva-lunkes-31ab321a2/' className='socialButtonLinks'><FontAwesomeIcon className='visited:text-white hover:text-blue-500 self-center self-auto place-self-center' icon={faLinkedin}/></a>
      <a href='https://www.linkedin.com/in/nikolas-silva-lunkes-31ab321a2/' className='socialButtonLinks'><FontAwesomeIcon className='visited:text-white-600 text-white-500 hover:text-purple-500 self-center self-auto place-self-center pl-4' icon={faGithub}/></a>
    </div>
  )
}

export default SocialMedia