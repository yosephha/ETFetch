import React from 'react';
import Greeting from '../greeting/greeting_container';
import EtfDetail from './etf_detail_container';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchRes: "",
      etfs: this.props.etfs
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({
      'searchRes': e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchEtf(this.state.searchRes)
    .then((resp) =>  {
      return (this.props.history.push(`/etf/${resp.etf.symbol}`))
    });
  }

  render(){
    return(
      <div>
        <Greeting />

        <form onSubmit={this.handleSubmit} >
          <div>
            <span>{'Search for ETF '}</span>
            <input type="text"
              value={this.state.username}
              onChange={this.update()}
              placeholder="ETF name"
              autoFocus={true}
            />
            <input id="etf-submit" type='submit' value='Fetch' />
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
