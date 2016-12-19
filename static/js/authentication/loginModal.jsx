var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class LoginModal extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmitClick() {
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    // ajaxreq.post();
    console.log(email, password);
  }

  render() {
    // render the post
    return (
      <div className="modal fade" id="signin-modal" role="dialog">
        <div className="modal-dialog modal-xs">
          <div className="modal-content">
            <div className="modal-body row">
              <div className="col-xs-1"></div>
              <div className="col-xs-10">
                <h3 className="signin-align-center">Platoon<br/>Sign In</h3><br/>
                <input type="email" className="form-control" id="input-email" placeholder="Email" /><br/>
                <input type="password" className="form-control" id="input-password" placeholder="Password" />
                <h6 className="forgot-passsword-text" className="signin-align-center">forget password?</h6>
                <h6  className="create-new-account-text" className="signin-align-center">Creat New Account!</h6>
                <button className="btn btn-raised btn-lg signin-button" onClick={ this.handleSubmitClick.bind(this) }>
                  <h3 className="signin-button-text">SIGN IN</h3>
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
