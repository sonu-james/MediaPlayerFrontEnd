import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Video from './Video'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AvideoApi, addCategoryApi, allCategoryApi, deleteCategoryApi, upadateCategoryApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';




function Category({dragStatus,setdragStatus}) {

  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("")
  const [allCategory,setallCategory] =useState("")
  const [addStatus,setAddStatus]=useState(false)

  const handleClose = () => {
    setShow(false)
    setCategoryName("")
  };
  const handleShow = () => setShow(true);

  const addCategory = async() => {
    if(CategoryName)
      {
        const reqBody={
          CategoryName,
          allVideos:[]
  
        }
        const result = await addCategoryApi(reqBody)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          setAddStatus(true)
          handleClose()
          toast.success('Category added Successfully')
        }
      else {
        console.log(result);
      }   
    }
    else{
      toast.info('plz add the category name')
    } 
  }

  const getAllCategory = async() => {
    const result = await allCategoryApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setallCategory(result.data)
    }
    
  }

  const deleteCategory=async(id)=>{
    const result=await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()
  }

  const DragOver=(e)=>{
      e.preventDefault()
  }
    const VideoDrop=async(e,CategoryId)=>{
    console.log('Category id',CategoryId);
    //to access the video id from view comonent
    const videoId=e.dataTransfer.getData("videoId")
    console.log('video id is',videoId);
    //get video details from backend
    // const videoDetails=await AvideoApi(videoId)
    //   console.log(videoDetails);
    const {data}=await AvideoApi(videoId)
    console.log(data);
    const selectedCategory=allCategory.find((item)=>item.id==CategoryId) 
  if(selectedCategory.allVideos.find((item)=>item.id==data.id)){
    toast.warning('video already existed in Category')
  }
  else{
    selectedCategory.allVideos.push(data)
    await upadateCategoryApi(CategoryId,selectedCategory)
    getAllCategory()

  }
  }
  
  console.log(allCategory);

  const DragStart=(e,videoId,CategoryId)=>{
    console.log(videoId);
    console.log(CategoryId);
    let dataShare = {
      videoId ,CategoryId

    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
  }
  useEffect(()=>{
    setAddStatus(false)
    getAllCategory()
    setdragStatus(false)
  },[addStatus,dragStatus])


 
  return (
    <>
      <div className='w-100 mt-md-1 mt-5 p-4'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add new Category<FontAwesomeIcon icon={faPlus} /></button>
      </div>

     
    {allCategory?.length>0?
    allCategory.map((item)=>(<div className='mt-md-5 mt-2'>
      <div className='border border-secondary mt-3 rounded p-3  ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>VideoDrop(e,item?.id)}>
        <div className='d-flex'>
          <h6>{item.CategoryName}</h6>
          <button onClick= {()=>deleteCategory(item.id)}className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
        <Row>
        {
        item?.allVideos?.length>0?
        item.allVideos?.map((videoItem)=>(<Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
           <Video displayVideo={videoItem} isPresent={true}/>
           </Col>))
        :null
        }
        </Row>
       
      </div>
    </div>))
    :null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' />
    </>

  )
}

export default Category