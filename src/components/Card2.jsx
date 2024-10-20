import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteusers } from '../Redux/Userslice';
import { toast } from 'react-toastify';

const Card2 = () => {
  const users = useSelector((state) => state.Usersreducer);

  console.log('Users:', users);
  const dispatch=useDispatch()
  const handledelete=(id)=>{
   

    dispatch(deleteusers({id}))
    toast.success('Deleted Successfully')

  }

  return (
    <>
    {Array.isArray(users) && users.length > 0 ? (
      users.map((item, index) => (
        <Card key={index} style={{ width: '18rem' }} className="p-0 my-2">
          <Card.Img variant="top" style={{ height: "200px" }} src={item.emojiurl} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.email}</Card.Text>
            <div className="d-flex justify-content-around">
              <Link
                className="btn btn-secondary"
                to={`/detail/${item.id}`}
              >
                <i className="fa-solid fa-eye fa-xl" />
              </Link>
              <Link
                className="btn btn-secondary"
                to={`/edit/${item.id}`}
              >
                <i className="fa-solid fa-pen-to-square fa-xl" style={{ color: "#FFD43B" }} />
              </Link>
              <button className="btn btn-secondary" onClick={()=>handledelete(item.id)}>
                  <i className="fa-solid fa-trash fa-xl" style={{ color: "#e10e43" }} />
                </button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
};

export default Card2;


