
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
  return data["number"]
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))

const astroNames = (data) => {
  // // return an array containing the name strings of the astronauts in space
  // let names = []
  // let astroData = data["people"]
  // for (i = 0; i < astroData.length; i++) {
  //   names += astroData[i]["name"] + " "
  // }
  // return names

  let people = data.people
  let nameArray = people.map((person) => { return person.name })
  //console.log(nameArray)
  return nameArray
}

console.log("names of people in space: ", astroNames(peopleInSpace))

const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
  // let crafts = []
  // let craftData = data["people"]
  // for (i = 0; i < craftData.length; i++) {
  //   crafts += craftData[i]["craft"] + " "
  //   for (j = 0; j < crafts.length - 1;  j++) {
  //     let bool = (crafts[j] = crafts[j+1]) ? true : false
  //     if(bool = "false") {
  //       return bool
  //     }
  //   }
  // }
  // return bool

  // let people = data.people
  // let craftArray = people.map((person) => { return person.craft })
  // console.log(craftArray)
  //
  // for(i = 0; i < craftArray.length-1; i++) {
  //   if (craftArray[i] != craftArray[i+1]) {
  //     return false
  //   }
  // }
  // return true
}
console.log("same craft? ", allInSameCraft(peopleInSpace))

const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
}
console.log("successful response? ", successfulResponse(peopleInSpace))

const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads
// const greeting = document.getElementById("greeting")
// console.log(greeting)

//greeting.innerText = "oh, hey there"

//"<li>""name string here""</li>"

//need to take names and display them on the web page by putting them between tags
//make windows on load fcn provide names

// for(int i = 0; i < astroNames.length-1; i++) {
//   console.log(astroNames[i])
// }
//<"li">nameArray<"/li">


const list = document.getElementById("astroList")
window.onload = () => {

  //NEED TO TAKE NAME STRINGS AND TURN THEM TO LI VIA loop
  let nameArray = astroNames(peopleInSpace)
  //console.log(nameArray)
  let listItems = nameArray.map((name) => { return "<li>" + name + "</li>" })
  console.log(listItems)
  domString = listItems.join("")
  list.innerHTML = domString
}
