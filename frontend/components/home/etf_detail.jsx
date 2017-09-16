import React from 'react';

class EtfDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEtf(this.props.sym);
  }

  render(){
    if(!this.props.etf.id) return null;

    debugger
    const etf = this.props.etf;
    const holdings = etf.holdings.map((el,i) => {
	     return(
         <tr key={i}>
           <td>{el.name}</td>
           <td>{el.weight}</td>
           <td>{el.share_held}</td>
         </tr>

       );
    });

    return(
      <div>
        <h1><span>{etf.symbol}:{' '}</span>{etf.name}</h1>
        <h4>{etf.description}</h4>

        <h3>Top 10 Holdings</h3>
          <table>
            <tbody>
              <tr>
                <th>NAME</th>
                <th>WEIGHT</th>
                <th>SHARES HELD</th>
              </tr>
              {holdings}
            </tbody>
          </table>
      </div>
    );
  }
}

export default EtfDetail;
