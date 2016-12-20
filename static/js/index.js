var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./utils')
var ajaxreq = require('./http/ajaxreq')
var LoginModal = require('./authentication/loginModal')
var SignupModal = require('./authentication/signupModal')
var GenQrCodeButton = require('./qr_exchange/buttonGenQr')
var InputIdField = require('./qr_exchange/inputIdField')

// Login Modal
try {
  ReactDOM.render(
    <LoginModal />,
    document.getElementById('react-signin-modal')
  );
} catch(err) {
  console.error('id "react-signin-modal" not found');
}

// Signup Modal
try {
  ReactDOM.render(
    <SignupModal />,
    document.getElementById('react-signup-modal')
  );
} catch (err) {
  console.error('id "react-signup-modal" not found');
}

// Exchange Button for gen id
try {
    ReactDOM.render(
    	<GenQrCodeButton />,
    	document.getElementById('show-id-button')
    );
} catch(err) {
    console.error('id "show-id-button" not found');
}

// Exchange Input for scan id
try {
  ReactDOM.render(
    <InputIdField dataUrl={ utils.apiScanqr } />,
    document.getElementById('exchange-platoon-id-input-div')
  );
} catch(err) {
    console.error('id "exchange-platoon-id-input-div" not found');
}

// Exchange ID Cancel
$('#show-id-modal').on('hidden.bs.modal', function () {
	ReactDOM.unmountComponentAtNode(document.getElementById('exchange-card-modal'));
});

// User who is Intersted to us
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
