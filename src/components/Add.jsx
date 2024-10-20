import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addusers } from '../Redux/Userslice';
import { toast } from 'react-toastify';


function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[name ,setname]=useState('')
    const[email,setemail]=useState('')
    const[emojiurl,setemojiurl]=useState('')
    const[thought,setthought]=useState('')
    const dispatch=useDispatch()
    const users = useSelector((state) => state.Usersreducer);
   const adddata=(event)=>{
    event.preventDefault()
    setShow(false)
    dispatch(addusers({id:users[users.length-1].id+1, name,email,emojiurl,thought}))
    toast.success('Uploaded Sucessfully')
   }
  return (
    
    <>
     <button className='btn btn-success me-3' onClick={handleShow}>ADD+</button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Add Your Day</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <input type="text" className='form-control my-3' onChange={e=>setname(e.target.value)} placeholder='Enter your Name' />
          <input type="text" className='form-control mb-3 'onChange={e=>setemail(e.target.value)}  placeholder='Enter Your Email' />
          <input type="text" className='form-control mb-3' onChange={e=>setemojiurl(e.target.value)}  placeholder='Enter Emoji URL' />
          <textarea name="" id="" className='form-control mb-3' onChange={e=>setthought(e.target.value)}  placeholder='Write Your Thoughts'></textarea>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={adddata}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add