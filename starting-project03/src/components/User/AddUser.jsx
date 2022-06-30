import { useState } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({onAddUser}) => {
    const [enterUserName, setEnterUserName] = useState('');
    const [enterUserAge, setEnterUserAge] = useState(0);
    const [error, setError] = useState();

    const handleSubmitAction = (e) => {
        e.preventDefault();
        if(enterUserName.trim().length === 0 || +enterUserAge < 1) {
            setError({
                title: "Invaild input",
                content: "please check your name or age"
            })
        }
        onAddUser(enterUserName, enterUserAge);
        setEnterUserName('');
        setEnterUserAge(0);
    };

    const handleInputUserName = (e) => {
        setEnterUserName(e.target.value);
    };

    const handleInputUserAge = (e) => {
        setEnterUserAge(e.target.value);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} content={error.content} />}
            <Card className={styles.input}>
                <form onSubmit={handleSubmitAction}>
                    <label htmlFor="username">UserName</label>
                    <input onChange={handleInputUserName} type="text" id="username" value={enterUserName} />
                    <label htmlFor="userage">Age (Years)</label>
                    <input onChange={handleInputUserAge} type="number" id="userage" value={enterUserAge} />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;