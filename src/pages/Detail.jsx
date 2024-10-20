import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Detail() {
  const {id} =useParams()
  const users = useSelector((state) => state.Usersreducer);
  const userdetail=users.find(f=>f.id==id)
 
  const[thought,setthought]=useState(userdetail.thought || '')
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"90vh"}}>
<div className='w-75 border border-shadow container-fluid'>
  <h2 className='text-center mt-5 mb-5'>Take Your pen</h2>
  <p
            className=""
            style={{ textAlign: "justify" }}>{userdetail.thought}
           
           
          </p>


 
  <div className='d-flex'>
    <button className='btn btn-success my-3 me-3 ms-3'>save</button>
    <Link to={'/dash'} className='btn btn-info my-3'>Back</Link>
    <button className='btn btn-secondary mt-3 ms-3' style={{height:"50px"}}><i className="fa-solid fa-thumbs-up fa-xl" style={{color: "#26519c",}} /></button>
    <button className='btn btn-secondary mt-3 ms-3' style={{height:"50px"}}><i className="fa-solid fa-thumbs-down fa-xl" style={{color: "#26519c",}} /></button>
  </div>
</div>
   </div>
    </>
  )
}

export default Detail