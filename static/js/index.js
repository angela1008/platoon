var React = require('react')
var ReactDOM = require('react-dom')
var GenQrCode = require('./qr_exchange/genQrCode')

ReactDOM.render(
	<GenQrCode dataUrl="http://localhost:8000/platoon-api/genexgqr/?user=1" />,
	document.getElementById('react-qr-code')
);
