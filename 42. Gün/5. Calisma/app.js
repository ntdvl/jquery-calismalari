var x = {

    "name": 'test',
    "gender": 'male',
    "age": 25

}

var y = JSON.stringify(x);
console.log(y);

console.log(JSON.parse(y));