import React from 'react';
import BarChart from 'react-bar-chart';
import Holdings from './holdings';
import Sectors from './sectors';

class EtfDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEtf(this.props.sym);
  }

  render(){
    if(!this.props.etf.id) return null;

    const etf = this.props.etf;
    const holdings = this.props.etf.holdings;
    const sectors = this.props.etf.sectors;

    return(
      <div className='etf-container'>
        <h1 className='etf-name'><span>{etf.symbol}:{' '}</span>{etf.name}</h1>
        <h4 className='etf-description'>{etf.description}</h4>

        <Holdings holding={holdings}/>
        <Sectors sectors={sectors}/>

      </div>
    );
  }
}

export default EtfDetail;
