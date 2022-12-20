import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import logoImage from "./assets/logo.svg";

import { Task } from "./components/Task";

import "./styles/main.css";

interface TaskTeste {
  taskName: string;
  checked: boolean;
}

export function App() {
  const [quantityChecked, setQuantityChecked] = useState(0);
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<TaskTeste[]>([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { taskName: taskText, checked: false }]);
    setTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      if (task.taskName === taskToDelete) {
        if (task.checked === true) {
          setQuantityChecked((prevState) => prevState - 1);
        }
      }
      return task?.taskName !== taskToDelete;
    });

    setTasks(taskWithoutDeletedOne);
  }

  function calculateChecks(taskTitle: string, checkedOrNot: boolean) {
    tasks.map((task) => {
      if (task.taskName === taskTitle) {
        task.checked = checkedOrNot;
      }
    });

    if (checkedOrNot === true) {
      setQuantityChecked((prevState) => prevState + 1);
    } else {
      setQuantityChecked((prevState) => prevState - 1);
    }
  }

  return (
    <div className="bg-gray-600 min-h-screen">
      <header className="bg-gray-700 pt-16">
        <div className="max-w-3xl px-4 mx-auto">
          <img src={logoImage} alt="" className="mx-auto" />

          <form
            onSubmit={(event) => {
              handleCreateNewTask(event);
            }}
            className="flex gap-2 relative -bottom-7"
          >
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              onChange={(event: any) => {
                setTaskText(event.target.value);
                handleNewTaskChange(event);
              }}
              value={taskText}
              required
              className="w-full rounded-lg p-4 bg-gray-500 border-[1px] border-gray-700 placeholder:text-gray-300 text-gray-100 outline-none shadow-lg"
            />

            <button
              type="submit"
              className="text-gray-100 flex items-center gap-2 font-bold p-4 rounded-lg bg-blue-700 hover:bg-blue-300 transition duration-150 shadow-lg"
            >
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
        </div>
      </header>

      <main className="py-24">
        <div className="max-w-3xl px-4 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h6 className="text-blue-300 font-bold text-sm">
              Tarefas criadas
              <span className="bg-gray-500 text-gray-100 px-2 py-[2px] rounded-full ml-2">
                {tasks.length}
              </span>
            </h6>

            <h6 className="text-purple-500 font-bold text-sm">
              Concluídas
              <span className="bg-gray-500 text-gray-100 px-2 py-[2px] rounded-full ml-2">
                {quantityChecked} de {tasks.length}
              </span>
            </h6>
          </div>

          <div className="flex flex-col gap-3">
            {tasks.map((task: TaskTeste) => {
              return (
                <Task
                  taskTitle={task.taskName}
                  key={task.taskName}
                  onDeleteTask={deleteTask}
                  onCalculateChecks={calculateChecks}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
