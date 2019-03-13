//Modal
const modalElements = document.querySelectorAll('.modal-overlay, .modal');
const modalButtons = document.querySelectorAll('.name, .modal_close');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalElements.forEach(modalElement => {
      modalElement.classList.toggle('active');
    });
  });
});