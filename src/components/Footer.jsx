import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
function Footer() {
  return (
    <>
    <div className='container-fluid p-5 bg-info mt-5'>
    <Row>
      <Col>
      <div>
        <h3 style={{color:"white"}}>Its My Day</h3>
        <p style={{textAlign:"justify",color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos provident odit dignissimos modi voluptate enim, atque cupiditate suscipit sapiente tenetur eligendi exercitationem aspernatur qui dicta expedita doloremque nobis est.</p>
      </div>
      </Col>
      <Col>
      <div>
        <h3 style={{color:"white"}}>Links</h3>
        <div className='d-flex flex-column'>
        <Link to={'/'} style={{color:"black"}}>Landing</Link>
        <Link to={'/dash'} style={{color:"black"}}>Dashboard</Link>
        <Link to={'/detail'} style={{color:"black"}}>View Detail</Link>
        </div>
        

      </div>
      </Col>
      <Col>
      <h3 style={{color:"white"}}>contact us</h3>
      <p style={{color:"white"}}>itsmyday2024@gmail.com</p>
      <textarea name="" className='form-control bg-light' id=""></textarea>
      <button className='btn btn-success mt-2'>send</button>
      </Col>
   
      
  
    </Row>

   </div>
    </>
  )
}

export default Footer