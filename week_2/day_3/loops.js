

//console.log(numbers)

//for(var number of numbers){
//var doublednumber = number * 2
   // console.log(doublednumber)
// }

var sports = ["football", "rugby", "bowling"]

// for(var sport of sports){
//     var capitalSports = sport.toUpperCase()
//     console.log(capitalSports)
// }


// var numbers = [1, 2, 3, 4, 5]

// var total = 0

// for(var number of numbers){
//     total = total + number
// }

// console.log(total)

var chickens = [
    {name: "Margaret", age: 2, eggs: 0},
      {name: "Hetty", age: 1, eggs: 2},
      {name: "Henrietta", age: 3, eggs: 1},
      {name: "Audrey", age: 2, eggs: 0},
      {name: "Mabel", age: 5, eggs: 1}
    ]

var totaleggs = 0

    // for(var chicken of chickens){
    //     totaleggs = totaleggs + chicken.eggs 
    //  chicken.eggs = 0
    // }

//     console.log(chickens)
// console.log(totaleggs)

// for(var chicken of chickens){
//     if(chicken.eggs > 0){
//         console.log(chicken.name + " has " + chicken.eggs + " eggs.")
//     }
// }

var movie = {
    title: "garfield",
    year: 2004,
ratings: [
    {critics: 
    {imdb: 5, rt: 15}
    }
  ]
}

console.log(movie.ratings[0].critics.rt)