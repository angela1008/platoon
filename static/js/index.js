var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./utils')
var ajaxreq = require('./http/ajaxreq')
var Navbar = require('./navbar/navbar')
var LoginModal = require('./authentication/loginModal')
var SignupModal = require('./authentication/signupModal')
var ShowPersonalCardButton = require('./personal_card/showPersonalCardButton')
var GenQrCodeButton = require('./qr_exchange/buttonGenQr')
var InputIdField = require('./qr_exchange/inputIdField')
var CardBox = require('./cardbox/cardBox')
var DetailPage = require('./personal_card/detailPage')
var EditPage = require('./personal_card/editPage')

$(document).ready(function() {
  // Navbar
  try {
    ReactDOM.render(
      <Navbar />,
      document.getElementById('react-navbar')
    );
  } catch(err) {
    console.error('react-navbar', err);
  }

  // Login Modal
  try {
    ReactDOM.render(
      <LoginModal />,
      document.getElementById('react-signin-modal')
    );
  } catch(err) {
    console.error('react-signin-modal');
  }

  // Signup Modal
  try {
    ReactDOM.render(
      <SignupModal />,
      document.getElementById('react-signup-modal')
    );
  } catch (err) {
    console.error('react-signup-modal');
  }

  try {
    ReactDOM.render(
      <DetailPage />,
      document.getElementById('react-personal-detail-page')
    );
  } catch (e) {
    console.error('react-show-personal-card');
  }

  // react-show-personal-card
  try {
    ReactDOM.render(
      <ShowPersonalCardButton />,
      document.getElementById('react-show-personal-card')
    );
  } catch (err) {
    console.error('react-show-personal-card');
  }

  // react-personal-edit-page
  try {
    ReactDOM.render(
      <EditPage />,
      document.getElementById('react-personal-edit-page')
    );
  } catch (err) {
    console.error('react-personal-edit-page');
  }

  // Exchange Button for gen id
  try {
      ReactDOM.render(
      	<GenQrCodeButton />,
      	document.getElementById('show-id-button')
      );
  } catch(err) {
      console.error('show-id-button');
  }

  // Exchange Input for scan id
  try {
    ReactDOM.render(
      <InputIdField dataUrl={ utils.apiScanqr } />,
      document.getElementById('exchange-platoon-id-input-div')
    );
  } catch(err) {
      console.error('exchange-platoon-id-input-div');
  }

  // CardBox
  try {
    ReactDOM.render(
      <CardBox />,
      document.getElementById('react-card-box')
    );
  } catch(err) {
    console.error('react-card-box');
  }

  utils.initBoostrapMD();

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
});
