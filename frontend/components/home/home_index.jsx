import React from 'react';
import Greeting from '../greeting/greeting_container';
import EtfDetail from './etf_detail_container';
import UserHistory from './history';
// import * as APIUtil from '../../util/etf_names';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchRes: "",
      etfs: this.props.etfs,
      error: ""
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchHistories(this.props.currentUser.id);
  }

  update() {
    return e => this.setState({
      'searchRes': e.currentTarget.value,
      'error': ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let symbol = this.state.searchRes.toUpperCase();
    const that = this;

    this.props.fetchHistories(this.props.currentUser.id)
    .then(() => this.props.fetchEtf(symbol))
    .then((resp) =>  {
      if(resp.etf.symbol === undefined){
        that.setState({'error': "Invalid Symbol"})
      } else{
        return (this.props.history.push(`/etf/${symbol}`))
      }
    })
  }

  render(){
    return(
      <div>
        <Greeting />

        <div className="body-cont">
          <div className="form-hist">
            <div className='form-cont'>
              <form onSubmit={this.handleSubmit} >
                <div>
                  <div className='not-found'>{this.state.error}</div>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update()}
                    placeholder="Enter ETF Symbol"
                    autoFocus={true}
                    id='etf-input'
                    />
                  <div className='submit-container'>
                    <input id="etf-submit" type='submit' value='Search for ETF'/>
                  </div>
                </div>
              </form>
            </div>

            <UserHistory histories={this.props.histories}/>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
