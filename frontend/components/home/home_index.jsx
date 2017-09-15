import React from 'react';
import Greeting from '../greeting/greeting_container';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchRes: "",
      etfs: this.props.etfs
    }

    this.update = this.update.bind(this);
  }

  update() {
    return e => this.setState({
      'searchRes': e.currentTarget.value
    });
  }

  render(){
    return(
      <div>
        <Greeting />

        <div>
          <span>{'Search for ETF '}</span>
          <input type="text"
            value={this.state.username}
            onChange={this.update()}
            placeholder="ETF name"
            autoFocus={true}
          />
        </div>
      </div>
    );
  }
}

export default Home;
