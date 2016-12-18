const apiServer = 'http://127.0.0.1:8000/platoon-api/';
const apiGenexgqr = apiServer + 'genexgqr/';
const apiScanqr = apiServer + 'scanqr/';

function openThatFkModal(id) {
  $('#' + id).modal('show');
}

function closeThatFkModal(id) {
  $('#' + id).modal('hide');
}

module.exports = utils = {
    apiGenexgqr: apiGenexgqr,
    apiScanqr: apiScanqr,
    countTimeSec: 300,
    openModal: openThatFkModal,
    cloadModal: closeThatFkModal
}
