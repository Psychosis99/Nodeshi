async function loadImage() {
  fetch("https://api.nekosapi.com/v4/images/random/file", {
    method: "GET",
}).then(res => res.json())
.then(data => {
    const imageUrl = data;

   document.getElementById("nekoImage").src = imageUrl;
})
  
}

// Load one on page start
loadImage();
