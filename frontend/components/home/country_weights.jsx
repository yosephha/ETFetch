import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const CountryWeights = ({cw}) => {

  const cwRows = cw.map((el,i) =>{
    return(
      <tr key={i}>
        <td>{' ' + el.country}</td>
        <td>{el.percent}%</td>
      </tr>
    );
  });

  return(
    <div className='sectors'>
      <h3>Country Weights</h3>
      <div className='sectors-data'>

        <div className='etf-inner-container'>
          <table className='gridtable'>
          <tbody>
            <tr>
              <th>COUNTRY</th>
              <th>PERCENTAGE</th>
            </tr>
            {cwRows}
          </tbody>
        </table>
        </div>

        <div className='etf-inner-container'>

        </div>
      </div>

    </div>
  );
};

export default CountryWeights;
