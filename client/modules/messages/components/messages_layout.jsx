import React from 'react';
import MessagesBox from '../containers/messages_box.js';
import MessagesSend from '../containers/messages_send.js';
import UsersOnline from '../../users/containers/users_online.js';
import moment from 'moment';

class MessagesLayout extends React.Component {

  componentWillMount(){
   this.setState({
    recipientId: this.props.recipientId,
    recipient: this.props.recipient,
   });
  }

  handleRecipientId(recipient){
   this.setState({
    recipientId: recipient._id,
    recipient: recipient,
   })
  }

  render() {

   const {userMessages, recipient} = this.props;

  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper" className="col-md-2">
          <div id="sidebar">

              <UsersOnline
               onhandleRecipientId={this.handleRecipientId.bind(this)}
               userMessages={userMessages}/>
          </div>
        </div>

        {(this.state.recipient && this.state.recipientId && this.state.recipientId != Meteor.userId()) ?
        <div id="main-wrapper" className="col-xs-12 col-sm-12 col-md-10 pull-right">

          <h3>
            <img src={recipient.profile.avatar} alt="" className="img-responsive pull-left" style={{height: '53px', padding: '4px 10px 4px 20px'}}/>
            {recipient.profile.username}
            {(recipient.status.online && !recipient.status.idle) ? <span style={{color: 'green'}} className="glyphicon glyphicon-one-fine-dot"></span> :
            (recipient.status.online && recipient.status.idle) ? <span style={{color: 'orange'}} className="glyphicon glyphicon-one-fine-dot"></span> :
            <span style={{color: 'gray'}} className="glyphicon glyphicon-one-fine-dot"></span>
            }
          </h3>

          {(recipient.status.idle) ?
            <p style={{paddingLeft: '5px', verticalAlign: 'text-botttom'}}>
            active {moment(recipient.status.lastActivity).startOf().fromNow()}
            </p> :
            ""
          }

          <p className="pull-right" style={{paddingRight: '60px', paddingTop: '24px'}}><a href="#">View Profile</a></p>

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
