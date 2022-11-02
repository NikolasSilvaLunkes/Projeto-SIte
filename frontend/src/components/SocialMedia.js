import React, { useEffect } from 'react'
import './css/SocialMedia.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'




function SocialMedia() {



  return (
    <div className="text-6xl SocButtonDiv">
      <a href='https://www.linkedin.com/in/nikolas-silva-lunkes-31ab321a2/' className='socialButtonLinks'><FontAwesomeIcon className='linkButton' icon={faLinkedin}/></a>
      <a href='https://www.linkedin.com/in/nikolas-silva-lunkes-31ab321a2/' className='socialButtonLinks'><FontAwesomeIcon className='linkButton' icon={faGithub}/></a>
    </div>
  )
}

export default SocialMedia