/*

*/

const classIsInSession = true;
const username = 'codeguru789';
const price = 10.99;

const recipe = {
  name: 'omelet',
  ingredients: ['eggs', 'bell peppers', 'onions'],
  prepationTime: 8,
};

const recipes = [
  {
    name: 'Steak',
    ingredients: ['Ribeye', 'salt', 'pepper', 'onions'],
    preperationTime: 3,
  },
  {
    name: 'grilled cheese',
    ingredients: ['bread', 'butter', 'cheese',],
    preperationTime: 5,
  },
  {
    name: 'ramen',
    ingredients: ['baked tofu', 'noodles', 'assorted veg', 'dashi',],
    prepTime: 20,
  }
];

for (let i = 0; i < recipes.length; i++) {
  // console.log(recipes[i].name);
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
const michael = {
  firstName: 'Michael',
  currentTown: 'San Diego, CA',
  enjoysCooking: true,
  favFood: 'stroganoff',
  hobbies: ['reading', 'making music', 'hiking']
};

const students = [
  {
    firstName: "Andre",
    currentTown: "Chicago",
    enjoysCooking: true,
    favFood: "Spicy Ramen",
    hobbies: ["Streaming", "Gaming", "Cooking", "Coding"]
  },
  {
    firstName: 'Vishwa',
    currentTown: 'nyc',
    enjoysCooking: true,
    favFood: 'burrito',
    hobbies: ['biking', 'painting', 'gaming']
  },
  {
    firstName: 'Cass',
    currentTown: 'LA, CA',
    enjoysCooking: false,
    favFood: 'vegan popcorn chicken',
    hobbies: [
        'live music',
        'fashion',
        'travel',
    ],
  } 
];

students[0].hobbies.push('Rock Climbing');
// console.log(students[0].hobbies);

for (let i = 0; i < students.length; i++) {
  if (!students[i].enjoysCooking) {
    // console.log(students[i].favFood);
  }
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const dog = {
  name: 'Reginold',
  age: 4,
  breed: 'Australian Cattle Dog',
  playsFetch: true,
  enjoysSwimming: false,
  getName: function() {
    return this.name;
  },
  getDescription: function() {
    return `${this.name} is a ${this.breed} and they are ${this.age} years old`;
  }
};

// console.log(dog.getName());
// console.log(dog.getDescription());

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function speak() {
  console.log(this);
  return `Hi I'm ${this.name}`;
}

const person1 = {
  name: 'Jim',
  speak: speak,
}

const person2 = {
  name: 'Maiyra',
  speak: speak,
}

// console.log(person1.speak());
// console.log(person2.speak());
// console.log(speak());

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

// console.log(getRandomNumber(30));

/*
- Create 2 objects, player and ogre
- Each object will have health, damage, and a name
- Each object will have an attack method

- Have characters take turns attacking until one loses all health
*/
function attack(target) {
  target.health = target.health - getRandomNumber(this.damage);
}

const player = {
  name: 'Player One',
  health: 10,
  damage: 3,
  attack: attack
};

const ogre1 = {
  name: 'Ogre One',
  health: 10,
  damage: 2,
  attack: attack
};

function playGame(char1, char2) {
  for (let i = 0; char1.health > 0 && char2.health > 0; i++) {
    if (i % 2 === 0) {
      char2.attack(char1);
    } else {
      char1.attack(char2);
    }
  }
}

function checkWinner(char1, char2) {
  if (char1.health > 0) {
    return `${char1.name} is the winner!`;
  } else {
    return `${char2.name} is the winner!`;
  }
}

playGame(player, ogre1);
console.log(checkWinner(player, ogre1));

console.log(player);

// ogre1.attack(player);

// console.log(player);
// player.attack(ogre1);
console.log(ogre1);

const order = {
  name: 'spaghetti marinara',
  price: 16,
  preparationTime: 60,
};

const property = 'preparationTime';

console.log(order[property]);

for (let key in order) {
  console.log(key);
  console.log(order[key]);
}