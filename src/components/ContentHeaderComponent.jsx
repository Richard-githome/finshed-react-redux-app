import { useContext } from "react";
import styles from "../styles/App.module.css";
import FormComponent from "./formComponent";
import { FormContext } from "./ContentLayoutComponent";


const ContentHeaderComponent = () => {
  const { loadForm, setLoadForm, setAction, setTodo } = useContext(FormContext)


    const HandleLoadForm = ()=>{
        setTodo("")
        setAction("Add")
        setLoadForm(true);
    }

  return (
    <>
      {!loadForm && 
        <div className={styles.contentHeader_wrapper}>
          <div className={styles.contentHeader_container}>
            <button className={styles.contentHeader_addUpdateBTN} onClick={HandleLoadForm}>
              Add Task
            </button>
          </div>
        </div> }
        {loadForm && <FormComponent />}
    </>
  );
};

export default ContentHeaderComponent;