import "./styles.css";

const button = document.getElementById("submit-data");

button.addEventListener("click", () => {
  const q = document.getElementById("input-show").value;
  const url = "https://api.tvmaze.com/search/shows?q=" + q;

  const body = document.getElementById("body");

  fetch(url).then(response => response.json())
  .then(data => {

    for (let i=0; i < data.length; i++) {
      const divShow = document.createElement("div");
      divShow.classList.add("show-data");

      const img = document.createElement("img");
      const div = document.createElement("div");
      div.classList.add("show-info");
      const h1 = document.createElement("h1");

      if(data[i].show.image != null) {
        img.src = data[i].show.image.medium;
      }
      else {
        img.innerText = "No image";
      }
      h1.innerText = data[i].show.name;
      const summary = data[i].show.summary;
      
      div.appendChild(h1);
      div.innerHTML += summary;

      divShow.appendChild(img);
      divShow.appendChild(div);

      
      body.appendChild(divShow);

    }



  })
  



})
