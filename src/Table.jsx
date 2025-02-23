import React from 'react'

const Table = ({data}) => {
  return (
    <table>
      <tbody>
        <tr>
           <th>Name</th> 
           <th>Email</th> 
           <th>Surname</th> 
        </tr>
        {
            data.map( (item) => (
        <tr key={item.id}>
           <td>{item.first_name}</td> 
           <td>{item.email}</td> 
           <td>{item.last_name}</td> 
        </tr>

            ))
        }
        
      </tbody>
    </table>
  )
}

export default Table
