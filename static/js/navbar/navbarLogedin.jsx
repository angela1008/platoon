var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class NavbarLogedin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // render the post
    return (
      <div id="react-nav-logedin" className="btn-group" role="group">
          <a href="#">
              <button type="button" className="btn btn-default navbar-btn">
              <i className="material-icons">email</i>
          </button>
          </a>
          <a href={utils.getUrlByName('personal_card')} >
              <button type="button" className="btn btn-default navbar-btn">
                  <img className="img-responsive img-rounded" style={{"height":"1.5rem"}} src={ utils.apiUserPhoto + '?user=' + ajaxreq.getUserId() } />
              </button>
          </a>
          <a href={utils.getUrlByName('settings')}>
              <button type="button" className="btn btn-default navbar-btn">
              <i className="material-icons">settings</i>
          </button>
          </a>
      </div>
    );
  }
}
