/*jshint esversion: 6 */
import React from 'react';

import './App.css';

function checkIfZero(currentDisplay){
  if (currentDisplay === '0') {
    return true;
  } else {
    return false;
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {calcArray: [], display: 0, equationLHS: 0, equationRHS: 0, operator: ""  };
    this.changeDisplay=this.changeDisplay.bind(this);
    this.changeLHS=this.changeLHS.bind(this);
    this.changOperator=this.changOperator.bind(this);
    this.changeCalcArray=this.changeCalcArray.bind(this);
  }

  changeDisplay(display) {
     this.setState({display: display});
     
  }
  changeCalcArray(element) {
  this.setState(this.state.calcArray.concat (element));
}
  changeLHS(equationLHS) {
    this.setState({equationLHS: equationLHS});
    console.log("LHS: " + equationLHS);
  }
  changOperator(operator){
    this.setState({operator: operator});
    console.log("operator: " + operator);
  }
  calculate(equationLHS, operator, equationRHS){

  }
  render() {
    return (
      <div className="calculator">
        <CalcDisplay display={this.state.display}/>
        <NumberPad display={this.state.display}
        changeDisplay={this.changeDisplay}
        changeLHS={this.changeLHS}
        changOperator={this.changOperator}
        changeCalcArray={this.changeCalcArray}
        />

      </div>
    );
  }
 
}

class NumberPad extends React.Component {
 
  render() {
    return (
      <div className="number-pad">
        <div className="buttonRow">
          <CalcButton 
           equationLHS={this.props.equationLHS}
           operator={this.props.operator} 
           display={this.props.display}
           changeCalcArray={this.props.changeCalcArray} 
           changeDisplay={this.props.changeDisplay} 
           changeLHS ={this.props.changeLHS}
           changOperator = {this.props.changOperator}
           character="MC" />
          <CalcButton 
           equationLHS={this.props.equationLHS}
           operator={this.props.operator} 
           display={this.props.display} 
           changeCalcArray={this.props.changeCalcArray}
           changeDisplay={this.props.changeDisplay}
           changeLHS ={this.props.changeLHS}
           changOperator = {this.props.changOperator}
           character="+/-" />
          <CalcButton
           equationLHS={this.props.equationLHS}
           operator={this.props.operator} 
           display={this.props.display} 
           changeCalcArray={this.props.changeCalcArray}
           changeDisplay={this.props.changeDisplay} 
           changeLHS ={this.props.changeLHS}
           changOperator = {this.props.changOperator}
           character="<-" />
          <CalcButton
          ton equationLHS={this.props.equationLHS}
           operator={this.props.operator} 
           display={this.props.display} 
           changeCalcArray={this.props.changeCalcArray}
           changeDisplay={this.props.changeDisplay}
           changeLHS ={this.props.changeLHS} 
           character="C" />
        </div>
   
       <div className="buttonRow">
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="7" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="8" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="9" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} changOperator = {this.props.changOperator} character="&divide;" />
          
        </div>
        <div className="buttonRow">
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="4" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="5" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="6" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} changOperator = {this.props.changOperator} character="&times;" />
        </div>
        <div className="buttonRow">
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="1" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="2" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="3" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} changOperator = {this.props.changOperator} character="-" />
        </div>
        <div className="buttonRow">
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="0" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="." />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} character="=" />
          <CalcButton equationLHS={this.props.equationLHS} operator={this.props.operator} display={this.props.display} changeCalcArray={this.props.changeCalcArray} changeDisplay={this.props.changeDisplay} changeLHS ={this.props.changeLHS} changOperator = {this.props.changOperator} character="+" />
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
  constructor(props){
    super(props);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleDisplayInput = this.handleDisplayInput.bind(this);
    
  }
  handleCalculation(e){
    this.props.changeCalcArray(this.props.character);
  }
  
  handleDisplayInput(e) {
    console.log(e.target);
    console.log(this.props);
    console.log(this.props.display.length);
    let display = this.props.display;
    let operator= '';
    console.log("display: " + display);
    let equationLHS = this.props.equationLHS;
    switch (this.props.character) {
      case 'C':
        display = '0';
        break;
      case '<-':
        display = this.props.display.substring(0, this.props.display.length-1);
        break;
      case '0':
      if (this.props.display.length >= 1 && !checkIfZero(this.props.display)){
        console.log(this.props.display.length);
        display = this.props.display + this.props.character;
      } else{
        display = this.props.character;
      }  
        break;
      case "×": 
      case "-": 
      case "÷":
      case "+":
      console.log("operator: " + this.props.character);
      equationLHS = this.props.display;
      operator = this.props.character;
      this.props.changeLHS(equationLHS);
      display = '0';
      this.props.changOperator(operator);
      break;
      case "=":


      break;
      default:
      if (this.props.display.length < 2 && checkIfZero(this.props.display)){
        display = this.props.character;
      }
      else {
        display = this.props.display + this.props.character;
      }
        
      
      }

      this.props.changeDisplay(display);

    }
    
    
  
  render(){
  return (
    
    <div className="calc-button" onClick={ (event) => {this.handleDisplayInput(event); this.handleCalculation(event) }} >
      <div className="charDiv">
        {this.props.character}
      </div>
    </div>
  );
}
}
export { Calculator};
