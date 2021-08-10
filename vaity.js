/*!
 * VaityJS Library v1.0
 * https://www.vaity.tech
 *
 * Depends jQuery
 * https://jquery.com/download/
 *
 */
var vaityjs = {
	api_url: 'https://www.example.com',
	api_service: function(request,data,method,callBack) {
	  return $.ajax({
	    method: method,
	    url: this.api_url + "/" + request,
	    data: data,
	    success: callBack,
	    complete: this.api_service_always
	  });
	},
	api_service_always: function (response) {
		if(response != undefined && response.responseJSON != undefined && response.responseJSON.status != undefined  && response.responseJSON.message != undefined && response.responseJSON.status == 'error' && response.responseJSON.message == 'Unauthorised Access') {
			window.location = base_url;
		}
	},
};
