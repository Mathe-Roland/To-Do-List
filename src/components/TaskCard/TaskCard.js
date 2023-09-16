import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import "./TaskCard.css";

export function CardComponent(props) {
  const variant = 'white';


  const handleChangeCard=()=>{

  

    props.changeCard(props.id);
    props.show(true);
    props.isEditing(true);

  }

  function deleteCard(){
   
    props.deleteCard(props.id);
  }
 

  return (

    <>
      <Card
        bg={variant}
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2 mx-3"
      >
        <Card.Header>{props.id}</Card.Header>
        <span style={{backgroundColor:props.colors}}>{props.status}</span>
        <Card.Body>
          <Card.Title>{props.taskname}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <div className='flex'>
          <Button size="sm" className='mx-2' onClick={handleChangeCard}>Change task</Button>
          <Button size="sm" className='mx-2' onClick={deleteCard}>Delete task</Button>

          </div>
        <Card.Footer className='d-flex justify-content-end my-3'>
          {props.date}
         </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}

