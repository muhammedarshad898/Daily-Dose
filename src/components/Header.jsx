import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href=""><i className="fa-solid fa-feather fa-bounce fa-xl" style={{color: "#f1e9e9",}} />
            
            {' '}
            Daily Dose
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header