import React from 'react';
import Button from '../button/button';
import './numpad.scss';

class Numpad extends React.Component {
  render() {
    return (
      <>
      <div className="calculator__grid-item operator--clear">
        <Button name="C" ariaLabel="Clear; Clear all" cssClass="operator-clear" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item operator--divide">
        <Button name="&#247;" ariaLabel="Divide" cssClass="operator" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="7" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="8" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="9" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item  operator--multiply">
        <Button name="&#215;" ariaLabel="Multiply" cssClass="operator" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="4" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="5" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="6" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item operator--subtract">
        <Button name="&#8722;" ariaLabel="Subtract" cssClass="operator" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="1" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="2" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="3" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item operator--add">
        <Button name="&#43;" ariaLabel="Add" cssClass="operator" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item calculator__grid-item-zero">
        <Button name="0" valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item">
        <Button name="." valuate={this.props.valuate} />
      </div>
      <div className="calculator__grid-item operator--equal">
        <Button name="&#61;" ariaLabel="Equal" cssClass="operator" valuate={this.props.valuate} />
      </div>
      </>
    );
  }
}

export default Numpad;
