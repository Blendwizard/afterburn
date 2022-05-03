import React, { useState, useEffect } from 'react';

const Totals = ({ activities }) => {

  const [total, setTotal] = useState('');

  const calculateTotal = () => {
    let sum = 0;
    activities.forEach((activity) => {
      sum += parseInt(activity.caloriesBurned);
    })
    setTotal(sum.toString());
  }

  useEffect(() => {
    calculateTotal();
  }, [activities])

  return (
    <tr>
      <td></td>
      <td>Totals</td>
      <td>{total}</td>
    </tr>
  )
}

export default Totals;