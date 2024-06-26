import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="row w-100">
    <div className="col-md-1"></div>
    <div className="col-md-3">
    <h5 className='text-warning mt-5'> <FontAwesomeIcon icon={faVideo} beat className='me-4'/>Media Player</h5>
    <p className='my-5 'style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed tempora maxime placeat laborum, totam, reprehenderit aspernatur natus ratione cupiditate nihil sunt, tenetur voluptates molestias repellat a amet illo perferendis.</p>
    </div>
    <div className="col-md-2 d-md-flex justify-content-center ">
        <div className='mt-5 '>
        <h4 className='mb-3'>Links</h4>
        <p><Link to={'/'}>Landing Page</Link></p>
        <p><Link to={'/home'}>Home  Page</Link></p>
        <p><Link to={'/watch-history'} >Watch Histroy</Link></p>
        </div>
        
    </div>
    <div className="col-md-2">
    <h4 className='mt-5'>Guides</h4>
    <p className='mt-4'>React</p>
    <p>React Bootstap</p>
    <p>Bootswatch</p>

    </div>
    <div className="col-md-3">
        <h4 className='mt-5'>Contact Us</h4>
        <div className='d-flex justify-content-center text-align-center mt-3'>
        <input type="text" className='rounded'placeholder='Email Id' />
        <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className="d-flex mt-4 justify-content-between">
        <FontAwesomeIcon icon={faInstagram} size='3x1'/>
        <FontAwesomeIcon icon={faFacebook} size='3x1'/>
        <FontAwesomeIcon icon={faTwitter} size='3x1'/>
        <FontAwesomeIcon icon={faLinkedin}size='3x1' />
        </div>
        
    </div>
    <div className="col-md-1">

    </div>
  </div>
  )
}

export default Footer