import React from 'react';
import BarChart from 'react-bar-chart';
import Holdings from './holdings';
import Sectors from './sectors';
import CountryWeights from './country_weights';

class EtfDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {infoDetail: ""}
  }

  componentDidMount(){
    this.props.fetchEtf(this.props.sym);
    this.props.fetchHistories(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchEtf(nextProps.match.params.id);
    }
  }

  render(){
    if(!this.props.etf.id) return null;

    const etf = this.props.etf;
    const holdings = this.props.etf.holdings;
    const sectors = this.props.etf.sectors;
    const countryWeights = this.props.etf.country_weights;
    const infoDetail = ""
    let style, style1, style2;

    if(countryWeights.length <= 0){
      style = 'none';
    } else {
      style = 'block';
    }
    if(holdings.length <= 0){
      style1 = 'none';
    } else {
      style1 = 'block';
    }
    if(sectors.length <= 0){
      style2 = 'none';
    } else {
      style2 = 'block';
    }

    if((sectors.length < 1 || holdings.length < 1)&& this.state.infoDetail !== "Some Information missing")
      this.setState({infoDetail: "Some Information missing"});
    else if(sectors.length > 1 && holdings.length > 1 && this.state.infoDetail !== "")
      this.setState({infoDetail: ""});

    return(
      <div className='etf-hist'>
        <div className='etf-spot'>
          <p className='disp-error'>{this.state.infoDetail}</p>
          <div className='etf-container'>
            <h1 className='etf-name'><span>{etf.symbol}:{' '}</span>{etf.name}</h1>
            <h4 className='etf-description'>{etf.description}</h4>
          </div>

          <div className='etf-container' style={{display: style1}}>
            <Holdings holding={holdings}/>
          </div>
          <div className='etf-container' style={{display: style2}}>
            <Sectors sectors={sectors}/>
          </div>

          <div className='etf-container' style={{display: style}}>
            <CountryWeights cw={countryWeights}/>
          </div>
        </div>

      </div>
    );
  }
}

export default EtfDetail;
