import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { colorsComponent } from '../Colors/colors';

function ModalComponents(props) {
  const [taskname,setTaskname]=useState("");
  const [date,setDate]=useState("");
  const [categories,setCategories]=useState("");
  const [text,setText]=useState("");

  
  
  
  
  let categoryList=["Finished","In Progress","Todo","Blocked","On Hold",
  
  "Cancelled","Pending"
]

const handleDate=(e)=>{
  setDate(e.target.value)
}


  const handleCategories=(e)=>{
    setCategories(e.target.value)

  }

  const handleTaskname=(e)=>{
    setTaskname(e.target.value);
  }

  const handleText=(e)=>{
    setText(e.target.value)
  }

  const handleSave=()=>{

    const data={
      taskname:taskname,
      date:new Date(date).toLocaleDateString(),
      categories:categories,
      text:text
    }

    props.saveChanges(data);

    props.CloseModal(false);
  }

   const handleClose=()=>{

    props.CloseModal(false)

   }

  
   

  return (
    <>
      <Modal show={props.show} onHide={props.CloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task name</Form.Label>
              <Form.Control
                onChange={handleTaskname}
                value={taskname}
                type="text"
                placeholder="go shopping"
                autoFocus
              />
              <Form.Label className='my-1'>Select a date</Form.Label>
              <Form.Control
                className='my-1'
                onChange={handleDate}
                value={date}
                type="date"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label className='my-1'>Form Categories</Form.Label>
            <select
                className="form-select"
                onChange={handleCategories}
                value={categories}
               
              >
                {categoryList.map((listItem)=>
                  (<option style={{backgroundColor:colorsComponent(listItem)}}
                  key={listItem} value={listItem} 
                  >{listItem}
                  </option>))
                }
              </select>

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control onChange={handleText} value={text} as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponents;