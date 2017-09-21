import React from 'react';
import BarChart from 'react-bar-chart';
import Holdings from './holdings';
import Sectors from './sectors';
import CountryWeights from './country_weights';

class EtfDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEtf(this.props.sym);
    this.props.fetchHistories(this.props.currentUser.id);
  }

  render(){
    debugger
    if(!this.props.etf.id) return null;

    const etf = this.props.etf;
    const holdings = this.props.etf.holdings;
    const sectors = this.props.etf.sectors;
    const countryWeights = this.props.etf.country_weights;
    let style;

    if(countryWeights.length <= 0){
      style = 'none';
    } else {
      style = 'block';
    }

    return(
      <div>
        <div className='etf-container'>
          <h1 className='etf-name'><span>{etf.symbol}:{' '}</span>{etf.name}</h1>
          <h4 className='etf-description'>{etf.description}</h4>
        </div>

        <div className='etf-container'>
          <Holdings holding={holdings}/>
        </div>
        <div className='etf-container'>
          <Sectors sectors={sectors}/>
        </div>

        <div className='etf-container' style={{display: style}}>
          <CountryWeights cw={countryWeights}/>
        </div>

      </div>
    );
  }
}

export default EtfDetail;
