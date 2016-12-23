var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')
var PersonalCard = require('./../qr_exchange/personalCard')

module.exports =
class ShowPersonalCardButton extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDetailClicked() {

  }

  handleClicked() {
    var userid = ajaxreq.getUserId();
    var username = ajaxreq.getUserName();
    var useremail = ajaxreq.getUserEmail();
    var data = {
      id: userid,
      first_name: username,
      email: useremail
    }
    console.log(data);
    ReactDOM.render(
        <PersonalCard
            id = "personal-card-show-card-modal"
            data = { data }
            handleClick = { function() {
              // redirect to detail page
              utils.redirectTo(utils.getUrlByName('personal_card_detail'));
            } } />,
        document.getElementById('personal-card-dialog')
    );
    utils.openModal('personal-card-show-card-modal');
  }

  render() {
    // render the post
    return (
      <div onClick={ this.handleClicked } className="list-group-item" data-toggle="modal" data-target="#personal-card-show-card-modal">
        <span className="material-icons">contact_mail</span>
        <span className="item-text">Show Card View</span>
      </div>
    );
  }
}
