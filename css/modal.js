document.addEventListener("DOMContentLoaded", function () {
    const kdramaSelect = document.getElementById("kdramaSelect");
    kDramas.forEach((drama, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = drama.title;
        kdramaSelect.appendChild(option);
    });
});

function showCast() {
    const castContainer = document.getElementById("castContainer");
    castContainer.innerHTML = ""; // Clear previous content

    const selectedIndex = document.getElementById("kdramaSelect").value;
    if (selectedIndex === "") return;

    const selectedDrama = kDramas[selectedIndex];
    selectedDrama.cast.forEach(actor => {
        const castCard = document.createElement("div");
        castCard.className = "cast-card";

        const actorName = document.createElement("h2");
        actorName.textContent = actor.name;

        const actorCharacter = document.createElement("p");
        actorCharacter.innerHTML = `<strong>Personaje:</strong> ${actor.character}`;

        const actorBirthDate = document.createElement("p");
        actorBirthDate.innerHTML = `<strong>Fecha de nacimiento:</strong> ${actor.birthDate}`;

        const actorBiography = document.createElement("p");
        actorBiography.innerHTML = `<strong>Biografía:</strong> ${actor.biography}`;

        const actorOtherWorks = document.createElement("p");
        actorOtherWorks.innerHTML = `<strong>Otras obras:</strong> ${actor.otherWorks.join(", ")}`;

        const ratingContainer = document.createElement("div");
        ratingContainer.className = "rating";
        ratingContainer.innerHTML = "<strong>Calificación:</strong> ";
        
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.className = "star";
            star.textContent = "★";
            star.addEventListener("click", () => rateActor(actor, i));
            if (i <= actor.rating) {
                star.classList.add("checked");
            }
            ratingContainer.appendChild(star);
        }

        const averageRating = calculateAverageRating(actor);
        const averageRatingDisplay = document.createElement("p");
        averageRatingDisplay.innerHTML = `<strong>Calificación promedio:</strong> ${averageRating.toFixed(1)} (${actor.ratingCount} votos)`;

        castCard.appendChild(actorName);
        castCard.appendChild(actorCharacter);
        castCard.appendChild(actorBirthDate);
        castCard.appendChild(actorBiography);
        castCard.appendChild(actorOtherWorks);
        castCard.appendChild(ratingContainer);
        castCard.appendChild(averageRatingDisplay);

        castContainer.appendChild(castCard);
    });
}

function rateActor(actor, rating) {
    if (!actor.rating) {
        actor.rating = rating;
        actor.ratingCount = 1;
    } else {
        actor.rating = (actor.rating * actor.ratingCount + rating) / (actor.ratingCount + 1);
        actor.ratingCount++;
    }
    showCast();
}

function calculateAverageRating(actor) {
    if (!actor.rating) {
        return 0;
    }
    return actor.rating;
}
