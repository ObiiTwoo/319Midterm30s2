
document.addEventListener("DOMContentLoaded", fetchData)

function fetchData(){
  fetch("./data.json")
    .then((response) =>  { return response.json()})
    .then((data) => { loadGames(data.games)})
    .catch((err) => { console.log("error:" + err)});
}

function loadGames(games) {
  for (game of games) {
      let name = game.name;
      let image = game.image;
      let score = game.score;
      let rating = game.ESRB;
      let genre = game.genre
      let releaseYear = game.releaseYear;
      let developer = game.developer;
      let review = game.review;
      let embedCode = game.embedCode;
      let mainContainer = document.getElementById("reviews");
  let div = document.createElement("div");
  div.classList.add("col-12");
  div.innerHTML = `
          <div class="card shadow-sm">
            <div class="card-body card-border row">
              <div class="flex col-3">
                <img src="${image}"
                  alt="${name}" />
              </div>
              <div class="flex col-9">
                <p class="card-text"><strong>Review:</strong> <br> ${review}</p>
              </div>
              <div class="card-extra-info d-flex justify-content-between align-items-center">
                <div>
                  <p class="card-text"><strong>Title:</strong> ${name}</p>
                  <p class="card-text"><strong>Score:</strong> ${score}</p>
                </div>
                <div>
                  <p class="card-text"><strong>Genre:</strong> ${genre}</p>
                  <p class="card-text"><strong>ESRB Rating:</strong> ${rating}</p>
                </div>
                <div>
                  <p class="card-text"><strong>Release Year:</strong> ${releaseYear}</p>
                  <p class="card-text"><strong>Developer:</strong> ${developer}</p>
                </div>
              </div>
              <div class="steam-embed">
                <iframe class="col-6" src="https://store.steampowered.com/widget/${embedCode}/" frameborder="0" width="646"
                height="190"></iframe>
              </div>
            </div>
          </div>
        `;
  mainContainer.appendChild(div);
    }
}