import './index.css' 

const TodoItem=props=>{
      const{todo,deltodo}=props 
      const{id,title}=todo 

      const ondel=()=>{
        deltodo(id)
      } 
      return(
        <li>
            <p>{title}</p> 
            <button type='button' onClick={ondel}>
                Delete
            </button>
        </li>
      )
} 

export default TodoItem