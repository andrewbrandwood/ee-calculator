import React from 'react';
import Header from './components/header/header';
import Display from './components/display/display';
import Numpad from './components/numpad/numpad';

class App extends React.Component {
  state = {
    currentValue: 0
  }

  valuate = (val) => {
    this.setState({currentValue: val});
  }

  render(){
    return (
      <>
        <form className="calculator-container">
          <div className="calculator">
            <Header />
            <Display currentDisplayValue={this.state.currentValue} />
            <Numpad valuate={this.valuate} />
          </div>
        </form>
      </>
    );
  };
}

export default App;
