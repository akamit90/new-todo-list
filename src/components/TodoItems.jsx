import TodoItem from "./TodoItem";
const TodoItems=({todoItems,onDeleteClick})=>{
    return ( 
    <>
    {todoItems.map(item=>
    <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} 
    onDeleteClick={onDeleteClick}/>)}
    
    </>
    );
}

export default TodoItems;