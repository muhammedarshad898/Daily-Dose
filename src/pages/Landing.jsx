import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Landing() {
  return (
    <>
     <div className='container-fluid'>
        <Row>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
          <h2>Put Your Weight Down,</h2>
          <h3>You Have My Shoulders...</h3>
          <div className='d-grid mt-3'>
<Link className='btn btn-info'to={'/dash'}>Share Your Thoughts</Link>
</div>
          </Col>
          <Col>
          <img src="https://th.bing.com/th/id/R.acf594287f297ab6d446eb185671ddea?rik=Y43KIKjfpOna9Q&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f554b7010e4b0c3fd9cedc82a%2ft%2f5f5f780d63c71e3d4273ab5e%2f1600092177718%2fshutterstock_1673444641-scaled.jpg%3fformat%3d1500w&ehk=JLMzbfz3J%2fu3%2fnf4O73%2b1BUGeTTq0C4bym9CK%2bgUSu4%3d&risl=&pid=ImgRaw&r=0" className='img-fluid' alt="" />
          </Col>
        </Row>
        
      </div>
      <div className='mt-5 row container-fluid justify-content-around'>
      <Card style={{ width: '18rem' }} className='p-0 my-2'>
      <Card.Img variant="top" style={{height:"200px"}} src="https://www.reallusion.com/ContentStore/CTA/Pack/G3HumanMotions-SocialEmoticons/images/Feature2_Emotions.gif" />
      <Card.Body>
        <Card.Title>Better To Spit It</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='p-0 my-2'>
      <Card.Img variant="top" style={{height:"200px"}}  src="https://cdn-icons-gif.flaticon.com/9534/9534939.gif" />
      <Card.Body>
        <Card.Title>Seek Help</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='p-0 my-2'>
      <Card.Img variant="top" style={{height:"200px"}}  src="https://www.gifcen.com/wp-content/uploads/2023/07/feeling-better-gif-6.gif" />
      <Card.Body>
        <Card.Title>Feel Better</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>
      <div className='container-fluid mt-5'>
<Row>
  <Col className='d-flex flex-column justify-content-center align-items-center'>
  <h2 className=''>Hey!!! How was Your Day?</h2>
  <h2 className='mt-2'>Write your own history and capture a lifetime of memories.</h2>
  <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptatum placeat ducimus harum beatae fuga voluptates recusandae praesentium, dolor rem culpa facilis aliquam inventore perferendis sed iusto ipsa magni! Tempora.</p>
  <div className='d-grid mt-3'>
<Link className='btn btn-info'to={'/dash'}>Lets Go</Link>
</div>
  </Col>
  <Col><img src="https://media.istockphoto.com/vectors/the-boy-writes-vector-id1208080665?k=6&m=1208080665&s=612x612&w=0&h=pTBFQR735iAV3OoH8tYP7Tm4EfMSLwha-Hi-qoJ_D9o=" className='img-fluid' alt="" /></Col>
</Row>
      </div>
    </>
  )
}

export default Landing