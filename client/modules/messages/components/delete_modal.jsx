import React from 'react';

class DeleteModal extends React.Component{
 deleteMessage(){

  const {deleteMessage} = this.props;
  deleteMessage(this.props.idToDelete);
 }

 render(){


  return(
   <div>
     <div className="modal fade" id={"myModal" + this.props.idToDelete} role="dialog">
       <div className="modal-dialog modal-sm">
         <div className="modal-content">
           <div className="modal-body">
             <p>Delete this message?</p>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.deleteMessage.bind(this)}>Yes</button>
             <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Cancel</button>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
 }
}

export default DeleteModal;
