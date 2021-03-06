/*!
 * VaityJS Library v1.0
 * https://www.vaity.tech
 *
 * Depends jQuery
 * https://jquery.com/download/
 *
 */
var vaityjs = {
	base_url: 'https://www.example.com',
	api_url: 'https://www.example.com/api',
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
			window.location = this.base_url;
		}
	},
	setNotification: function (element,status,message,timeout) {
		if(timeout == undefined || timeout == '') {
			timeout = 5000;
		}
		if($(element).length > 0) {
			if(message != undefined && message != '') {
				var notification_class;
				if(status != undefined && status == 'success') {
					notification_class = 'alert alert-success';
				} else {
					notification_class = 'alert alert-danger';
				}
				$(element).removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
				$(element).addClass(notification_class);
				$(element).html(message);
				$(element).slideDown(300);
				this.scrollTop(element);
				setTimeout(function(){
					$(element).slideUp(300);
				},timeout);
			}
		}
	},
	animate: function(element,properties,timeout) {
		if($(element).length > 0) {
			properties = properties || {};
			if(properties != undefined && typeof(properties) == 'object') {
				if(timeout == undefined || timeout == '') {
					timeout = 500;
				}
				$(element).animate(properties,timeout);
			}
		}
	},
	scrollTop: function(element) {
		if($(element).length > 0) {
			$([document.documentElement, document.body]).animate({
				scrollTop: $(element).offset().top - 100
			}, 500);
		}
	},
	submitLock: function(element) {
		if($(element).length > 0) {
			$(element).attr('disabled',true);
			$(element).css('pointer-events','none');
		}
	},
	submitUnlock: function(element,timeout) {
		if(timeout == undefined || timeout == '') {
			timeout = 5000;
		}
		if($(element).length > 0) {
			setTimeout(function(){
				$(element).attr('disabled',false);
				$(element).css('pointer-events','auto');
			},timeout);
		}
	},
	ls_set: function(key,value) {
		if(localStorage != undefined) {
			localStorage.setItem(key,value);
		}
	},
	ls_get:function(key) {
		if(localStorage != undefined) {
			return localStorage.getItem(key);
		}
		return false;
	},
};
