import React from 'react'

const TableFormate = () => {
  return (
    <>
    <table style={{border:'1px solid black'}}>
    <thead style={{border:'1px solid black'}}>
    <tr>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>Chris@gmail.com</td>
      <td>+91 5372328924</td>
    </tr>
   </tbody>
   </table>
   </>
  )
}


export default TableFormate