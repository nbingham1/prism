(function() {

if (typeof self === 'undefined' || !self.Prism || !self.document) {
	return;
}

Prism.hooks.add('before-highlight', function (env) {
	if (env.code) {
		for (i in env.grammar) {
			var elem = env.grammar[i]
			if (elem.constructor === Array) {
				for (j in elem) {
					if ("pattern" in elem[j] && "replace" in elem[j]) {
						env.code = env.code.replace(elem[j].pattern, elem[j]['replace']);
					}
				}
			}
			else if ("pattern" in elem && "replace" in elem) {
				env.code = env.code.replace(elem.pattern, elem['replace']);
			}
		}
	}
});

var check_pattern = function(pattern) {
	var spattern = pattern.toString();
	var lastSlash = spattern.lastIndexOf("/");
	var source = spattern.slice(1, lastSlash);
	var modify = spattern.slice(lastSlash + 1);
	source = source.replace(/\&/, '\&amp;');
	source = source.replace(/</, '\&lt;');
	source = source.replace(/>/, '\&gt;');
	pattern = new RegExp(source, modify);
	return pattern;
}

Prism.hooks.add('after-highlight', function (env) {
	if (env.code) {
		for (i in env.grammar) {
			var elem = env.grammar[i]
			if (elem.constructor === Array) {
				for (j in elem) {
					if ("pattern" in elem[j] && "replace_after" in elem[j]) {
						env.element.innerHTML = env.element.innerHTML.replace(check_pattern(elem[j].pattern), elem[j]['replace_after']);
					}
				}
			}
			else if ("pattern" in elem && "replace_after" in elem) {
				env.element.innerHTML = env.element.innerHTML.replace(check_pattern(elem.pattern), elem['replace_after']);
			}
		}
	}
});


}());
