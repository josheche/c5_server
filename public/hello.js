//This is a single line comment
// Everything is ignored up until newline.

/****
	*multiline comment
	*the comment ends
	*when JS sees the final star-slash
*****/

console.log("This is external JS.");

var input;
if (input === undefined) {
	console.log("This is undefined.");
} else {
	console.log(input);
}