let a = [
    { nombre: 'yeison', teams: 'ASA, reload, mercedes', birthday: '1990-04-22' },
    { nombre: 'Aleja', teams: 'mercedes,BMW', birthday: '1991-06-12' },
    { nombre: 'Lina', teams: 'FAS, tev, bav, BMW Sauber', birthday: '1988-11-05' }]

// let comp = 'BMW'
// let response = []
// response = arr.filter(item => item.teams.includes(comp))

// console.log(response);
let temp = a[0].birthday
console.log(temp);
let numero = new Date(temp).getTime()
console.log(numero);
const yearA = parseInt(a[0].birthday.substring(0, 4));

console.log(yearA);


let nom = 'Checo'
let nomMod = nom.toLowerCase()