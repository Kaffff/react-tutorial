import { useState } from "react";
import { useForm } from "react-hook-form";

export const App = () => {
  const form = useForm();
  const [todoItemList, setTodoItemList] = useState<string[]>([]);

  const handleClick = form.handleSubmit(({ todoItem }) => {
    setTodoItemList((currentItemList) => [...currentItemList, todoItem]);
    form.resetField('todoItem');
  });

  const handleDeleteItem = (todoItem: string) => {
    const removedList = todoItemList.filter((item) => item !== todoItem)
    setTodoItemList(removedList);
  };
  return (
    <div>
      <input {...form.register('todoItem')} ></input>
      <button onClick={handleClick}>追加</button>
      <ol>
        {
          todoItemList.map((todoItem)=> (
          <li key = {todoItem}>{todoItem}
          <button onClick = {() => handleDeleteItem(todoItem)}>削除</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
