import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
// hook:-useNavigate :-used to navigation/redirection
// return method for chaing the location
// fun comp. react feature kodukan
  const navigateNyUrl= useNavigate("")
  // function
  const navigate=()=>{
  navigateNyUrl('/home')
  }
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between'>
        <Col></Col>
        <Col className lg={4}>
          <h3 className='mb-3'>Welcome to<span className='text-primary'> Media Player </span></h3>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at iusto eaque, aperiam facere dolorum labore nostrum alias provident omnis ex, blanditiis sed itaque esse ut iste rem! Eos, incidunt?</p>
          <button onClick={navigate} className="btn btn-primary fw-bolder "> Get Started</button>
        </Col>
        <Col className='ps-5' lg={6}>
          <img className='img-fluid  ms-5 ps-5' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>
      <div className="container mt-5 mb-5 justify-content-center align-items-center d-flex flex-column">
        <h3>Features</h3>
        <div className="container d-flex mt-5 mb-5  w-100  justify-content-between align-items-center ">
          <Card style={{ width: '20rem' }}>
            <Card.Img height={"300px"} width={"300px"} variant="top" src="https://i.gifer.com/origin/5e/5e1256a5a34e5f9c6e9b8942ef933de6_w200.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


          <Card style={{ width: '20rem' }}>
            <Card.Img height={"300px"} width={"300px"} variant="top" src="https://media0.giphy.com/media/1bG7bbKHn8Rtm5FOdO/giphy.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img height={"300px"} width={"300px"} variant="top" src="https://i.gifer.com/origin/5e/5e1256a5a34e5f9c6e9b8942ef933de6_w200.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container d-flex mt-5 mb-5 p-5 w-100 border border-primary rounded justify-content-between align-items-center">
        <div className='conteant'>
          <h3 className='text-primary mb-3'>Simple,Faste and Powerful</h3>
          <h6> <span className="fs-5 fw-bolder">Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et doloribus non nihil, unde est eligendi maxime corporis architecto eum reprehenderit.</h6>
          <h6 className='mt-4'> <span className="fs-5 fw-bolder">Categories Videos : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et doloribus non nihil, unde est eligendi maxime corporis architecto eum reprehenderit.</h6>
          <h6 className='mt-4'> <span className="fs-5 fw-bolder">Managing History : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et doloribus non nihil, unde est eligendi maxime corporis architecto eum reprehenderit.</h6>
        </div>
        <div className="vedio ms-5">
          <iframe width="500" height="300" src="https://www.youtube.com/embed/0JrPtzT8LXo" title="ENTRY NO.MSC105/ STRENNA 2020" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage