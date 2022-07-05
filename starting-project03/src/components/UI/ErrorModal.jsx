import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';
import ReactDom from 'react-dom';

const Backdrop = ({onConfirm}) => {
    return <div className={styles.backdrop} onClick={onConfirm}></div>
};

const ModalOverlay = ({title, onConfirm, content}) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>
                    {title}
                </h2>
            </header>
            <div className={styles.content}>
                <p>
                    {content}
                </p>
            </div>
            <footer className={styles.actions}>
                <Button clickEvent={onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
};

const ErrorModal = ({title, content, onConfirm}) => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={title} content={content} onConfirm={onConfirm} />, document.getElementById('overlay-root'))}
        </>
    );
};

export default ErrorModal;