import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';

const ErrorModal = ({title, content}) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
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
                    <Button>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;