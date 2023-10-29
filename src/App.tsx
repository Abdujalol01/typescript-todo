import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { IData } from "./interfaces";
import { data } from "./constants";
const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [arr, setArr] = useState<IData[]>(data);
  const changehandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const onSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title:title,
      id:new Date().getTime(),
      description:"Description"
    }
    setArr([...arr , newData])
    setTitle("");
  };
  const handleDelete = (id:number):void=>{
    const newData=arr.filter((c)=> c.id != id)
    setArr(newData)
  }
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="Add Todo"
        value={title}
        onChange={changehandler}
      />
      <button onClick={onSubmit} className={styles.button}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr.map((c)=>(
          <div key={c.id} className={styles.item}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={()=> handleDelete(c.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
