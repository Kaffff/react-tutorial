import { useState } from "react";
import { useForm } from "react-hook-form";

export const App = () => {
  const form = useForm();
  const [todoItemList, setTodoItemList] = useState<string[]>([]);

  const handleClick = form.handleSubmit(({ todoItem }) => {
    setTodoItemList((currentItemList) => [...currentItemList, todoItem]);
  });
  return (
    <div>
      <input {...form.register('todoItem')} ></input>
      <button onClick={handleClick}>追加</button>
      <ol>
        {
          todoItemList.map((todoItem)=><li>{todoItem}</li>)
        }
      </ol>
    </div>
  );
};
