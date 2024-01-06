// Attendez que le DOM soit chargÃ©
document.addEventListener('DOMContentLoaded', function () {

  // SÃ©lectionnez le formulaire
  const contactForm = document.getElementById('contact-form');

  // Ajoutez un Ã©couteur d'Ã©vÃ©nement pour la soumission du formulaire
  contactForm.addEventListener('submit', function (event) {
    // EmpÃªchez la soumission par dÃ©faut du formulaire
    event.preventDefault();

    // Validez le formulaire
    if (validateForm()) {
      // Le formulaire est valide, vous pouvez ajouter ici le code pour envoyer les donnÃ©es Ã  votre serveur
      alert('Formulaire soumis avec succÃ¨s!');
    }
  });

  // Fonction de validation du formulaire
  function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // VÃ©rifiez si les champs obligatoires sont remplis
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Veuillez remplir tous les champs du formulaire.');
      return false;
    }

    // VÃ©rifiez si l'adresse e-mail est valide (utilisez une expression rÃ©guliÃ¨re simple ici)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Veuillez fournir une adresse e-mail valide.');
      return false;
    }

    // Si toutes les validations rÃ©ussissent, le formulaire est considÃ©rÃ© comme valide
    return true;
  }
}); 