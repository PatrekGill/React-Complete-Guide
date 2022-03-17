import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {
    console.log(props.items);
    return (
        <Card className={classes.users}>
            <ul>
                {props.items.map((user) => (
                    <li key={user.id}>
                        {user.userName}
						:
                        {user.age}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
