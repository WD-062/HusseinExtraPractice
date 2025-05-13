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

let myArray = [42, 'Hello Worled', 'true', 3.14,'Javascript' ]
console.log(myArray)
