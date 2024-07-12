import React from 'react'

const table = () => {
  return (
<table className="table border border-1 border-black w-75 mx-auto mt-5">
  <thead>
    <tr>
      <th scope="col">Customer ID</th>
      <th scope="col">Customer</th>
      <th scope="col">Date</th>
      <th scope="col">Transcation ammount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>  )
}

export default table