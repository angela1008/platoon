const apiServer = 'http://127.0.0.1:8000/platoon-api/';
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

function id4DigitFormater(id) {
  // TODO add zero if not 4 digit
  // TODO remove zero if 4 digit
  return id;
}

exports.apiGenexgqr = apiGenexgqr;
exports.apiScanqr = apiScanqr,
exports.apiCheckqr = apiCheckqr;
exports.id4DigitFormater = id4DigitFormater;
exports.countTimeSec = countTimeSec;
exports.openModal = openThatFkModal;
exports.closeModal = closeThatFkModal;
