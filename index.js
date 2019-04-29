// Get Images from json
function getImages(target) {
  axios.get("./assets/data/dogs.json").then(res => {
    res.data.dogs.map((item, index) => {
      renderImage(target, item, index)
    })
  }).then(() => {
    setTimeout(() => {
        hideSpinner()
    }, 4500)
  });
}

// Create list items for images
function renderImage(target, obj, index) {
  $(target).append(
    `<li 
        onclick="viewImage('${obj.image}')" 
        style="background-image: url('${obj.image}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat"
        role="img"
        aria-label="Cute Puppy Image #${index}"
    >
    </li>`
  );
}

// Show and set image viewer
function viewImage(url) {
  document.getElementById("imageViewer").classList.remove("hide");
  document.getElementById("imageViewer").classList.add("show");
  document.getElementById("selectedImage").src = url;
}

// Close image viewer
function closeImage() {
  document.getElementById("imageViewer").classList.remove("show");
  document.getElementById("imageViewer").classList.add("hide");
}

// Hides loading spinner
function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}
