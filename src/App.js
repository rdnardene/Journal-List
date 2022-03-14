import React, { useState, useEffect } from 'react'
import { ViewRecord } from './components/ViewRecord';


//GETTING THE VALUES IN LOCAL STORAGE
const getData = () => {

  const datas = localStorage.getItem('todos');

  if (datas) {
    return JSON.parse(datas);
  }
  else {
    return [];
  }
}



export const App = () => {

    // ARRAY OF OBJECT STATES
  const [todos, setTodos] = useState(getData());


    // INPUT FIELDS STATES HERE!!!

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [thought, setThoughts] = useState();


    // SUBMIT EVENT
    const handleAddToDoList = (e) => {
      e.preventDefault();

      let todo = {
        title,
        date,
        thought,
      }   
      setTodos([...todos,todo]);
      setTitle('');
      setDate('');
      setThoughts('');
    }


    //Delete DATA FROM LOCAL STORAGE
      const deleteTodo = (title) => {
          const deletefilter = todos.filter((element, index) => {
            return element.title !== title
          })
          setTodos(deletefilter);
      }


    // SAVE DATA TO LOCALSTORAGE
    useEffect(() => {

      localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])



  return (

    <body>
    <div className='wrapper'>

      <h1>To-Do List</h1>
      <p>My Everday's To-Do List</p>

      <div className='main'>

        <div className='form-container'>

            <form autoComplete='off' className='form-group' onSubmit={handleAddToDoList}>

              <label>Task To-Do:</label>
              <input type="text" className='form-control' required 
              onChange={(e) =>setTitle(e.target.value)} value={title}></input>
              <br></br>
              <label>Date:</label>
              <input type="datetime-local" className='form-control' required
              onChange={(e) =>setDate(e.target.value)} value={date}></input>
              <br></br>
              <label>Thoughts for Today:</label>
              <textarea cols="4" rows="3" type="text" className='form-control' required
              onChange={(e) =>setThoughts(e.target.value)} value={thought}></textarea>
              <br></br>
              <button type="submit" className='btn btn-success btn-md'>Add To-Do List</button>
            </form>

        </div>

        
        <div className='view-container'> 

            {todos.length > 0 && <div className='table-responsive'>

                <table className='table'>
                    <thead>
                      <tr>
                        <th>Task To-Do:</th>
                        <th>Date:</th>
                        <th>Thoughts for Today:</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        <ViewRecord todos={todos} deleteTodo = {deleteTodo}/>
                    </tbody>           
                </table>
              </div>          
            }
            {todos.length < 1 && <div>There's no To-Do List added</div>}

        </div>

      </div>


    </div>
    </body>
  )
}

export default App