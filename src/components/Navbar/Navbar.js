import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { colors } from '../Colors/colors';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

function NavbarComponent(props) {



  let categoryList=["All","Finished","In Progress","Todo","Blocked","On Hold",

  "Cancelled","Pending"
]

  const [selectedCategory,setSelectedCategory]=useState("All");


const handleShow = () => {
  props.show(true);
};


  const handleselectedCategory=(category)=>{
    setSelectedCategory(category);

    props.filter(category);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Select a category</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"
            onSelect={handleselectedCategory} activeKey={selectedCategory}
           >
              

              {categoryList.map((categories)=>(
                <NavDropdown.Item
                style={{backgroundColor:colors(categories)}}
                key={categories}
                eventKey={categories}

                >
                {categories}
              </NavDropdown.Item>


              ))}


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
  
        <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
      </Container>
    </Navbar>
  );
}




export default NavbarComponent;