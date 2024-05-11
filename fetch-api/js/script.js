// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnJoke = document.querySelector("button");
const bodyJoke = document.querySelector(".joke");


function fetchJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(r => r.json())
    .then(jokes => {
        bodyJoke.innerHTML = jokes.value;
    })   
}

btnJoke.addEventListener("click", fetchJoke);
