var cookie = require('react-cookie');
var csrftoken = cookie.load('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

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

exports.post = post;
