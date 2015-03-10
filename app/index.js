import React from "react";

class Button extends React.Component {
  constructor(props) {
    this.state = { value: props.initialValue };
  }

  render() {
    return (
      <button>Click Me!</button>
    );
  }
}

React.render(<Button />, document.getElementById('app'));