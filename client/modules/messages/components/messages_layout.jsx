import React from 'react';
import {$} from 'meteor/jquery';
import MessagesBox from './messages_box.jsx';

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
            <ul className="nav list-group">
                <li>
                    <a className="list-group-item" href="#">Sidebar Item 1</a>
                </li>
                <li>
                    <a className="list-group-item" href="#">Sidebar Item 2</a>
                </li>
                <li>
                    <a className="list-group-item" href="#">Sidebar Item 9</a>
                </li>
                <li>
                    <a className="list-group-item" href="#">Sidebar Item 10</a>
                </li>
                <li>
                    <a className="list-group-item" href="#">Sidebar Item 11</a>
                </li>
            </ul>
          </div>
        </div>

        <div id="main-wrapper" className="col-xs-12 col-sm-12 col-md-10 pull-right">
          <MessagesBox />

          <div className="col-md-12 footer">
            <div className="sending-message">
              <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
                <button>
                  <svg id="send-ico"	 viewBox="0 0 26.5 22.9">
                    <polygon points="5.8,0 26.5,12.4 5.3,22.9 6.6,14.8 0,10.4 11.3,10.4 6.4,7.7 "/>
                  </svg>
                </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
  }
}

export default MessagesLayout;
