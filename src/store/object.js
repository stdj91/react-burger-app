const object1 = {
    name: 'Anna',
    lastName: 'Stark',
    age: 23,
    nickname: 'Fat'
}

const object2 = {
    ...object1
}

console.log(object2)
console.log(object1)