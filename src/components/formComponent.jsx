import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/App.module.css";
import { FormContext } from "./ContentLayoutComponent";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";

const FormComponent = () => {
  //This is a call for the useDispatch API.
  const dispatch = useDispatch();

  //This is a destructured LoadFormContext...
  const { action, setLoadForm, todo } = useContext(FormContext);

  //This is the state for todo form input
  const [activity, setActivity] = useState("");

  //This function handles form submission
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!activity) {
      toast.error("Fill required fields");
    } else {
      dispatch(addTodo({ activity, id: uuidv4() }));
      setLoadForm(false);
    }
  };

  return (
    //This is the form below
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>
        <form className={styles.form_body} onSubmit={(e) => HandleSubmit(e)}>
          <label htmlFor="activity" className={styles.form_label}>
            Todo
          </label>
          <input
            name="title"
            type="text"
            placeholder="Add today's activity here"
            value={action === "Add" ? activity : todo.activity}
            className={styles.form_input}
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          />
          <div className={styles.form_btn_container}>
          <button type="submit" className={styles.form_btn_primary}>
            {action} Todo
          </button>
          <button
            type="button"
            className={styles.form_btn_secondary}
            onClick={() => setLoadForm(false)}
          >
            Cancel
          </button>
          </div>
        </form>
        <button
          className={styles.form_cancelBTN}
          onClick={() => setLoadForm(false)}
        >
          <FaTimes size={"2rem"} color="rgb(204, 204, 204)" />
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
