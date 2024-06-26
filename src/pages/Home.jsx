import React, { useState } from 'react'
import Header from '../component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Add from '../component/Add'
import Category from '../component/Category'
import View from '../component/View'




function Home() {
  const [addstatus,setAddStatus]=useState([])
  const [dragStatus,setdragStatus]=useState(false)
  return (
   <>
   <div className="d-flex m-5">
    
    <Add setAddStatus={setAddStatus}/>
    <h5 className='ms-auto mt-1'> <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}} >Watch History <FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
   </div>
   <div className="row w-100">
    <div className="col-md-9">
      <h4 className='ms-5'>All Videos</h4>
    <View addstatus={addstatus} setdragStatus={setdragStatus}/>
    </div>
    <div className="col-md-3">
    <Category dragStatus={dragStatus} setdragStatus={setdragStatus}/>
    </div>
   
   </div>
   </>
  )
}

export default Home