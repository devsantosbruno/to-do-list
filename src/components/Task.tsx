import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useState } from "react";

interface TaskProps {
  taskTitle: string;
  onDeleteTask: (task: string) => void;
  onCalculateChecks: Function;
}

export function Task(props: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    props.onDeleteTask(props.taskTitle);
  }

  function handleCalculateCheck(checkedOrNot: boolean) {
    props.onCalculateChecks(props.taskTitle, checkedOrNot);
  }

  return (
    <div className="flex items-start justify-between gap-4 p-4 bg-gray-500 border-[1px] border-gray-400 rounded-lg shadow-lg">
      <div className="flex items-start gap-4">
        <Checkbox.Root
          className={`border-[1px] ${
            checked ? "bg-purple-500 border-purple-500" : "border-blue-300"
          } w-5 h-5 rounded-full flex items-center justify-center shadow-lg`}
          onClick={() => {
            setChecked(!checked);
            handleCalculateCheck(!checked);
          }}
        >
          <Checkbox.Indicator className="text-purple-500">
            <Check size={16} className="text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>

        <p
          className={`${
            checked ? "text-gray-300 line-through" : "text-gray-100"
          } text-sm`}
        >
          {props.taskTitle}
        </p>
      </div>

      <button
        className="p-1 rounded-lg group hover:bg-gray-400 hover:shadow-lg transition duration-150"
        onClick={handleDeleteTask}
      >
        <Trash
          size={18}
          className="text-gray-300 group-hover:text-red-500 transition duration-150"
        />
      </button>
    </div>
  );
}
