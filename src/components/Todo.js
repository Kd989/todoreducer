import React, { useState } from 'react'
import Header from './Header';
const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])
    const addItem = () => {

        if (!inputData) {

        } else {
            setInputData("")
            setItems([...items, inputData]);
        }



    }

    const deleitem = (id) => {
        const updateItem = items.filter((e, i) => {
            return(
                i !== id
            )
        })
        setItems(updateItem)
    }

    // remove all 
    const removeAll =() =>{
        setItems([])
    }
    return (
        <>
            <div id="todos">
                <Header />
                <div className="todo-input-container">
                    <input className="todo_input" type="text" placeholder="Add Task..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <i className="fas fa-plus add-item" onClick={addItem}></i>
                    {/* <i className="fas fa-trash-alt add-item deleteBtn" ></i> */}
                </div>
                <div className='showitems'>
                    {
                        items.map((e, i) => {
                            return (
                                <div className='eachitems' key={i}>
                                    <h3>{e}</h3>
                                    <i className="fa-solid fa-trash-can" onClick={() => deleitem(i)}></i>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='itemsbtn'>
                    <button className='btn effect04' data-sm-link-text="Remove all" onClick={removeAll}>
                        <span>check list</span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Todo
