var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class Card extends React.Component {

    constructor(props) {
        super(props);
        console.log('Card');
        // <PersonalCard
        //     id = "personal-card-dialog"
        //     data = { cardUser } />,
        // document.getElementById('exchange-card-finish-dialog')
    }

    render() {
        // render the post
        return (
        	<div className="card-list-item" data-toggle="modal" data-target="{ this.props.personalId }">
        		{/* <!-- personal image --> */}
                {/* TODO ajax query pic */}
        		<span className="material-icons">account_circle</span>
        		{/* <!-- personal name --> */}
        		<span className="name">{ this.props.firstName }</span>
        		{/* <!-- receive date --> */}
        		<span className="receive-date">{ this.props.createdAt }</span>
        	</div>
        );
    }
}
