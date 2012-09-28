// JavaScript Document
//取得url中所传入的参数
//get the url arguments by a function
//written by hongyi.dai@gmail.com
function getQueryStringArgs(){
	var q = location.search.length > 0 ? location.search.substring(1) : '';
	var args = {};
	var items = null,item = null,value = null;
	items = q.split('&');
	for(var i = 0;i < items.length;i++){
		item = items[i].split('=');
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		args[name] = value;
	}
	return args;
}