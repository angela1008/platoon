var cookie = require('react-cookie');
var csrftoken = cookie.load('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function getAccessToken() {
  // TODO replace with loged-in accesstoken
  return '2213';
}

function urlForGET(url, params) {
  url += '?access_token=' + getAccessToken();
  for (var paramKey in params) {
    if (params.hasOwnProperty(paramKey)) {
      url += '&' + paramKey + '=' + params[paramKey];
    }
  }
  return url;
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

var get = function(url, params, success, error) {
  $.ajax({
    url: urlForGET(url, params),
    dataType: 'json',
    success: success,
    error: error
  });
}

var post = function(url, data, success, error) {
  $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
      success: success,
      error: error
  });
}

exports.get = get;
exports.post = post;