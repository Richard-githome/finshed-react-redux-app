import { useDispatch, useSelector } from "react-redux";
import { FormContext } from "./ContentLayoutComponent";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import styles from "../styles/App.module.css";
import { useContext } from "react";
import { deleteTodo } from "../app/todoSlice";

const ItemComponent = () => {
  const AllTodoItems = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const { setLoadForm, setAction, setTodo } = useContext(FormContext);
  const HandleEdit = (todo) => {
    setTodo(todo);
    setAction("Update");
    setLoadForm(true);
  };
  const HandleDelete = (todo_Id) => {
    dispatch(deleteTodo(todo_Id));
  };

  return (
    <>
      <div className={styles.item_wrapper}>
        {AllTodoItems && AllTodoItems.length > 0 ? (
          <div className={styles.item_container}>
            {AllTodoItems.map((todo) => (
              <div key={todo.id} className={styles.item_card}>
                <h2 className={styles.item_card_title}>
                  {" "}
                  Todo: {todo.activity}{" "}
                </h2>
                <div className={styles.item_card_icon}>
                  <div onClick={() => HandleEdit(todo)}>
                    <AiFillEdit size={"1.9rem"} color="rgb(204, 204, 204)" />
                  </div>
                  <div onClick={() => HandleDelete(todo.id)}>
                    <AiFillDelete size={"1.9rem"} color="rgb(204, 204, 204)" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.no_todo_container}>
            <p className={styles.no_todo_item}>No Todo Added</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemComponent;
