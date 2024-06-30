document.addEventListener('DOMContentLoaded', function () {
    // Load your local JSON data
    fetch('js/data-vid.json')
        .then(response => response.json())
        .then(data => {
            // Loop through each drama element
            document.querySelectorAll('.drama').forEach((drama, index) => {
                // Find the rating element within each drama
                let ratingElement = drama.querySelector('.rating');
                if (ratingElement) {
                    // Replace the inner HTML of rating with imdbRating from JSON
                    ratingElement.innerHTML = `⭐ ${data[index].imdbRating}`;
                }
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
