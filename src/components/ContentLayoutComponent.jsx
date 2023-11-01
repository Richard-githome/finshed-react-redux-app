import { useState, createContext } from "react";
import styles from "../styles/App.module.css";
import ContentHeaderComponent from "./ContentHeaderComponent";
import ItemComponent from "./ItemsComponent";

export const FormContext = createContext(null);

const ContentLayoutComponent = () => {
  const [loadForm, setLoadForm] = useState(false);
  const [action, setAction] = useState("Add")
  const [todo, setTodo] = useState(null)
//   useEffect(()=>{
//     console.log(todo)
//   },[todo])

  return (
    <FormContext.Provider value={{loadForm, setLoadForm, action, setAction, todo, setTodo}}>
      <section className={styles.contentLayout_wrapper}>
        <ContentHeaderComponent />
        <ItemComponent />
      </section>
    </FormContext.Provider>
  );
};

export default ContentLayoutComponent;
