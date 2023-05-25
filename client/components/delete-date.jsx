import React from 'react';

export default class DeleteTourDate extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={this.props.deleteModalOverlay} />
        <div className={this.props.deleteModalStatus}>
          <div className="rounded bg-white mb-2 mt-2 p-3">
            <form className="d-flex justify-content-center" autoComplete='false'>
              <div>
                <h5 className="text-center mt-5">Are you sure you want to delete this date?</h5>
                <div className="row d-flex flex-nowrap justify-content-center">
                  <button onClick={() => {
                    this.props.hideDeleteModal();
                  }} className="btn btn-secondary mt-5 mr-3 ml-3 mb-5">Cancel</button>
                  <button type="submit" className="btn btn-danger mt-5 ml-3 mr-3 mb-5">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
