var tushuo = {
	getSession: function(key){
		return window.localStorage.getItem(key);
	},
	login: function(email, password){
		window.localStorage.setItem('email', email);
		window.localStorage.setItem('password', password);
		window.location.href = 'index.html';
	}
};

document.addEventListener('DOMContentLoaded', function () {
	var email = window.localStorage.getItem('email');
	var password = window.localStorage.getItem('password');
	if (!email || !password) {
		if (document.URL.lastIndexOf('login.html') != (document.length-'login.html'.length) ) {
				window.location.href = 'login.html';
		}
	}
});