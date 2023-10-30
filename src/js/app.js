import Character from './character';
import Team from './team';

const arrayName = ['Dizi', 'Mila', 'Ariela', 'Nika', 'Jane'];
const listTeam = [];
arrayName.forEach((item) => {
  const obj = new Character(item);
  console.log(obj.name, obj);
  listTeam.push(obj);
});

const team = new Team(listTeam);
console.log('Список команды противника', team);

console.log('Первый:', team.next().value);
console.log('Второй:', team.next().value);

// console.log(team.next().value);
// console.log(team.next().value);
// console.log(team.next().value);
// console.log(team.next().value);
// console.log(team.next().value);

for (const user of team) {
  console.log('Следующий', user);
}
