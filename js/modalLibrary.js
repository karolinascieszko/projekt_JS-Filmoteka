(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", escape);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function escape() {
    refs.modal.classList.add("is-hidden");
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        refs.modal.classList.add("is-hidden");
      }
    });
  }
})();
