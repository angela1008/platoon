var React = require('react')
var ReactDOM = require('react-dom')
var cookie = require('react-cookie');
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')
var NavbarUnLogin = require('./navbarUnLogin')
var NavbarLogedin = require('./navbarLogedin')

module.exports =
class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var accessToken = cookie.load('access_token');
    if (accessToken) {

      // If has access token, seem as login
      ReactDOM.render(
        <NavbarLogedin />,
        document.getElementById('react-nav-login-area')
      );

      var self = this;
      // Verify this login is valid
      ajaxreq.get(utils.apiAuthVerify, {},
        function(data) {
          if (data.is_authed) {
            var user = data.data;
            // TODO query pic or other
            console.log(user);
          } else {
            console.log(data.detail);
            self.handleNotLoginNav();
          }
        }, function(xhr, status, err) {
          console.error(xhr, status, err);
          self.handleNotLoginNav();
        });
    } else {
      this.handleNotLoginNav();
    }
  }

  handleNotLoginNav() {
    ReactDOM.render(
      <NavbarUnLogin />,
      document.getElementById('react-nav-login-area')
    );
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
