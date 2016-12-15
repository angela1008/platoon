var React = require('react')
var ReactDOM = require('react-dom')
var GenQrCodeButton = require('./qr_exchange/buttonGenQr')
var InputIdField = require('./qr_exchange/inputIdField')

ReactDOM.render(
	<GenQrCodeButton />,
	document.getElementById('show-id-button')
);

ReactDOM.render(
	<InputIdField />,
	document.getElementById('exchange-platoon-id-input-div')
);

$('#show-id-modal').on('hidden.bs.modal', function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));
});
