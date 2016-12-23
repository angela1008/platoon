var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class DetailCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // render the post
    return (
      <div>
        {/* <!-- exchange card person name--> */}
        <h3 className="exchange-card-finish-text">{ this.props.user.first_name }</h3>
        {/* <!-- exchange card person email--> */}
        <h6 className="exchange-card-finish-text">{ this.props.user.email }</h6>
        {/* <!-- exchange card person skills--> */}
        <h6 className="exchange-card-finish-text">
          { utils.handleArrayNameToStringLine(this.props.userskill) }
        </h6>
      </div>
    );
  }
}
