import React, { Component } from 'react';
import Header from './Header';
import CurrentNomination from './CurrentNomination';
import AddNomination from './AddNomination';

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({data: res.express}))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }
  
  render () {
    return (
      <div>
          <Header />
          <CurrentNomination />
          <AddNomination />
          <p className='App-intro'>{this.state.data}</p>
      </div>
    )
  }
}

export default App;
