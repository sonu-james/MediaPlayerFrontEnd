import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { addVideosApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  //create a state to hold data from input
  const [video, setVideo] = useState({
    caption: " ",
    image: " ",
    url: " "
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setVideo({
      caption: "",
      image: "",
      url: ""
    })

  }
  const handleShow = () => setShow(true);
  console.log(video);

  const validateLink = (e) => {
    console.log(e.target.value);
    const link = e.target.value
    if (link.endsWith('?feature=shared')) {
      const yTkey = link.slice(-26, -15)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })
    }
    else if (link.endsWith('https://youtu.be')) {
      const yTkey = link.slice(-17, -28)
      console.log(yTkey);
      let embedLink = `https://youtu.be/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })
    }

    else {
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      //https://youtu.be/0G2VxhV_gXM?si=mrjMzpEjDjtKf09o
      setVideo({ ...video, url: embedLink })
    }

  }


  // const handleUpload = async (e) => {

  //   e.preventDefault()
  //   const { caption, image, url} = video
  // //  console.log(video);

  //   if (!caption || !image || !url) {

  //     alert('Plz fill the form completely')
  //   }
  //   else {
  //     const result = await addVideosApi(video)
  //     console.log(result);

  //   }
  // }

  const handleUpload = async (e) => {
    e.preventDefault()
    const { caption, image, url } = video

    if (!caption || !image || !url) {
      toast.info('plz fill the form completely')
    
    }
    else {
      const result = await addVideosApi(video)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Successfully Uploaded")
        setAddStatus(result.data)
        handleClose()
      }
      else {
        toast.error("Something went wrong")
        handleClose()
      }
    }
  }

  return (
    <>
      <div className="d-flex ">
        <h5 className='mt-2 ms-2'>Upload new Video</h5>
        
        <button className='btn ' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='x1' /></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Plz Fill the following Details</p>
          <form action="" className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e) => setVideo({ ...video, image: e.target.value })} />
            <input type="text" placeholder='Video Url' className='form-control mt-3' onChange={(e) => validateLink(e)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' />
    </>
  )
}

export default Add