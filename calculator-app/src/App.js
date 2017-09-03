import React from 'react';

import './App.css';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 0 };
    this.changeDisplay=this.changeDisplay.bind(this);
  }

  changeDisplay(display) {
     this.setState({display: display});
  }

  render() {
    return (
      <div className="calculator">
        <CalcDisplay display={this.state.display} />
        <NumberPad display={this.state.display} changeDisplay={this.changeDisplay} />
      </div>
    );
  }
 
}

class NumberPad extends React.Component {
 
  render() {
    return (
      <div className="number-pad">
        <div className="buttonRow">
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="MC" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="+/-" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="<-" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="C" />
        </div>
        <div className="buttonRow">
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="7" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="8" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="9" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="&divide;" />
        </div>
        <div className="buttonRow">
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="4" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="5" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="6" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="&times;" />
        </div>
        <div className="buttonRow">
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="1" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="2" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="3" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="-" />
        </div>
        <div className="buttonRow">
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="0" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="." />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="=" />
          <CalcButton display={this.props.display} changeDisplay={this.props.changeDisplay} character="+" />
        </div>
      </div>
    );
  }
}

function CalcDisplay(props) {
  return (
    <div className="calc-display">
      {props.display}
    </div>
  );
}

class CalcButton extends React.Component {
  handleDisplayInput(e) {
    let display = this.props.display + this.props.character;
    if (this.props.character === "C") {
      display = '0';
    }
    if (this.props.character === "<-") {
      display = this.props.display.substring(0, this.props.display.length-1);
    }
    if (this.props.display === '0'){
      display = this.props.character;
    }
    this.props.changeDisplay(display);
  }
  render(){
  return (
    
    <div className="calc-button" onClick={this.handleDisplayInput.bind(this)} >
      <div className="charDiv">
        {this.props.character}
      </div>
    </div>
  );
}
}
export { Calculator};