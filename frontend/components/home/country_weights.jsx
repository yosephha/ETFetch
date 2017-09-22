import React from 'react';
import PieChart from "react-svg-piechart";
import { connect } from 'react-redux';

class CountryWeights extends React.Component {
  constructor(props){
    super(props);
    this.cw = props.cw
    this.state = {
      expandedSector: null,
    }

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
  }

  handleMouseEnterOnSector(sector) {
    this.setState({expandedSector: sector})
  }

  render(){
    const cw = this.props.country_weights;
    const data = [];
    const {expandedSector} = this.state

    const cwRows = cw.map((el,i) =>{
      data.push({
        value: parseFloat(el.percent),
        label: el.country
      });

      return(
        <tr key={i} style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
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
}

const mapStateToProps = (state) => ({
    country_weights: state.etf.country_weights
});

export default connect(
  mapStateToProps,
  null
)(CountryWeights);
