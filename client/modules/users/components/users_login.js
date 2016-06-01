import React from 'react';

class UsersLogin extends React.Component{
  render() {
    const {error} = this.props;
    return(
      <div className="container marginTop">
      <div className="row">
      <div className="col-md-6 col-sm-6">
      <form className="form-signin" onSubmit={this.userLogin.bind(this)}>
        <h3 className="form-signin-heading">User login</h3>

        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <label for="inputEmail" className="sr-only">Email address</label>
        <input ref="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" autofocus />
        <label for="inputPassword" className="sr-only">Password</label>
        <input ref="password"  type="password" id="inputPassword" className="form-control" placeholder="Password" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <a href="/users/signup" className="btn btn-lg btn-block btn-default">Signup</a>
      </form>
      </div>
      <div className="col-md-6 col-sm-6">
      <h2>ChatNinja - a chat app for but not limited to ninjas</h2>
      <p>ChatNinja brings the social ninja in you.</p>
      <p>Invite your friends now and share conversations as fast as a ninja!</p>
      </div>
      </div>

    </div>
    );
  }

  userLogin(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {userLogin} = this.props;
    const {email,password} = this.refs;
    const formData = {
      "emails.$.address" :email.value,
      "password" : password.value,
    };
    userLogin(formData);
  }

}

export default UsersLogin;
