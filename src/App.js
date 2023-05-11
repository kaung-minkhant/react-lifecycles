import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycles from './components/life-cycles/life-cycles.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      text: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={() => {
              this.setState(
                prevState => ({
                  showChild: !prevState.showChild
                })
              )
            }
            }
          >Toggle Lifecycle</button>
          <button
            onClick={() => {
              this.setState(prevState => (
                {text: prevState.text + '_hello'}
              ))
            }}
          >Update Text</button>
          {this.state.showChild ? <LifeCycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }

}

export default App;
