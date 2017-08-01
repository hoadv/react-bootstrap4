import React, { PropTypes } from 'react'
import $ from 'jquery';
import './style.css';

const SignInModal = ({ }) => {
  return (
    <div className="modal fade" id="signinModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Please login to continue</h5>
                <button id="closeBtn" type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="email" className="form-control-label">Emai:</label>
                  <input id="email" type="email" className="form-control" placeholder="abc@cd.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-control-label">Password:</label>
                  <input id="password" type="password" className="form-control" />
                </div>
                 <div className="form-group">
                  <label className="form-control-label">
                    <a href="#">I forgot my password</a>
                  </label>
                </div>
                <div className="form-group">
                  <input type="submit" className= "btn btn-success btn-right" value="Login" />
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-group">
                   <label className="padding-right-5">No account?</label>
                  <a href="#" className= "btn btn-primary">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </form>
    </div>
  );
}

SignInModal.propTypes = {
}

export default SignInModal