exports.name = "hello";
exports.data = "this is some data";

var privateVariable = 10;

exports.getPrivate = function(){
	return privateVariable;
};