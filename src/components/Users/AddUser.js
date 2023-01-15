import "./AddUser.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import { useRef } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const enteredNameRef = useRef();
  const enteredUserAgeRef = useRef();
  const enteredCollegeNameRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const enteredName = enteredNameRef.current.value;
    const enteredUserAge = enteredUserAgeRef.current.value;
    const enteredCollegeName = enteredCollegeNameRef.current.value;
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length <= 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      return setError({
        title: "Invalid Input !",
        message: "Kindly Enter the values.",
      });
    }
    if (+enteredUserAge < 1) {
      return setError({ title: "Invalid Age !", message: "Age must be > 0" });
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    enteredNameRef.current.value = ''
    enteredUserAgeRef.current.value = ''
    enteredCollegeNameRef.current.value = ''
    // setEnteredUsername("");
    // setEnteredAge("");
  };
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const onAgeChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            id="username"
            type="text"
            ref={enteredNameRef}
          />
          <label htmlFor="age">Age(years)</label>
          <input
            // onChange={onAgeChangeHandler}
            // value={enteredAge}
            ref={enteredUserAgeRef}
            id="age"
            type="number"
          />
          <label htmlFor="collegeName">College Name</label>
          <input
            // onChange={onAgeChangeHandler}
            // value={enteredAge}
            ref={enteredCollegeNameRef}
            id="collegeName"
            type="text"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
