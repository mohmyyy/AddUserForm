// import './List.css'
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  // if (props.onSubmit.name.)
  // console.log(props.onSubmit.name.length)
  return (
    <Card className = {classes.users} >
      <ul>
        {props.users.map((user) => (
            <li key={user.id} >
              {user.name} - ({user.age} years old)
            </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
