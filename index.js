// Get Images from json
function getImages(target) {
  return $.getJSON('./assets/data/dogs.json', function(res) {
    res.dogs.map(function(item, index) {
      renderImage(target, item, index);
    })
  }).then(function() {
    setTimeout(function() {
        hideSpinner();
    }, 4500)
  });
}

// Create list items for images
function renderImage(target, obj, index) {
  var li = document.createElement('li')
  li.addEventListener("click", function(){ viewImage(obj.image); });
  li.style.backgroundImage = 'url(' + obj.image + ')';
  li.style.backgroundSize = 'cover';
  li.style.backgroundPosition = 'center';
  li.style.backgroundRepeat = 'no-repeat';
  li.setAttribute('role', 'img');
  li.setAttribute('aria-label', 'Cute Puppy Image #' + index);
  $(target).append(li);
}

// Show and set image viewer
function viewImage(url) {
  document.getElementById('imageViewer').classList.remove('hide');
  document.getElementById('imageViewer').classList.add('show');
  document.getElementById('selectedImage').src = url;
}

// Close image viewer
function closeImage() {
  document.getElementById('imageViewer').classList.remove('show');
  document.getElementById('imageViewer').classList.add('hide');
}

// Hides loading spinner
function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}
