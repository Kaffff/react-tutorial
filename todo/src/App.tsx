import { Box, Button, Stack, TextField } from "@mui/material";
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
    <Stack m={4} alignItems="center">
      <Stack direction="row" spacing={1}>
        <TextField {...form.register('todoItem')} ></TextField>
        <Button variant="contained" onClick={handleClick}>追加</Button>
      </Stack>
      <ol>
        {
          todoItemList.map((todoItem)=> (
          <li key = {todoItem}>{todoItem}
            <Button color="error" onClick = {() => handleDeleteItem(todoItem)}>
              削除
            </Button>
          </li>
        ))}
      </ol>
    </Stack>
  );
};
