//Example fetch using pokemonapi.co
// API vf6tPvLRpwgdEen84j
//https://www.magayo.com/api/results.php?api_key=hXJDjsp8I6RY&game=game=us_powerball&draw=2019-03-10
//us_mega_millions

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

