import styles from './Button.module.css';

const Button = ({type, children}) => {
    return (
        <button className={styles.button} type={type || 'button'}>
            {children}
        </button>
    );
};

export default Button;