var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class SignupModal extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmitClick() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    ajaxreq.post(utils.apiUserSignup,
      {'name': name, 'email': email, 'password': password},
      function(data) {
        console.log(data);
        // Signup Success, redirect
        utils.reload();
      }, function(xhr, status, err) {
          console.error(xhr, status, err);
          // TODO error status
      });
  }

  render() {
    // render the post
    return (
      <div className="modal fade" id="signup-modal" role="dialog">
        <div className="modal-dialog modal-xs signin-signinup-dialog-flex">
          <div className="modal-content">
            <div className="modal-body row sign-layout">
              <div className="col-xs-1"></div>
              <div className="col-xs-10">
                <h3 className="signin-align-center signup-title-text">Platoon<br/>Sign Up</h3><br/>
                <input type="text" className="form-control input-sign" id="signup-name" placeholder="Name" /><br/>
                <input type="email" className="form-control input-sign" id="signup-email" placeholder="Email" /><br/>
                <input type="password" className="form-control input-sign" id="signup-password" placeholder="Password" />
                <button className="btn btn-raised btn-lg signup-button" onClick={ this.handleSubmitClick.bind(this) }>
                  <h3 className="signup-button-text">SIGN UP</h3>
                </button>
              </div>
              <div className="col-xs-1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
