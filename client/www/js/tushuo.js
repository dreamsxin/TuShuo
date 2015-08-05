var tushuo = {
	getSession: function(key){
		return window.localStorage.getItem(key);
	},
	login: function(email, password){
		window.localStorage.setItem('email', email);
		window.localStorage.setItem('password', password);
		window.location.href = 'index.html';
	},
	search: function(){
		navigator.notification.prompt('请输入您感兴趣主题的名称或关键字', function(results){
			window.location.href = 'search.html?' + results.input1;
		},
		'搜索主题',
		['确定'],
		'今日热门'
		);
	}
};

document.addEventListener('DOMContentLoaded', function () {
	var email = window.localStorage.getItem('email');
	var password = window.localStorage.getItem('password');
	if (!email || !password) {
		if (document.URL.lastIndexOf('login.html') != (document.URL.length-'login.html'.length) ) {
				window.location.href = 'login.html';
		}
	}
});