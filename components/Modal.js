import { useEffect, useRef } from "react";
import styles from "../styles/modal.module.css";
import CloseIcon from "@material-ui/icons/Close";

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
        <div
          className={`flex flex-col justify-center items-center ${styles.modal}`}
        >
          <div className="bg-white w-full h-[106%] relative z-[1000] rounded-3xl">
            <div className="flex justify-center items-center">
              <img
                src="/popup-circle.png"
                alt=""
                className="mx-auto w-[12.5rem]"
              />
              <img
                src="/popup-icon.png"
                alt=""
                className="absolute top-[-3.5rem] mx-auto w-[7rem]"
              />
            </div>
            <div className="absolute right-[1rem] top-[1rem] ">
              <CloseIcon fontSize="large" style={{ color: "#f21e26" }} />
            </div>
            <div className="flex flex-col text-center justify-center item-center mt-[6rem]">
              <h2 className="font-bold text-xl">
                Thank you for subscribing with us.
              </h2>
              <p>
                We’ll let you know about our special offers & upcoming events.
              </p>
            </div>
          </div>
          <div className="mx-auto bg-[#ed1d25] w-[30rem] h-[2rem] rounded-full mt-[-1.2rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
