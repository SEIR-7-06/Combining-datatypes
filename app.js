const garcia = {
	albums: [
		'shady grove',
		'run for the roses',
		'hooteroll',
		'Garcia',
		'Reflections'
	],
	instruments: [
		'Vocals',
		'pedal steel',
		'electric guitar',
		'acoustic guitar',
		'banjo'
	],
	alive: false,
	quote: 'Im shopping around for something to do that no one will like',
	friends: [
		{
			name: 'Bobby weir',
			hobby: 'guitar'
		},
		{
			name: 'Bob Dylan',
			hobby: 'writing songs'
		},
		{
			name: 'Allen Ginsberg',
			hobby: 'writing poems'
		},
		{
			name: 'Phil Lesh',
			hobby: 'Playing dope bass lines'
		}
	]
};

/* == Access REVIEW == */

// Print Hooteroll

// Print Bobby Weir

// Print writing poems

// Print Banjo









/* == Changing Values Review == */

// Change the alive property to true using dot notation with the object

// Change the quote property to 'Everybody just be nice to each other' using bracket notation








/* == Method Review == */

// Add a method to the garcia object named speak that logs out "Heyy, Thats a good song!"

// Add a method to the garcia object named letsPlay that logs out "La daaa da da, La daa, da, da"















/* == What is This? == */
// The object that is executing the current Function

// method -> object
const foo = {
	value: 12,
	getValue: function() {
		console.log(this);
	}
};
// function -> global (window, global scope[in node])
function showThis() {
	console.log(this);
}

// Constructor Function with new keyword
// Notice the capital? This is because we capitalize constructor functions and classes in js. So don't capitalize your functions otherwise.
function ConstructorFunc(value) {
	this.value = value;
}

const newFunc = new ConstructorFunc('look a value!'); // new keyword returns {}

// Let's use `this` to loop through some content in an object.
// Add a method to log all tags using this

const fooey = {
	value: 12,
	tags: ['a', 'b', 'c']
};

// What if we wanted to use `this` to showcase the title along with each tag output?

