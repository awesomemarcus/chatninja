import React from 'react';
import {$} from 'meteor/jquery';
import MessagesBox from '../containers/messages_box.js';
import MessagesSend from '../containers/messages_send.js';
import UsersOnline from '../../users/containers/users_online.js';

class MessagesLayout extends React.Component {

  componentWillMount(){
   this.setState({
    recipientId: this.props.recipientId,
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

        {(this.state.recipientId && this.state.recipientId != Meteor.userId()) ?
        <div id="main-wrapper" className="col-xs-12 col-sm-12 col-md-10 pull-right">

          <MessagesBox recipientId={this.state.recipientId}/>


          <div className="col-md-12 footer">
            <MessagesSend recipientId={this.state.recipientId}/>
          </div>

        </div> :
        <div id="main-wrapper" className="col-xs-12 col-sm-12 col-md-10 pull-right">

          <div className="marginTop" style={{textAlign: 'center'}}>
            <h2>ChatNinja is a great tool to have awesome conversations!</h2>
            <h4>You may also use this to annoy anyone. Haha!</h4>
            <p>Click a username on the left to initiate chat.</p>
          </div>

        </div>}

      </div>

    </div>
  )
  }
}

export default MessagesLayout;
