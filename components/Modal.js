import { useEffect, useRef } from "react";
import styles from "../styles/modal.module.css";

const Modal = ({ modalStyle, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={`${styles.modal__wrap}`}
        onClick={onClose}
      >
        <div className={`flex flex-col justify-center items-center ${styles.modal}`}>
          <div className="bg-white w-full h-[106%] relative z-[1000]"></div>
          <div className="bg-[#ed1d25] w-[20rem] h-[2rem] rounded-full mt-[-1rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
