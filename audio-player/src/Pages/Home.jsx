import React, { useState } from 'react'
import Add from '../Components/Add';
import Category from '../Components/Category';
import View from '../Components/View';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function Home() {
  // state lifting :-data sharing btm sibling
//  so we created a common state in theri parent and share state to who wants the data
// and share the updating vlaue to who sharing data 
  const [uploadVideoServerResponse, setUploadVideoServerResponse]=useState({});

  return (
    <>
      <div className="container d-flex mt-5 mb-5 justify-content-between ">
        <div className="add"> <Add setUploadVideoServerResponse={setUploadVideoServerResponse} /></div>
        <Link className='fs-5' to={'/watch-history'} style={{ color: "white", textDecoration: "none" }}>Watch History</Link>
      </div>
     
      <Row className='w-100 container ms-5'>
        <Col className='col-lg-8 ms-5'>
          <h3>All Videos</h3>
          <div className="view"> <View uploadVideoServerResponse={uploadVideoServerResponse} /></div>
        </Col>
        <Col></Col>
        <Col className='col-lg-3 ms-4'>
          <Category />
        </Col>
      </Row>
    </>
  )
}

export default Home