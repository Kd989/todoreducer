import React from 'react'
import { ACTIONS } from './Todo'
const Todolist = ({todo,dispatch}) => {
   
    return (
        <div>
            <div className='eachitems'>
                <h3 style={{textDecoration:todo.complete?"line-through":null}}>{todo.inputData}</h3>
                
                <div className="icons">

               <i className="fa-solid fa-trash-can" onClick={()=>dispatch({type: ACTIONS.DEL_TODO,payload:{
                id: todo.id
               }})}></i>
               <i className="fa-solid fa-pen-to-square" onClick={()=>dispatch({type: ACTIONS.TOGGLE_TODO,payload:{
                id: todo.id
               }})}></i>
                </div>
          
                
            </div>
        </div>
    )
}

export default Todolist
