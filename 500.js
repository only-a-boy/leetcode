/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	var result = [];
	var count = 0;
	var first = ["q","w","e","r","t","y","u","i","o","p"];
	var second = ["a","s","d","f","g","h","j","k","l"];
	var third = ["z","x","c","v","b","n","m"];
	for(let i=0;i<words.length;i++){
		var word = words[i].toLowerCase();
		var Fset = new Set(word);
		var Sset = new Set(word);
		var Tset = new Set(word);
		first.map( x => Fset.add(x));
		second.map( x => Sset.add(x));
		third.map( x => Tset.add(x));
	    if(Fset.size == 10 || Sset.size == 9 || Tset.size == 7){
	    	result[count] = words[i];
	    	count++;
	    }
	}
	return result;
};
console.log(findWords(["Alaska","Hello","Dad","Peace"]));