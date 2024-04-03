import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({onNewItem}){

  const [todoName,setTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");

  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  };
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  };
const handleAddButtononClicked=(event)=>{
  event.preventDefault();
  onNewItem(todoName,dueDate);
  setDueDate("");
  setTodoName("");
};

    return (
    <div className="container text-center">
          <form className="row kg-row" onSubmit={handleAddButtononClicked}  >
            <div className="col-6">
              <input type="text" placeholder="Enter todo here" value={todoName} onChange={handleNameChange}/>
            </div>
            <div className="col-4">
              <input type="date" value={dueDate} onChange={handleDateChange} />
            </div>
            <div className="col-2">
            <button type="submit"  className="btn btn-success kg-button">
              <IoMdAddCircleOutline/>
              </button>
            </div>
          </form>
        </div>
        );
}

export default AddTodo;