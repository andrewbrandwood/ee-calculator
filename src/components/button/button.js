import React from 'react';
import './button.scss';

class Button extends React.Component {

  handleClick = (e) => {
    this.props.valuate(this.props.name);
  }

  render(){
    return (
      <button type="button" key={this.props.name} onClick={this.handleClick} className={"calculator__btn calculator__btn--" + this.props.cssClass || ""} aria-label={this.props.ariaLabel}>{this.props.name}</button>
    )
  }
}

export default Button;
