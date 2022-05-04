import React from 'react';

const LogRows = ({ foodItems }) => {
  return (
    foodItems.map((item) =>
    <tr key={Math.random()}>
    <td>{item.name}</td>
    <td>{item.amount}</td>
    <td>{item.calories}</td>
    </tr>
    )
  )
}

export default LogRows;