Prism.languages.chp = {
	'replace': [
			{ pattern: /->/g,   replace: '\u2192'}, // →
			{ pattern: /\|\|/g, replace: '\u2225'}, // ∥
			{ pattern: /\*\[/g, replace: '\u2217['}, //⁎[
			{ pattern: /~/g,  replace: '\u00AC'}, // ¬
			{ pattern: /\&/g, replace: '\u2227'}, // ∧
			{ pattern: /\|/g, replace: '\u2228'}, // ∨
			{ pattern: /<=/g, replace: '\u2264'}, // ≤
			{ pattern: />=/g, replace: '\u2265'}, // ≥
			{ pattern: /!=/g, replace: '\u2260'}, // ≠
			{ pattern: /==/g, replace: '='     }, // =
			{ pattern: /\+(\s*[;,\|\]\[])/g, replace: '\u21BE$1'}, // ↾
			{ pattern: /-(\s*[;,\|\]\[])/g,  replace: '\u21C2$1'}, // ⇂
			{ pattern: /\[\]/g, replace: '\u25AF'}, // ▯
			{ pattern: /:([^=])/g,    replace: '|$1'} // |
	],
	'node': { 
		pattern: /\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
		replace_after: '$1'
	},  // subscript
	'probe': {
		pattern: /#([a-zA-Z_][a-zA-Z0-9_]*)/g,
		replace_after: '$1'
	},  // overline
	'logic': {
		pattern: /\u00AC|\u2227|\u2228/
	},
	'arithmetic': {
		pattern: /\+|-|\*|\//
	},
	'compare': {
		pattern: /\u2264|\u2265|\u2260|=|<|>/
	},
	'assign': {
		pattern: /\u21BE|\u21C2|:=/
	},
	'channel': {
		pattern: /!|\?/
	},
	'compose': {
		pattern: /\u2225|;|,/
	},
	'control': {
		pattern: /\u2217\[|\[|\]|\||\u25AF|\u2192/
	},
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'keyword': /\b(null)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
};

