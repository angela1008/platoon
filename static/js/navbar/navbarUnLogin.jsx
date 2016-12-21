var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class NavbarUnLogin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // render the post
    return (
      <div id="react-nav-unlogin" className="btn-group" role="group">
        <div class="btn-group" role="group">
          <button type="button" className="btn btn-default navbar-btn" data-toggle="modal" data-target="#signup-modal">Sign up</button>
          <button type="button" className="btn btn-default navbar-btn" data-toggle="modal" data-target="#signin-modal">Sign in</button>
        </div>
      </div>
    );
  }
}
