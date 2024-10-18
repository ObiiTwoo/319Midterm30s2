
document.addEventListener("DOMContentLoaded", fetchData)

function fetchData(){
 
  fetch("./data.json")
    .then((response) =>  { return response.json()})
    .then((data) => { loadMovies(data.movies)})
    .catch((err) => { console.log("error:" + err)});
}

function loadMovies(movies) {
  for (movie of movies) {
      let name = movie.name;
      let image = movie.image;
      let score = movie.score;
      let rating = movie.MPARating;
      let releaseYear = movie.releaseYear;
      let director = movie.director;
      let review = movie.review;
      let link = movie.imdbLink;
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
                  <p class="card-text"><strong>MPA Rating:</strong> ${rating}</p>
                  <p><p class="card-text"><strong>IMDB: </strong</p><button class="flex" onclick = "window.location.href='${link}';" target="_blank"> IMDB </button>
                </div>
                <div>
                  <p class="card-text"><strong>Release Year:</strong> ${releaseYear}</p>
                  <p class="card-text"><strong>Director:</strong> ${director}</p>
                </div>
              </div>
            </div>
          </div>
        `;
  mainContainer.appendChild(div);
    }
}