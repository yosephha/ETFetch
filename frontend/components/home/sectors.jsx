import React from 'react';
import PieChart from "react-svg-piechart";

const SECTORS = {
  // 'Information Technology': "#B386CC",
  // 'Health Care': "#6A4BF3",
  // 'Financials': "#C8BB53",
  // 'Consumer Discretionary': "#FBB300",
  // 'Industrials': "#6D5007",
  // 'Consumer Staples': "#33FFFF",
  // 'Energy': "#E8EEDB",
  // 'Utilities': "#775f37",
  // 'Real Estate': "#AECBC9",
  // 'Materials': "#E4D882",
  // 'Telecommunication Services': "#F3ECBE",
  // 'Unassigned': "#0E0A00",
  // "Financial Services": "#0e59d1",
  // "Technology": "#ceabc1",
  // "Producer Durables": "#f725a9",
  // "Materials & Processing": "#230719",
  // "Software": "#f442b3",
  // "Internet Software & Services": "#ef97cf",
  // "Technology Hardware Storage & Peripherals": "#466970",
  // "IT Services": "#46704c",
  // "Semiconductors & Semiconductor Equipment": "#667046",
  // "Diversified Telecommunication Services": "#3d1f27",
  // "Communications Equipment": "#ce0e0e",
  // "Electronic Equipment Instruments & Components": "#ce870d",
  // "Chemicals": "#dbcdb6",
  // "Containers & Packaging": "#cedbb6",
  // "Metals & Mining": "#b6dbc0",
  // "Construction Materials": "#b6d5db",
  // "Electric Utilities": "#606b6d",
  // "Multi-Utilities": "#7f7c54",
  // "Independent Power and Renewable Electricity Producers": "#4c557c",
  // "Water Utilities": "#4c557c",
  // "Apparel Retail": "#7584c4",
  // "Internet & Direct Marketing Retail": "#bc75c4",
  // "Automotive Retail": "#c47575",
  // "Specialty Stores": "#c49b75",
  // "Department Stores": "#bac475",
  // "OTHER": "#75c478",
  // "Food Retail": "#75bcc4",
  // "Computer & Electronics Retail": "#7576c4",
  // "Drug Retail": "#bd75c4",
  // "Hypermarkets & Super Centers": "#fcc7d9",
  // "Oil & Gas Exploration & Production": "#b6f442",
  // "Oil & Gas Refining & Marketing": "#f4be41",
  // "Integrated Oil & Gas": "#f44141",
};

// const Sectors = ({sectors}) => {
//
//   const data = [];
//   const sectorRows = sectors.map((el,i) =>{
//     data.push({
//       value: el.percent,
//       key: i,
//       color: SECTORS[el.name]
//     });
//
//     return(
//       <tr key={i}>
//         <td>
//           <span className='color'style={{background: SECTORS[el.name]}}></span>
//           {' ' + el.name}
//         </td>
//         <td className="tal">{el.percent.toFixed(2)}%</td>
//       </tr>
//     );
//   });
//
//   return(
//     <div className='sectors'>
//       <h3>Sectors</h3>
//       <div className='sectors-data'>
//
//         <div className='etf-inner-container'>
//           <table className='gridtable'>
//           <tbody>
//             <tr>
//               <th>NAME</th>
//               <th>PERCENTAGE</th>
//             </tr>
//             {sectorRows}
//           </tbody>
//         </table>
//         </div>
//
//         <div className='etf-inner-container'>
//           <div className='piechart'>
//           <PieChart
//             data={data}
//             radius={50}
//             />
//         </div>
//         </div>
//       </div>
//
//     </div>
//   );
// };
//
// export default Sectors

class Sectors extends React.Component {
  constructor(props){
    super(props);
    this.sectors = props.sectors
    this.state = {
      expandedSector: null,
    }

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
  }

  handleMouseEnterOnSector(sector) {
    this.setState({expandedSector: sector})
  }

  render(){
    const sectors = this.sectors;
    let data = [];
    const {expandedSector} = this.state
    const sectorRows = sectors.map((el,i) =>{
      data.push({
        value: el.percent,
        label: el.name,
        color: SECTORS[el.name]
      });

      return(
        <tr key={i} style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
          <td>{' ' + el.name}</td>
          <td className="tal">{el.percent.toFixed(2)}%</td>
        </tr>
      );
    });

    return(
      <div className='sectors'>
        <h3>Sectors</h3>
        <div className='sectors-data'>

          <div className='etf-inner-container'>
            <table className='gridtable'>
            <tbody>
              <tr>
                <th>NAME</th>
                <th>PERCENTAGE</th>
              </tr>
              {sectorRows}
            </tbody>
          </table>
          </div>


          <div className='etf-inner-container'>
            <PieChart
                data={ data }
                expandedSector={expandedSector}
                onSectorHover={this.handleMouseEnterOnSector}
                sectorStrokeWidth={2}
                expandOnHover
                shrinkOnTouchEnd
            />
          <div className="pie-chart-desc">
            {
                data.map((element, i) => (
                    <div key={i} className="pie-chart-desc-item">
                        <span style={{background: element.color}}></span>
                        <span className="pie-chart" style={{color: this.state.expandedSector === i ? "black" : null}}>
                          {element.label}
                        </span>
                    </div>
                ))
            }
            </div>
        </div>

        </div>

      </div>
    );
  }
};

export default Sectors
