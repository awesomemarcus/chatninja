import React from 'react';
import {Meteor} from 'meteor/meteor';
class NavBar extends React.Component {
  render() {
   const {getNotifCount} = this.props;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/" style={{fontFamily: "'Slackey', cursive"}}>ChatNinja</a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><a href={"/inbox/" + Meteor.userId()}>Inbox {(getNotifCount > 0) ? <span className="glyphicon glyphicon-comment"></span> : ''}</a></li>
                  <li><a href={'/users/profile/' + Meteor.userId()}>My Profile</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                      <li><a><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>{Meteor.user().profile.username}</a></li>
                      <li><a href="" onClick={this.logout.bind(this)}>Logout</a></li>
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
  <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#" style={{fontFamily: "'Slackey', cursive"}} >ChatNinja</a>
          </div>


        </div>
      </nav>
);


export default NavBar;
