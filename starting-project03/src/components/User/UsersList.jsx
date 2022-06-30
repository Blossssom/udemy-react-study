import Card from "../UI/Card";
import styles from './UsersList.module.css';

const UsersList = ({userData}) => {
    return (
        <Card className={styles.users}>
            <ul>
                {
                    userData.map(data => <li key={data.id}>{`${data.name} (${data.age} years)`}</li>)
                }
            </ul>
        </Card>
    );
};

export default UsersList;