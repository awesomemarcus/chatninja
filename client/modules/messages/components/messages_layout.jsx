import React from 'react';
import {$} from 'meteor/jquery';
import MessagesBox from './messages_box.jsx';
import MessagesSend from './messages_send.jsx';
import UsersOnline from '../../users/containers/users_online.js';

class MessagesLayout extends React.Component {

  componentDidMount() {
    $('#main').animate({scrollTop: 1000000});
  }

  render() {
  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper" className="col-md-2">
          <div id="sidebar">

              <UsersOnline />

          </div>
        </div>

        <div id="main-wrapper" className="col-xs-12 col-sm-12 col-md-10 pull-right">
          <MessagesBox />

          <div className="col-md-12 footer">
            <MessagesSend />
          </div>

        </div>
      </div>

    </div>
  )
  }
}

export default MessagesLayout;
