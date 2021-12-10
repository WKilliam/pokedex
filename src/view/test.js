const characters = [
  { name: 'Batman', team: 'Justice League' },
  { name: 'Hulk', team: 'Avengers' },
  { name: 'Flash', team: 'Justice League' },
  { name: 'Iron Man', team: 'Avengers' },
  { name: 'Deadpool', team: 'X-Force' }
];

const avengers = characters.filter(character => character.team === 'Avengers');


