import React from 'react';
import MessagesListRow from './messages_list_row.jsx';

// const MessagesBox = ({msg}) => (
//   <div id="main">
//     <ul>
//       <li><p className="bubble you">{msg.to}</p></li>
//       <li><p className="bubble me">{msg.from}</p></li>
//     </ul>
//   </div>
// );

class MessagesBox extends React.Component{
 render(){
  const {messages} = this.props;

  return(
   <div id="main">
     <ul>
      {messages.map( message => (

       <MessagesListRow key={message._id} message={message}/>

      ))}
     </ul>
   </div>
  );

 }
}


export default MessagesBox;
