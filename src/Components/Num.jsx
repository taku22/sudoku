import React from 'react';


export default class Num extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Component>
        <button>
          <p>{this.props.value}</p>
        </button>
      </React.Component>
    )
  }
}
