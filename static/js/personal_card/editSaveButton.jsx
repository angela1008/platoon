var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class EditSaveButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // render the post
    return (
      <header className="bmd-layout-header">
          <div className="navbar navbar-light bg-faded">
              <button className="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-p1">
                  <span className="sr-only">Toggle drawer</span>
                  <i className="material-icons">menu</i>
              </button>
              <div className="nav pull-xs-right">
                <div id='react-nav-login-area'></div>
              </div>
          </div>
      </header>
    );
  }
}
