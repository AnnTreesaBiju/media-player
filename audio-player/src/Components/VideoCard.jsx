import React from 'react'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { deleteVideo} from '../services/allAPI';
import { addHistory } from '../services/allAPI';
// geting props
function VideoCard({ displayData, setDeleteVideoStatus ,insideCategory}) {
  // modal sate
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    // get caption and liink by destructring
    const { caption, embedlink } = displayData
    // generate time date
    let today = new Date()
    const timeStamp = Intl.DateTimeFormat("en-us", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(today)
let reqBody={
  caption, embedlink,timeStamp
}
await addHistory(reqBody)

  }
  // fun for delete
  const handleDelete = async (id) => {
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag started");
    e.dataTransfer.setData("cardid",id)
  }
  return (
    <>
      {/* card */}
      {displayData &&
        <Card className='mt-3' draggable onDragStart={(e)=>{dragStarted(e,displayData?.id)}}>
          <Card.Img onClick={handleShow} className='w-100' style={{ height: "150px" }} variant="top" src={displayData?.url} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center '>
              <h6>{displayData?.caption}</h6>
              { insideCategory?"": <button onClick={() => handleDelete(displayData?.id)} className="btn align-items-center"><i className="fa-solid fa-trash"></i></button>}
            </Card.Title>
          </Card.Body>
        </Card>}
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height={"300px"} src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard