import React from 'react';
import BarChart from 'react-bar-chart';

const Holdings = ({holding}) => {

  const data = [];
  const holdings = holding.map((el,i) => {
    data.push({text: el.name.slice(0,5), value: el.weight})
    return(
     <tr key={i}>
       <td>{el.name}</td>
       <td>{el.weight}%</td>
       <td>{el.share_held}</td>
     </tr>
    );
  });

  const margin = {top: 20, right: 20, bottom: 30, left: 40};

  return(
    <div className='holdings'>
      <h3>Top Holdings</h3>
      <div className='hodings-data'>
        <table className='gridtable'>
          <tbody>
            <tr>
              <th>NAME</th>
              <th>WEIGHT</th>
              <th>SHARES HELD</th>
            </tr>
            {holdings}
          </tbody>
        </table>

        <div className='bar-chart'>
          <BarChart ylabel='percent'
            width={600}
            height={400}
            margin={margin}
            data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Holdings
