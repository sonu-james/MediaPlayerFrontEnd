import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { addToHistoryApi, deleteVideoApi } from '../../services/allApi';

function Video({displayVideo,setDeleteVideoStatus,isPresent}) {
  

  console.log(displayVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true);
    let caption =displayVideo?.caption
    let url=displayVideo?.url
    let time=new Date()
    let timeStamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp);
    const reqBody ={
      caption,url,timeStamp
    }
    const result =await addToHistoryApi(reqBody)
    console.log(result);
  }
  const handleDelete = async(id)=>{
    const result =await deleteVideoApi(id)
    console.log(result);
    if(result.status >=200 && result.status <300){
      setDeleteVideoStatus(result.data)
    }
   
  }
  const  videoDrag=(e,id)=>{
    console.log("card dragged:",id);
    e.dataTransfer.setData("videoId",id)
  }
    
  return (
    <>

      <Card style={{ width: '100%' }} className='mt-4 ' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
        {!isPresent && <Card.Img onClick={handleShow} variant="top" src={displayVideo?.image} width={'100%'} height={'300px'} />}
        <Card.Body className='d-flex'>
          <Card.Title>{displayVideo?.caption}</Card.Title>
          <Card.Text>

          </Card.Text>
         {!isPresent && <button className='btn btn-danger ms-auto ' onClick={()=>handleDelete(displayVideo?.id)}><FontAwesomeIcon icon={faTrashCan} /> </button>}
        </Card.Body>
      </Card>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="487" src={`${displayVideo?.url}?autoplay=1`} title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>

      </Modal>
    </>
  )
}

export default Video