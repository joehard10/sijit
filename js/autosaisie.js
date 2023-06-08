var textContainer = document.getElementById("text-container");
var textElement = document.getElementById("text");
var cursorElement = document.getElementById("cursor");

var texts = [
  "Votre succès numérique commence ici",
  "Nous vous apportons des solutions sur mesure ",
  "Sijit est le partenaire de confiance pour vos projets d'applications ambitieux"
]; // Liste des textes à afficher

var currentIndex = 0;
var currentText = "";

function typeText() {
  if (currentIndex >= texts.length) {
    currentIndex = 0; // Revenir au début de la liste une fois tous les textes affichés
  }

  currentText = texts[currentIndex];
  textElement.textContent = "";
  var index = 0;

  var typingInterval = setInterval(function() {
    if (index < currentText.length) {
      textElement.textContent += currentText.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      cursorElement.style.display = "none"; // Masquer le curseur après la saisie complète
      setTimeout(deleteText, 5000); // Attendre 3 secondes avant de supprimer le texte
    }
  }, 100);

  cursorElement.style.display = "inline-block"; // Afficher le curseur pendant la saisie
}

function deleteText() {
  var deletingInterval = setInterval(function() {
    if (textElement.textContent.length > 0) {
      textElement.textContent = textElement.textContent.slice(0, -1);
    } else {
      clearInterval(deletingInterval);
      currentIndex++;
      cursorElement.style.display = "inline-block"; // Afficher le curseur avant la prochaine saisie
      setTimeout(typeText, 2000); // Attendre 1 seconde avant de passer au texte suivant
    }
  }, 30);
}

typeText();
