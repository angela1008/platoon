var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')
var PersonalCard = require('./../qr_exchange/personalCard')

module.exports =
class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var appendId =
            utils.appendModalDialog(
                'personal-card-dialog',
                this.props.personalId + '-border'
            );
        ReactDOM.render(
            <PersonalCard
                id = { this.props.personalId }
                data = { this.props.user.card_user_detail } />,
            document.getElementById(appendId)
        );
    }

    handleCardClicked() {
        utils.toggleModal(this.props.personalId);
    }

    render() {
        // render the post
        return (
        	<div className="card-list-item"
                data-toggle="modal"
                data-target={ this.props.personalId }
                onClick={ this.handleCardClicked.bind(this) }>

        		{/* <!-- personal image --> */}
                {/* TODO ajax query pic */}
        		<span className="material-icons">account_circle</span>
        		{/* <!-- personal name --> */}
        		<span className="name">{ this.props.user.card_user_detail.first_name }</span>
        		{/* <!-- receive date --> */}
        		<span className="receive-date">{ this.props.user.created_at }</span>
        	</div>
        );
    }
}
