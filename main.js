// >



let greetingName = document.querySelector('.greeting__name');
let bioName = document.querySelector('.name');
let age = document.querySelector('.age');
let place = document.querySelector('.place');
let description__text = document.querySelector('.description__text');
let imageElement = document.querySelector('.image');

const animal = {
  'name': [
    'Bob',
    'Jørgen',
    'Alf',
    'Arne'
  ],

  'sex': [
    'male',
    'female',
    'non-binary',
    'secret'
  ],

  'location': [
    'Oslo',
    'Mars',
    'Japan'
  ],

  'image': [
    'dog-1',
    'dog-2',
    'dog-3',
    'cat-1',
    'cat-2',
    'cat-3',
  ]
}

const button = document.querySelector('.button');
button.addEventListener('click', () => { 
  createAnimal(animal);
});

function createAnimal() {
  let name = animal.name[Math.floor(Math.random() * animal.name.length)];
  greetingName.innerHTML = name;
  bioName.innerHTML = 'Name: ' + name;

  age.innerHTML = 'Age: ' + generateAge();
  pickImage();
  

}

function coinFlip() {
  return Math.floor(Math.random() * 2);
}

function generateAge() {
  return Math.floor(Math.random() * 120);
}

function pickImage() {
  imageElement.src = '/img/' + animal.image[Math.floor(Math.random() * animal.image.length)] + '.JPG';

}