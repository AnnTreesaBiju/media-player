import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { addCategory, deletCategory, getAVideo, getCategory, updateCategory } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';

function Category() {
  const [allCategory, setAllCategory] = useState([])
  // sate for geting catoger name
  const [catogeryName, setCatogeryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(catogeryName);
  // category add fun

  const handleAddCatogery = async () => {
    if (catogeryName) {
      const body = {
        catogeryName,
        allVideos: [""]
      }
      // api
      const response = await addCategory(body)
      if (response.status >= 200 && response.status < 300) {

        // hide modal
        handleClose()
        // state value update
        setCatogeryName("")

        handleGetCatogery()
      } else {
        toast.warning("Uploading error....Perform the action after sometime!!")
      }
    } else {
      toast.info("please Fill the Form")
    }
  }
  // category get fun
  const handleGetCatogery = async () => {
    const { data } = await getCategory()
    setAllCategory(data)
  }
  console.log(allCategory);

  // delet category
  const handeleDeleteCategory = async (id) => {
    // spi call
    await deletCategory(id)
    // get all catogery
    handleGetCatogery()
  }
 const dragOver = (e) => {
    console.log("drag over the Catogery ");
    e.preventDefault()
  }

const  videoDroped =async (e, categoryid) => {
    console.log("Insid category id", categoryid);
    const videoCardId = e.dataTransfer.getData("cardid")
    //console.log("video Card Id ",videoCardId);
    // get detalise of the video to be droped
    const {data}= await getAVideo(videoCardId)
   // console.log(data);
    // get detalis of catoger
    const selectedCategory=allCategory.find((item)=>item.id===categoryid)
   selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryid,selectedCategory)
    handleGetCatogery()
  }
  useEffect(() => {
    handleGetCatogery()
  }, [])
  return (
    <div>
      <button onClick={handleShow} className="btn btn-primary ps-5 pe-5">Add New Catogery</button>
      {
        allCategory?.length > 0 ? allCategory?.map(item => (
          <div className='p-3 mt-3 mb-3 border rounded  ' droppable onDragOver={(e) => { dragOver(e) }} onDrop={(e) => { videoDroped(e, item?.id) }}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item?.catogeryName}</h6>
              <button onClick={() => handeleDeleteCategory(item?.id)} className='btn'><i className="fa-solid fa-trash"></i></button>
            </div>
            {
              item?.allVideos&&
              <Row>
                {
                  item?.allVideos?.map(card =>(
                    <Col sm={12}  >
                    <VideoCard displayData={card} insideCategory={true}/>
                    </Col>
                  ))
                }
              </Row>
            }
          </div>
        )) : <p>Nothing to display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Catogery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border p-3 rounded'>
            <Form.Label>Enter Catogery Name  </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e) => { setCatogeryName(e.target.value) }} type="text" placeholder="Enter Catogery Name " />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCatogery} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position='top-center'
        autoClose='3000'
        theme='colored' />
    </div>
  )
}

export default Category