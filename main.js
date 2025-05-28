let names = ['hussein', 'Fatima', 'John', 'Sara', 'Ali', 'Aisha', 'Omar', 'Layla', 'Zainab', 'Yusuf'];
console.log(names.length)
console.log(names);

// change the value of the array
names[3] ='Luis'
names[0] ='David'
names[7] ='Hussein'
names[4] ='Jousef'
names[6] ='Lilia'
console.log(names);

//push : add to the end of the array or add element to the last index
names.push('Hussein')

//add element to first index 
names.unshift('Yasser')
console.log(names)

//remove the first element from the Array
names.shift()
console.log(names.shift())

let objects = [ 1,2,3,'ahmed',true, false, null, undefined, {name: 'hussein'}, [1,2,3]];
console.log(objects);

let hero = [1,2,3,[4,5,6,[7,8,9]]];
console.log(hero[3][3][2]);

let myArray = [42, 'Hello World', 'true', 3.14,'Javascript' ]
console.log(myArray)

hero.splice(0,2,'hussein', 'ahmed');
console.log(hero)

//DOM training
document.getElementById('welt');
console.log(document.getElementById('welt'))

let welt = document.getElementById('welt');

welt.innerHTML = ('Hello world');
console.log(welt)

let student = ['ahmed','hussein','mark','dany','daly'];
console.log(student.indexOf('hussein',1))

// console.log(student.lastIndexOf('hussein',1))

// Array reverse
let arr= ['dany','john','sorn','pop']
console.log(arr.reverse())

//Array sort
let armin = ['sorin','john','aimn','pop']
console.log(armin.sort())

// concat
let arr1 = ['hussein', 'ahmed', 'dany'];
let arr2 = ['sorin', 'john', 'pop'];
console.log(arr1.concat(arr2))

// // join
// let arr1 = ['hussein', 'ahmed', 'dany'];
// let arr2 = ['sorin', 'john', 'pop'];
// console.log(arr1.concat(arr2))

//Function
function greating()
{
    console.log('good morning world');
}
greating();
greating();

function hello(name)
{
    console.log('hello ' + name)
}
hello();
hello('hussein')

// craet a function calculate the visitors age in days
function cal(age)
{
    let result = age * 365;
    console.log(result);
}
cal(52);
cal(49); 
cal(12);

// function returning value
function product(price, taxes, ads)
{
    let product = price + taxes;
    let result = product + ads;
    return result;
}
let x = product(120, 17, 30)
console.log(x);
console.log(x / 2);

function days(age)
{
    let result = age * 365;
    return result;
}
let day

// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955,
        categories: ['man', 'physicist'],
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727,
        categories: ['man', 'mathematician'],
    },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934,
        categories: ['woman', 'physicist'],
    },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979,
        categories: ['woman', 'physicist'],
    },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968,
        categories: ['woman', 'physicist'],
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909,
        categories: ['woman', 'inventor'],
    },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler
const bornIn1500s = inventors.filter(function (inventor) {
    return inventor.year >= 1500 && inventor.year < 1600;
});
console.log(bornIn1500s);

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton
const mathematicians = inventors.filter(function (inventor) {
    return inventor.categories && inventor.categories.includes('mathematician');
})
console.log(mathematicians)
// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein

// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

// Array.prototype.toSorted()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"

// ~~~ OPTIONAL ~~~
// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?

// ~~~~~~~~~~~~~~~~~~

// Array.prototype.toSorted()
// 8. Sort the inventors by years lived (both ascending and descending)

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
    'Boulevard Auguste-Blanqui',
    'Boulevard Barbès',
    'Boulevard Beaumarchais',
    "Boulevard de l'Amiral-Bruix",
    'Boulevard Mortier',
    'Boulevard Poniatowski',
    'Boulevard Soult',
    'Boulevard des Capucines',
    'Boulevard de la Chapelle',
    'Boulevard de Clichy',
    'Boulevard du Crime',
    "Boulevard du Général-d'Armée-Jean-Simon",
    'Boulevard Haussmann',
    "Boulevard de l'Hôpital",
    'Boulevard des Italiens',
    'Boulevard Lefebvre',
    'Boulevard de la Madeleine',
    'Boulevard de Magenta',
    'Boulevard Malesherbes',
    'Boulevard Marguerite-de-Rochechouart',
    'Boulevard Montmartre',
    'Boulevard du Montparnasse',
    'Boulevard Raspail',
    'Boulevard Richard-Lenoir',
    'Boulevard Saint-Germain',
    'Boulevard Saint-Michel',
    'Boulevard de Sébastopol',
    'Boulevard de Strasbourg',
    'Boulevard du Temple',
    'Boulevard Voltaire',
    'Boulevard de la Zone',
];

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name

const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank',
];

// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const family = [
    { name: 'Lily', year: 2009 },
    { name: 'Leah', year: 2011 },
    { name: 'Liv', year: 2020 },
    { name: 'Lydia', year: 2015 },
];

// Array.prototype.some()
// 12. Is at least one person 18 years old?

// Array.prototype.every
// 13. Do all names of the family members start with the letter L?