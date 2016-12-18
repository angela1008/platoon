var React = require('react')
var ReactDOM = require('react-dom')
var GenQrCodePage = require('./genQrCode')
var utils = require('./../utils')

module.exports =
class GenQrCodeButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleTimeUpCallback = this.handleTimeUpCallback.bind(this)
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));
    }

    onGenQrClick() {
        ReactDOM.render(
            <GenQrCodePage
                dataUrl= { utils.apiGenexgqr + "?from_user=1" }
                handleTimeUpCallback={ this.handleTimeUpCallback } />,
            document.getElementById('exchange-card-modal')
      	);
    }

    handleTimeUpCallback() {
        console.log('timeup');
        ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));

        const timUpMessage = (
            <h1 className="alert alert-danger">Supreme</h1>
        );

        ReactDOM.render(
    		timUpMessage,
    		document.getElementById('exchange-card-modal')
    	);
    }

    render() {
        // render the post
        return (
            <button onClick={this.onGenQrClick.bind(this)} className="btn btn-raised btn-lg exchange-card-show-id-button" data-toggle="modal" data-target="#show-id-modal">
                <h5 className="exchange-card-show-id-button-text">Show Platoon ID</h5>
            </button>
        )
    }
}
