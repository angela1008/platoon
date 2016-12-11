var React = require('react')
var ReactDOM = require('react-dom')
var GenQrCodePage = require('./genQrCode')

module.exports =
class GenQrCodeButton extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));
    }

    onGenQrClick() {
        ReactDOM.render(
    		<GenQrCodePage dataUrl="http://127.0.0.1:8000/platoon-api/genexgqr/?from_user=1" />,
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
