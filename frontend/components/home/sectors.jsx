import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const SECTORS = {
  'Information Technology': "#B386CC",
  'Health Care': "#6A4BF3",
  'Financials': "#C8BB53",
  'Consumer Discretionary': "#FBB300",
  'Industrials': "#6D5007",
  'Consumer Staples': "#33FFFF",
  'Energy': "#E8EEDB",
  'Utilities': "#C0AECB",
  'Real Estate': "#AECBC9",
  'Materials': "#E4D882",
  'Telecommunication Services': "#F3ECBE",
  'Unassigned': "#0E0A00",
};

const Sectors = ({sectors}) => {

  const data = [];
  const sectorRows = sectors.map((el,i) =>{
    data.push({
      value: el.percent,
      key: i,
      color: SECTORS[el.name]
    });

    return(
      <tr key={i}>
        <td>
          <span className='color'style={{background: SECTORS[el.name]}}></span>
          {' ' + el.name}
        </td>
        <td>{el.percent}%</td>
      </tr>
    );
  });

  return(
    <div className='sectors'>
      <h3>Sectors</h3>
      <div className='sectors-data'>
        <table className='gridtable'>
          <tbody>
            <tr>
              <th>NAME</th>
              <th>PERCENTAGE</th>
            </tr>
            {sectorRows}
          </tbody>
        </table>
        <div className='piechart'>
          <PieChart
            data={data}
            radius={50}
            />
        </div>
      </div>

    </div>
  );
};

export default Sectors
