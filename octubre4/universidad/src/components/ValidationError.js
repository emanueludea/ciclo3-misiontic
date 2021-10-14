import React from "react";

export class ValidationError extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#ff0000', color: '#ffffff', padding: '3px' }}>{this.props.message}</div>
    );
  }
}