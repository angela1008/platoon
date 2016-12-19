var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./utils')
var ajaxreq = require('./http/ajaxreq')
var GenQrCodeButton = require('./qr_exchange/buttonGenQr')
var InputIdField = require('./qr_exchange/inputIdField')

try {
    ReactDOM.render(
    	<GenQrCodeButton />,
    	document.getElementById('show-id-button')
    );
} catch(err) {
    console.error('id "show-id-button" not found');
}

try {
  ReactDOM.render(
    <InputIdField dataUrl={ utils.apiScanqr } />,
    document.getElementById('exchange-platoon-id-input-div')
  );
} catch(err) {
    console.error('id "exchange-platoon-id-input-div" not found');
}

$('#show-id-modal').on('hidden.bs.modal', function () {
	ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));
});

$('#getMoreInformationBtn').click(function() {
  var email = $('#getMoreInformation').val();
  ajaxreq.post(utils.apiInterestedUser,
    {'from_ip': '', 'email': email},
    function(data) {
      console.log(data);
      // TODO Say thanks
    }, function(xhr, status, err) {
      console.error(xhr, status, err);
      // TODO error status
    });
});
