import React from 'react';

const DeleteModal = () => (
  <div>
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body">
            <p>Delete this message?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Yes</button>
            <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DeleteModal;
