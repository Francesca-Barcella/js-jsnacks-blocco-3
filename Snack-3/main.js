/*******************************************************  
TRACCIA 2
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*******************************************************/

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    }
];

console.log(animals);

const mammiferi = animals.filter(animal => animals.classe === 'mammiferi');
console.log(mammiferi);

const newAnimals = animals.filter(animal => {
    if (animals.classe !== 'mammiferi') {
        return true
    }
});
console.log(newAnimals);

