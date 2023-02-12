import React from 'react'
import './brand.css'
import {google , atlassian , slack , shopify , dropbox} from './import' ;

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={atlassian} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Google" />
      </div>
      <div>
        <img src={dropbox} alt="Google" />
      </div>
      <div>
        <img src={shopify} alt="Google" />
      </div>
    </div>
  )
}

export default Brand
