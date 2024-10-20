import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateusers } from '../Redux/Userslice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {
  const navigate=useNavigate()
  const {id} =useParams()
  const users = useSelector((state) => state.Usersreducer);
  const edituser=users.find(f=>f.id==id)
  if(!edituser){
    return <div>user is not found</div>
  }
  
  const[uthought,setthought]=useState(edituser.thought)
  const dispatch=useDispatch()
  const handleupdate=(event)=>{
    event.preventDefault()
    navigate(`/detail/${id}`);

    dispatch(updateusers({
      id:id,
      thought:uthought
    }
  ))
  toast.success('Updated Successfully')
  }
  return (
   <>
   <div className='d-flex justify-content-center align-items-center' style={{minHeight:"90vh"}}>
<div className='w-75 border border-shadow container-fluid'>
  <h2 className='text-center mt-5 mb-5'>Take Your pen</h2>
  <textarea name="" id="" className='w-100' value={uthought} onChange={e=>setthought(e.target.value)} style={{border:"none"}}></textarea>


  <div className='d-flex'>
    <button className='btn btn-success my-3 me-3 ms-3' onClick={handleupdate}>save</button>
    <Link to={'/dash'} className='btn btn-info my-3'>Back</Link>
    <button className='btn btn-secondary mt-3 ms-3' style={{height:"50px"}}><i className="fa-solid fa-thumbs-up fa-xl" style={{color: "#26519c",}} /></button>
    <button className='btn btn-secondary mt-3 ms-3' style={{height:"50px"}}><i className="fa-solid fa-thumbs-down fa-xl" style={{color: "#26519c",}} /></button>
  </div>
</div>
   </div>
   
   </>
  )
}

export default Edit