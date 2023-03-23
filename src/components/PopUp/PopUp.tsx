import './PopUp.css';
import React from 'react';

class PopUp extends React.Component {
  render() {
    return (
      <div className="popup">
        <h4 className="popup__message green">Confirmed! the data has been saved.</h4>
      </div>
    );
  }
}

export default PopUp;
