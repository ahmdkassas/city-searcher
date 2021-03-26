const cities = [
  { name: "New York", population: "8.4m", attraction: "Statue of Liberty" },
  { name: "San Fransisco", population: "874k", attraction: "Golden Gate Bridge" },
  { name: "Seattle", population: "724k", attraction: "Space Needle" },
  { name: "Houston", population: "2.3m", attraction: "Space Center" },
  { name: "San Diego", population: "1.4m", attraction: "San Diego Zoo" },
  { name: "Atlanta", population: "488k", attraction: "World of Coca-Cola" },
  { name: "Baltimore", population: "856k", attraction: "Orioles" },
  { name: "Miami", population: "1.2m", attraction: "Beach" },
  { name: "Nashville", population: "670k", attraction: "Country Music HoF" },
  { name: "Denver", population: "727k", attraction: "Coors Field" },
  { name: "Boston", population: "692k", attraction: "Fenway Park" },
  { name: "Las Vegas", population: "651k", attraction: "Stratosphere" },
];

// METHOD 1: Inject data into html

// Roadmap

// select the card elements
// create a loop
// select the h3, small, and p tags within our current card element
// get the data from the cities array
// assign that data to the inner text property of the h3, small, and p tags

// let cards = document.getElementsByClassName('card');

// for(let i = 0; i < cards.length; i++) {
//   let h3 = cards[i].getElementsByTagName("h3")[0];
//   let small = cards[i].getElementsByTagName("small")[0];
//   let p = cards[i].getElementsByTagName("p")[0];

//   h3.innerText = cities[i].name;
//   small.innerText = `population: ${cities[i].population}`
//   p.innerText = p.innerText.replace("ATTRACTION NAME", cities[i].attraction)
  
//   if (cities[i].img) {
//     const img = document.createElement("img");
//     img.src = "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//     img.alt = "New York"
//     img.width = 150;
  
//     cards[i].appendChild(img)
//   }
// }


// METHOD 2: Creating card templates

// removes cards from html

const cards = document.querySelectorAll(".card")
for(i = 0; i < cards.length; i++) {
  cards[i].remove()
}

// creates a card

function createCardFromCity(city) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = 
  `<h3>${city.name}</h3>
  <small>population: ${city.population}</small>
  <p>You'll want to go see the ${city.attraction}</p>
  `
  return card
}

// appends created cards to cards-container for each object in cities array

const cardsContainer = document.getElementsByClassName("cards-container")[0]

for (i = 0; i < cities.length; i++) {
  const card = createCardFromCity(cities[i])
  cardsContainer.appendChild(card)
}

// Using forEach loop instead of for loop

// cities.forEach(city => {
//   const card = createCardFromCity(city)
//   cardsContainer.appendChild(card)
// })

































// getElements

// const cards = document.getElementsByClassName("card");

// console.log(cards)

// document.getElementsByClassName("card")[0].remove()

// console.log(cards)



// querySelector

// const cards = document.querySelectorAll(".card")

// console.log(cards)

// document.querySelectorAll(".card")[0].remove()

// console.log(cards)