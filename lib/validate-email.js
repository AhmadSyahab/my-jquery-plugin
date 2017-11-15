(function ($) {
	$.fn.emailValidator = function () {
		let email = $("input[name='invalid-email']"); 
		let pattern = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
 		return pattern.test(email.val())
	}
})(jQuery)
