import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from './Video'
import { allCategoryApi, getVideoApi, upadateCategoryApi } from '../../services/allApi'

function View({addstatus,setdragStatus}) {

  const [videoDetails,setVideoDetails]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState([])
   
  const getvideo = async() => {
    const result= await getVideoApi()
    console.log(result.data);
    setVideoDetails(result.data)
  }

const DragOver=(e)=>{
  e.preventDefault()
}
const videoDrop =async(e)=>{
const {videoId,CategoryId}=JSON.parse(e.dataTransfer.getData("dataShared"))
console.log(videoId,CategoryId);
//get all category
const {data}=await allCategoryApi()
console.log(data);
//get selected cagegory
const selectedCategory=data.find((item)=>item.id==CategoryId)
console.log(selectedCategory);
//remove video from selected category
const result=selectedCategory.allVideos.filter((item)=>item.id==videoId)

const reqBody={
  CategoryName:selectedCategory.CategoryName,
  allVideos:result,
  id:selectedCategory.id
}
await upadateCategoryApi(CategoryId,reqBody)
setdragStatus(true)
}

  useEffect(()=>{
    getvideo()
  },[addstatus,deleteVideoStatus])
  return (

    <Row className=' ms-md-0 w-100' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>
      {videoDetails?.length>0?
      videoDetails?.map((item)=>(<Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-center justify-content-center '  >
        <Video displayVideo = {item} setDeleteVideoStatus = {setDeleteVideoStatus}/>
      </Col>))
      
      :
    <p className='text-warning fs-5 mt-4 mx-5'>No video yet Uploaded</p>}
    </Row>
  )
}

export default View