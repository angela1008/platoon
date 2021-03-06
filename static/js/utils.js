const apiServer = 'http://127.0.0.1:8000/platoon-api/';
const apiUserLogin = apiServer + 'login/';
const apiUserSignup = apiServer + 'signup/';
const apiUserPhoto = apiServer + 'user-photo/';
const apiUserDetail = apiServer + 'userdetail';
const apiAuthVerify = apiServer + 'auth-verify/';
const apiInterestedUser = apiServer + 'interested-user/';
const apiGenexgqr = apiServer + 'genexgqr/';
const apiScanqr = apiServer + 'scanqr/';
const apiCheckqr = apiServer + 'checkqraccept/';
const apiCardbox = apiServer + 'cardbox/';
const countTimeSec = 300;

function openThatFkModal(id) {
  $('#' + id).modal('show');
}

function closeThatFkModal(id) {
  $('#' + id).modal('hide');
}

function toggleThatFkModal(id) {
  $('#' + id).modal('toggle');
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

function handleArrayNameToStringLine(array) {
  var str = '';
  if (!array) {
    return str;
  }
  for (var i = 0; i < array.length; i++) {
    str += array[i].name + ',';
  }
  str = str.slice(0, -1);
  return str;
}

function handleArrayTitleToStringLine(array) {
  var str = '';
  if (!array) {
    return str;
  }
  for (var i = 0; i < array.length; i++) {
    str += array[i].title + ',';
  }
  str = str.slice(0, -1);
  return str;
}

// This function is for the modal can't inside the bmd menu
// exclude those template id, will return the place React mount at.
function appendModalDialog(targetId, appendId) {
  var element = '<div id="' + appendId + '"></div>';
  $('#' + targetId).append(element);
  return appendId;
}

function getUrlByName(name) {
    return djangoUrls[name];
}

function initBoostrapMD() {
  $('body').bootstrapMaterialDesign();
}

function redirectTo(name) {
  window.location = name;
}

function reload() {
  location.reload();
}

exports.apiUserLogin = apiUserLogin;
exports.apiUserSignup = apiUserSignup;
exports.apiUserPhoto = apiUserPhoto;
exports.apiUserDetail = apiUserDetail;
exports.apiAuthVerify = apiAuthVerify;
exports.apiInterestedUser = apiInterestedUser;
exports.apiGenexgqr = apiGenexgqr;
exports.apiScanqr = apiScanqr,
exports.apiCheckqr = apiCheckqr;
exports.apiCardbox = apiCardbox;

exports.id4DigitFormater = id4DigitFormater;
exports.handleArrayNameToStringLine = handleArrayNameToStringLine;
exports.handleArrayTitleToStringLine = handleArrayTitleToStringLine;
exports.countTimeSec = countTimeSec;
exports.openModal = openThatFkModal;
exports.closeModal = closeThatFkModal;
exports.toggleModal = toggleThatFkModal;
exports.unmountComponentOnModalHidden = unmountComponentOnModalHidden;
exports.appendModalDialog = appendModalDialog;
exports.getUrlByName = getUrlByName;
exports.initBoostrapMD = initBoostrapMD;
exports.redirectTo = redirectTo;
exports.reload = reload;
