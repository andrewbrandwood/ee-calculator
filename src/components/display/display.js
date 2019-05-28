import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="calculator__grid-item calculator__grid-item-total">
        <input type="text" value={this.props.currentDisplayValue} readOnly className="calculator__total" />
      </div>
    );
  }
}

export default Display;
