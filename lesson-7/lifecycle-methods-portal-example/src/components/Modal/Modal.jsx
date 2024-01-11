import { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal);
    }

    closeModal = ({target, currentTarget, code})=> {
        if(target === currentTarget || code === "Escape") {
            this.props.close()
        }
    }

    render() {
        const {closeModal} = this;
        const {children, close} = this.props;

        return createPortal(
            (<div onClick={closeModal} className={styles.overlay}>
                <div className={styles.modal}>
                    <span onClick={close} className={styles.close}>X</span>
                    {children}
                </div>
            </div>),
            modalRoot
        )
    }
}

export default Modal;