import React from "react";

class EntradaRS extends React.Component {
  constructor(props) {
    super(props);
    console.log('estas son las propiedades que llegaron:', props);

  }

  user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src=""
            alt="imagen de avatar"
          />
          <div className="UserInfo-name">
            {this.user.firstName}
          </div>
        </div>
        <div className="Comment-text">
          {this.user.lastName}
        </div>
        <div className="Comment-date">
          {this.formatName(this.user)}
        </div>
      </div>
    );
  }
}

export default EntradaRS;