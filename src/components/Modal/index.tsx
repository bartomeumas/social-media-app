// import React, { ReactNode } from "react";
// import styles from "./Modal.module.css";

// interface ModalProps {
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   title?: string;
//   children: ReactNode;
// }

// const Modal = ({ setIsOpen, title, children }: ModalProps) => {
//   return (
//     <>
//       <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}>
//           {title && (
//             <div className={styles.modalHeader}>
//               <h5 className={styles.heading}>{title}</h5>
//             </div>
//           )}
//           <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//             X
//           </button>
//           <div className={styles.modalContent}>{children}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;
import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children: ReactNode;
}

const Modal = ({ setIsOpen, title, children }: ModalProps) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          {title && (
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>{title}</h5>
            </div>
          )}
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
