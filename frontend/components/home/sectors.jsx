import React from 'react';
import PieChart from "react-svg-piechart";
import { connect } from 'react-redux';

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
    const sectors = this.props.sectors;
    let data = [];
    const {expandedSector} = this.state
    const sectorRows = sectors.map((el,i) =>{
      data.push({
        value: el.percent,
        label: el.name
      });

      return(
        <tr key={i} style={{color: this.state.expandedSector === i ? "red" : "white"}}>
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


const mapStateToProps = (state) => ({
    sectors: state.etf.sectors
});

export default connect(
  mapStateToProps,
  null
)(Sectors);
