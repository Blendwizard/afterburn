import React from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import FlexContainer from './styled/FlexContainer.js';
const HomeContent = () => {

  return (
    <>
      <FlexContainer direction="column" align="center" color="2px solid green" >
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>Calories After Burned</th>
              <th>Target Calories</th>
              <th>Surplus/Deficit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1/15/2022</td>
              <td>2200</td>
              <td>2500</td>
              <td>-300</td>
            </tr>
            <tr>
              <td>1/16/2022</td>
              <td>2600</td>
              <td>2500</td>
              <td>+100</td>
            </tr>
            <tr>
              <td>1/17/2022</td>
              <td>2900</td>
              <td>2500</td>
              <td>+400</td>
            </tr>
            <tr>
              <th>

              </th>
              <th>

              </th>
              <th>
                Average
              </th>
              <th>
                2400
              </th>
            </tr>
          </tbody>
        </Table>
      </FlexContainer>
    </>
  )

}

export default HomeContent;