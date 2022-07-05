import { useState, useRef } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({onAddUser}) => {
    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const handleSubmitAction = (e) => {
        e.preventDefault();
        const inputUserName = nameInputRef.current.value;
        const inputUserAge = ageInputRef.current.value;
        if(inputUserName.trim().length === 0 || +inputUserAge < 1) {
            setError({
                title: "Invaild input",
                content: "please check your name or age"
            })
            return;
        }
        onAddUser(inputUserName, inputUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const handleErrorModal = () => {
        setError(null);
    };


    return (
        <>
            {error && <ErrorModal onConfirm={handleErrorModal} title={error.title} content={error.content} />}
            <Card className={styles.input}>
                <form onSubmit={handleSubmitAction}>
                    <label htmlFor="username">UserName</label>
                    <input ref={nameInputRef} type="text" id="username" />
                    <label htmlFor="userage">Age (Years)</label>
                    <input ref={ageInputRef} type="number" id="userage" />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;