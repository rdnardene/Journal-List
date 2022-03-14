import React from 'react'


export const ViewRecord = ({todos,deleteTodo}) => {
  return todos.map(todo => (
    <tr key = {todo.title}>
        <td>{todo.title}</td>
        <td>{todo.date}</td> 
        <td>{todo.thought}</td>

        
        <button type='button' className='deletebtn' onClick={() => deleteTodo(todo.title)}>
           Delete
        </button>       
      
    </tr>
  ))
}
