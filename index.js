
document.addEventListener("DOMContentLoaded", fetchData());

function fetchData() {
    
    fetch("./data.json")
        .then((response) => { return response.json() })
        .then((data) => { loadHome(data.home_page) })
        .catch((err) => { console.log("error:" + err) });
}

function loadHome(home) {
    for (obj of home) {
        
        let card_text = obj.card_text;
        let image = obj.image;
        let btn_text = obj.button_text;
        let btn_link = obj.button_link;
        let title = obj.title;
        let mainContainer = document.getElementById("card-container");
        let div = document.createElement("div");
        div.classList.add("col-4");

        div.innerHTML = `
  
  <div class="card shadow-sm">
      <img src="${image}" alt="${title}" class="card-img-top" />
      <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${card_text}</p>
          <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-sm btn-outline-primary"><a href="${btn_link}">${btn_text}</a></button>
          </div>
      </div>
  </div>

        `;
        mainContainer.appendChild(div);
    }
}

//if we need more features, possibly add the JSON to the home page and randomly 
//choose a game/movie title that is displayed with JUST REVIEWED!! or something

