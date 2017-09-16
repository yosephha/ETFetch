import React from 'react';

const Sectors = ({sectors}) => {
  debugger
  const sectorRows = sectors.map((el,i) =>{
    return(
      <tr key={i}>
        <td>{el.name}</td>
        <td>{el.percent}%</td>
      </tr>
    );
  });

  return(
    <div>
      <h3>Sectors</h3>
      <table>
        <tbody>
          <tr>
            <th>NAME</th>
            <th>PERCENTAGE</th>
          </tr>
          {sectorRows}
        </tbody>
      </table>
    </div>
  );
};

export default Sectors
