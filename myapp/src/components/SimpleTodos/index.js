import TodoItem from "../TodoItem";
import { Component } from "react"; 
import './index.css' 


const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ] 


class SimpleTodos extends Component{
    state={todoList:initialTodosList} 

    deletetodo=id=>{
        const {todoList}=this.state 
        const update=todoList.filter(each=>each.id!==id) 
        this.setState({todoList:update})
    }

    render(){
        const {todoList}=this.state
        return(
            <div className="main-bg">
                <div className="card">
                    <h1>SimpleTodos</h1> 

                    <ul>
                       {todoList.map(each=>(<TodoItem key={each.id} todo={each} deltodo={this.deletetodo}/>))} 
                    </ul>
                </div>
            </div>
        )
    }
} 

export default SimpleTodos