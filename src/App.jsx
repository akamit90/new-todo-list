import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import  "./App.css"
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
 
const [todoItems,setTodoItems]=useState([]);

const hendelNewItem=(itemName,itemDueDate)=>{
  if (itemName.length==0) {
    alert("Enter item name");
    return;
  }
  else{
  if (itemDueDate.length==0) {
    alert("Enter due date");
    return;
  }
  else{
    const newTodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}];
  setTodoItems(newTodoItems);
  }
  }
  
};

const handelDeleteItem=(todoItemName)=>{
  const newTodoItems = todoItems.filter((item)=>item.name !== todoItemName);
  setTodoItems(newTodoItems);
}

  return <center className="todo-container">
        <AppName/>
        <AddTodo onNewItem={hendelNewItem}/>
        {todoItems.length===0 && <WelcomeMessage/>}
        <TodoItems todoItems={todoItems} onDeleteClick={handelDeleteItem} />
      </center>

}

export default App 
