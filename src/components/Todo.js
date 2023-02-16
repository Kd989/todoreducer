import React, { useReducer, useState } from 'react'
import Header from './Header';
import Todolist from './Todolist';

export const ACTIONS = {
    ADD_TODO: "ADD",
    TOGGLE_TODO: 'TOGGLE-TODO',
    DEL_TODO: "del",
    Del_all: "DEL"
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            
            return [
                

                ...todos, newTodo(action.payload.inputData)
            ]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, complete: !todo.complete
                    }

                }
                return todo
            })
        case ACTIONS.DEL_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)


        case ACTIONS.Del_all:
            return []

        default:
            return todos


    }
}
const newTodo = (inputData) => {
    return {
        id: Date.now(),
        inputData: inputData,
        complete: false
    }
}

const Todo = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    // console.log(todos);
    const [inputData, setInputData] = useState("")

    const handleSubit = () => {
        if(!inputData){

        }else{
            dispatch({ type: ACTIONS.ADD_TODO, payload: { inputData: inputData } })
            setInputData("")
        }

        


    }
    return (
        <>
            <div id="todos">
                <Header />
                <div className="todo-input-container">
                    <input className="todo_input" type="text" placeholder="Add Task..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <i className="fas fa-plus add-item" onClick={handleSubit}></i>

                </div>
                <div className='showitems'>
                    {
                        todos.map(todo => {
                            return <Todolist key={todo.id} todo={todo} dispatch={dispatch} />
                        })
                    }

                </div>
                <div className='itemsbtn'>
                    <button className='btn effect04' data-sm-link-text="Removed all" onClick={() => dispatch({ type: ACTIONS.Del_all })}>
                        <span>check list</span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Todo
// todoreducer
