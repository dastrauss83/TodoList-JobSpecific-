import { useState } from "react";
import { Todo } from "./Todo";
import { NavBar } from "./NavBar";
import { todo } from "./Todo";

export const TodoList: React.FC = () => {
  const [activeTodos, setActiveTodos] = useState<Array<todo>>([]);
  const [screenState, setScreenState] = useState<string>("todos");

  const newTodo = (): todo => {
    // return <Todo screenState={screenState} setScreenState={setScreenState} />;
    // {
    //   schoolName = "";

    //   contactName = "";
    //   contactEmail = "";
    //   contactPhone = "";

    //   Students = "";
    //   Staff = "";
    //   Date = "";

    //   Emails = "";
    //   "Phone Calls" = "";
    //   "General Notes" = "";
    return {
      schoolName: "",

      contactName: "",
      contactEmail: "",
      contactPhone: "",

      Students: "",
      StudentsChecked: false,
      Staff: "",
      StaffChecked: false,
      Date: "",
      DateChecked: false,

      Emails: "",
      "Phone Calls": "",
      "General Notes": "",
    };
  };
  const newTodoButton = (variant: string): void => {
    console.log(activeTodos);
    if (variant === "new") {
      const tempTodos = [...activeTodos];
      tempTodos.push(newTodo());
      setActiveTodos(tempTodos);
      setScreenState("new");
    } else if (variant === "list") {
      setScreenState("list");
    }
  };

  if (screenState === "new") {
    return (
      <div>
        <NavBar onClick={newTodoButton} />
        {activeTodos.slice(activeTodos.length - 1).map(() => (
          <Todo screenState={screenState} setScreenState={setScreenState} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <NavBar onClick={newTodoButton} />
      {activeTodos.map(() => (
        <Todo screenState={screenState} setScreenState={setScreenState} />
      ))}
    </div>
  );
};
