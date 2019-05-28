import React from 'react';
import * as Calculator from './calculator';
import Header from './components/header/header';
import Display from './components/display/display';
import Numpad from './components/numpad/numpad';

class App extends React.Component {

  state = {
    startValue: 0,
    currentValue: 0,
    currentDisplayValue: 0,
    currentActiveValue: null,
    calcArr: []
  }

  calcNumbers = Calculator.calcNumbers;
  calcOperators = Calculator.calcOperators;

  valuate = (val) => {
    this.setState({currentValue: val}, this.setCalculationArray);
  }

  isOperator = (val) => {
    return this.calcOperators.includes(val);
  }

  validateCalculation = () => {
    const state = {...this.state}
    if(state.calcArr.length <= 2) {
      this.reset();
      return;
    }

    const sum = Calculator.doCalculation(state.calcArr);
    this.setState({currentDisplayValue: sum});
    this.clearCalculation();
  }

  setCalculationArray = () => {
    //check if button is a number or an operator
    const currentVal = this.state.currentValue;
    const calcArr = [...this.state.calcArr];
    let currentDisplayValue = this.state.currentDisplayValue.toString();
    let newDisplayValue = currentDisplayValue;
    const prevVal = calcArr[calcArr.length];
    if(currentVal === prevVal && this.isOperator(prevVal)) {
      console.log('should not be here ' + currentVal + ' === ' + prevVal);
      return;
    }
    if(currentVal === '='){
      //do calculation
      if(this.state.currentActiveValue === null) {
        this.clearCalculation();
        return;
      }
      calcArr.push(currentDisplayValue);

      this.setState({calcArr, currentActiveValue: null}, this.validateCalculation);
      return;
    }
    if(currentVal === 'C'){
      //reset
      this.reset();
      return;
    }
    if(!this.isOperator(currentVal)){
      //numbers
      //check for start
      if(this.state.currentActiveValue === null){
        currentDisplayValue = '';
      }

      //add to existing display value
      newDisplayValue = currentDisplayValue.concat(currentVal);

      //clear leading zero
      if(currentDisplayValue.length > 0){
        newDisplayValue = newDisplayValue.replace(/^0+/, '');
      }

      this.setState({currentDisplayValue:newDisplayValue, currentActiveValue: newDisplayValue});
    }else{
      //operators
      //check if array has already been populated. if not return/
      if(newDisplayValue === 0) return;
      calcArr.push(currentDisplayValue, currentVal);
      this.setState({calcArr, currentActiveValue: null});
    };
  }

  clearCalculation = () => {
    this.setState({calcArr: [], currentActiveValue: null});
  }

  reset = () => {
    this.setState({currentDisplayValue: this.state.startValue, currentActiveValue: null, calcArr: []});
  }

  componentDidMount() {
    this.reset();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  render(){
    return (
      <>
        <form className="calculator-container">
          <div className="calculator">
            <Header />
            <Display currentDisplayValue={this.state.currentDisplayValue} />
            <Numpad valuate={this.valuate} />
          </div>
        </form>
      </>
    );
  }
}

export default App;
