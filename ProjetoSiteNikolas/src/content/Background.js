import React, { useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import './css/Background.css'



function Background() {

    
    
  return (
    <React.Fragment>
        <BrowserRouter>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
     </div >
        </BrowserRouter>
    </React.Fragment>
  )
}

export default Background