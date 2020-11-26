"use strict";

function Cs142TemplateProcessor(template){
	this.template = template;

	Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
		// body...

		var matched = this.template.match(/{{[^}]*}}/g);
		// var matched2 = this.template.match(/@@@[^}]*@@@/g);
		// var matched = matched1.concat(matched2);
		var result = this.template;

		for (var i = 0; i < matched.length; i++) {
			// if (matched[i].charAt(0) === "@")
			// 	var key = matched[i].substr(3, matched[i].length - 6);
			// else
			var key = matched[i].substr(2, matched[i].length - 4);
			// var replacement = dictionary[key] || "";
			result = result.replace(matched[i], dictionary[key] || "");
		}

		return result;
	};
}

