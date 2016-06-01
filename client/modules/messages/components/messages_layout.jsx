import React from 'react';
import {$} from 'meteor/jquery';
import MessagesBox from '../containers/messages_box.js';
import MessagesSend from '../containers/messages_send.js';
import UsersOnline from '../../users/containers/users_online.js';

class MessagesLayout extends React.Component {

  componentWillMount(){
   this.setState({
    recipientId: null,
   });
  }

  componentDidMount() {
    $('#main').animate({scrollTop: 1000000});
  }

  handleRecipientId(recipientId){
   this.setState({
    recipientId: recipientId,
   })
  }

  render() {
  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper" className="col-md-2">
          <div id="sidebar">

              <UsersOnline onhandleRecipientId={this.handleRecipientId.bind(this)}/>

          </div>
        </div>

        <div id="main-wrapper" className="col-xs-12 col-sm-12 col-md-10 pull-right">
         {this.state.recipientId ? <MessagesBox recipientId={this.state.recipientId}/> : ''}

          <div className="col-md-12 footer">
            <MessagesSend recipientId={this.state.recipientId}/>
          </div>

        </div>
      </div>

    </div>
  )
  }
}

export default MessagesLayout;
