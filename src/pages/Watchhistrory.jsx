import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { deleteVideofromHistoryApi, getVideofromHistoryApi } from '../../services/allApi'
import { Table } from 'react-bootstrap'

function Watchhistrory() {
  const [videoHistory,setVideoHistory]=useState([])
  const getHistory = async () => {
    const result = await getVideofromHistoryApi()
    
    if(result.status>=200 &&result.status<300){
      setVideoHistory(result.data)
    }
   
  }
  const deleteHistory=async(id)=>{
    const result =await deleteVideofromHistoryApi(id)
    console.log(result);
    getHistory()
  }
  console.log(videoHistory);
  useEffect(() => {
    getHistory()
  },[])
  return (
    <>

      <div className='d-flex mt-5 p-3 w-100'>
        <h5 className='p-5 ms-md-5' >Watch History</h5>
        <h6 className='ms-auto p-5 me-md-5' ><Link to={'/home'} style={{ color: 'white', textDecoration: 'none' }}><FontAwesomeIcon icon={faArrowLeft} />Back to Home<FontAwesomeIcon icon={faHouse} /></Link></h6>
      </div>

      <div className="row w-100">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        {videoHistory?.length>0?
          <Table className=' table table-borderd table-light '>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {videoHistory?.map((item,index)=>(<tr>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
                <td>{item?.timeStamp}</td>
                <td><button className='btn btn-danger' onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>))}
              
            </tbody>
          </Table>
          :
          <p className='text-warning fs-5'>No watch History</p>}


        </div>
        <div className="col-md-2"></div>
      </div>


    </>


  )
}

export default Watchhistrory