// ✅ Animation des barres de compétences au chargement
window.addEventListener('load', () => {
  document.querySelectorAll('.fill').forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  });
});

// ✅ Défilement fluide vers les sections via les liens de navigation
document.querySelectorAll('nav a, .cta').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✅ Action au clic sur les boutons "Voir" des projets
document.querySelectorAll('.voir-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("Redirection vers le projet...");
    // Tu peux remplacer l'alerte par window.location.href = "URL_du_projet";
  });
});

// ✅ Validation du formulaire de contact
document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const sujet = document.getElementById("sujet").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!prenom || !nom || !sujet || !message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  alert(`Merci ${prenom}, votre message concernant "${sujet}" a bien été envoyé !`);
  this.reset();
});
