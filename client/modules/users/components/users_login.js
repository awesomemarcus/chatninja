import React from 'react';

class UsersLogin extends React.Component{
  render() {
    const {error} = this.props;
    return(
      <div className="container">
      <form className="form-signin" onSubmit={this.userLogin.bind(this)}>
        <h2 className="form-signin-heading">User login</h2>

        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <label for="inputEmail" className="sr-only">Email address</label>
        <input ref="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" autofocus />
        <label for="inputPassword" className="sr-only">Password</label>
        <input ref="password"  type="password" id="inputPassword" className="form-control" placeholder="Password" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <a href="/users/signup" className="btn btn-lg btn-block btn-default">Signup</a>
      </form>

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
