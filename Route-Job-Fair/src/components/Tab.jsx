import React from 'react'
import trasncation from "../transactions.json";
import customer from "../customers.json";


const table = () => {
console.log(trasncation , customer);
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
    {trasncation}
    
  </tbody>
</table>  )
}

export default table