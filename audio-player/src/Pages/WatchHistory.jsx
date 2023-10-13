import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteHistory, getHistory } from '../services/allAPI';
function WatchHistory() {
  const [history, setHistory] = useState([])

  const getWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data);
  }
 
  useEffect(() => {
    getWatchHistory()
  }, [])

  const handleDeleteHistory= async(id)=>{
    // api call
    await  deleteHistory(id)
    // get all history
    getWatchHistory()
  }
  return (
    <div className='container mt-5 '>
      <div className='d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: "none", fontSize: "25px", color: "white" }}>  <i class="fa-solid fa-arrow-left-long fa-beat me-2"></i>Back to Home</Link>
      </div>
      <table className='mt-5 mb-5 p-5 container bg-light'>
        <thead >
          <tr>
            <th  className='pt-2 pb-2 ps-2'>#</th>
            <th  className='pt-2 pb-2'>Caption</th>
            <th  className='pt-2 pb-2'>URL</th>
            <th  className='pt-2 pb-2'>Time Stamp</th>
            <th   className='pt-2 pb-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          { history?.length>0?
          history?.map((item,index)=>(
            <tr>
            <td  className='pt-2 pb-2 ps-2'>{index+1}</td>
            <td  className='pt-2 pb-2'>{item?.caption}</td>
          <td  className='pt-2 pb-2'>  <a href={item?.embedlink} target='_blank'> {item?.embedlink}</a></td>
          <td  className='pt-2 pb-2'>{item?.timeStamp}</td>
          <td><button className='btn'><i onClick={()=>handleDeleteHistory(item?.id)} className="fa-solid fa-trash"></i></button></td>
          </tr>
          ))
            :<p>Nothing to display</p>}
        </tbody>
      </table>
    </div>
  )
}

export default WatchHistory