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

// Arrow function -> global (window, global scope[in node])
const thisArrow = () => {
	console.log(this);
};
// you can prove it with this.hello = 'hello';


// Let's use `this` to loop through some content in an object.
// Add a method to log all tags using this

const fooey = {
	value: 12,
	tags: ['a', 'b', 'c']
};

// What if we wanted to use `this` to showcase the title along with each tag output?

/* == Looping over objects == */

const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }

// FOR IN LOOP

// Just keys //

// for (let key in movie) {
// 	console.log(key);
// }

// Value of Key //

// for (let key in movie) {
// 	console.log(movie[key]);
// }



// Object.keys() method //

//console.log(Object.keys(movie));

// const keys = Object.keys(movie);

// for (var i=0; i < keys.length; i++) {
// 	console.log(movie[keys[i]]);
// }

// for (let i=0; i < Object.keys(movie).length; i++) {
// 	console.log(movie[Object.keys(movie)[i]]);
// }


/* Activity Practicing Loops */

const movieTwo = { title: "Eraserhead", director: "David Lynch", year: 1978 }

//Use a **for..in** loop to print all the keys of the movie object

// Use a **for..in** loop to print all the values of the movie object

const movies = [
	{ title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
	{ title: "Eraserhead", director: "David Lynch", year: 1978 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 }
]

// Create an empty object. Leverage the fact that Keys are unique in an object. Loop over the movies array and add the movie titles as keys in the object. This will consequently omit the duplicate movie. At the same time, give each a value of **0** in the object.

// The result should be this: `{"L'Avventura": 0, "Eraserhead": 0, "Dayereh": 0}`

// Use **Object.keys** loop to print all the values of the movie object.


