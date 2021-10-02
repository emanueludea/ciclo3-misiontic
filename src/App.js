function App(props) {
  console.log('estas son las propiedades que llegaron:', props);
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };


  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src=""
          alt="imagen de avatar"
        />
        <div className="UserInfo-name">
          {user.firstName}
        </div>
      </div>
      <div className="Comment-text">
        {user.lastName}
      </div>
      <div className="Comment-date">
        {formatName(user)}
      </div>
    </div>
  );
}

export default App;
