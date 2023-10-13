import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI';

function View({uploadVideoServerResponse}) {
  // state lifting:- state for deleting
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const [view, setView] = useState([])
  // fun for api call
  const manageView = async () => {
    // funcall
    const { data } = await getAllVideos()
    setView(data);

  }
  // it render insatily loading page
  useEffect(() => {
    setDeleteVideoStatus(false)
    manageView()
    // to render :-pass vlaue of state to it
  }, [uploadVideoServerResponse,deleteVideoStatus])
  console.log(view);
  return (
    <div>
      <Row>
        {view.length > 0 ?
          view.map(video => (<Col sm={12} md={6} lg={4} xl={3}>
            {/* data sharing through state lifiing */}
            <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </Col>))
          : <p>Nothing to display</p>
        }

      </Row>
    </div>
  )
}

export default View