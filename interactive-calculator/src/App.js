import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    total: "",
    service:'',
    partySize: '',
    totalTip: '',
    tipPP: ''
  }

  handleTotal = e => {
    this.setState({
      total: e.target.value
    })
  }
  handleService = e => {
    this.setState({
      service: e.target.value
    })
  }
  handleParty = e => {
    this.setState({
      partySize: e.target.value
    })
  }
  genTip = e => {
    e.preventDefault()
    let tip = parseFloat(this.state.total * this.state.service).toFixed(2)
    let totalTipPP = parseFloat(tip / this.state.partySize).toFixed(2)
    this.setState({
      totalTip: tip,
      tipPP: totalTipPP
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Just the Tip Calculator</h1>
        </header>
        <main className='App-main'>
          <form className='tip-form' onSubmit={this.genTip}>
            <label><span className='label-header'>Bill Total: </span>
              <input type='text' value={this.state.total} onChange={this.handleTotal}/>
            </label>
            <label><span className='label-header'>Service: </span>
              <select onChange={this.handleService}>
                <option value=''>Select Tip</option>
                {[.05, .10, .15, .20, .25, .30, .35, .40, .45, .50].map((service, i) => <option key={i} value={service} >{service}</option>)}
              </select>
            </label>
            <label><span className='label-header'>Party Size: </span>
              <input type='text' value={this.state.partySize} onChange={this.handleParty}/>
            </label>
            <input type='submit'/>
          </form>
          <p>Tip: {this.state.totalTip}</p>
          <p>Tip per person: {this.state.tipPP}</p>
        </main>
      </div>
    );
  }
}

export default App;
