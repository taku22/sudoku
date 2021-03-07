import React from 'react';
import Num from './Num'


export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null
    };
  }

getNum(i) {
  return <Num value={i}/>
}

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <button className="work">
            {this.getNum(1)}
          </button>
        </div>
      </div>
    );
  }
}
