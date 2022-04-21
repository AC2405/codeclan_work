var chickens = [
    {name: "Margaret", age: 2, eggs: 0},
      {name: "Hetty", age: 1, eggs: 2},
      {name: "Henrietta", age: 3, eggs: 1},
      {name: "Audrey", age: 2, eggs: 0},
      {name: "Mabel", age: 5, eggs: 1}
    ]

    var chickennames= []

    for(var chicken of chickens){
    var name = chicken.name
    chickennames.push(name)
}
// console.log(chickennames)

var ChickensWithEggs = []

for(var chicken of chickens){
    if(chickens.eggs > 0){
ChickensWithEggs.push(chicken)
    }
}

// console.log(ChickensWithEggs)

var ChickensOver2 = []

for(var chicken of chickens)
if(chicken.age > 2){
    ChickensOver2.push(chicken)

}
console.log(ChickensOver2)