import styles from './Button.module.css';

const Button = ({type, children, clickEvent=null}) => {
    return (
        <button onClick={clickEvent} className={styles.button} type={type || 'button'}>
            {children}
        </button>
    );
};

export default Button;