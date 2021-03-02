const apiURL = "http://localhost:3000/planets"
const planetList = document.querySelector('.planets')

fetch(apiURL)
  .then(handleResponse)
  .then(iterateOverPlanets)
  
function handleResponse(response){
  return response.json()
}

function iterateOverPlanets(planets) {
  planets.forEach(createPlanetElement)
}

function createPlanetElement(planet) {
  const li = document.createElement('li')

  li.innerHTML = `<a href="planet.html?id=${planet.id}">${planet.name}</a>`

  planetList.append(li)
}

