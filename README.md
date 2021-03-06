# Objects and This

## Lesson Objectives

1. Understand what ```this``` is.
1. Review object methods
1. Create Objects
1. for ... in loop


### Object quick review

```js
  const garcia = {
      albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
      instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
      alive: false,
      quote: 'Im shopping around for something to do that no one will like',
      friends: [{
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
      }]
  }
```

Print the following:
1. 'hooteroll'
2. 'Bobby weir'
3. 'writing poems'
4. 'banjo'

Edit the following properties:

1.  change the `alive` property to true using dot notation with the object
2.  change the `quote` property to 'Everybody just be nice to each other' using bracket notation

Add a method

1.  add a method to the `garcia` object named `speak `that logs out "Heyy, Thats a good song!"
2.  add a method to the `garcia` object named `letsPlay` that logs out "La daaa da da, La daa, da, da"



### ```this```

1.  ```this``` refers to the object that is invoking the method.

```js
const foo = {
  value: 12,
  getValue() {
    return this.value;
  }
}
```

```console.log(foo.getValue());```

output = `'12'`

question:  What object is `this` in getValue referring too.

1. console.log `this` inside the getValue function.
2. Create an object called person that has a property called `name` and a method called `getName` that when called returns the value of the `name` property.


### More `this`

In Javascript, everything belongs to an object. We use this to tell us what object we are currently in. This is called context, not to be confused with scope.

In the the Chrome console, we can type this, and ask: To what object does everything in the browser belong?

The result is the `window` object. 



Try this out:

```js
const taco = () => {
  console.log(this, ' this is with arrow functions');
}
```
1.  What is `this` referring to now.


### Lets play with Intervals


```js
const game = {
  start(){
    const gameTimer = setInterval( () => {
      console.log('hi', this)
    }, 1000);
  }
}
```

1.  add a property to the `game` object called `timer` and set the value equal to 10.
2.  edit the start method to decrease the value of `time` every second by the value of 1.
3.  add a conditional inside of the `setInterval` that checks to see if the value has reached 0, if it has `console.log` the `"gameover"`.  Then clear the interval.  Hint: "look up how do I stop an interval or 'clear!' an interval".

## activity

1. Create a player object 
2. Add properties of score, name, and lives.
3. Make the `score` a value of ten.
4. use prompt to get the users name in the `name` property.
5. set the `lives` property equal to 3.
6. Add a method that increases the persons score.
7. Add a method that will either decrease or increase the `lives` depending on an argument you pass that method.
8. Access all the properties using dot notation, and bracket notation.  


### Amazon model

1. Lets model an object after a amazon clothing page.



## LOOPING OVER OBJECTS

There are two way to loop over objects. You can use either way. Both ways involve looping over the object's **keys**.

Let's say we have a movie object:

```javascript
const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }
```

<br>

## `for ... in` loop

Print each key:

```javascript
for (let key in movie) {
	console.log(key);
}
```

> =>
>
>title
>
>director
>
>year

<br>

Print each value:

To do this, use the key as a **variable** within the square brackets.

```javascript
for (let key in movie) {
	console.log(movie[key]);
}
```

> =>
>
>L'Avventura
>
>Michelangelo Antonioni
>
>1960

<br>

## `Object.keys()`

Object.keys() will return an **array of keys**

```javascript
console.log(Object.keys(movie));
```

> => [ 'title', 'director', 'year' ]

To print the values, use the key as a **variable** within square brackets.

```javascript
const keys = Object.keys(movie);

for (var i=0; i < keys.length; i++) {
	console.log(movie[keys[i]]);
}
```

Unre-factored version:

```javascript
for (let i=0; i < Object.keys(movie).length; i++) {
	console.log(movie[Object.keys(movie)[i]]);
}
```

<br>
<hr>


# Movie loop

Give the following movie:

```javascript
const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }
```

&#x1F535; **Activity**
```
* Use a **for..in** loop to print all the keys of the movie object
* Use a **for..in** loop to print all the values of the movie object
* 7 minutes
```
<br>

CHALLENGE

With the following array of movie objects:

```javascript
const movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]
```

&#x1F535; **Activity**
```
* Create an empty object. Leverage the fact that Keys are unique in an object. Loop over the movies array and add the movie titles as keys in the object. This will consequently omit the duplicate movie. At the same time, give each a value of **0** in the object.
* The result should be this: `{"L'Avventura": 0, "Eraserhead": 0, "Dayereh": 0}`
* Use **Object.keys** loop to print all the values of the movie object.
* 10 minutes
```



## Comparing Objects

In JavaScript, if two objects are created separately, they are distinct, even if they are given the same properties.

```javascript
var student = {name: "Chris"};
=> undefined

var student2 = {name: "Chris"};
=> undefined

student == student2
=> false

student === student
=> true
```
<br>
<hr>
Licence
<hr>














