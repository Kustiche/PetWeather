export function closeModal(e) {
  const isModalInner = e.target.closest(".modal-error__inner") === null;
  const isModalButtonClose = e.target.className === "modal-error__close btn-reset";

  if (isModalInner || isModalButtonClose) {
    window.modalError.close();
  }
}
