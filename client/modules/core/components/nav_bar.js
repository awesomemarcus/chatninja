import React from 'react';
import {Meteor} from 'meteor/meteor';
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Mantra Boilerplate</a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><a href="/categories/list">Categories</a></li>
                  <li><a href="/products/list">Products</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                      <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
                </ul>


              </div>




            </div>
          </nav>
    );
  }
  logout(e){
    if (e && e.preventDefault){
      e.preventDefault();
    }
    Meteor.logout();
  }

}

export const NavBarLogOut = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Mantra Boilerplate</a>
          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                  <li><a href="/users/signup">Signup</a></li>
                  <li><a href="/users/login">Login</a></li>
            </ul>


          </div>




        </div>
      </nav>
);


export default NavBar;
