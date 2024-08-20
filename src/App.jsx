import React from "react";
import LoginForm from "./form/LoginForm";
import SearchForm from "./form/SearchForm";
import LangSwitcher from "./form/LangSwitcher/LangSwitcher";
import { useState } from "react";
import CoffeeSize from "./form/CoffeeSize/CoffeeSize";
import CheckBox from "./form/CheckBox/CheckBox";
import LoginForm2 from "./form/LoginForm2/LoginForm2";
import initialTask from "./form/TaskFilter/tasks.json";
import TaskList from "./form/TaskFilter/TaskList";
import FormTasks from "./form/TaskFilter/FormTasks";
import Fillter from "./form/TaskFilter/Fillter";
import FormikForm from "./form/Formik/formikStart";

const App = () => {
  const handleLogin = (user) => {
    console.log(`hello ${user}`);
  };
  const [lang, setLang] = useState("en");

  const [coffeSize, setCoffeSize] = useState("sm");
  const handleCoffeSize = (e) => {
    setCoffeSize(e.target.value);
  };

  const [hasAccepted, setHasAceppted] = useState(false);
  const handleChange = (e) => {
    setHasAceppted(e.target.value);
    console.log(e.target.value);
  };

  const [task, setTask] = useState(initialTask);

  const addTask = (newTask) => {
    setTask((prevTask) => {
      return [...prevTask, newTask];
    });
  };
  const deleteTask = (taskId) => {
    setTask((prevTask) => {
      return prevTask.filter((task) => {
        return task.id !== taskId;
      });
    });
  };

  const [filter, setFilter] = useState("");
  const onFilter = (e) => {
    setFilter(e.target.value);
    console.log({ filter });
  };

  const visibleTask = task.filter((taskk) => {
    return taskk.text.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
      <SearchForm />
      <LangSwitcher value={lang} onSelect={setLang} />
      <p>вибрано {coffeSize} розмір кави</p>
      <CoffeeSize coffeSize={coffeSize} onCoffeSize={handleCoffeSize} />
      <CheckBox value={hasAccepted} onChange={handleChange} />
      <LoginForm2 />
      <FormTasks onAdd={addTask} />
      <Fillter value={filter} onFilter={onFilter} />
      <TaskList tasks={visibleTask} onDelete={deleteTask} />
      <FormikForm />
    </div>
  );
};
export default App;
