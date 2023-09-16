import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import { CardComponent } from './components/TaskCard/TaskCard';
import { colors } from './components/Colors/colors';
import { useState } from 'react';
import ModalComponent from './components/Modal/Modal';
function App() {
  const data = [
    {
      id: "T-1",
      taskname: "Create a Design System for Enum Workspace.",
      categories: "Todo",
      text:"How Do You Do",
      date: new Date(2022, 5, 23).toLocaleDateString(),
    },
    {
      id: "T-2",
      taskname: "12 Create a Design System for Enum Workspace.",
      categories: "In Progress",
      text:"Nice weather we are having today",
      date: new Date(2022, 7, 24).toLocaleDateString(),
    },
    {
      id: "T-3",
      taskname: "12 Create a Design System for Enum Workspace.",
      categories: "In Progress",
      text:"Sekiro",
      date: new Date(2022, 7, 24).toLocaleDateString(),
    },
    {
      id: "T-4",
      taskname: "12 Create a Design System for Enum Workspace.",
      categories: "In Progress",
      text: "Work work",
      date: new Date(2022, 7, 24).toLocaleDateString(),
    },
    {
      id: "T-5",
      taskname: "12 Create a Design System for Enum Workspace.",
      categories: "In Progress",
      text:"Work again",
      date: new Date(2022, 7, 24).toLocaleDateString(),
    },
    {
      id: "T-6",
      taskname: "12 Create a Design System for Enum Workspace.",
      categories: "In Progress",
      text:"Do you like swimming?",
      date: new Date("2022, 7, 24").toLocaleDateString(),
    },
  ];

  const [tasks,setTasks]=useState(data);
  const [isOpen,setIsOpen]=useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [taskId,setTaskId]=useState("");
  const [isEditing,setIsEditing]=useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


  function savedChanges(data) {
    if (isEditing) {
      const newData = {
        id: taskId,
        taskname: data.taskname,
        text: data.text,
        categories: data.categories,
        date: data.date,
      };
  
      const updatedTasks = tasks.map((currentTask) => {
        if (currentTask.id === taskId) {
          return newData;
        }
        return currentTask;
      });
  
      setTasks(updatedTasks);
      setIsEditing(false); 
    } else {
      const newData = {
        id: `T-${tasks.length + 1}`,
        taskname: data.taskname,
        text: data.text,
        categories: data.categories,
        date: data.date,
      };
  
      setTasks([...tasks, newData]);
    }
  }
  


  function clickedCardDelete(id){

    const filter=tasks.filter((tasks)=>tasks.id!==id);

    setTasks(filter);
  }


  const filteredTasks =
    selectedCategory === 'All'
      ? tasks 
      : tasks.filter((task) => task.categories === selectedCategory);


      const handleSavedId=(id)=>{

        setTaskId(id);
      }

  return (
    <div>
      <div>
     <NavbarComponent show={setIsOpen}
     filter={handleCategorySelect}
     />
     
      <div/>
    <div className='row wrap justify-content-center'>
      { isOpen && <ModalComponent 
      saveChanges={savedChanges}
      CloseModal={setIsOpen}
      show={setIsOpen}


      />}
      {filteredTasks.map((element) => (
        <CardComponent
          key={element.id}
          id={element.id}
          taskname={element.taskname} 
          text={element.text}
          colors={colors(element.categories)}
          status={element.categories}
          date={element.date}
          show={setIsOpen}
          changeCard={handleSavedId}
          deleteCard={clickedCardDelete}
          isEditing={setIsEditing}
        />
      ))}

      </div>
    </div>
    </div>
  );
}

export default App;
