import React, { useEffect } from "react";
import './app-modal.scss';

function AppModal(props: any) {

  const closeModal = () => {
    document.body.style.overflow = '';
    const vidModal: any = document.querySelector('.app-modal');
    const modalContent: any = document.querySelector('.modal-content');
    if (vidModal && modalContent) {
      vidModal.style.opacity = '';
      modalContent.style.transform = '';
    }
    setTimeout(() => {
      // this.modalSignal.emit();
      props.onCloseModal();
    }, 500);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const vidModal: any = document.querySelector('.app-modal');
    const modalContent: any = document.querySelector('.modal-content');
    setTimeout(() => {
      if (vidModal && modalContent) {
        vidModal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
      }
    }, 200);
  }, []);

  return (
    <div className="app-modal">
      <div className="modal-bg"></div>
      <div className={"modal-container " + props.styleClass}>
        <div className="modal-content">
            <div className="modal-closer" onClick={closeModal}>
                <i className="fas fa-times"></i>
            </div>
            {props.children}
        </div>
      </div>
    </div>
  );
}
export default AppModal;
