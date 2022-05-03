import React from 'react';

const ActivityRows = ( {activities} ) => {

  return (
    activities.map((activity) =>
      <tr key={Math.random()}>
      <td>{activity.activity}</td>
      <td>{activity.duration}</td>
      <td>{activity.caloriesBurned}</td>
      </tr>
    )
  )
}

export default ActivityRows;