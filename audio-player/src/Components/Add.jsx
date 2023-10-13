import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { uploadVidea } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({ setUploadVideoServerResponse }) {
  const [video, setVideo] = useState(
    { id: "", caption: "", url: "", embedlink: "" }
  )

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractUrl = (e) => {
    const { value } = e.target
    if (value) {
      const embed = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({ ...video, embedlink: embed })
    } else {
      setVideo({ ...video, embedlink: "" })
    }
  }
  const handleUpload = async () => {
    const { id, caption, url, embedlink } = video
    if (!id || !caption || !url || !embedlink) {
     toast.warning("Please Fill the Form Completely")
    } else {
      // make api call
      const response = await uploadVidea(video)
      // status check
      if (response.status >= 200 && response.status < 300) {
        toast.success(`"${response.data.caption}" Video uploaded succesfully `)
        // state lifting
        setUploadVideoServerResponse(response.data)
        setVideo({id: "", caption: "", url: "", embedlink: "" })
        // hide modal
        handleClose()
      } else {
        toast.error("Uploading error....Perform the action after sometime!!")
      }
    }
  }

  console.log(video);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn"><i class="fa-solid fa-circle-plus fs-5"></i></button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload a Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please Fill the Form</p>
            <Form className='border p-3 rounded'>
              <Form.Group onChange={(e) => setVideo({ ...video, id: e.target.value })} className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video ID" />
              </Form.Group>
              <Form.Group onChange={(e) => setVideo({ ...video, caption: e.target.value })} className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption " />
              </Form.Group>
              <Form.Group onChange={(e) => setVideo({ ...video, url: e.target.value })} className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image URL" />
              </Form.Group>
              <Form.Group onChange={(e) => extractUrl(e)} className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Youtube Video Link" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer 
      position='top-center'
      autoClose='3000'
      theme='colored'/>
    </>
  )
}

export default Add