var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')
var DetailCard = require('./detailCard')
var DetailExtends = require('./detailExtends')

module.exports =
class DetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    var self = this;
    // Verify this login is valid
    ajaxreq.get(utils.apiUserDetail, { user: ajaxreq.getUserId() },
      function(data) {
        ReactDOM.render(
          <DetailCard
            user = { data.user }
            userskill = { data.userskill }
            />,
          document.getElementById('react-personal-detail-page-card')
        );

        ReactDOM.render(
          <DetailExtends
            userlanguage = { data.userlanguage }
            userexperiences = { data.userexperiences }
            usercollection = { data.usercollection }
            userextension = { data.userextension }
            usercertification = { data.usercertification }
            userwanttodo = { data.userwanttodo }
            />,
          document.getElementById('react-personal-detail-page-extends')
        );
      }, function(xhr, status, err) {
        console.error(xhr, status, err);
      });
  }

  render() {
    // render the post
    return (
      <div>
        <div className="row personal_card personal-card-flex">
        	<div className="col-xs-1"></div>
        		<div className="col-xs-10 exchange-card-finish-content max-layout-width-540px">
        			<div className="row">
        				{/* <!-- personal image --> */}
        				<div className="col-xs-4">
        					<div className="personal-flex-img">
        						<img src="http://www.bctowing.com/wp-content/themes/bctowing/img/default-user.jpg" alt="Responsive image" className="img-circle img-fluid" />
        					</div>
        				</div>
        				<div className="col-xs-8">
        					<div id="react-personal-detail-page-card"></div>
        				</div>
        			</div>
        		</div>
        	<div className="col-xs-1"></div>
        </div>

        <table id="react-personal-detail-page-extends" className="table table-bordered max-layout-width-540px">
        </table>
      </div>
    );
  }
}
