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