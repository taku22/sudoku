import React from 'react';
import Popup from './Popup'


export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }



  render() {
    return (
      <React.Fragment>
      <button className="square" onClick={this.togglePopup.bind(this)}>
        {this.props.value}
        {this.state.showPopup ?
          <Popup text='1' closePopup={this.togglePopup.bind(this)} />
          : null
        }
      </button>
      </React.Fragment>

    );
  }
}
