document.addEventListener('DOMContentLoaded', () => {

  const checkboxes = document.querySelectorAll('.faq_checkbox');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      // Se il checkbox è selezionato, deseleziona gli altri
      if (event.target.checked) {
        checkboxes.forEach(cb => {
          if (cb !== event.target) {
            cb.checked = false;
          }
        });
      }
    });
  });



//Funzione Tasto copia

  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {

      const textToCopy = this.getAttribute('data-number');

      navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Numero copiato: ' + textToCopy);
      }).catch(function(err) {
        console.error('Errore durante la copia: ', err);
      });
    });
  });
});