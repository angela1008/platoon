var React = require('react')
var ReactDOM = require('react-dom')
var GenQrCodeButton = require('./qr_exchange/buttonGenQr')

ReactDOM.render(
	<GenQrCodeButton />,
	document.getElementById('show-id-button')
);

$('#show-id-modal').on('hidden.bs.modal', function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));
});
