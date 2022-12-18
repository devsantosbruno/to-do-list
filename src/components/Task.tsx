import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useState } from "react";

export function Task() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-start justify-between gap-4 p-4 bg-gray-500 border-[1px] border-gray-400 rounded-lg shadow-lg">
      <form>
        <Checkbox.Root
          className={`border-[1px] ${
            checked === true
              ? "bg-purple-500 border-purple-500"
              : "border-blue-300"
          } w-5 h-5 rounded-full flex items-center justify-center shadow-lg`}
          onClick={() => {
            setChecked(!checked);
          }}
        >
          <Checkbox.Indicator className="text-purple-500">
            <Check size={16} className="text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </form>

      <p className="text-gray-100 text-sm">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className="p-1 rounded-lg group hover:bg-gray-400 hover:shadow-lg transition duration-150">
        <Trash
          size={18}
          className="text-gray-300 group-hover:text-red-500 transition duration-150"
        />
      </button>
    </div>
  );
}
