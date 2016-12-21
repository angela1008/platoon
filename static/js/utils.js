const apiServer = 'http://127.0.0.1:8000/platoon-api/';
const apiUserLogin = apiServer + 'login/';
const apiUserSignup = apiServer + 'signup/';
const apiAuthVerify = apiServer + 'auth-verify/';
const apiInterestedUser = apiServer + 'interested-user/';
const apiGenexgqr = apiServer + 'genexgqr/';
const apiScanqr = apiServer + 'scanqr/';
const apiCheckqr = apiServer + 'checkqraccept/';
const countTimeSec = 300;

function openThatFkModal(id) {
  $('#' + id).modal('show');
}

function closeThatFkModal(id) {
  $('#' + id).modal('hide');
}

function unmountComponentOnModalHidden(ReactDOM, modalId, componentId) {
  $('#' + modalId).on('hidden.bs.modal', function () {
  	ReactDOM.unmountComponentAtNode(document.getElementById(componentId));
  });
}

function id4DigitFormater(id) {
  // TODO add zero if not 4 digit
  // TODO remove zero if 4 digit
  return id;
}

function getUrlByName(name) {
    return djangoUrls[name];
}

exports.apiUserLogin = apiUserLogin;
exports.apiUserSignup = apiUserSignup;
exports.apiAuthVerify = apiAuthVerify;
exports.apiInterestedUser = apiInterestedUser;
exports.apiGenexgqr = apiGenexgqr;
exports.apiScanqr = apiScanqr,
exports.apiCheckqr = apiCheckqr;
exports.id4DigitFormater = id4DigitFormater;
exports.countTimeSec = countTimeSec;
exports.openModal = openThatFkModal;
exports.closeModal = closeThatFkModal;
exports.unmountComponentOnModalHidden = unmountComponentOnModalHidden;
exports.getUrlByName = getUrlByName;
