/**
 * Created by sravan on 17/01/17.
 */



import Circle from './Circle';
//const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom'

let tm;
let tm1;
let tm2;

const App = React.createClass({
  getInitialState() {
    return {
      percent: 0
    };
  },
  componentDidMount() {
    this.increase();
    
  },
  increase() {
    let percent = this.state.percent + 1;
    if (percent > 58) {
       percent = 58;
       clearTimeout(tm);
       return;
    }
    this.setState({ percent });
    tm = setTimeout(this.increase, 90);
  },
  render() {
    return (
      <div style={{ margin: 10, width: 200 }}>
        <Circle strokeWidth="6" percent={this.state.percent} />
      </div>
    );
  }
});
const App1 = React.createClass({
  getInitialState() {
    return {
      percent: 0
    };
  },
  componentDidMount() {
    this.increase();
   
  },
  increase() {
    let percent = this.state.percent + 1;
    if (percent > 8) {
      percent = 8;
      clearTimeout(tm);
      return;
    }

    this.setState({ percent });
    
    tm = setTimeout(this.increase, 730);
  },
  render() {
    return (
      <div style={{ margin: 10, width: 200 }}>
        <Circle strokeWidth="6" percent={this.state.percent} />
      </div>
    );
  }
});

const App2 = React.createClass({
  getInitialState() {
    return {
      percent: 0,
     
    };
  },
  componentDidMount() {
    this.increase();
  
  },
  increase() {
    let percent = this.state.percent + 1;
    
    if (percent > 12) {
        percent = 12;
        clearTimeout(tm);
        return;
    }

    this.setState({ percent });
    tm = setTimeout(this.increase, 460);
  },
  
  
  render() {
    return (
      <div style={{ margin: 10, width: 200 }}>
      
        <Circle strokeWidth="6" percent={this.state.percent} />
       
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('react_content'));
ReactDOM.render(<App1 />, document.getElementById('react_content1'));
ReactDOM.render(<App2 />, document.getElementById('react_content2'));
